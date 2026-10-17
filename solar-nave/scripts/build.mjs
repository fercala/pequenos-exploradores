import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..'),dest=resolve(root,'dist');
await mkdir(dest,{recursive:true});
for(const name of ['index.html','style.css','app.js','world.js','world-v2.js','simulation.js','expansion.js','audio.js','surface.js','exploration.js','core.js','data.js','sw.js','manifest.webmanifest','.nojekyll'])await copyFile(resolve(root,name),resolve(dest,name));
for(const dir of ['assets','vendor'])await cp(resolve(root,dir),resolve(dest,dir),{recursive:true});
console.log('Aplicación preparada en dist/');
