import * as T from './vendor/three.module.js';
import {noise,random,terrainHeight,isOcean,clamp} from './core.js';

const UP=new T.Vector3(0,1,0);
const palettes={moon:[[70,69,68],[174,170,158]],europa:[[120,101,82],[223,215,190]],titan:[[88,58,25],[172,136,75]],mercury:[[93,89,83],[159,151,137]],venus:[[91,60,29],[167,121,64]],mars:[[100,43,27],[197,127,79]],jupiter:[[126,80,56],[227,208,171]],saturn:[[160,142,101],[232,218,174]],uranus:[[102,164,171],[175,221,218]],neptune:[[64,108,148],[121,177,200]]};
function makeTexture(id,cloud=false){
  const c=document.createElement('canvas');c.width=1024;c.height=512;const ctx=c.getContext('2d'),img=ctx.createImageData(c.width,c.height);
  for(let y=0;y<c.height;y++){
    const theta=y/(c.height-1)*Math.PI,ny=Math.cos(theta),s=Math.sin(theta);
    for(let x=0;x<c.width;x++){
      const phi=x/c.width*Math.PI*2,nx=-Math.cos(phi)*s,nz=Math.sin(phi)*s;
      const n=noise(nx,ny,nz),f=noise(nx*8+3,ny*8,nz*8),index=(y*c.width+x)*4;
      let col,alpha=255;
      if(cloud){const q=noise(nx*2.8+11,ny*2.8,nz*2.8)+noise(nx*7,ny*7,nz*7)*.25;col=[230,241,248];alpha=clamp((q-.025)*700,0,220);}
      else if(id==='earth'){
        const h=terrainHeight(id,nx,ny,nz);
        if(Math.abs(ny)>.96+n*.04)col=[215,230,233];
        else if(isOcean(id,nx,ny,nz))col=[9+f*4,39+n*10+f*6,70+n*20+f*8];
        else if(h>19)col=[137+f*25,133+f*23,111+f*20];
        else if(Math.abs(ny)<.4&&n>.25)col=[145+f*20,134+f*20,84+f*13];
        else col=[45+n*35+f*15,91+n*30+f*18,64+n*10+f*10];
      }else if(['jupiter','saturn','uranus','neptune'].includes(id)){
        let b=Math.sin(ny*57+noise(nx*4,ny*2,nz*4)*3)*.25+Math.sin(ny*131+n)*.1+.52;
        if(id==='uranus')b=.58+b*.12;
        if(id==='neptune')b=.3+b*.4+f*.08;
        col=palettes[id][0].map((v,i)=>v+(palettes[id][1][i]-v)*b);
        if(id==='jupiter'){
          const dx=(x/c.width-.72)*5.4,dy=(y/c.height-.61)*18;
          const oval=dx*dx+dy*dy;
          if(oval<1){const t=(1-oval)*.8;col=col.map((v,i)=>v*(1-t)+[166,99,68][i]*t);}
        }
      }else{const t=clamp(.52+n*.4+f*.17,0,1);col=palettes[id][0].map((v,i)=>v+(palettes[id][1][i]-v)*t);if(id==='mars'&&Math.abs(ny)>.98)col=[211,203,182];}
      for(let k=0;k<3;k++)img.data[index+k]=clamp(col[k],0,255);img.data[index+3]=alpha;
    }
  }
  ctx.putImageData(img,0,0);
  if(id==='mercury'&&!cloud){const rnd=random(82);for(let i=0;i<210;i++){const x=rnd()*1024,y=20+rnd()*472,r=2+Math.pow(rnd(),3)*25;const g=ctx.createRadialGradient(x-r*.15,y-r*.15,r*.1,x,y,r);g.addColorStop(0,'#33333370');g.addColorStop(.7,'#34343455');g.addColorStop(.82,'#dfd5bb70');g.addColorStop(1,'#b0a78d00');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(x,y,r,r*.8,0,0,Math.PI*2);ctx.fill();}}
  const tex=new T.CanvasTexture(c);tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=4;return tex;
}

function atmosphere(color){
  return new T.ShaderMaterial({transparent:true,side:T.BackSide,depthWrite:false,blending:T.AdditiveBlending,
    uniforms:{tint:{value:new T.Color(color)}},
    vertexShader:'varying vec3 vN;varying vec3 vV;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vN=normalize(normalMatrix*normal);vV=normalize(-p.xyz);gl_Position=projectionMatrix*p;}',
    fragmentShader:'uniform vec3 tint;varying vec3 vN;varying vec3 vV;void main(){float f=pow(1.-abs(dot(normalize(vN),normalize(vV))),3.5);gl_FragColor=vec4(tint,f*.6);}'
  });
}

