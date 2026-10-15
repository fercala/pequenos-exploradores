import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.VILLA_PLAYWRIGHT||'C:/Users/Ferna/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base=process.env.VILLA_URL||'http://127.0.0.1:4173/villachispa/';
const out=new URL('../test-results/',import.meta.url);await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.VILLA_BROWSER||'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const results=[],errors=[];
const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();
page.on('pageerror',e=>errors.push(e.message));
const button=(name)=>page.getByRole('button',{name,exact:true});
async function click(name){const scope=await page.locator('#modal').evaluate(d=>d.open)?page.getByRole('dialog'):page;await scope.getByRole('button',{name,exact:true}).click();}
async function wait(name){await button(name).waitFor({state:'visible',timeout:12000});}
async function pack(items,target){for(const id of items){await click(`Coger ${id}`);await click(target);}}
const read=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('villachispa.save.v1')));
try{
 await page.goto(base);await wait('Bomberos');await click('Desactivar voz y sonidos');
 await page.screenshot({path:new URL('pueblo.png',out).pathname.slice(1),fullPage:true});
 await click('Bomberos');await pack(['casco'],'Colocar en el camión');await page.reload();await wait('Bomberos');await click('Bomberos');assert.equal(await button('Coger casco').count(),0);results.push('Reanuda el equipo colocado después de recargar.');
 await click('La semana');await wait('Coger libro');await click('Bomberos');assert.equal(await button('Coger casco').count(),0);results.push('Cambiar de aventura conserva puntos de guardado independientes.');
 await pack(['manguera'],'Colocar en el camión');await wait('Conducir hasta la granja');await click('Conducir hasta la granja');await wait('Acompañar oveja');await click('Acompañar oveja');await click('Llevar al corral');await wait('Agua al foco 1');await page.screenshot({path:new URL('bomberos.png',out).pathname.slice(1),fullPage:true});await click('Agua al foco 1');await wait('Agua al foco 2');await page.waitForTimeout(1400);await click('Agua al foco 2');await wait('Dar agua a la oveja');await click('Dar agua a la oveja');await wait('Elegir un juguete');assert.equal((await read()).coins,15);await page.reload();await wait('Bomberos');assert.equal((await read()).coins,15);results.push('Bomberos completo en 3 años; recompensa única de 10 monedas incluso al recargar el cierre.');
 await click('La tienda');await page.locator('[data-buy="kite"]').click();assert.equal((await read()).coins,5);await page.locator('[data-buy="kite"]').click();await wait('Hacer volar la cometa');await click('Hacer volar la cometa');await page.reload();await wait('Mi parque');assert.ok((await read()).inventory.includes('kite'));await click('Mi parque');await click('Cometa de colores');await wait('Hacer volar la cometa');results.push('Compra y uso de cometa, con saldo e inventario conservados.');
 await click('La semana');
 for(let day=0;day<7;day++){
  const targets=['mochila','cesta','mochila','carrito','mochila','cesta','cesta'];const itemList=[['libro','botella'],['manzana','botella'],['libro','botella'],['regadera','semillas'],['tambor','botella'],['cometa','botella'],['manzana','libro']];
  await wait(`Coger ${itemList[day][0]}`);await pack(itemList[day],`Guardar en ${targets[day]==='carrito'?'el carrito':`la ${targets[day]}`}`);
  const walk=day<5?'Caminar hasta el colegio':'Caminar hasta el parque';await wait(walk);await click(walk);
  if(day===0){await wait('Coger el libro');await click('Coger el libro');await click('Colocar en la mesa');}
  if(day===1){await wait('Una manzana para Luma');await click('Una manzana para Luma');await click('Una manzana para Nico');}
  if(day===2){await wait('Sembrar la semilla');await click('Sembrar la semilla');await click('Regar la tierra');await click('Crece la flor');}
  if(day===3){await wait('Regar la planta 1');await click('Regar la planta 1');await click('Regar la planta 2');}
  if(day===4){await wait('Tambor grave');await click('Tambor grave');await click('Campana suave');}
  if(day===5){await wait('Volar hacia la nube 1');for(let n=1;n<=3;n++)await click(`Volar hacia la nube ${n}`);}
  if(day===6){await wait('Extender la manta');await click('Extender la manta');await click('Repartir la merienda');await click('Preparar la mochila del lunes');}
  await wait('Elegir un juguete');if(day<6)await click(`Descubrir el ${['lunes','martes','miércoles','jueves','viernes','sábado','domingo'][(day+1)%7]}`);
 }
 let s=await read();assert.equal(s.weekDay,0);assert.equal(s.weekRun,1);assert.equal(s.coins,90);assert.ok(s.events['week-bonus']);results.push('Las siete jornadas se completan, sábado/domingo van al parque, domingo vuelve al lunes y el bonus se paga una vez.');
 await click('Descubrir el lunes');await click('Zona de personas adultas');await click('Cambiar nivel');await click('5 años Resuelvo');await click('Bomberos');await wait('Coger casco');await pack(['casco','manguera','cono'],'Colocar en el camión');await wait('Subir la palanca');await click('Subir la palanca');await wait('Puente de madera');await click('Puente de madera');assert.ok((await read()).active.stage===2);await click('Puente de piedra');await wait('Acompañar oveja');for(const animal of ['oveja','gatito']){await click(`Acompañar ${animal}`);await click('Llevar al corral');if(animal==='oveja')await page.waitForTimeout(1400);}await wait('Agua al foco 1');for(let n=1;n<=3;n++){await click(`Agua al foco ${n}`);await page.waitForTimeout(1400);}await wait('Dar agua a la oveja');await click('Dar agua a la oveja');await click('Dar agua al gatito');await wait('Preparar el camión');await click('Cuidar a los animales');assert.equal((await read()).active.picked.length,0);for(const name of ['Preparar el camión','Llegar a la granja','Cuidar a los animales'])await click(name);await wait('Elegir un juguete');assert.equal((await read()).coins,93);results.push('Bomberos en 5 años: depósito, ruta bloqueada, dos animales, tres focos y secuenciación. Repetición: 3 monedas.');
 await click('Volver al pueblo');await page.waitForFunction(()=>document.querySelector('#connection-status').textContent.includes('listo sin conexión'),{timeout:10000});await context.setOffline(true);await page.reload();await wait('Bomberos');await click('Mi parque');await wait('Construir con piezas');await click('Construir con piezas');await click('Colocar una pieza');await page.waitForTimeout(300);assert.ok((await read()).park.blocks.length>0);await page.reload();assert.ok((await read()).park.blocks.length>0);await context.setOffline(false);results.push('Recarga y juego sin conexión bajo /villachispa/, con guardado de construcciones.');
 const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const mp=await mobile.newPage();mp.on('pageerror',e=>errors.push(e.message));await mp.goto(base);await mp.getByRole('button',{name:'Bomberos',exact:true}).waitFor();await mp.getByRole('button',{name:'Bomberos',exact:true}).tap();await mp.getByRole('button',{name:'Coger casco',exact:true}).tap();await mp.getByRole('button',{name:'Colocar en el camión',exact:true}).tap();assert.equal(await mp.getByRole('button',{name:'Coger casco',exact:true}).count(),0);assert.equal(await mp.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await mp.screenshot({path:new URL('movil.png',out).pathname.slice(1),fullPage:true});await mp.setViewportSize({width:844,height:390});await mp.getByRole('button',{name:'Coger manguera',exact:true}).tap();await mp.getByRole('button',{name:'Colocar en el camión',exact:true}).tap();await mp.getByRole('button',{name:'Conducir hasta la granja',exact:true}).waitFor();results.push('Emulación táctil de móvil vertical/horizontal sin desbordamiento; toque alternativo al arrastre operativo.');await mobile.close();
 assert.deepEqual(errors,[]);results.push('Sin excepciones de JavaScript durante los recorridos.');
 await writeFile(new URL('browser-results.json',out),JSON.stringify({results,errors},null,2));console.log(JSON.stringify({results,errors},null,2));
}catch(error){await page.screenshot({path:new URL('failure.png',out).pathname.slice(1),fullPage:true});console.error(error);console.error('CHECKS COMPLETED',results);console.error('PAGE ERRORS',errors);process.exitCode=1;}finally{await browser.close();}
