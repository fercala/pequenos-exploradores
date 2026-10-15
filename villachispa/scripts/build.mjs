import {mkdir,copyFile,readdir,readFile,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
const root=resolve(import.meta.dirname,'..'),out=join(root,'dist');
await mkdir(out,{recursive:true});
for(const file of ['index.html','style.css','app.js','art.js','core.js','manifest.webmanifest','sw.js'])await copyFile(join(root,file),join(out,file));
await mkdir(join(out,'assets'),{recursive:true});for(const file of await readdir(join(root,'assets')))await copyFile(join(root,'assets',file),join(out,'assets',file));
await copyFile(join(root,'.nojekyll'),join(out,'.nojekyll'));
// Copia de demostración que se puede abrir directamente, incluso sin servidor.
let standalone=await readFile(join(root,'index.html'),'utf8');
const css=await readFile(join(root,'style.css'),'utf8');
const inlineIcon=Buffer.from(await readFile(join(root,'assets/icon.svg'))).toString('base64');
const code=(await Promise.all(['core.js','art.js','app.js'].map(async file=>(await readFile(join(root,file),'utf8')).replace(/^import .*;\r?\n/gm,'').replace(/^export /gm,'')))).join('\n');
standalone=standalone.replace('href="./assets/icon.svg"',`href="data:image/svg+xml;base64,${inlineIcon}"`).replace('<link rel="stylesheet" href="./style.css">',`<style>${css}</style>`).replace('<link rel="manifest" href="./manifest.webmanifest">','').replace('<script type="module" src="./app.js"></script>',`<script type="module">${code}</script>`);
await writeFile(join(root,'Jugar.html'),standalone);
console.log('VillaChispa preparada en dist/. Sin dependencias de producción.');