export class Universe{
  constructor(container,quality='auto'){
    this.container=container;this.scene=new T.Scene();this.scene.background=new T.Color('#050911');
    this.renderer=new T.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});
    this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.12;
    container.append(this.renderer.domElement);this.camera=new T.PerspectiveCamera(52,innerWidth/innerHeight,.3,150000);
    this.ambient=new T.AmbientLight('#cadcff',.24);this.scene.add(this.ambient);
    this.sunlight=new T.DirectionalLight('#fff3d8',3.3);this.sunlight.position.set(-4000,2000,6000);this.scene.add(this.sunlight);
    this.fill=new T.DirectionalLight('#4778ab',.16);this.fill.position.set(1500,300,-4000);this.scene.add(this.fill);
    this.planetGroup=new T.Group();this.scene.add(this.planetGroup);this.localGroup=new T.Group();this.scene.add(this.localGroup);
    this.stars=this.createStars();this.scene.add(this.stars);this.sun=this.createSun();this.scene.add(this.sun);
    this.ship=this.createShip();this.scene.add(this.ship);this.zoom=1;this.cameraMode='follow';this.viewYaw=0;this.viewPitch=0;this.time=0;
    this.setQuality(quality);this.resize();this.frameReady=false;this.lastPlanet=null;
  }
  setQuality(value){this.quality=value;const low=value==='low'||(value==='auto'&&matchMedia('(pointer:coarse)').matches);this.low=low;this.renderer.setPixelRatio(Math.min(devicePixelRatio,low?1.25:value==='high'?2:1.6));this.resize();}
  resize(){this.renderer.setSize(innerWidth,innerHeight);this.camera.aspect=innerWidth/innerHeight;this.camera.updateProjectionMatrix();}
  createStars(){const rnd=random(841),g=new T.BufferGeometry(),positions=[],colors=[];for(let i=0;i<5000;i++){const z=rnd()*2-1,a=rnd()*Math.PI*2,r=30000+rnd()*15000;positions.push(Math.sqrt(1-z*z)*Math.cos(a)*r,z*r,Math.sqrt(1-z*z)*Math.sin(a)*r);const b=.28+rnd()*.65;colors.push(b,b*(.87+rnd()*.13),b*(.85+rnd()*.15));}g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('color',new T.Float32BufferAttribute(colors,3));return new T.Points(g,new T.PointsMaterial({vertexColors:true,size:10,sizeAttenuation:true,transparent:true,opacity:.85,depthWrite:false}));}
  createSun(){const g=new T.Group();g.position.copy(this.sunlight.position).multiplyScalar(2.4);const m=new T.Mesh(new T.SphereGeometry(110,32,24),new T.MeshBasicMaterial({color:'#fff3cb'}));g.add(m);const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d'),gr=ctx.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'#fff8dcff');gr.addColorStop(.1,'#ffe6a9cc');gr.addColorStop(.35,'#f1b66822');gr.addColorStop(1,'#f1b66800');ctx.fillStyle=gr;ctx.fillRect(0,0,128,128);const glow=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(c),transparent:true,blending:T.AdditiveBlending,depthWrite:false}));glow.scale.set(1700,1700,1);g.add(glow);return g;}
  createShip(){
    const g=new T.Group(),hull=new T.MeshStandardMaterial({color:'#c7cbd0',metalness:.72,roughness:.35}),dark=new T.MeshStandardMaterial({color:'#182738',metalness:.7,roughness:.3}),trim=new T.MeshStandardMaterial({color:'#bafa73',emissive:'#5b9e26',emissiveIntensity:.4,metalness:.5,roughness:.4});
    const body=new T.Mesh(new T.ConeGeometry(2.7,13,6),hull);body.rotation.x=-Math.PI/2;body.position.z=-1;g.add(body);
    const cabin=new T.Mesh(new T.SphereGeometry(1.7,20,12),new T.MeshStandardMaterial({color:'#19394a',metalness:.85,roughness:.15,emissive:'#153b49',emissiveIntensity:.25}));cabin.scale.set(.9,.7,1.7);cabin.position.set(0,1.25,-2);g.add(cabin);
    for(const side of [-1,1]){
      const wing=new T.Mesh(new T.BoxGeometry(6.5,.38,5.5),hull);wing.position.set(side*4.3,-.7,2);wing.rotation.y=side*-.22;wing.rotation.z=side*.07;g.add(wing);
      const edge=new T.Mesh(new T.BoxGeometry(.25,.42,5),trim);edge.position.set(side*7.3,-.3,2);g.add(edge);
      const engine=new T.Mesh(new T.CylinderGeometry(1.1,1.3,4,16),dark);engine.rotation.x=Math.PI/2;engine.position.set(side*3,-.1,5);g.add(engine);
      const light=new T.Mesh(new T.SphereGeometry(.23,8,6),new T.MeshBasicMaterial({color:side===1?'#bafa73':'#ff7575'}));light.position.set(side*7.4,0,2.2);g.add(light);
      const flame=new T.Mesh(new T.ConeGeometry(.8,5.5,14),new T.MeshBasicMaterial({color:'#8edfff',transparent:true,opacity:.75,blending:T.AdditiveBlending,depthWrite:false}));flame.rotation.x=Math.PI/2;flame.position.set(side*3,-.1,9);g.add(flame);this.flames??=[];this.flames.push(flame);
      for(const z of [-2,4]){const leg=new T.Mesh(new T.CylinderGeometry(.12,.18,2.7,6),dark);leg.position.set(side*2,-2.3,z);g.add(leg);const foot=new T.Mesh(new T.BoxGeometry(1.3,.2,1.6),hull);foot.position.set(side*2,-3.7,z);g.add(foot);}
    }
    return g;
  }
  clearGroup(group){const textures=new Set(),geometries=new Set(),materials=new Set();group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:o.material?[o.material]:[]){materials.add(m);for(const key of ['map','bumpMap','normalMap'])if(m[key])textures.add(m[key]);}});for(const t of textures)t.dispose();for(const g of geometries)g.dispose();for(const m of materials)m.dispose();group.clear();}
  setPlanet(p){
    this.clearGroup(this.planetGroup);this.clearGroup(this.localGroup);this.planet=p;this.time=0;this.lastPlanet=p.id;this.clouds=null;this.rings=null;this.beacon=null;
    const g=new T.SphereGeometry(600,this.low?144:224,this.low?96:160),pos=g.attributes.position;
    if(p.rocky){const n=new T.Vector3();for(let i=0;i<pos.count;i++){n.fromBufferAttribute(pos,i).normalize();const h=terrainHeight(p.id,n.x,n.y,n.z);pos.setXYZ(i,n.x*(600+h),n.y*(600+h),n.z*(600+h));}g.computeVertexNormals();}
    const tex=makeTexture(p.id),m=new T.MeshStandardMaterial({map:tex,roughness:p.id==='earth'?.79:.94,metalness:0,bumpMap:tex,bumpScale:p.rocky?1.5:.2});
    this.body=new T.Mesh(g,m);this.planetGroup.add(this.body);
    if(p.id==='earth'){const ocean=new T.Mesh(new T.SphereGeometry(599.7,96,64),new T.MeshStandardMaterial({color:'#0c3856',roughness:.35,metalness:.2}));this.planetGroup.add(ocean);this.clouds=new T.Mesh(new T.SphereGeometry(626,96,64),new T.MeshStandardMaterial({map:makeTexture(p.id,true),transparent:true,depthWrite:false,opacity:.72,roughness:1}));this.planetGroup.add(this.clouds);}
    if(p.id==='venus'){this.clouds=new T.Mesh(new T.SphereGeometry(642,96,64),new T.MeshStandardMaterial({color:'#dfc28a',map:makeTexture('saturn'),transparent:true,opacity:1,roughness:1,depthWrite:false}));this.planetGroup.add(this.clouds);}
    if(!['mercury','moon','europa'].includes(p.id)){const color=p.id==='venus'||p.id==='titan'?'#b58b45':p.id==='mars'?'#b76d42':p.id==='earth'?'#4b9deb':p.id==='saturn'?'#c5b080':p.id==='jupiter'?'#c8a78a':'#73bccd';this.atmos=new T.Mesh(new T.SphereGeometry(p.id==='venus'?657:630,64,48),atmosphere(color));this.planetGroup.add(this.atmos);}
    if(['saturn','uranus','neptune','jupiter'].includes(p.id))this.createRings(p);
    this.createLandingZone(p);this.cloudVolumes=null;
    if(!p.rocky){
      const c=document.createElement('canvas');c.width=c.height=64;const ctx=c.getContext('2d'),gr=ctx.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,'#ffffff80');gr.addColorStop(.4,'#ffffff40');gr.addColorStop(1,'#ffffff00');ctx.fillStyle=gr;ctx.fillRect(0,0,64,64);
      const texture=new T.CanvasTexture(c),material=new T.SpriteMaterial({map:texture,color:p.color,transparent:true,opacity:.24,depthWrite:false});this.cloudVolumes=new T.Group();const rnd=random(812);for(let i=0;i<55;i++){const cloud=new T.Sprite(material);cloud.position.set((rnd()-.5)*1400,(rnd()-.5)*300,(rnd()-.5)*1400);const size=100+rnd()*220;cloud.scale.set(size,size*.55,1);this.cloudVolumes.add(cloud);}this.localGroup.add(this.cloudVolumes);
    }
    this.ambient.intensity=p.id==='mercury'?.18:p.id==='venus'?.55:.27;
    // Low exposure is adapted for visibility on distant worlds; the scientific distance remains in the UI.
    this.sunlight.intensity=p.id==='uranus'||p.id==='neptune'?2.1:3.3;
    this.scene.fog=null;
  }
  createRings(p){
    const c=document.createElement('canvas');c.width=512;c.height=1;const ctx=c.getContext('2d'),rnd=random(36);for(let x=0;x<512;x++){const alpha=p.id==='saturn'?(x>236&&x<258?.02:.18+rnd()*.65):.025+rnd()*.09;ctx.fillStyle=`rgba(197,177,139,${alpha})`;ctx.fillRect(x,0,1,1);}
    const tex=new T.CanvasTexture(c);const g=new T.RingGeometry(740,p.id==='saturn'?1350:950,160,1);const uv=g.attributes.uv,pos=g.attributes.position;for(let i=0;i<uv.count;i++){const r=Math.hypot(pos.getX(i),pos.getY(i));uv.setXY(i,(r-740)/(p.id==='saturn'?610:210),.5);}
    const ring=new T.Mesh(g,new T.MeshStandardMaterial({map:tex,transparent:true,opacity:p.id==='saturn'?.9:.45,side:T.DoubleSide,depthWrite:false,roughness:1}));ring.rotation.x=Math.PI/2;this.rings=new T.Group();this.rings.rotation.z=T.MathUtils.degToRad(p.tilt);this.rings.add(ring);this.planetGroup.add(this.rings);
  }
  createLandingZone(p){
    // A deterministic landable zone; the same height function is used by mesh, collisions and autopilot.
    let n=new T.Vector3(.18,.25,1).normalize();if(p.id==='earth'){for(let i=0;i<70;i++){const q=new T.Vector3(Math.sin(i*1.7)*.7,.15+Math.cos(i)*.3,1).normalize();if(!isOcean('earth',q.x,q.y,q.z)&&terrainHeight('earth',q.x,q.y,q.z)<12){n=q;break;}}}
    this.landingNormal=n;const radius=600+terrainHeight(p.id,n.x,n.y,n.z);this.landingPosition=n.clone().multiplyScalar(radius+4.2);
    if(!p.rocky)return;
    const rnd=random(p.id.length*531),rocks=new T.Group();rocks.position.copy(n).multiplyScalar(radius);rocks.quaternion.setFromUnitVectors(UP,n);
    const rockGeo=new T.DodecahedronGeometry(1,0),rockMat=new T.MeshStandardMaterial({color:p.id==='mars'?'#83503b':p.id==='earth'?'#788372':p.id==='venus'?'#74603c':'#77756d',roughness:1});
    for(let i=0;i<90;i++){const x=(rnd()-.5)*180,z=(rnd()-.5)*180;if(Math.hypot(x,z)<16)continue;const rock=new T.Mesh(rockGeo,rockMat);const local=new T.Vector3(x,0,z).applyQuaternion(rocks.quaternion).add(rocks.position),rn=local.clone().normalize();const rr=600+terrainHeight(p.id,rn.x,rn.y,rn.z);local.copy(rn).multiplyScalar(rr).sub(rocks.position).applyQuaternion(rocks.quaternion.clone().invert());rock.position.copy(local);const size=.5+rnd()*3;rock.scale.set(size,size*(.5+rnd()),size);rock.rotation.set(rnd()*3,rnd()*3,rnd()*3);rocks.add(rock);}
    this.localGroup.add(rocks);
    const ring=new T.Mesh(new T.RingGeometry(12,12.4,64),new T.MeshBasicMaterial({color:'#bafa73',transparent:true,opacity:.55,side:T.DoubleSide,depthWrite:false}));ring.rotation.x=-Math.PI/2;ring.position.y=.25;rocks.add(ring);this.beacon=ring;
  }
  groundRadius(n){return 600+terrainHeight(this.planet.id,n.x,n.y,n.z);}
  update(dt,position,quaternion,velocity,throttle,altitude,reducedMotion=false,render=true){
    this.time+=dt;this.ship.position.copy(position);this.ship.quaternion.copy(quaternion);
    const p=this.planet;if(!p)return;
    const close=altitude<160;
    this.body.visible=p.rocky||position.length()>(this.radius||600)+10;
    if(this.cloudVolumes){this.cloudVolumes.visible=altitude<110;this.cloudVolumes.position.copy(position);this.cloudVolumes.rotation.y=this.time*.015;}
    if(this.clouds){if(p.id==='venus')this.clouds.material.opacity=clamp((altitude-25)/100,0,1);else{this.clouds.rotation.y+=dt*.001;this.clouds.material.opacity=altitude<35?.12:.72;}}
    const fogColors={earth:'#94b4c1',mars:'#b58e73',venus:'#b49762',titan:'#b39251',jupiter:'#a88f79',saturn:'#bfac83',uranus:'#88babe',neptune:'#6491ae'};
    if(close&&!['mercury','moon','europa'].includes(p.id)){
      const opacity=clamp((160-altitude)/160,0,1),color=new T.Color(fogColors[p.id]);this.scene.background.copy(new T.Color('#050911').lerp(color,opacity*(p.rocky?.82:.97)));
      this.scene.fog=new T.FogExp2(color,opacity*(p.id==='venus'?.008:p.rocky?.00055:.002));this.stars.material.opacity=1-opacity;
    }else{this.scene.background.set('#050911');this.scene.fog=null;this.stars.material.opacity=.85;}
    this.sun.position.copy(this.sunlight.position).multiplyScalar(2.4);this.sun.lookAt(this.camera.position);
    for(const f of this.flames){f.visible=Math.abs(throttle)>.02;f.scale.y=.3+Math.abs(throttle)*1.3+(reducedMotion?0:Math.sin(this.time*55)*.05);}
    const responsive=Math.max(1,.85/this.camera.aspect);
    const offset=this.cameraMode==='cockpit'?new T.Vector3(0,2.8,-4.8):new T.Vector3(0,11*this.zoom*responsive,38*this.zoom*responsive);
    const viewQ=new T.Quaternion().setFromEuler(new T.Euler(this.viewPitch,this.viewYaw,0,'YXZ'));
    if(this.cameraMode!=='cockpit')offset.applyQuaternion(viewQ);
    offset.applyQuaternion(quaternion);
    const targetPos=position.clone().add(offset);
    // Do not let the external camera sink through the spherical ground.
    if(p.rocky){const norm=targetPos.clone().normalize(),surface=this.groundRadius(norm)+2;if(targetPos.length()<surface)targetPos.copy(norm).multiplyScalar(surface);}
    this.camera.position.copy(targetPos);this.camera.up.copy(new T.Vector3(0,1,0).applyQuaternion(quaternion));
    if(this.cameraMode==='observe'){this.camera.lookAt(position.clone().add(new T.Vector3(0,0,-25).applyQuaternion(quaternion)));}
    else{const direction=new T.Vector3(0,0,-1).applyQuaternion(viewQ).applyQuaternion(quaternion);this.camera.lookAt(this.cameraMode==='cockpit'?this.camera.position.clone().addScaledVector(direction,400):position.clone().addScaledVector(direction,24));}
    this.ship.visible=this.cameraMode!=='cockpit';this.stars.position.copy(position);if(render)this.renderer.render(this.scene,this.camera);this.frameReady=true;
  }
  photograph(){return new Promise(resolve=>this.renderer.domElement.toBlob(resolve,'image/png'));}
}
