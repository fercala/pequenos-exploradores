'use strict';
let installPrompt=null,swRegistration=null;
const touchScreen=matchMedia('(pointer: coarse)').matches;
const installBox=document.createElement('div');installBox.className='install-box';installBox.innerHTML='<button type="button" id="installApp" class="pill">Instalar en el móvil</button><p id="installHelp" class="hidden"></p>';$('welcome').querySelector('.welcome').append(installBox);
const installSettings=document.createElement('button');installSettings.className='pill';installSettings.textContent='Instalar el juego';settingsPanel.append(installSettings);
async function installGame(){
 if(installPrompt){const prompt=installPrompt;installPrompt=null;await prompt.prompt();const result=await prompt.userChoice;if(result.outcome==='accepted')installBox.classList.add('hidden');return}
 let ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
 const text=ios?'En Safari, toca Compartir y elige «Añadir a pantalla de inicio». Después pulsa Añadir.':'Abre el menú del navegador y elige «Instalar aplicación» o «Añadir a pantalla de inicio». Si aún no aparece, vuelve a intentarlo después de cargar el juego con conexión.';
 $('installHelp').textContent=text;$('installHelp').classList.remove('hidden');toast(text);
}
$('installApp').onclick=installGame;installSettings.onclick=installGame;
addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;$('installApp').textContent='Instalar Exploradores'});
addEventListener('appinstalled',()=>{installPrompt=null;installBox.classList.add('hidden');toast('¡Exploradores ya está instalado!')});
if(matchMedia('(display-mode: standalone)').matches||navigator.standalone){installBox.classList.add('hidden');installSettings.classList.add('hidden')}
const updateButton=document.createElement('button');updateButton.id='updateApp';updateButton.className='pill hidden';updateButton.textContent='Actualizar juego';settingsPanel.append(updateButton);
updateButton.onclick=()=>{if(swRegistration?.waiting){save();swRegistration.waiting.postMessage({type:'SKIP_WAITING'})}};
if('serviceWorker'in navigator&&window.isSecureContext){
 let refreshing=false,hadController=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!hadController){hadController=true;return}if(refreshing)return;refreshing=true;location.reload()});
 navigator.serviceWorker.register('./sw.js').then(registration=>{
  swRegistration=registration;if(registration.waiting)updateButton.classList.remove('hidden');
  registration.addEventListener('updatefound',()=>{const worker=registration.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed'){if(navigator.serviceWorker.controller)updateButton.classList.remove('hidden');else toast('El juego ya está listo para usar sin conexión.')}})});
 }).catch(()=>toast('No pudimos preparar el modo sin conexión. Puedes jugar con conexión.'));
}
const mobileQuests=document.createElement('button');mobileQuests.id='mobileQuests';mobileQuests.className='pill';mobileQuests.textContent='Aventuras';mobileQuests.onclick=()=>{$('quests').classList.toggle('mobile-open')};$('hud').append(mobileQuests);
const closeMobileQuests=document.createElement('button');closeMobileQuests.id='closeMobileQuests';closeMobileQuests.className='pill';closeMobileQuests.textContent='Cerrar aventuras';closeMobileQuests.onclick=()=>$('quests').classList.remove('mobile-open');$('quests').prepend(closeMobileQuests);
const mobileSelect=selectQuest;selectQuest=function(task){mobileSelect(task);$('quests').classList.remove('mobile-open')};
const mobileFree=applyFreeMode;applyFreeMode=function(){mobileFree();mobileQuests.classList.toggle('hidden',preferences.free);if(preferences.free)$('quests').classList.remove('mobile-open')};applyFreeMode();
// Use the same pointer path for mouse and touch; only the hover lesson changes.
tc.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'&&tutorialState?.step===0){let p=tutorialPoint(e);if(Math.hypot(p.x-590,p.y-270)<95*difficulty().hit){tutorialState.pointer=p;tutorialState.step=1;recordPractice(true);tutorialInstruction()}}});
const mobileTutorialInstruction=tutorialInstruction;tutorialInstruction=function(){mobileTutorialInstruction();if(touchScreen&&tutorialState){const texts=['Toca la flor brillante para empezar.','¡Muy bien! Ahora toca la mariposa.','Mantén el dedo sobre la fruta, llévala hasta la cesta y levántalo.','¡Ya sabes explorar! Vamos a elegir un mundo.'];$('tutorialHelp').textContent=texts[tutorialState.step];speak(texts[tutorialState.step])}};
if(touchScreen){$('welcome').querySelector('small').textContent='Con mouse o pantalla táctil · Sin prisas ni vidas';$('world').setAttribute('aria-label','Mundo de exploración. Toca el suelo para caminar.');$('name').setAttribute('enterkeyhint','go')}
function mobileZoom(){zoom=worldSession?Math.min(1.1,(w-24)/800,Math.max(180,h-255)/470):Math.min(1.1,Math.max(.5,w/1400))}
const mobileResize=resize;resize=function(){mobileResize();mobileZoom()};addEventListener('resize',resize);
const mobileWorldStart=startWorldTask;startWorldTask=function(task){mobileWorldStart(task);mobileZoom();mobileQuests.classList.add('hidden')};
const mobileWorldEnd=endWorldTask;endWorldTask=function(withHint=true){mobileWorldEnd(withHint);mobileZoom();mobileQuests.classList.toggle('hidden',preferences.free)};
resize();
