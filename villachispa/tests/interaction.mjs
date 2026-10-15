import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.VILLA_PLAYWRIGHT||'C:/Users/Ferna/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({headless:true,executablePath:process.env.VILLA_BROWSER||'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
const b=n=>page.getByRole('button',{name:n,exact:true});
async function point(x,y){const r=await page.locator('canvas').boundingBox();const scale=Math.min(r.width/1200,r.height/760);return {x:r.x+(r.width-1200*scale)/2+x*scale,y:r.y+(r.height-760*scale)/2+y*scale};}
async function drag(x,y,tx,ty){let p=await point(x,y);await page.mouse.move(p.x,p.y);await page.mouse.down();p=await point(tx,ty);await page.mouse.move(p.x,p.y,{steps:12});await page.mouse.up();}
try{
 await page.goto('http://127.0.0.1:4173/villachispa/');await b('Desactivar voz y sonidos').click();await b('Bomberos').click();await drag(280,610,670,470);assert.equal(await b('Coger casco').count(),0);await drag(455,610,670,470);await b('Conducir hasta la granja').waitFor();await b('Conducir hasta la granja').click();await b('Acompañar oveja').waitFor();await drag(490,480,930,520);await b('Agua al foco 1').waitFor();let p=await point(430,520);await page.mouse.move(p.x,p.y);await page.mouse.down();for(let i=0;i<2;i++){p=await point(510+i*65,300+i%2*20);await page.mouse.move(p.x,p.y,{steps:8});await page.waitForTimeout(1600);}await page.mouse.up();await b('Dar agua a la oveja').waitFor();console.log('Arrastre real de equipo y animal, y agua sostenida orientable: correcto.');
 await b('Mi pueblo').click();await page.waitForFunction(()=>document.querySelector('#connection-status').textContent.includes('listo sin conexión'));const context=page.context();await context.setOffline(true);await page.reload();await b('Mi parque').waitFor();await b('Mi parque').click();await b('Lanzar la pelota').waitFor();await context.setOffline(false);console.log('Service worker final con caché aislada por subruta: recarga y juego sin conexión correctos.');
 const local=await browser.newPage();local.on('pageerror',e=>errors.push(e.message));await local.goto(pathToFileURL(new URL('../Jugar.html',import.meta.url).pathname.slice(1)).href);await local.getByRole('button',{name:'Bomberos',exact:true}).click();await local.getByRole('button',{name:'Coger casco',exact:true}).waitFor();console.log('Jugar.html funciona directamente como archivo local, sin servidor.');assert.deepEqual(errors,[]);
}catch(e){console.error(e);process.exitCode=1;}finally{await browser.close();}
