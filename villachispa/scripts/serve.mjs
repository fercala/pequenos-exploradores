import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve(import.meta.dirname,'..'),port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webmanifest':'application/manifest+json','.json':'application/json'};
createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');let path=decodeURIComponent(url.pathname);if(path.startsWith('/villachispa/'))path=path.slice('/villachispa'.length);let target=resolve(root,'.'+path);if(target!==root&&!target.startsWith(root+sep)){res.writeHead(403).end();return;}if((await stat(target)).isDirectory())target=resolve(target,'index.html');const data=await readFile(target);res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);}catch{res.writeHead(404,{'Content-Type':'text/plain'}).end('No encontrado');}}).listen(port,'127.0.0.1',()=>console.log(`VillaChispa: http://127.0.0.1:${port}/villachispa/`));
