const ROUTES={"1":{"name":"Ruta 1 · Los Algodones → Navojoa","startClock":"04:00","timezone":"America/Tijuana","nightGoal":"18:00","nightLimit":"19:00","points":[{"name":"Los Algodones · Pemex","type":"fuel_required","km":0,"driveMin":0,"stopMin":0,"tol":0,"action":"Salida con tanque lleno","nav":"address","address":"Pemex, Ca B N 491, 21840 Vicente Guerrero, B.C."},{"name":"Caseta San Luis Río Colorado","type":"toll","km":30,"driveMin":30,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"address","address":"Caseta de cobro San Luis Río Colorado, Av. Álvaro Obregón 714, San Luis Río Colorado, Sonora"},{"name":"San Luis R.C.","type":"pass","km":3,"driveMin":5,"stopMin":0,"tol":10,"action":"Paso obligatorio por la ciudad","nav":"reference"},{"name":"Cucapah · P.V.I.","type":"checkpoint","km":26,"driveMin":25,"stopMin":10,"tol":30,"action":"Punto de revisión","nav":"external","url":"https://maps.app.goo.gl/ZnWQdGwJDF6wm3GF7?g_st=ic"},{"name":"Sonoyta · Super Servicio Salcido","type":"fuel_required","km":182,"driveMin":120,"stopMin":20,"tol":15,"action":"FULL + baño","nav":"address","address":"Super Servicio Salcido, SA de CV, Francisco Eusebio Kino LB, Centro, 83570 Sonoyta, Sonora"},{"name":"San Emeterio · SAT","type":"checkpoint","km":27,"driveMin":20,"stopMin":10,"tol":30,"action":"Punto de revisión","nav":"external","url":"https://maps.app.goo.gl/aqiWAAioczAApup47?g_st=ic"},{"name":"Santa Ana · Pemex km 158+500","type":"fuel_required","km":228,"driveMin":145,"stopMin":15,"tol":15,"action":"FULL por margen de seguridad a 8 km/L","nav":"address","address":"Pemex, Carretera Num. 15 Km. 158+500 Santa Ana, 84600 Sonora"},{"name":"Querobabi · P.M.S.E.","type":"reference","km":62,"driveMin":40,"stopMin":0,"tol":10,"action":"Referencia y punto de revisión","nav":"external","url":"https://maps.app.goo.gl/EnD2QVyGFRtmWyP27?g_st=ic"},{"name":"Caseta CAPUFE 152 Hermosillo","type":"toll","km":95,"driveMin":60,"stopMin":2,"tol":10,"action":"Caseta; continuar hacia el libramiento","nav":"address","address":"Caseta de Cobro CAPUFE No. 152 NORTE, Hermosillo - Santa Ana, Sonora"},{"name":"Caseta Libramiento Hermosillo","type":"toll","km":51,"driveMin":45,"stopMin":2,"tol":10,"action":"Tomar el libramiento completo; no entrar a Hermosillo","nav":"address","address":"Caseta Libramiento de Hermosillo, 83306 Hermosillo, Sonora"},{"name":"Gasolinera Los Arrieros","type":"fuel_required","km":96,"driveMin":60,"stopMin":35,"tol":20,"action":"FULL + descanso/comida","nav":"address","address":"Gasolinera Los Arrieros, Carretera Interior Km. 171.3, 85506 Heroica Guaymas, Sonora"},{"name":"Caseta CAPUFE 151 Guaymas","type":"toll","km":39,"driveMin":30,"stopMin":2,"tol":10,"action":"Caseta del Libramiento Guaymas/Empalme","nav":"address","address":"Caseta de Cobro CAPUFE No. 151 Guaymas, Loma Linda, 85420 Guaymas, Sonora"},{"name":"Windstar Vícam","type":"fuel_backup","km":85,"driveMin":55,"stopMin":0,"tol":20,"action":"Gasolina de respaldo; no cargar si el nivel es suficiente","nav":"address","address":"Gasolinera Vícam SSV - Windstar, Carretera Internacional Cd. Obregón - Guaymas No. 15 KM 45.631, Pob. de Vícam, Sonora"},{"name":"Caseta CAPUFE 150 Esperanza","type":"toll","km":34,"driveMin":25,"stopMin":2,"tol":10,"action":"Caseta; continuar hacia el libramiento de Obregón","nav":"address","address":"CAPUFE Plaza de Cobro No. 150 Esperanza, Carretera Internacional Km 10+500, Esperanza, Ciudad Obregón, Sonora"},{"name":"Caseta Libramiento Cd. Obregón · decisión","type":"decision","km":5,"driveMin":5,"stopMin":5,"tol":10,"action":"Caseta y punto de decisión: revisar ETA, cansancio, clima e incidentes; dormir en Obregón si no es seguro continuar","nav":"address","address":"Plaza de cobro Libramiento CD. Obregón, Libramiento Ciudad Obregón, 85218 Sonora"},{"name":"Caseta CAPUFE 149 Fundición","type":"toll","km":48,"driveMin":30,"stopMin":2,"tol":10,"action":"Caseta; continuar hacia Navojoa","nav":"address","address":"CAPUFE Plaza de Cobro No. 149 - Fundición, 85233 Navojoa, Sonora"},{"name":"Navojoa","type":"day_end","km":47,"driveMin":32,"stopMin":0,"tol":0,"action":"Fin de jornada","nav":"address","address":"Navojoa, Sonora"}]},"2":{"name":"Ruta 2 · Navojoa → Tepic","startClock":"06:00","timezone":"America/Hermosillo","nightGoal":"18:00","nightLimit":"19:00","points":[{"name":"Navojoa","type":"fuel_required","km":0,"driveMin":0,"stopMin":0,"tol":0,"action":"Salida FULL","nav":"reference"},{"name":"El Desengaño","type":"checkpoint","km":92,"driveMin":70,"stopMin":10,"tol":30,"action":"Punto de revisión","nav":"external","url":"https://maps.app.goo.gl/dZ9bVVeWkwv3Txij9?g_st=ic"},{"name":"Libramiento Culiacán","type":"bypass","km":250,"driveMin":180,"stopMin":0,"tol":10,"action":"Continuar por libramiento","nav":"reference"},{"name":"Santa Lucía Costa Rica","type":"fuel_required","km":30,"driveMin":25,"stopMin":20,"tol":15,"action":"FULL + baño","nav":"address","address":"Autopista Mazatlán-Culiacán km 179+800, Costa Rica, Sinaloa, México"},{"name":"Libramiento Mazatlán","type":"bypass","km":190,"driveMin":125,"stopMin":0,"tol":10,"action":"Continuar por libramiento","nav":"reference"},{"name":"Santa Lucía km 279","type":"fuel_required","km":25,"driveMin":20,"stopMin":25,"tol":20,"action":"FULL + descanso/comida ligera","nav":"address","address":"Carretera Tepic-Mazatlán km 279, Sinaloa, México"},{"name":"Estación Nanchi","type":"fuel_backup","km":150,"driveMin":95,"stopMin":0,"tol":20,"action":"Gasolina de respaldo","nav":"address","address":"Estación Nanchi, Autopista Tepic-Mazatlán, Nayarit, México"},{"name":"Tepic","type":"day_end","km":110,"driveMin":65,"stopMin":0,"tol":0,"action":"Fin de jornada","nav":"reference"}]},"3":{"name":"Ruta 3 · Tepic → destino","startClock":"07:00","timezone":"America/Mazatlan","nightGoal":"18:00","nightLimit":"19:00","points":[{"name":"Tepic","type":"fuel_required","km":0,"driveMin":0,"stopMin":0,"tol":0,"action":"Salida FULL","nav":"reference"},{"name":"Santa María del Oro","type":"toll","km":35,"driveMin":30,"stopMin":5,"tol":10,"action":"Caseta; continuar","nav":"reference"},{"name":"Ixtlán del Río","type":"fuel_backup","km":43,"driveMin":30,"stopMin":0,"tol":10,"action":"Control de avance / respaldo","nav":"reference"},{"name":"Plan de Barrancas","type":"toll","km":25,"driveMin":20,"stopMin":5,"tol":10,"action":"Caseta; continuar","nav":"reference"},{"name":"Magdalena","type":"maneuver","km":29,"driveMin":20,"stopMin":10,"tol":10,"action":"Salir de 15D → México 15 libre","nav":"reference","targetTimezone":"America/Mexico_City"},{"name":"Destino final","type":"trip_end","km":20,"driveMin":25,"stopMin":0,"tol":0,"action":"Llegada","nav":"reference","targetTimezone":"America/Mexico_City"}]}};
// Días 2 y 3 oficiales. Se declaran como reemplazo para conservar intacta la ruta 1 auditada.
ROUTES["2"]={"name":"Ruta 2 · Navojoa → Tepic","startClock":"06:00","timezone":"America/Hermosillo","nightGoal":"18:00","nightLimit":"19:00","points":[
  {"name":"Navojoa","type":"fuel_required","km":0,"driveMin":0,"stopMin":0,"tol":0,"action":"Salida con tanque FULL","nav":"address","address":"Navojoa, Sonora"},
  {"name":"Caseta La Jaula","type":"toll","km":31,"driveMin":25,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"reference"},
  {"name":"El Desengaño · punto de revisión","type":"checkpoint","km":61,"driveMin":45,"stopMin":10,"tol":30,"action":"Retén confirmado sobre el corredor; documentos listos","nav":"external","url":"https://maps.app.goo.gl/dZ9bVVeWkwv3Txij9?g_st=ic"},
  {"name":"Caseta San Miguel","type":"toll","km":46,"driveMin":32,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"reference"},
  {"name":"Caseta Puente Sinaloa","type":"toll","km":67,"driveMin":45,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"reference"},
  {"name":"Mobil Guasavito","type":"fuel_backup","manual":true,"km":14,"driveMin":11,"stopMin":15,"tol":15,"action":"Descanso y gasolina de respaldo; cargar solo si el nivel real lo requiere","nav":"address","address":"Mobil Guasavito, Carretera Mochis-Culiacán Km. 143+863, Los Mochis - Culiacán s/n, 81149 Callejones de Guasavito, Sinaloa"},
  {"name":"Caseta Las Brisas","type":"toll","km":42,"driveMin":30,"stopMin":2,"tol":10,"action":"Caseta; continuar por el corredor 15/15D","nav":"reference"},
  {"name":"Caseta El Pisal","type":"toll","km":85,"driveMin":55,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"reference"},
  {"name":"Caseta San Pedro","type":"toll","km":20,"driveMin":14,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"reference"},
  {"name":"Santa Lucía Costa Rica","type":"fuel_required","km":11,"driveMin":16,"stopMin":20,"tol":15,"action":"FULL + baño; carga calculada aproximada 47 L desde Navojoa","nav":"address","address":"Gasolinera Santa Lucia Costa Rica, Mazatlan-Culiacán Km. 179+800, 80430 Costa Rica, Sinaloa"},
  {"name":"Caseta Costa Rica","type":"toll","km":2,"driveMin":3,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"reference"},
  {"name":"Caseta Mármol","type":"toll","km":145,"driveMin":82,"stopMin":2,"tol":10,"action":"Caseta; continuar hacia el libramiento de Mazatlán","nav":"reference"},
  {"name":"Caseta Vainillo · Libramiento Mazatlán","type":"toll","km":45,"driveMin":35,"stopMin":2,"tol":10,"action":"Usar el libramiento; no entrar a Mazatlán","nav":"reference"},
  {"name":"Santa Lucía km 279","type":"fuel_required","km":4,"driveMin":5,"stopMin":25,"tol":20,"action":"FULL preventivo + descanso; carga calculada aproximada 25 L","nav":"address","address":"Gasolinera Santa Lucía, Carretera Internacional No. 15 tramo, Autopista Tepic - Mazatlán Km. 279-0, El Castillo, 82150 Mazatlán, Sinaloa"},
  {"name":"Caseta Rosario troncal","type":"toll","km":53,"driveMin":40,"stopMin":2,"tol":10,"action":"Caseta troncal; no tomar el ramal Rosario","nav":"reference"},
  {"name":"Caseta Acaponeta","type":"toll","km":78,"driveMin":57,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"reference"},
  {"name":"Caseta Ruiz","type":"toll","km":66,"driveMin":45,"stopMin":2,"tol":10,"action":"Caseta; continuar con TAG PASE","nav":"reference"},
  {"name":"Caseta Trapichillo","type":"toll","km":45,"driveMin":34,"stopMin":2,"tol":10,"action":"Última caseta del día; continuar hacia Tepic","nav":"reference"},
  {"name":"Tepic","type":"day_end","km":18,"driveMin":16,"stopMin":0,"tol":0,"action":"Fin de jornada con amigos","nav":"address","address":"Tepic, Nayarit"}
]};
ROUTES["3"]={"name":"Ruta 3 · Tepic → Tequila","startClock":"07:00","timezone":"America/Mazatlan","nightGoal":"18:00","nightLimit":"19:00","points":[
  {"name":"Tepic","type":"start","km":0,"driveMin":0,"stopMin":0,"tol":0,"action":"Salida hacia la gasolinera","nav":"reference"},
  {"name":"Gasolinera Vázquez","type":"fuel_required","km":8,"driveMin":12,"stopMin":15,"tol":10,"action":"FULL antes de tomar la autopista","nav":"address","address":"Gasolinera Vazquez, Carr. Guadalajara - Tepic 5050, 63194 Tepic, Nayarit"},
  {"name":"Caseta Santa María del Oro","type":"toll","km":20,"driveMin":15,"stopMin":2,"tol":10,"action":"TAG PASE · tarifa estimada $102","nav":"reference"},
  {"name":"Ixtlán del Río · referencia de seguridad","type":"security_reference","km":52,"driveMin":30,"stopMin":0,"tol":10,"action":"Control de avance; pueden existir operativos móviles de Guardia Nacional","nav":"reference"},
  {"name":"Caseta Plan de Barrancas","type":"toll","km":45,"driveMin":28,"stopMin":2,"tol":10,"action":"TAG PASE · tarifa estimada $147","nav":"reference","targetTimezone":"America/Mexico_City"},
  {"name":"Salida La Cofradía · Magdalena","type":"maneuver","km":18,"driveMin":15,"stopMin":0,"tol":10,"action":"Salir de la 15D y continuar por México 15 libre hacia Tequila; no entrar al centro de Magdalena","nav":"address","address":"20.908304, -103.956199","targetTimezone":"America/Mexico_City"},
  {"name":"Tequila","type":"trip_end","km":9,"driveMin":12,"stopMin":0,"tol":0,"action":"Destino final · llegada a casa","nav":"address","address":"Tequila, Jalisco","targetTimezone":"America/Mexico_City"}
]};

// Coordenadas de alta confianza para proximidad. Los puntos sin verificación conservan navegación por dirección/enlace.
Object.assign(ROUTES["1"].points[3],{lat:32.4138777,lng:-114.5528481,coordVerified:true});
// San Emeterio conserva el enlace aprobado; la coordenada anterior no identificaba inequívocamente el retén.
Object.assign(ROUTES["1"].points[10],{lat:28.32011,lng:-111.0426687,coordVerified:true});
Object.assign(ROUTES["2"].points[2],{lat:26.3596275,lng:-109.0173085,coordVerified:true});
Object.assign(ROUTES["2"].points[5],{lat:25.568914,lng:-108.4403694,coordVerified:true});
Object.assign(ROUTES["2"].points[9],{lat:24.5805085,lng:-107.4392658,coordVerified:true});
Object.assign(ROUTES["2"].points[13],{lat:23.1948844,lng:-106.3315992,coordVerified:true});
Object.assign(ROUTES["3"].points[1],{lat:21.4677832,lng:-104.8413867,coordVerified:true});
Object.assign(ROUTES["3"].points[5],{lat:20.908304,lng:-103.956199,coordVerified:true});
Object.assign(ROUTES["1"].points[14],{lat:27.6046545,lng:-109.8995836,coordVerified:true});

const KEY='viaje_familiar_v4_state';
const TANK_L=83.3, KM_PER_L=8, PRACTICAL_RANGE=Math.round(TANK_L*KM_PER_L*0.75);
const CHECKS={1:['Llantas/refacción','Aceite/refrigerante','Tanque lleno','Documentos','TAG','Teléfonos','Agua/snacks','Botiquín'],2:['Llantas/refacción','Tanque FULL en Navojoa','Documentos a la mano para El Desengaño','TAG PASE','Teléfonos','Agua/snacks','Botiquín'],3:['Llantas','Tanque FULL en Gasolinera Vázquez','Documentos','TAG PASE','Teléfonos','Confirmar salida La Cofradía/Magdalena','Adelantar reloj una hora al entrar a Jalisco']};

let state={schemaVersion:15,day:1,started:false,road:false,copilot:false,paused:false,pauseTs:null,activeTab:'route',moreTab:'check',showAllTimeline:false,undo:null,saveError:false,simulation:{active:false,original:null},breaks:{1:[],2:[],3:[]},etaSyncs:{1:[],2:[],3:[]},coordinateOverrides:{1:{},2:{},3:{}},settings:{mapApp:'google',proximityEnabled:true,proximityRadius:350,voiceAlerts:true,keepAwake:true,emergencyContact:'',insurerContact:'',vehicleInfo:'Buick Enclave 2013 FWD'},budget:{Gasolina:0,Caseta:0,Comida:0,Hospedaje:0,Otro:0},fuel:{percent:100,liters:83.3,kmPerL:8,lastSyncOdoKm:0,lastSyncPercent:100,lastFillOdoKm:0,lastFillTs:null,estimatedOdoKm:0},gps:{enabled:false,lat:null,lng:null,accuracy:null,lastTs:null,permission:'unknown',lastError:null,lastPromptKey:null,lastPromptTs:null},records:{1:{},2:{},3:{}},checks:{1:{},2:{},3:{}},expenses:[],travelLog:[],realFuel:{fills:[],lastOdoKm:null,lastFillOdoKm:null,lastFillLiters:null,measuredKmPerL:null},skipped:{1:{},2:{},3:{}}};
const MIRROR_KEY=KEY+'_mirror_v42',RECOVERY_KEY=KEY+'_recovery_v42';
function parseStored(raw){try{const x=JSON.parse(raw);return x&&typeof x==='object'?x:null}catch(e){return null}}
function readBestStoredState(){const primary=parseStored(localStorage.getItem(KEY)),mirror=parseStored(localStorage.getItem(MIRROR_KEY)),recovery=parseStored(localStorage.getItem(RECOVERY_KEY));if(primary)return primary;for(const candidate of [mirror,recovery]){if(candidate){try{localStorage.setItem(KEY,JSON.stringify(candidate));localStorage.setItem(MIRROR_KEY,JSON.stringify(candidate))}catch(e){}return candidate}}try{const backups=JSON.parse(localStorage.getItem(KEY+'_automatic'));const b=Array.isArray(backups)?backups.find(x=>x?.state):null;if(b?.state){localStorage.setItem(KEY,JSON.stringify(b.state));localStorage.setItem(MIRROR_KEY,JSON.stringify(b.state));return b.state}}catch(e){}return null}
try{
 const s=readBestStoredState();
 if(s&&typeof s==='object'){
   const oldSchema=Number(s.schemaVersion)||0;
   state={...state,...s,schemaVersion:15,settings:{...state.settings,...(s.settings||{})},budget:{...state.budget,...(s.budget||{})},fuel:{...state.fuel,...(s.fuel||{})},gps:{...state.gps,...(s.gps||{}),lastError:null},records:{1:{...(s.records?.[1]||{})},2:oldSchema>=7?{...(s.records?.[2]||{})}:{},3:oldSchema>=7?{...(s.records?.[3]||{})}:{}},checks:{1:{...(s.checks?.[1]||{})},2:oldSchema>=7?{...(s.checks?.[2]||{})}:{},3:oldSchema>=7?{...(s.checks?.[3]||{})}:{}},travelLog:Array.isArray(s.travelLog)?s.travelLog:[],realFuel:{fills:[],lastOdoKm:null,lastFillOdoKm:null,lastFillLiters:null,measuredKmPerL:null,...(s.realFuel||{})},skipped:{1:{...(s.skipped?.[1]||{})},2:{...(s.skipped?.[2]||{})},3:{...(s.skipped?.[3]||{})}},breaks:{1:Array.isArray(s.breaks?.[1])?s.breaks[1]:[],2:Array.isArray(s.breaks?.[2])?s.breaks[2]:[],3:Array.isArray(s.breaks?.[3])?s.breaks[3]:[]},etaSyncs:{1:Array.isArray(s.etaSyncs?.[1])?s.etaSyncs[1]:[],2:Array.isArray(s.etaSyncs?.[2])?s.etaSyncs[2]:[],3:Array.isArray(s.etaSyncs?.[3])?s.etaSyncs[3]:[]},coordinateOverrides:{1:{...(s.coordinateOverrides?.[1]||{})},2:{...(s.coordinateOverrides?.[2]||{})},3:{...(s.coordinateOverrides?.[3]||{})}},simulation:s.simulation?.active&&s.simulation?.original?s.simulation:{active:false,original:null},expenses:Array.isArray(s.expenses)?s.expenses:[]};
   if(oldSchema<7&&Number(s.day)>1){state.started=false;state.road=false;state.paused=false;state.pauseTs=null}
   if(oldSchema<11){state.undo=null;state.copilot=false}
 }
}catch(e){}
state.day=[1,2,3].includes(Number(state.day))?Number(state.day):1;
for(const d of [1,2,3]){
 if(!state.records[d]||typeof state.records[d]!=='object')state.records[d]={};
 if(!state.checks[d]||typeof state.checks[d]!=='object')state.checks[d]={};
 if(!Array.isArray(state.breaks[d]))state.breaks[d]=[];
 if(!Array.isArray(state.etaSyncs[d]))state.etaSyncs[d]=[];
 if(!state.coordinateOverrides[d]||typeof state.coordinateOverrides[d]!=='object')state.coordinateOverrides[d]={};
}
state.activeTab=['route','fuel','emergency','more'].includes(state.activeTab)?state.activeTab:'route';
state.moreTab=['check','expenses','travel','settings','fuelMore','safetyMore'].includes(state.moreTab)?state.moreTab:'check';
state.expenses=state.expenses.filter(e=>e&&Number.isFinite(Number(e.n))&&Number(e.n)>0).map(e=>({c:String(e.c||'Otro'),n:Number(e.n),t:String(e.t||'').slice(0,200),day:[1,2,3].includes(Number(e.day))?Number(e.day):1,ts:Number(e.ts)||Date.now(),liters:Math.max(0,Number(e.liters)||0)}));
const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
const nowTs=()=>Date.now();
const rapidClicks=new WeakMap();document.addEventListener('click',e=>{const t=e.target.closest?.('button,.btn');if(!t)return;const now=Date.now(),last=rapidClicks.get(t)||0;if(now-last<650){e.preventDefault();e.stopImmediatePropagation();return}rapidClicks.set(t,now)},true);
q('#fuelPanel').insertBefore(q('#fuelGauge'),q('#fuelPanel').children[1]);
let lastRecoveryTs=0;function save(){try{state.saveError=false;state.meta={...(state.meta||{}),savedTs:Date.now()};const raw=JSON.stringify(state);localStorage.setItem(KEY,raw);localStorage.setItem(MIRROR_KEY,raw);if(Date.now()-lastRecoveryTs>10*60*1000&&!state.simulation?.active){localStorage.setItem(RECOVERY_KEY,raw);lastRecoveryTs=Date.now()}q('#saveError')?.classList.add('hidden');if(q('#storageStatus'))q('#storageStatus').textContent='Guardado redundante activo · copia local verificada';return true}catch(e){state.saveError=true;q('#saveError')?.classList.remove('hidden');if(q('#storageStatus'))q('#storageStatus').textContent='⚠️ El navegador rechazó el guardado. Exporta un respaldo.';return false}}
const BACKUP_KEY=KEY+'_automatic',MAX_BACKUPS=12;
function cleanStateCopy(source=state){const copy=JSON.parse(JSON.stringify(source));copy.simulation={active:false,original:null};copy.copilot=false;copy.road=false;return copy}
function exportableState(){return state.simulation?.active&&state.simulation?.original?cleanStateCopy(state.simulation.original):cleanStateCopy()}
function readAutoBackups(){try{const raw=JSON.parse(localStorage.getItem(BACKUP_KEY));const list=Array.isArray(raw)?raw:(raw?.state?[raw]:[]);return list.filter(b=>b?.state&&Number.isFinite(Number(b.ts))).sort((a,b)=>b.ts-a.ts).slice(0,MAX_BACKUPS)}catch(e){return []}}
function saveAutoBackup(reason,source=state){if(state.simulation?.active&&source===state)return false;try{const list=readAutoBackups();list.unshift({version:'5.0.5 OFICIAL',reason:String(reason||'Respaldo').slice(0,160),ts:Date.now(),state:cleanStateCopy(source)});localStorage.setItem(BACKUP_KEY,JSON.stringify(list.slice(0,MAX_BACKUPS)));renderBackupStatus();return true}catch(e){q('#saveError')?.classList.remove('hidden');return false}}
function selectedAutoBackup(){const list=readAutoBackups(),index=Number(q('#backupSelect')?.value||0);return list[index]||list[0]||null}
function renderBackupStatus(){const el=q('#backupStatus'),select=q('#backupSelect');if(!el)return;const list=readAutoBackups();if(select){const previous=select.value;select.innerHTML='';list.forEach((b,i)=>{const o=document.createElement('option');o.value=String(i);o.textContent=`${new Date(b.ts).toLocaleString('es-MX')} · ${b.reason}`;select.appendChild(o)});select.disabled=!list.length;select.value=list[Number(previous)]?previous:'0'}el.textContent=list.length?`${list.length} respaldo${list.length===1?'':'s'} automático${list.length===1?'':'s'} disponible${list.length===1?'':'s'}. Elige cuál restaurar.`:'Todavía no hay respaldo automático.'}
function restoreAutoBackup(){const b=selectedAutoBackup();if(!b)return alert('Todavía no existe un respaldo automático.');if(!confirm(`¿Restaurar el respaldo de ${new Date(b.ts).toLocaleString('es-MX')}? El progreso actual será reemplazado.`))return;if(!saveAutoBackup('Antes de restaurar otro respaldo'))return alert('No se pudo crear el respaldo de seguridad. Exporta tus datos antes de restaurar.');const restored={...b.state,schemaVersion:15,simulation:{active:false,original:null},road:false,copilot:false};localStorage.setItem(KEY,JSON.stringify(restored));localStorage.setItem(MIRROR_KEY,JSON.stringify(restored));location.reload()}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]))}
function clock(ts,zone){try{return new Intl.DateTimeFormat('es-MX',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:zone}).format(new Date(ts))}catch(e){return new Date(ts).toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'})}}
function zonedParts(ts,zone){const parts=new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23',timeZone:zone}).formatToParts(new Date(ts)),out={};parts.forEach(x=>{if(x.type!=='literal')out[x.type]=Number(x.value)});return out}
function zonedTimestamp(y,mo,d,h,mi,zone){let guess=Date.UTC(y,mo-1,d,h,mi,0);for(let n=0;n<3;n++){const p=zonedParts(guess,zone),seen=Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second||0),wanted=Date.UTC(y,mo-1,d,h,mi,0);guess+=wanted-seen}return guess}
function minutesOfClock(x){const [h,m]=x.split(':').map(Number);return h*60+m}
function fmtDur(n){n=Math.max(0,Math.round(n||0));const h=Math.floor(n/60),m=n%60;return h?`${h} h ${m} min`:`${m} min`}

function clamp(n,a,b){return Math.min(b,Math.max(a,n))}
function ensureFuelState(){
 if(!state.fuel) state.fuel={percent:100,liters:TANK_L,kmPerL:KM_PER_L,lastSyncOdoKm:0,lastSyncPercent:100,lastFillOdoKm:0,lastFillTs:null,estimatedOdoKm:0};
 state.fuel.percent=clamp(Number(state.fuel.percent)||0,0,100);
 state.fuel.liters=clamp(Number(state.fuel.liters)||0,0,TANK_L);
 state.fuel.kmPerL=clamp(Number(state.fuel.kmPerL)||KM_PER_L,4,14);
 state.fuel.estimatedOdoKm=Math.max(0,Number(state.fuel.estimatedOdoKm)||0);
}
function completedDistanceKm(){
 let km=0;
 for(let d=1;d<=3;d++){
   const R=ROUTES[String(d)];
   for(let i=1;i<R.points.length;i++){
     const rr=state.records?.[d]?.[i],p=R.points[i];
     const reached=manual(p)?Boolean(rr&&rr.arrivalTs):R.points.slice(i+1).some((later,offset)=>manual(later)&&state.records?.[d]?.[i+1+offset]?.arrivalTs);
     if(reached)km+=p.km;
   }
   if(d===state.day) break;
 }
 return km;
}
function updateFuelByProgress(){
 ensureFuelState();
 const odo=completedDistanceKm();
 const delta=Math.max(0,odo-state.fuel.estimatedOdoKm);
 if(delta>0){
   const used=delta/state.fuel.kmPerL;
   state.fuel.liters=clamp(state.fuel.liters-used,0,TANK_L);
   state.fuel.percent=(state.fuel.liters/TANK_L)*100;
   state.fuel.estimatedOdoKm=odo;
 }
}
function syncFuelPercent(realPct){
 ensureFuelState();
 updateFuelByProgress();
 realPct=clamp(Number(realPct)||0,0,100);
 const odo=completedDistanceKm();
 const prevOdo=Number(state.fuel.lastSyncOdoKm)||0;
 const prevPct=Number(state.fuel.lastSyncPercent);
 const kmSince=odo-prevOdo;
 const litersBefore=(isFinite(prevPct)?prevPct:state.fuel.percent)/100*TANK_L;
 const litersNow=realPct/100*TANK_L;
 const used=Math.max(0,litersBefore-litersNow);
 if(kmSince>=40 && used>=3){
   const observed=kmSince/used;
   if(isFinite(observed)) state.fuel.kmPerL=clamp(observed,4,14);
 }
 state.fuel.percent=realPct;
 state.fuel.liters=realPct/100*TANK_L;
 state.fuel.lastSyncOdoKm=odo;
 state.fuel.lastSyncPercent=realPct;
 state.fuel.estimatedOdoKm=odo;
 save();render();
}
function markFuelFull(){
 ensureFuelState();
 const odo=completedDistanceKm();
 state.fuel.percent=100;
 state.fuel.liters=TANK_L;
 state.fuel.lastSyncOdoKm=odo;
 state.fuel.lastSyncPercent=100;
 state.fuel.lastFillOdoKm=odo;
 state.fuel.lastFillTs=Date.now();
 state.fuel.estimatedOdoKm=odo;
 save();render();
}
function snapshot(label){state.undo={label,day:state.day,started:state.started,road:state.road,paused:state.paused,pauseTs:state.pauseTs,records:JSON.parse(JSON.stringify(state.records[state.day])),breaks:JSON.parse(JSON.stringify(dayBreaks())),etaSyncs:JSON.parse(JSON.stringify(state.etaSyncs[state.day]||[])),fuel:JSON.parse(JSON.stringify(state.fuel)),expenses:JSON.parse(JSON.stringify(state.expenses||[])),travelLog:JSON.parse(JSON.stringify(state.travelLog||[])),realFuel:JSON.parse(JSON.stringify(state.realFuel||{})),skipped:JSON.parse(JSON.stringify(state.skipped?.[state.day]||{}))}}
function undoLast(){const u=state.undo;if(!u)return;if(u.day!==state.day){alert('La última acción corresponde a otro día.');return}state.started=u.started;state.road=u.road;state.paused=u.paused;state.pauseTs=u.pauseTs;state.records[state.day]=u.records;state.breaks[state.day]=u.breaks;state.etaSyncs[state.day]=u.etaSyncs||[];state.fuel=u.fuel;if(u.expenses)state.expenses=u.expenses;if(u.travelLog)state.travelLog=u.travelLog;if(u.realFuel)state.realFuel=u.realFuel;if(u.skipped)state.skipped[state.day]=u.skipped;state.undo=null;save();saveAutoBackup(`Después de deshacer: ${u.label||'última acción'}`);render();if(state.road&&!state.simulation?.active){requestWakeLock();if(state.gps?.enabled)startGpsWatch();else requestGps(false)}}
function fuelSafeRangeKm(){
 ensureFuelState();
 const usable=Math.max(0,state.fuel.liters-TANK_L*0.25);
 return Math.round(usable*state.fuel.kmPerL);
}
function nextRequiredFuelDistance(){
 const i=currentProgressIndex();
 let km=0;
 for(let k=i+1;k<pts().length;k++){
   km+=pts()[k].km;
   if(pts()[k].type==='fuel_required') return km;
   if(k===pts().length-1) return km;
 }
 return km;
}
function fuelRecommendation(){
 ensureFuelState();updateFuelByProgress();
 const safe=fuelSafeRangeKm();
 const need=nextRequiredFuelDistance();
 const margin=safe-need;
 if(state.fuel.percent<=15) return {cls:'bad',text:`🔴 Combustible bajo (${Math.round(state.fuel.percent)}%). Cargar en la próxima opción segura.`};
 if(margin<0) return {cls:'bad',text:`🔴 Con el consumo actual no alcanza el margen de seguridad. Faltan aprox. ${need} km; autonomía segura ${safe} km.`};
 if(margin<80) return {cls:'warn',text:`🟡 Margen de combustible reducido. Autonomía segura ${safe} km; próxima carga prevista a ~${need} km.`};
 return {cls:'good',text:`🟢 Combustible dentro del plan. Autonomía segura ~${safe} km; próxima carga prevista a ~${need} km.`};
}
function renderFuelGauge(){
 ensureFuelState();updateFuelByProgress();
 const pct=clamp(state.fuel.percent,0,100),safe=fuelSafeRangeKm();
 q('#fuelGaugePct').textContent=`${Math.round(pct)}%`;
 q('#fuelFill').style.width=`${pct}%`;
 q('#fuelLiters').textContent=`${state.fuel.liters.toFixed(1)} L`;
 q('#fuelSafeKm').textContent=`${safe} km`;
 q('#fuelKmL').textContent=`${state.fuel.kmPerL.toFixed(1)} km/L`;
 q('#fuelCompactPct').textContent=`${Math.round(pct)}%`;q('#fuelCompactText').textContent=`${state.fuel.liters.toFixed(1)} L · ${safe} km seguros`;
 q('#fuelGaugeSub').textContent=state.fuel.lastFillTs?'Último llenado registrado':'Planeación inicial';
 const recm=fuelRecommendation(),box=q('#fuelAlert');
 box.className='fuelAlert '+recm.cls; box.textContent=recm.text;
}

function route(){return ROUTES[String(state.day)]}
function pts(){return route().points}
function rec(i){return state.records[state.day][i]||{}}
function dayBreaks(){return state.breaks[state.day]||[]}
function latestBreak(){const a=dayBreaks();return a.length?a[a.length-1]:null}
function activeBreak(){const b=latestBreak();return b&&!b.resumeTs?b:null}
function plannedResumeTs(b,clockValue=null){const [h,m]=String(clockValue||b.resumeClock||'06:00').split(':').map(Number),zone=pts()[b.stopIndex]?.targetTimezone||route().timezone,p=zonedParts(b.stoppedTs,zone),next=new Date(Date.UTC(p.year,p.month-1,p.day+1));return zonedTimestamp(next.getUTCFullYear(),next.getUTCMonth()+1,next.getUTCDate(),Number.isFinite(h)?h:6,Number.isFinite(m)?m:0,zone)}
function manual(p){return p.manual===true||['start','fuel_required','checkpoint','maneuver','decision','day_end','trip_end'].includes(p.type)}
function nextManual(){return pts().findIndex((p,i)=>manual(p)&&!rec(i).arrivalTs)}
function activeStop(){return pts().findIndex((p,i)=>manual(p)&&rec(i).arrivalTs&&!rec(i).departureTs&&p.type!=='day_end'&&p.type!=='trip_end')}
function routeStartTs(){
 const [h,m]=route().startClock.split(':').map(Number),p=zonedParts(Date.now(),route().timezone);return zonedTimestamp(p.year,p.month,p.day,h,m,route().timezone)
}
function planMinutesTo(i){let n=0;for(let k=1;k<=i;k++)n+=pts()[k].driveMin+(pts()[k-1].stopMin||0);return n}
function legMinutes(from,i){let n=0;for(let k=from+1;k<=i;k++)n+=pts()[k].driveMin+(k>from+1?(pts()[k-1].stopMin||0):0);return n}
function breakAnchor(i){const b=latestBreak();if(!b||i<=b.stopIndex)return null;return {index:b.stopIndex,ts:b.resumeTs||plannedResumeTs(b),break:b}}
function latestEtaSyncFor(i){const a=(state.etaSyncs[state.day]||[]).filter(x=>Number.isFinite(x.index)&&x.index<=i&&Number.isFinite(x.etaTs));return a.length?a.sort((x,y)=>y.createdTs-x.createdTs)[0]:null}
function timestampForClockNear(value,zone,referenceTs=Date.now()){const [h,m]=String(value).split(':').map(Number);if(!Number.isFinite(h)||!Number.isFinite(m)||h<0||h>23||m<0||m>59)return null;const p=zonedParts(referenceTs,zone),ts=zonedTimestamp(p.year,p.month,p.day,h,m,zone);return ts<referenceTs-5*60000?null:ts}
function plannedEtaTimestamp(i){const a=breakAnchor(i);return a?a.ts+legMinutes(a.index,i)*60000:routeStartTs()+planMinutesTo(i)*60000}
function plannedEta(i){const p=pts()[i],zone=p.targetTimezone||route().timezone;return clock(plannedEtaTimestamp(i),zone)}
function etaTs(i){
 if(i<0)return null;const r=rec(i);if(r.arrivalTs)return r.arrivalTs;
 let prev=i-1;while(prev>=0){const pr=rec(prev);if(manual(pts()[prev])&&pr.departureTs)break;prev--}
 const anchor=breakAnchor(i),sync=latestEtaSyncFor(i),sources=[];
 if(prev>=0)sources.push({kind:'departure',index:prev,ts:rec(prev).departureTs,eventTs:rec(prev).departureTs});
 if(anchor)sources.push({kind:'break',index:anchor.index,ts:anchor.ts,eventTs:anchor.break.resumeTs||anchor.break.stoppedTs});
 if(sync)sources.push({kind:'sync',index:sync.index,ts:sync.etaTs,eventTs:sync.createdTs});
 if(sources.length){const src=sources.sort((a,b)=>b.eventTs-a.eventTs)[0],pauseExtra=state.paused&&state.pauseTs?Date.now()-state.pauseTs:0;if(src.kind==='sync'){if(i===src.index)return src.ts+pauseExtra;return src.ts+(pts()[src.index].stopMin||0)*60000+legMinutes(src.index,i)*60000+pauseExtra}return src.ts+legMinutes(src.index,i)*60000+pauseExtra}
 return routeStartTs()+planMinutesTo(i)*60000
}
function routeCompleted(){const last=pts().length-1;return Boolean(rec(last).arrivalTs)}
function criticalChecksReady(){const c=state.checks[state.day]||{},fuelIdx=state.day===1?2:1;return Boolean(c[0]&&c[fuelIdx])}
function phoneFrom(text){const m=String(text||'').match(/\+?\d[\d\s().-]{6,}/);return m?m[0].replace(/[^\d+]/g,''):''}
function dailyBoundaryTs(anchorTs,clockValue,zone){const p=zonedParts(anchorTs,zone),[h,m]=clockValue.split(':').map(Number);return zonedTimestamp(p.year,p.month,p.day,h,m,zone)}
function remainingSchedule(startTs,fromIdx){const rows=[];for(let i=fromIdx+1;i<pts().length;i++){const ts=startTs+legMinutes(fromIdx,i)*60000,p=pts()[i];rows.push({index:i,name:p.name,type:p.type,ts,clock:clock(ts,p.targetTimezone||route().timezone)})}return rows}
function scheduleAdvice(startTs,fromIdx){const rows=remainingSchedule(startTs,fromIdx),final=rows[rows.length-1];if(!final)return {status:'safe',rows,finalClock:clock(startTs,route().timezone),recommended:null};const finalPoint=pts()[final.index],finalZone=finalPoint.targetTimezone||route().timezone,goalTs=dailyBoundaryTs(startTs,route().nightGoal,finalZone),limitTs=dailyBoundaryTs(startTs,route().nightLimit,finalZone);let status=final.ts<=goalTs?'safe':final.ts<=limitTs?'caution':'stop',candidates=rows.filter(x=>{const p=pts()[x.index],zone=p.targetTimezone||route().timezone;return x.ts<=dailyBoundaryTs(startTs,route().nightGoal,zone)&&['fuel_required','decision','day_end','trip_end'].includes(x.type)});if(!candidates.length)candidates=rows.filter(x=>{const p=pts()[x.index],zone=p.targetTimezone||route().timezone;return x.ts<=dailyBoundaryTs(startTs,route().nightLimit,zone)&&['fuel_required','decision','day_end','trip_end'].includes(x.type)});return {status,rows,finalClock:final.clock,recommended:candidates.length?candidates[candidates.length-1]:null}}
function dailyAnchorTs(){const b=latestBreak();if(b)return b.resumeTs||plannedResumeTs(b);return rec(0).departureTs||routeStartTs()}
function safetyStopIndex(){if(routeCompleted())return null;const end=pts().length-1,endPoint=pts()[end],endZone=endPoint.targetTimezone||route().timezone,anchor=dailyAnchorTs(),finalTs=etaTs(end);if(finalTs<=dailyBoundaryTs(anchor,route().nightLimit,endZone))return null;const from=currentProgressIndex(),eligible=[];for(let i=Math.max(0,from);i<pts().length;i++){const p=pts()[i],zone=p.targetTimezone||route().timezone;if(['fuel_required','decision','day_end','trip_end'].includes(p.type)&&etaTs(i)<=dailyBoundaryTs(anchor,route().nightGoal,zone))eligible.push(i)}if(eligible.length)return eligible[eligible.length-1];for(let i=Math.max(0,from);i<pts().length;i++){const p=pts()[i],zone=p.targetTimezone||route().timezone;if(['fuel_required','checkpoint','decision','day_end','trip_end'].includes(p.type)&&etaTs(i)<=dailyBoundaryTs(anchor,route().nightLimit,zone))eligible.push(i)}const fallback=activeStop()>=0?activeStop():nextManual();return fallback>=0?fallback:null}
function etaClock(i){const p=pts()[i],zone=p.targetTimezone||route().timezone;return clock(etaTs(i),zone)}
function deltaMin(i){return Math.round((etaTs(i)-plannedEtaTimestamp(i))/60000)}
function statusInfo(i){const d=deltaMin(i);if(d<=0)return ['good',d<0?`🟢 ${Math.abs(d)} min adelantados`:'🟢 En tiempo'];if(d<=15)return ['good',`🟢 ${d} min tarde`];if(d<=45)return ['warn',`🟡 ${d} min tarde`];return ['bad',`🔴 ${d} min tarde`]}
function nextRoadIndex(){const a=activeStop();if(a>=0)return a;const m=nextManual();return m>=0?m:pts().length-1}
function currentProgressIndex(){
 const a=activeStop();if(a>=0)return a;
 let last=0;
 for(let i=0;i<pts().length;i++){
   const r=rec(i);
   if(manual(pts()[i])&&(r.departureTs||((pts()[i].type==='day_end'||pts()[i].type==='trip_end')&&r.arrivalTs)))last=i;
 }
 return last;
}
function roadLegMetrics(toIdx){
 const from=currentProgressIndex();let km=0,driveMin=0;const via=[];
 for(let i=from+1;i<=toIdx;i++){km+=pts()[i].km;driveMin+=pts()[i].driveMin;if(i<toIdx)via.push(pts()[i].name)}
 return {km,driveMin,via};
}
function fuelReserveToNextRequired(){
 const fromIdx=currentProgressIndex();let km=0;
 for(let i=fromIdx+1;i<pts().length;i++){km+=pts()[i].km;if(pts()[i].type==='fuel_required'||pts()[i].type==='day_end'||pts()[i].type==='trip_end')break}
 const used=km/KM_PER_L,res=TANK_L-used;return {km,used,res,pct:Math.max(0,res/TANK_L*100)}
}
function nightCheckFromNow(nextRoute=false){
 const d=nextRoute?Math.min(3,state.day+1):state.day;const R=ROUTES[String(d)];let mins=0;
 for(let i=1;i<R.points.length;i++)mins+=R.points[i].driveMin+(R.points[i-1].stopMin||0);
 const start=Date.now(),end=R.points[R.points.length-1],zone=end.targetTimezone||R.timezone,etaTsValue=start+mins*60000,eta=clock(etaTsValue,zone),goalTs=dailyBoundaryTs(start,R.nightGoal,zone),limitTs=dailyBoundaryTs(start,R.nightLimit,zone);
 return {eta,status:etaTsValue<=goalTs?'safe':etaTsValue<=limitTs?'caution':'stop'}
}
function renderOvernight(){const b=activeBreak(),card=q('#overnightCard');card.classList.toggle('hidden',!b);if(!b)return;q('#overnightWhere').textContent=`Parada: ${b.label} · ${clock(b.stoppedTs,route().timezone)}${Number.isFinite(b.lat)?` · GPS ${b.lat.toFixed(5)}, ${b.lng.toFixed(5)}`:''}`;q('#overnightStartTime').value=b.resumeClock||'06:00';const start=plannedResumeTs(b),advice=scheduleAdvice(start,b.stopIndex),box=q('#overnightPlan'),next=advice.rows.slice(0,4),final=advice.rows[advice.rows.length-1];let msg=advice.status==='safe'?`🟢 Plan viable: llegada final estimada ${advice.finalClock}, antes del objetivo de 18:00.`:advice.status==='caution'?`🟡 Llegada final estimada ${advice.finalClock}. Es antes de las 19:00, pero después del objetivo de 18:00.`:(advice.recommended?`🔴 No se debe planear hasta el destino: llegaría ${advice.finalClock}. Parada recomendada antes de anochecer: ${advice.recommended.name} aproximadamente ${advice.recommended.clock}.`:`🔴 Con esta hora de salida no hay un punto planeado seguro antes de las 18:00. Sal más temprano o define una parada segura cercana.`);box.innerHTML=`<div class="limitBanner ${advice.status==='safe'?'good':advice.status==='caution'?'warn':'bad'}">${escapeHtml(msg)}</div>`;const shown=[...next];if(final&&!shown.some(x=>x.index===final.index))shown.push(final);shown.forEach(x=>{const row=document.createElement('div');row.className='scheduleRow';row.innerHTML=`<span>${escapeHtml(x.name)}</span><b>${x.clock}</b>`;box.appendChild(row)});const note=document.createElement('div');note.className='note';note.textContent='Cálculo conservador: si la parada fue entre dos puntos, se vuelve a contar completo el tramo pendiente para no subestimar el tiempo.';box.appendChild(note)}
function journeyHealth(){const i=nextRoadIndex(),eta=etaTs(i),R=route(),p=pts()[i],zone=p?.targetTimezone||R.timezone;if(!state.started||!eta)return {cls:'warn',title:'🟡 Jornada lista',text:'Inicia el día para activar ETA y seguimiento'};const goal=dailyBoundaryTs(Date.now(),R.nightGoal,zone),limit=dailyBoundaryTs(Date.now(),R.nightLimit,zone);if(eta<=goal)return {cls:'good',title:'🟢 Jornada en horario',text:`Siguiente punto ${clock(eta,zone)} · margen cómodo`};if(eta<=limit)return {cls:'warn',title:'🟡 Atención al horario',text:`Siguiente punto ${clock(eta,zone)} · acercándose al límite`};return {cls:'bad',title:'🔴 Replantear jornada',text:`ETA ${clock(eta,zone)} · no planear conducción después de 19:00`}}
function predictedFuelAtNext(){ensureFuelState();const i=nextRoadIndex();if(i<=0)return {pct:state.fuel.percent,km:0};let km=0;const from=Math.max(1,currentProgressIndex()+1);for(let x=from;x<=i;x++)km+=Number(pts()[x]?.km||0);const liters=km/Math.max(1,state.fuel.kmPerL),pct=clamp(state.fuel.percent-(liters/TANK_L*100),0,100);return {pct,km}}
function renderV42Status(){const h=journeyHealth(),box=q('#journeySignal');if(box){box.className=`journeySignal ${h.cls}`;q('#journeySignalTitle').textContent=h.title;q('#journeySignalText').textContent=h.text}const f=predictedFuelAtNext(),next=pts()[nextRoadIndex()];if(q('#predictiveFuel'))q('#predictiveFuel').textContent=`⛽ Llegada estimada a ${next?.name||'siguiente punto'}: ~${Math.round(f.pct)}% de tanque después de ~${Math.round(f.km)} km`}
// ===== v4.3: capa inteligente de viaje =====
function ensureV43State(){
  if(!Array.isArray(state.travelLog)) state.travelLog=[];
  if(!state.realFuel) state.realFuel={fills:[],lastOdoKm:null,lastFillOdoKm:null,lastFillLiters:null,measuredKmPerL:null};
  if(!Array.isArray(state.realFuel.fills)) state.realFuel.fills=[];
  if(!state.skipped) state.skipped={1:{},2:{},3:{}};
  [1,2,3].forEach(d=>{if(!state.skipped[d])state.skipped[d]={}});
}
function addTravelLog(type,text,meta={}){
  ensureV43State();
  const last=state.travelLog[state.travelLog.length-1];
  const sig=`${type}|${state.day}|${text}`;
  if(last&&last.sig===sig&&Date.now()-last.ts<2000)return;
  state.travelLog.push({ts:Date.now(),day:state.day,type,text:String(text).slice(0,180),meta,sig});
  if(state.travelLog.length>250)state.travelLog=state.travelLog.slice(-250);
}
function delayVsPlan(){
  if(!state.started||routeCompleted()) return null;
  const i=nextRoadIndex(), actual=etaTs(i), planned=plannedEtaTimestamp(i);
  if(!actual||!planned)return null;
  return Math.round((actual-planned)/60000);
}
function fuelMargin(){
  ensureFuelState(); const f=predictedFuelAtNext();
  const safeKm=Math.max(0,Math.round((state.fuel.percent/100)*TANK_L*(state.fuel.kmPerL||KM_PER_L)*0.75));
  return {...f,safeKm,marginKm:safeKm-Math.round(f.km)};
}
function suggestedStopForToday(){
  if(!state.started||routeCompleted())return null;
  const end=pts().length-1, final=etaTs(end), z=pts()[end].targetTimezone||route().timezone,
        limit=dailyBoundaryTs(dailyAnchorTs(),route().nightLimit,z),goal=dailyBoundaryTs(dailyAnchorTs(),route().nightGoal,z);
  if(final<=goal)return {status:'safe',finalClock:clock(final,z),point:null};
  let candidate=null;
  for(let i=nextRoadIndex();i<pts().length;i++){
    const t=etaTs(i), p=pts()[i], zone=p.targetTimezone||route().timezone;
    if(t<=limit && ['fuel_required','decision','day_end','trip_end'].includes(p.type)) candidate={i,p,clock:clock(t,zone)};
  }
  return {status:final<=limit?'caution':'stop',finalClock:clock(final,z),point:candidate};
}
function totalTripKmRecorded(){return [1,2,3].reduce((sum,d)=>{const prev=state.day;state.day=d;const x=reachedKmForDay();state.day=prev;return sum+x},0)}
function totalExpenses(){return state.expenses.reduce((s,e)=>s+Number(e.n||0),0)}
function fuelExpenseTotal(){return state.expenses.filter(e=>e.c==='Gasolina').reduce((s,e)=>s+Number(e.n||0),0)}
function renderTravelLog(){
  ensureV43State(); const box=q('#travelLog'); if(!box)return;
  const rows=state.travelLog.slice(-12).reverse();
  box.innerHTML=rows.length?'':'<div class="muted">La bitácora se irá llenando automáticamente durante el viaje.</div>';
  rows.forEach(e=>{const d=document.createElement('div');d.className='logRow';d.innerHTML=`<span>${new Date(e.ts).toLocaleString('es-MX',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}</span><b>${escapeHtml(e.text)}</b>`;box.appendChild(d)});
}
function renderRealFuel(){
  ensureV43State(); const el=q('#realFuelStats'); if(!el)return;
  const fills=state.realFuel.fills;
  if(!fills.length){el.textContent='Aún no hay cargas reales suficientes para calcular rendimiento.';return}
  const last=fills[fills.length-1], measured=state.realFuel.measuredKmPerL;
  el.textContent=measured?`Último rendimiento real: ${measured.toFixed(2)} km/L · ${fills.length} carga${fills.length===1?'':'s'} registrada${fills.length===1?'':'s'}.`:`Carga registrada en odómetro ${Math.round(last.odo)} km. En la próxima carga podremos calcular el rendimiento real.`;
}
function saveRealFill(){
  ensureV43State(); const odo=Number(q('#fillOdo')?.value),liters=Number(q('#fillLiters')?.value),price=Number(q('#fillPrice')?.value||0);
  if(!Number.isFinite(odo)||odo<=0||!Number.isFinite(liters)||liters<=0)return alert('Escribe odómetro y litros válidos.');
  const fills=state.realFuel.fills,last=fills[fills.length-1]; let measured=null;
  if(last&&odo>last.odo){measured=(odo-last.odo)/liters;if(measured>2&&measured<30){state.realFuel.measuredKmPerL=measured;state.fuel.kmPerL=measured}}
  const amount=price>0?liters*price:0; fills.push({ts:Date.now(),day:state.day,odo,liters,price,amount,measured});
  state.realFuel.lastOdoKm=odo; state.realFuel.lastFillOdoKm=odo; state.realFuel.lastFillLiters=liters;
  markFuelFull();
  if(amount>0)state.expenses.push({c:'Gasolina',n:amount,t:`Carga real · ${liters.toFixed(2)} L @ ${money(price)}/L`,day:state.day,ts:Date.now(),liters});
  addTravelLog('fuel',`⛽ Carga ${liters.toFixed(1)} L${measured?` · ${measured.toFixed(2)} km/L real`:''}`);
  ['fillOdo','fillLiters','fillPrice'].forEach(id=>{if(q('#'+id))q('#'+id).value=''}); save();render();
}
function renderV43(){
  ensureV43State();
  const i=nextRoadIndex(),p=pts()[i],f=fuelMargin(),delay=delayVsPlan(),plan=suggestedStopForToday();
  if(q('#smartNext'))q('#smartNext').textContent=p?.name||'—';
  if(q('#smartEta'))q('#smartEta').textContent=state.started&&!routeCompleted()?etaClock(i):(routeCompleted()?'Completado':'Sin iniciar');
  if(q('#smartFuel'))q('#smartFuel').textContent=`~${Math.round(f.pct)}% · margen ${f.marginKm>=0?'+':''}${f.marginKm} km`;
  if(q('#smartDelay'))q('#smartDelay').textContent=delay===null?'—':delay===0?'En plan':`${delay>0?'+':''}${delay} min`;
  const pb=q('#smartPlanB'); if(pb){if(!state.started){pb.className='limitBanner good';pb.textContent='🟢 Lista para iniciar. Revisa “Antes de salir”.'}else if(plan?.status==='safe'){pb.className='limitBanner good';pb.textContent=`🟢 Plan completo viable · llegada final aprox. ${plan.finalClock}.`}else if(plan?.status==='caution'){pb.className='limitBanner warn';pb.textContent=`🟡 Llegada estimada ${plan.finalClock}. Conserva margen y evita demoras largas.`}else{pb.className='limitBanner bad';pb.textContent=plan?.point?`🔴 Plan B: terminar jornada en ${plan.point.p.name} (~${plan.point.clock}) para no conducir después de las 19:00.`:`🔴 El plan rebasa las 19:00. Termina en el siguiente lugar seguro.`}}
  const checks=CHECKS[state.day]||[],done=checks.filter((x,j)=>state.checks[state.day]?.[j]).length,totalKm=pts().slice(1).reduce((a,x)=>a+Number(x.km||0),0);
  if(q('#morningSummary'))q('#morningSummary').textContent=`Día ${state.day} · ~${totalKm} km · salida base ${route().startClock} · objetivo terminar ${route().nightGoal} · límite ${route().nightLimit}.`;
  if(q('#morningChecks'))q('#morningChecks').innerHTML=`<span class="pill ${done===checks.length?'good':'warn'}">Checklist ${done}/${checks.length}</span><span class="pill ${state.fuel.percent>=75?'good':'warn'}">Tanque ${Math.round(state.fuel.percent)}%</span><span class="pill ${state.gps.enabled?'good':'warn'}">GPS ${state.gps.enabled?'listo':'pendiente'}</span>`;
  const total=totalExpenses(),budget=Object.values(state.budget||{}).reduce((a,v)=>a+Number(v||0),0),km=totalTripKmRecorded(),fills=state.realFuel.fills||[];
  if(q('#tripStats'))q('#tripStats').innerHTML=`<div class="stat"><span class="muted">KM REGISTRADOS</span><b>~${km}</b></div><div class="stat"><span class="muted">GASTADO</span><b>${money(total)}</b></div><div class="stat"><span class="muted">DISPONIBLE</span><b>${money(Math.max(0,budget-total))}</b></div><div class="stat"><span class="muted">RENDIMIENTO REAL</span><b>${state.realFuel.measuredKmPerL?state.realFuel.measuredKmPerL.toFixed(2)+' km/L':'Pendiente'}</b></div><div class="stat wide"><span class="muted">CARGAS REALES</span><b>${fills.length}</b></div>`;
  renderTravelLog(); renderRealFuel();
}
function skipNextPoint(){if(!state.started||routeCompleted())return alert('Inicia la jornada primero.');const i=nextManual(),p=pts()[i];if(!p)return;if(['fuel_required','day_end','trip_end'].includes(p.type)&&!confirm(`${p.name} es una parada importante. ¿Seguro que deseas omitir la parada y continuar?`))return;const t=Date.now();snapshot(`Omitir ${p.name}`);state.records[state.day][i]={arrivalTs:t,departureTs:t,arrivalSource:'skipped',skipped:true};state.skipped[state.day][i]=true;addTravelLog('change',`⏭ Parada omitida · ${p.name}`);save();render()}
function addCustomDelay(){if(!state.started||routeCompleted())return alert('Inicia la jornada primero.');const label=prompt('Nombre de la parada o motivo','Descanso adicional');if(label===null)return;const mins=Number(prompt('¿Cuántos minutos estimas detenerte?','20'));if(!Number.isFinite(mins)||mins<=0||mins>480)return alert('Escribe minutos válidos entre 1 y 480.');const i=nextRoadIndex(),base=etaTs(i);state.etaSyncs[state.day].push({index:i,etaTs:base+mins*60000,createdTs:Date.now(),source:'custom_stop',label:label.slice(0,80),delayMin:mins});addTravelLog('change',`➕ ${label.slice(0,80)} · +${mins} min`);save();render()}
function copyTravelLog(){const text=(state.travelLog||[]).map(e=>`${new Date(e.ts).toLocaleString('es-MX')} · Día ${e.day} · ${e.text}`).join('\n');if(!text)return alert('La bitácora todavía está vacía.');navigator.clipboard?.writeText(text).then(()=>alert('Bitácora copiada.')).catch(()=>prompt('Copia la bitácora',text))}
function render(){
 renderV42Status();
 q('#app').classList.toggle('copilot',Boolean(state.copilot&&state.road));q('#globalSimulation').classList.toggle('hidden',!state.simulation?.active);q('#simulationBanner').classList.toggle('hidden',!state.simulation?.active);q('#simActions').classList.toggle('hidden',!state.simulation?.active);q('#startSimulation').disabled=Boolean(state.simulation?.active||state.started||state.paused||activeBreak());q('#copilotToggle').textContent=state.copilot?'Salir de copiloto':'👥 Activar copiloto';
 qa('.day').forEach(b=>b.classList.toggle('active',Number(b.dataset.day)===state.day));
 
qa('.tab').forEach(b=>{const t=b.dataset.tab;const active=t==='roadQuick'?state.road:(t==='route'?state.activeTab==='route'&&!state.road:(t==='more'?['more','fuel','emergency'].includes(state.activeTab)&&!state.road:false));b.classList.toggle('active',active)});
 ['route','fuel','emergency','more'].forEach(x=>q('#'+x+'Panel').classList.toggle('hidden',x!==state.activeTab));
 qa('[data-more]').forEach(b=>b.classList.toggle('active',b.dataset.more===state.moreTab));
 ['check','expenses','travel','fuelMore','safetyMore','settings'].forEach(x=>q('#'+x+'Panel').classList.toggle('hidden',x!==state.moreTab));
 const emergencyPhone=phoneFrom(state.settings.emergencyContact),insurerPhone=phoneFrom(state.settings.insurerContact),hasPersonal=Boolean(state.settings.emergencyContact||state.settings.insurerContact);q('#personalHelp').classList.toggle('hidden',!hasPersonal);q('#emergencyContactDisplay').textContent=state.settings.emergencyContact||'Contacto no configurado';q('#insurerContactDisplay').textContent=state.settings.insurerContact||'Asistencia no configurada';q('#emergencyCall').classList.toggle('hidden',!emergencyPhone);q('#insurerCall').classList.toggle('hidden',!insurerPhone);if(emergencyPhone)q('#emergencyCall').href=`tel:${emergencyPhone}`;if(insurerPhone)q('#insurerCall').href=`tel:${insurerPhone}`;
 const completed=routeCompleted(),overnight=activeBreak();
 q('#journeyState').textContent=completed?`Día ${state.day} completado`:(overnight?`Jornada cerrada · Día ${state.day}`:(state.paused?`Día ${state.day} pausado`:(state.started?`Día ${state.day} en curso`:'No iniciado')));
 q('#app').classList.toggle('road',state.road);document.body.classList.toggle('roadMode',Boolean(state.road));q('#roadPanel').classList.toggle('hidden',!state.road);
 q('#normalHero').classList.toggle('routeComplete',completed);
 q('#startJourney').classList.toggle('hidden',state.started||completed||overnight);q('#pauseJourney').classList.toggle('hidden',!state.started||state.paused||completed);q('#resumeJourney').classList.toggle('hidden',!state.paused||completed);q('#endDayHere').classList.toggle('hidden',!state.started||completed);q('#nextRoute').classList.toggle('hidden',!completed||state.day>=3);q('#roadToggle').disabled=!state.started||completed||state.paused||overnight;q('#roadEndDay').disabled=!state.started||completed;
 q('#undoAction').classList.toggle('hidden',!state.undo);q('#roadUndo').classList.toggle('hidden',!state.undo);

 const i=nextRoadIndex(),p=pts()[i],inStop=activeStop()>=0;
 q('#nextPoint').textContent=completed?`✅ ${p.name}`:(inStop?`${p.name} · En parada`:p.name);q('#eta').textContent=completed?`Llegada registrada ${clock(rec(i).arrivalTs,p.targetTimezone||route().timezone)}`:(inStop?`Llegada ${clock(rec(i).arrivalTs,p.targetTimezone||route().timezone)}`:`ETA ${etaClock(i)}`);q('#action').textContent=completed?'Jornada completada. El progreso quedó guardado.':p.action;
 const [cls,txt]=statusInfo(i);q('#status').className='pill '+(inStop?'warn':cls);q('#status').textContent=inStop?'🟡 En parada':txt;q('#base').textContent=`Base ${plannedEta(i)}`;
 const fr=fuelReserveToNextRequired();q('#fuelSafety').textContent=`Planeación 8 km/L · rango práctico ≈ ${PRACTICAL_RANGE} km · próximo tramo de combustible ≈ ${fr.km} km`;

 const leg=roadLegMetrics(i);
 q('#roadPoint').textContent=p.name;q('#roadKm').textContent=inStop?'—':`~${leg.km} km`;q('#roadMin').textContent=inStop?'—':fmtDur(leg.driveMin);q('#roadAfter').textContent=leg.via.length?`Vía ${leg.via.join(' → ')}`:(pts()[i+1]?.name||'Fin');
 q('#roadStatus').textContent=inStop?'🟡 EN PARADA':txt;
 let roadMsg=inStop?'Cuando terminen, pulsa Salimos.':`${p.action} · parada prevista ${p.stopMin} min · tolerancia +${p.tol} min`;
 const safetyStop=safetyStopIndex();if(safetyStop!==null){roadMsg+=safetyStop===i?' · 🔴 Límite diario alcanzado: termina la jornada aquí.':` · 🌙 Parada límite de hoy: ${pts()[safetyStop].name}.`}
 if(p.type==='decision'){
   const ni=pts().length-1, endEta=etaClock(ni), v=minutesOfClock(endEta), lim=minutesOfClock(route().nightLimit), goal=minutesOfClock(route().nightGoal);
   roadMsg += v>lim?` · 🔴 ETA Navojoa ${endEta}: terminar jornada aquí recomendado.`:v>goal?` · 🟡 ETA Navojoa ${endEta}: continuar solo si condiciones son buenas.`:` · 🟢 ETA Navojoa ${endEta}: continuidad viable.`;
 }
 q('#roadPrep').textContent=roadMsg;
 q('#arriveBtn').disabled=!state.started||state.paused||completed||inStop;q('#departBtn').disabled=!state.started||state.paused||completed||!inStop||(safetyStop!==null&&safetyStop===activeStop());
 const endIndex=pts().length-1,endPoint=pts()[endIndex],endZone=endPoint.targetTimezone||route().timezone,finalTs=etaTs(endIndex),finalClock=clock(finalTs,endZone),anchorTs=dailyAnchorTs(),goalTs=dailyBoundaryTs(anchorTs,route().nightGoal,endZone),limitTs=dailyBoundaryTs(anchorTs,route().nightLimit,endZone),night=q('#nightAdvice');if(state.started&&finalTs>goalTs){night.classList.remove('hidden');night.textContent=finalTs>limitTs?`🔴 La llegada estimada es ${finalClock}, después del límite de 19:00. La app limitará el plan en ${safetyStop!==null?pts()[safetyStop].name:'el próximo lugar seguro'} para terminar la jornada.`:`🟡 La llegada estimada es ${finalClock}, después del objetivo de 18:00. Continúa solo si las condiciones son seguras.`;if(finalTs>limitTs)speakAlert(`La llegada estimada supera las siete de la tarde. Termina la jornada en ${safetyStop!==null?pts()[safetyStop].name:'el próximo lugar seguro'}.`,`limit:${state.day}:${safetyStop}`)}else if(!overnight){night.classList.add('hidden')}
 updateGps();renderFuelGauge();renderTimeline();renderFuel();renderChecks();renderExpenses();renderOvernight();renderDaySummary();renderBackupStatus()
}
const _renderV42=render; render=function(){_renderV42();renderV43()};
const _registerArrival=registerArrival; registerArrival=function(i,source='manual'){const name=pts()[i]?.name;const ok=_registerArrival(i,source);if(ok!==false&&name){addTravelLog('arrival',`📍 Llegada · ${name}`);save();renderTravelLog()}return ok};
const _endJourneyHere=endJourneyHere; endJourneyHere=function(){const before=state.breaks[state.day]?.length||0;_endJourneyHere();if((state.breaks[state.day]?.length||0)>before){const b=activeBreak();addTravelLog('overnight',`🌙 Jornada cerrada · ${b?.label||'parada'}`);save();renderTravelLog()}};
function renderTimelineLegacy(){
 const box=q('#timeline');box.innerHTML='';box.classList.toggle('showAll',state.showAllTimeline);let cumulative=0;pts().forEach((p,i)=>{cumulative+=p.km;const r=rec(i),autoReached=!manual(p)&&pts().slice(i+1).some((later,offset)=>manual(later)&&rec(i+1+offset).arrivalTs),registered=manual(p)?Boolean(r.arrivalTs):autoReached,c=document.createElement('div');c.className='card stop';const actual=r.arrivalTs?`Llegada real ${clock(r.arrivalTs,p.targetTimezone||route().timezone)}${r.departureTs?` · salida ${clock(r.departureTs,p.targetTimezone||route().timezone)}`:''}`:(manual(p)?'Pendiente':'PASA POR · automático');c.innerHTML=`<button class="stopHead"><span>${p.type==='start'?'🚩':p.type==='fuel_required'?'⛽':p.type==='fuel_backup'?'⛽':p.type==='checkpoint'||p.type==='security_reference'?'🛡️':p.type==='bypass'?'🛣️':p.type==='toll'?'💳':p.type==='maneuver'?'🔀':p.type==='decision'?'⚠️':p.type.includes('end')?'🏁':'📍'}</span><span><span class="stopName">${escapeHtml(p.name)}</span><span class="stopMeta">Tramo ~${p.km} km · acumulado ~${cumulative} km · base ${plannedEta(i)}</span></span><span class="right muted">${registered?'Registrado':manual(p)?'Pendiente':'Automático'}</span></button><div class="stopExtra"><div>${escapeHtml(p.action)}</div><div class="muted">${actual} · parada ${p.stopMin} min · tolerancia +${p.tol} min</div><button class="btn mapPoint" data-point="${i}" style="width:100%;margin-top:8px">Abrir este punto en mapas</button></div>`;c.querySelector('.stopHead').addEventListener('click',()=>c.classList.toggle('open'));c.querySelector('.mapPoint').addEventListener('click',()=>openPointNav(i));box.appendChild(c)});q('#toggleTimeline').textContent=state.showAllTimeline?'Mostrar solo próximos puntos':'Ver itinerario completo'
}
function renderTimeline(){
 const box=q('#timeline');box.innerHTML='';box.classList.toggle('showAll',state.showAllTimeline);let cumulative=0;
 pts().forEach((p,i)=>{cumulative+=p.km;const r=rec(i),autoReached=!manual(p)&&pts().slice(i+1).some((later,offset)=>manual(later)&&rec(i+1+offset).arrivalTs),registered=manual(p)?Boolean(r.arrivalTs):autoReached,c=document.createElement('div'),saved=Boolean(state.coordinateOverrides?.[state.day]?.[i]);c.className='card stop';const actual=r.arrivalTs?`Llegada real ${clock(r.arrivalTs,p.targetTimezone||route().timezone)}${r.departureTs?` · salida ${clock(r.departureTs,p.targetTimezone||route().timezone)}`:''}`:(manual(p)?'Pendiente':'PASA POR · automático'),icon=p.type==='start'?'🚩':p.type==='fuel_required'||p.type==='fuel_backup'?'⛽':p.type==='checkpoint'||p.type==='security_reference'?'🛡️':p.type==='bypass'?'🛣️':p.type==='toll'?'💳':p.type==='maneuver'?'🔀':p.type==='decision'?'⚠️':p.type.includes('end')?'🏁':'📍';
  c.innerHTML=`<button class="stopHead"><span>${icon}</span><span><span class="stopName">${escapeHtml(p.name)}</span><span class="stopMeta">Tramo ~${p.km} km · acumulado ~${cumulative} km · base ${plannedEta(i)}</span></span><span class="right muted">${registered?'Registrado':manual(p)?'Pendiente':'Automático'}</span></button><div class="stopExtra"><div>${escapeHtml(p.action)}</div><div class="muted">${actual} · parada ${p.stopMin} min · tolerancia +${p.tol} min${saved?' · ubicación GPS guardada':''}</div><div class="pointTools"><button class="btn mapPoint">Abrir en mapas</button><button class="btn savePoint">${saved?'Actualizar GPS aquí':'Guardar GPS aquí'}</button>${saved?'<button class="btn removePoint">Quitar GPS guardado</button>':''}</div></div>`;
  c.querySelector('.stopHead').addEventListener('click',()=>c.classList.toggle('open'));c.querySelector('.mapPoint').addEventListener('click',()=>openPointNav(i));c.querySelector('.savePoint').addEventListener('click',()=>saveCurrentPointLocation(i));c.querySelector('.removePoint')?.addEventListener('click',()=>removePointLocation(i));box.appendChild(c)
 });q('#toggleTimeline').textContent=state.showAllTimeline?'Mostrar solo próximos puntos':'Ver itinerario completo'
}
function renderFuel(){const box=q('#fuelList');box.innerHTML='';let sinceFull=0;pts().forEach((p,i)=>{if(i>0)sinceFull+=p.km;if(!['fuel_required','fuel_backup'].includes(p.type))return;const expected=clamp(100-(sinceFull/state.fuel.kmPerL/TANK_L*100),0,100),liters=Math.max(0,TANK_L*(1-expected/100)),c=document.createElement('div');c.className='card';c.innerHTML=`<b>${p.type==='fuel_required'?'⛽ OBLIGATORIA':'⛽ RESPALDO'} · ${escapeHtml(p.name)}</b><div class="muted">${escapeHtml(p.action)}</div><div class="summary"><div class="stat"><span class="muted">TRAMO</span><b>~${sinceFull} km</b></div><div class="stat"><span class="muted">LLEGADA EST.</span><b>${Math.round(expected)}%</b></div><div class="stat wide"><span class="muted">PARA FULL</span><b>~${liters.toFixed(1)} L</b></div></div><div class="buttonRow"><button class="btn fuelMap">Abrir mapas</button><button class="btn primary fuelRegister">Registrar FULL</button></div>`;c.querySelector('.fuelMap').addEventListener('click',()=>openPointNav(i));c.querySelector('.fuelRegister').addEventListener('click',()=>{snapshot('Carga de combustible');markFuelFull()});box.appendChild(c);if(p.type==='fuel_required')sinceFull=0})}
function renderChecks(){const l=CHECKS[state.day],box=q('#checkList'),done=l.filter((x,i)=>state.checks[state.day][i]).length;q('#checkTitle').textContent=`Checklist · Día ${state.day}`;q('#checkDone').textContent=`${done}/${l.length}`;q('#checkCritical').textContent=criticalChecksReady()?'Listos':'Pendientes';q('#checkDay').textContent=String(state.day);box.innerHTML='';l.forEach((x,i)=>{const lab=document.createElement('label');lab.className='check';lab.innerHTML=`<input type="checkbox" ${state.checks[state.day][i]?'checked':''}><span>${escapeHtml(x)}</span>`;lab.querySelector('input').addEventListener('change',e=>{state.checks[state.day][i]=e.target.checked;save();renderChecks()});box.appendChild(lab)})}
function money(n){return Number(n||0).toLocaleString('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0})}
function renderExpenses(){let total=0,dayTotal=0;const categories={},box=q('#expenseList');box.innerHTML='';state.expenses.forEach((e,i)=>{total+=e.n;if(e.day===state.day)dayTotal+=e.n;categories[e.c]=(categories[e.c]||0)+e.n;const r=document.createElement('div');r.className='expenseRow';const when=new Date(e.ts).toLocaleString('es-MX',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});r.innerHTML=`<span><b>${escapeHtml(e.c)} · ${money(e.n)}</b><br><span class="expenseMeta">Día ${e.day} · ${when}${e.liters?` · ${e.liters.toFixed(1)} L`:''}</span><br><span class="muted">${escapeHtml(e.t||'Sin nota')}</span></span><span><button class="btn editExpense">Editar</button><button class="btn removeExpense">Quitar</button></span>`;r.querySelector('.editExpense').addEventListener('click',()=>{const value=prompt('Nuevo monto',String(e.n));if(value===null)return;const n=Number(value);if(!Number.isFinite(n)||n<=0)return alert('Monto inválido.');e.n=n;e.t=prompt('Nota',e.t||'')?.slice(0,200)??e.t;save();renderExpenses()});r.querySelector('.removeExpense').addEventListener('click',()=>{if(!confirm(`¿Quitar el gasto de ${money(e.n)}?`))return;state.trashExpenses=state.trashExpenses||[];state.trashExpenses.unshift({...state.expenses[i],deletedTs:Date.now()});state.trashExpenses=state.trashExpenses.slice(0,10);state.expenses.splice(i,1);save();renderExpenses();renderV50()});box.appendChild(r)});const budget=state.budget||{},budgetTotal=Object.values(budget).reduce((a,v)=>a+(Number(v)||0),0),diff=budgetTotal-total;q('#expenseTotal').textContent=money(total);q('#expenseDayTotal').textContent=money(dayTotal);q('#expenseCount').textContent=String(state.expenses.length);q('#budgetTotal').textContent=money(budgetTotal);q('#budgetDiff').textContent=diff<0?'-'+money(Math.abs(diff)):money(diff);qa('.budgetInput').forEach(el=>el.value=Number(budget[el.dataset.budget]||0)||'');const cmp=q('#expenseByCategory');if(cmp){cmp.innerHTML='';['Gasolina','Caseta','Comida','Hospedaje','Otro'].forEach(cat=>{const plan=Number(budget[cat]||0),spent=Number(categories[cat]||0),left=plan-spent,row=document.createElement('div');row.className='budgetCompareRow';row.innerHTML=`<span><b>${cat==='Caseta'?'Casetas':cat}</b><br><span class="muted">Planeado ${money(plan)} · gastado ${money(spent)}</span></span><b>${left>=0?money(left):'-'+money(Math.abs(left))}</b>`;cmp.appendChild(row)})}}

const FULL_ROUTE_URLS={
  1:[
    "https://www.google.com/maps/dir/Pemex,+Ca+B+N+491,+21840+B.C./Caseta+de+cobro+San+Luis+R%C3%ADo+Colorado,+Av.+%C3%81lvaro+Obreg%C3%B3n+714,+Cuauht%C3%A9moc,+83403+San+Luis+R%C3%ADo+Colorado,+Son./P.V.I.+San+Luis+R%C3%ADo+Colorado,+San+Luis+R%C3%ADo+Colorado+-+Sonoyta+Km.+22.5,+83520+San+Luis+R%C3%ADo+Colorado,+Son./Super+Servicio+Salcido,+SA+de+CV,+Francisco+Eusebio+Kino+LB,+Centro,+83570+Sonoyta,+Son./SAN+EMETERIO+SAT,+83584+Son./Pemex,+Carretera+Num.+15+Km.+158%2B500+Santa+Ana,+84600+Son./P.M.S.E.+Querobabi,+M%C3%A9xico+15,+84839+Cornelio,+Son./Caseta+de+Cobro+CAPUFE+No.+152+NORTE,+Hermosillo+-+Sta+Anna+10887,+83300+Son./Caseta+Libramiento+de+Hermosillo,+83306+Hermosillo,+Son./Gasolinera+Los+Arrieros,+Carretera+Interior+Km.+171.3,+85506+Heroica+Guaymas,+Son.",
    "https://www.google.com/maps/dir/Gasolinera+Los+Arrieros,+Carretera+Interior+Km.+171.3,+85506+Heroica+Guaymas,+Son./Caseta+de+Cobro+CAPUFE+No.+151+Guaymas,+Hermosillo,+Loma+Linda,+85420+Guaymas,+Son./Gasolinera+V%C3%ADcam+SSV+-+Windstar,+Carretera+Internacional+Cd.+Obregon+-+Guaymas+No.+15+KM+45.631,+Pob.+de+Vicam,+85510+Guaymas,+Son./CAPUFE+Plaza+de+Cobro+No.+150+Esperanza,+Carretera+Internacional+Km+10%2B500,+Esperanza,+85210+Cdad.+Obreg%C3%B3n,+Son./Plaza+de+cobro+Libramiento+CD.+Obreg%C3%B3n,+Lib.+Cdad.+Obreg%C3%B3n,+85218+Son./CAPUFE+Plaza+de+Cobro+No.+149+-+Fundicion,+85233+Navojoa,+Son./Navojoa,+Sonora"
  ],
  2:"https://www.google.com/maps/dir/Navojoa,+Sonora/26.3596275,-109.0173085/Mobil+Guasavito,+Carretera+Mochis-Culiac%C3%A1n+Km.+143%2B863,+Los+Mochis+-+Culiac%C3%A1n+s%2Fn,+81149+Callejones+de+Guasavito,+Sin./24.5805085,-107.4392658/Gasolinera+Santa+Luc%C3%ADa,+Carretera+Internacional+No.+15+tramo,+Autop.+Tepic+-+Mazatl%C3%A1n+Km.+279-0,+El+Castillo,+82150+Mazatl%C3%A1n,+Sin./Tepic,+Nayarit",
  3:"https://maps.app.goo.gl/m2FiiJWVae49fhmbA?g_st=ic"
};
let gpsWatchId=null,gpsRequestPending=false,gpsReturnTimer=null,gpsPermissionHandle=null,lastMapKey='',wakeLock=null,lastVoiceKey='',lastGpsSaveTs=0,gpsDirty=false;
function ensureGpsState(){
 if(!state.gps) state.gps={enabled:false,lat:null,lng:null,accuracy:null,lastTs:null,permission:'unknown',lastError:null};
 state.gps={permission:'unknown',lastError:null,...state.gps};
}
function gpsData(){const i=nextRoadIndex(),p=pts()[i];return {i,p}}
function gpsOrigin(precision=null,maxAgeMs=10*60*1000){
 ensureGpsState();
 const fresh=state.gps.lastTs&&(Date.now()-state.gps.lastTs)<=maxAgeMs&&Number(state.gps.accuracy||9999)<=500;
 if(fresh&&Number.isFinite(state.gps.lat)&&Number.isFinite(state.gps.lng)){
   const lat=precision===null?state.gps.lat:Number(state.gps.lat).toFixed(precision);
   const lng=precision===null?state.gps.lng:Number(state.gps.lng).toFixed(precision);
   return `${lat},${lng}`;
 }
 return null;
}
function haversineKm(lat1,lng1,lat2,lng2){const R=6371,toRad=x=>x*Math.PI/180,dLat=toRad(lat2-lat1),dLng=toRad(lng2-lng1),a=Math.sin(dLat/2)**2+Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLng/2)**2;return 2*R*Math.asin(Math.sqrt(a))}
function pointCoordinates(p,index=pts().indexOf(p)){const o=state.coordinateOverrides?.[state.day]?.[index];if(o&&Number.isFinite(o.lat)&&Number.isFinite(o.lng))return {...o,userSaved:true};if(p?.coordVerified&&Number.isFinite(p.lat)&&Number.isFinite(p.lng))return {lat:p.lat,lng:p.lng,userSaved:false};return null}
function distanceToPoint(p,index=pts().indexOf(p)){const c=pointCoordinates(p,index);if(!c||!Number.isFinite(state.gps?.lat)||!Number.isFinite(state.gps?.lng))return null;return haversineKm(state.gps.lat,state.gps.lng,c.lat,c.lng)}
function saveCurrentPointLocation(index=nextRoadIndex()){if(state.settings?.routeLocked!==false)return alert('El itinerario oficial está congelado. Desbloquéalo temporalmente en Ajustes si realmente necesitas cambiar la ubicación de un punto.');ensureGpsState();const i=Number(index),p=pts()[i],age=Date.now()-Number(state.gps.lastTs||0),accuracy=Math.round(state.gps.accuracy||9999);if(!p)return;if(!state.gps.enabled||age>5*60000||accuracy>100)return alert('Actualiza el GPS y espera una precisión de 100 m o mejor antes de guardar este punto.');if(!confirm(`¿Guardar esta ubicación como punto exacto de ${p.name}?\nPrecisión aproximada: ${accuracy} m.`))return;state.coordinateOverrides[state.day][i]={lat:state.gps.lat,lng:state.gps.lng,accuracy,ts:Date.now(),name:p.name};save();updateGps();renderTimeline();alert('Ubicación guardada. Desde ahora se usará para navegar y confirmar proximidad.')}
function removePointLocation(index){if(state.settings?.routeLocked!==false)return alert('El itinerario oficial está congelado. Desbloquéalo temporalmente en Ajustes si realmente necesitas cambiar la ubicación de un punto.');const p=pts()[index];if(!state.coordinateOverrides?.[state.day]?.[index])return;if(!confirm(`¿Quitar la ubicación guardada de ${p.name}?`))return;delete state.coordinateOverrides[state.day][index];save();updateGps();renderTimeline()}
function speakAlert(message,key=''){
 if(!state.settings?.voiceAlerts||!message||(key&&lastVoiceKey===key))return;
 if(key)lastVoiceKey=key;
 try{navigator.vibrate?.([150,80,150])}catch(e){}
 try{if('speechSynthesis' in window&&'SpeechSynthesisUtterance' in window){window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(message);u.lang='es-MX';u.rate=.95;window.speechSynthesis.speak(u)}}catch(e){}
}
async function requestWakeLock(){
 const label=q('#wakeStatus');
 if(!state.road||document.visibilityState==='hidden'||!state.settings?.keepAwake){if(label)label.textContent='Pantalla normal';return}
 if(!('wakeLock' in navigator)){if(label)label.textContent='Pantalla activa no compatible';return}
 if(wakeLock){if(label)label.textContent='🔆 Pantalla activa';return}
 try{wakeLock=await navigator.wakeLock.request('screen');if(label)label.textContent='🔆 Pantalla activa';wakeLock.addEventListener('release',()=>{wakeLock=null;if(q('#wakeStatus'))q('#wakeStatus').textContent='Pantalla normal'})}catch(e){if(label)label.textContent='Pantalla activa no disponible'}
}
async function releaseWakeLock(){if(wakeLock){try{await wakeLock.release()}catch(e){}wakeLock=null}if(q('#wakeStatus'))q('#wakeStatus').textContent='Pantalla normal'}
function segmentInfo(){if(state.day!==1)return {label:`Día ${state.day} · Ruta completa`,button:'Abrir ruta completa',part:0};const second=nextRoadIndex()>=10;return second?{label:'Día 1 · Tramo 2 de 2 · Los Arrieros → Navojoa',button:'Abrir tramo 2',part:1}:{label:'Día 1 · Tramo 1 de 2 · Los Algodones → Los Arrieros',button:'Abrir tramo 1',part:0}}
function registerArrival(i,source='manual'){
 if(!state.started||state.paused||i<0||rec(i).arrivalTs)return false;
 const name=pts()[i].name,arrivalTs=source==='simulation'?etaTs(i):Date.now();snapshot(`Llegada a ${name}`);state.records[state.day][i]={...rec(i),arrivalTs,arrivalSource:source};if(source==='simulation')state.simulation.virtualTs=arrivalTs;
 if(i===pts().length-1){state.started=false;state.road=false;state.copilot=false;stopGpsWatch();releaseWakeLock()}
 save();if(i===pts().length-1)saveAutoBackup(`Día ${state.day} completado`);speakAlert(`Llegada registrada en ${name}.`,`arrival:${state.day}:${i}`);render();return true;
}
function checkGeofence(){if(!state.settings?.proximityEnabled||!state.started||state.paused||routeCompleted()||activeStop()>=0)return;const i=nextManual(),p=pts()[i],radius=Number(state.settings.proximityRadius)||350,distance=distanceToPoint(p,i),accuracy=Number(state.gps?.accuracy)||9999;if(i<0||distance===null||accuracy>Math.max(radius,200)||distance*1000>radius)return;const key=`${state.day}:${i}`,recent=state.gps.lastPromptKey===key&&Date.now()-Number(state.gps.lastPromptTs||0)<10*60*1000;if(recent)return;state.gps.lastPromptKey=key;state.gps.lastPromptTs=Date.now();save();speakAlert(`Estás cerca de ${p.name}. Confirma la llegada.`,`near:${key}`);const box=q('#arrivalPrompt');if(box){box.dataset.index=String(i);q('#arrivalPromptText').textContent=`Parece que llegaste a ${p.name} · aproximadamente ${Math.round(distance*1000)} m.`;box.classList.remove('hidden')}}
function mapForAddress(address){
 const map=q('#gpsMap'),src=`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,key=address;
 map.classList.remove('hidden');
 if(lastMapKey!==key){lastMapKey=key;map.src=src}
}
function gpsSecureContext(){
 const local=['localhost','127.0.0.1','::1'].includes(location.hostname);
 return location.protocol==='https:'||local;
}
function gpsErrorMessage(err){
 if(!gpsSecureContext()) return '🔴 El GPS requiere abrir la app desde un enlace HTTPS. No funciona abriendo el ZIP o index.html directamente.';
 if(err&&err.code===1) return '🔴 Permiso de ubicación bloqueado. Abre la app desde su enlace directo y, en iPhone, ve a Ajustes › Privacidad y seguridad › Localización para permitir el acceso.';
 if(err&&err.code===2) return '🔴 El teléfono no pudo calcular la ubicación. Activa Localización y prueba en un lugar con mejor señal.';
 if(err&&err.code===3) return '🟡 El GPS tardó demasiado. Intenta de nuevo, preferentemente al aire libre.';
 return '🔴 No se pudo obtener la ubicación. Verifica que Localización esté activada.';
}
function applyGpsPosition(pos){
 if(!pos||!pos.coords)return;
 ensureGpsState();
 state.gps.enabled=true;
 state.gps.permission='granted';
 state.gps.lat=Number(pos.coords.latitude);
 state.gps.lng=Number(pos.coords.longitude);
 state.gps.accuracy=Number(pos.coords.accuracy)||0;
 state.gps.lastTs=Number(pos.timestamp)||Date.now();
 state.gps.lastError=null;
 updateTelemetry(pos);
 gpsDirty=true;if(Date.now()-lastGpsSaveTs>=30000){save();lastGpsSaveTs=Date.now();gpsDirty=false}updateGps();setTimeout(checkGeofence,0);
}
function handleGpsError(err,silent=false){
 ensureGpsState();
 if(err&&err.code===1){state.gps.enabled=false;state.gps.permission='denied'}
 if(silent&&err?.code!==1&&state.gps.lastTs)state.gps.lastError=null;
 else state.gps.lastError=gpsErrorMessage(err);
 save();
 updateGps();
}
function stopGpsWatch(){
 if(gpsWatchId!==null&&navigator.geolocation){navigator.geolocation.clearWatch(gpsWatchId)}
 gpsWatchId=null;
 if(gpsDirty){save();lastGpsSaveTs=Date.now();gpsDirty=false}
 updateGps();
}
function startGpsWatch(){
 ensureGpsState();
 if(!state.road||document.visibilityState==='hidden'||gpsWatchId!==null||!gpsSecureContext()||!navigator.geolocation)return;
 try{
   gpsWatchId=navigator.geolocation.watchPosition(
     applyGpsPosition,
     err=>{handleGpsError(err,true);if(err&&err.code===1)stopGpsWatch()},
     {enableHighAccuracy:true,timeout:30000,maximumAge:15000}
   );
   updateGps();requestWakeLock();
 }catch(err){gpsWatchId=null;handleGpsError(err,false)}
}
async function inspectGpsPermission(){
 if(!navigator.permissions?.query)return;
 try{
   gpsPermissionHandle=await navigator.permissions.query({name:'geolocation'});
   ensureGpsState();state.gps.permission=gpsPermissionHandle.state;save();updateGps();
   gpsPermissionHandle.onchange=()=>{
     state.gps.permission=gpsPermissionHandle.state;
     if(gpsPermissionHandle.state==='denied'){state.gps.enabled=false;stopGpsWatch()}
     save();updateGps();
   };
 }catch(e){}
}
function updateGps(){
 ensureGpsState();
 const {i,p}=gpsData(),map=q('#gpsMap'),st=q('#gpsStatus'),nav=q('#navBtn'),live=q('#gpsLive'),segment=segmentInfo();
 q('#segmentStatus').textContent=segment.label;q('#fullRouteBtn').textContent=segment.button;
 const sync=latestEtaSyncFor(i);q('#etaSyncNote').textContent=sync?`ETA de Maps sincronizada a ${clock(sync.etaTs,p.targetTimezone||route().timezone)} · el resto del día fue recalculado`:'Sin sincronización reciente · usando horario de la app';
 q('#etaSyncBtn').disabled=!state.started||state.paused||routeCompleted()||activeStop()>=0;
 live.setAttribute('aria-busy',gpsRequestPending?'true':'false');
 q('#gpsBtn').disabled=gpsRequestPending;
 q('#gpsBtn').textContent=gpsRequestPending?'Buscando ubicación…':'📍 Actualizar ubicación';
 const safe=q('#safetyGps');if(safe){const o=gpsOrigin(6,24*60*60*1000);safe.textContent=o?`${o} · precisión aprox. ${Math.round(state.gps.accuracy||0)} m`:'Aún no disponible. Actualiza la ubicación desde Modo carretera.'}
 if(!gpsSecureContext()){
   live.className='gpsLive bad';live.textContent=gpsErrorMessage();
 }else if(state.gps.permission==='denied'){
   live.className='gpsLive bad';live.textContent=gpsErrorMessage({code:1});
 }else if(state.gps.lastError){
   live.className='gpsLive bad';live.textContent=state.gps.lastError;
 }else if(state.gps.enabled&&state.gps.lastTs){
   const ageMs=Math.max(0,Date.now()-state.gps.lastTs),age=Math.round(ageMs/60000),accuracy=Math.round(state.gps.accuracy||0),bad=ageMs>5*60*1000||accuracy>500,warn=ageMs>2*60*1000||accuracy>100;
   live.className=`gpsLive ${bad?'bad':warn?'warn':'good'}`;
   const mode=gpsWatchId!==null?'GPS EN VIVO':'ubicación lista';
   live.textContent=`${bad?'🔴':warn?'🟡':'🟢'} ${mode} · precisión aprox. ${accuracy} m · ${age<1?'actualizada ahora':`hace ${age} min`}`;
 }else{
   live.className='gpsLive warn';
   live.textContent='📍 Ubicación pendiente. Pulsa “Actualizar ubicación” y acepta el permiso.';
 }
 const coords=pointCoordinates(p,i),distance=distanceToPoint(p,i),distanceBox=q('#gpsDistance');
 distanceBox.textContent=distance===null?(coords?'Distancia en vivo: esperando GPS':'Destino sin coordenada exacta'):(distance<1?`📍 A ~${Math.round(distance*1000)} m del siguiente punto`:`📍 A ~${distance.toFixed(1)} km del siguiente punto`);
 q('#savePointLocation').disabled=!state.gps.enabled||Date.now()-Number(state.gps.lastTs||0)>5*60000||Number(state.gps.accuracy||9999)>100;
 if(coords){st.textContent=`${coords.userSaved?'Ubicación guardada por ti':'Coordenada verificada'}: ${p.name}`;nav.disabled=false;mapForAddress(`${coords.lat},${coords.lng}`);return}
 if(p.nav==='external'){
   st.textContent=`Enlace de Maps aprobado: ${p.name}`;
   nav.disabled=false;
   map.classList.add('hidden'); map.removeAttribute('src');lastMapKey='';
   return;
 }
 if(p.nav==='address'){
   st.textContent=`Destino exacto: ${p.name}`;
   nav.disabled=false;
   mapForAddress(p.address);
   return;
 }
 st.textContent=`Referencia de ruta: ${p.name} · usa “Ruta completa” para respetar el corredor`;
 nav.disabled=true;
 map.classList.add('hidden'); map.removeAttribute('src');lastMapKey='';
}
function requestGps(silent=false){
 ensureGpsState();
 if(gpsRequestPending)return;
 if(!gpsSecureContext()){state.gps.lastError=gpsErrorMessage();updateGps();return}
 if(!navigator.geolocation){state.gps.lastError='🔴 GPS no disponible en este dispositivo o navegador.';updateGps();return}
 gpsRequestPending=true;state.gps.lastError=null;updateGps();
 navigator.geolocation.getCurrentPosition(
   pos=>{
     gpsRequestPending=false;applyGpsPosition(pos);if(state.road)startGpsWatch();
   },
   err=>{
     gpsRequestPending=false;handleGpsError(err,silent);
   },
   {enableHighAccuracy:true,timeout:20000,maximumAge:silent?30000:0}
 );
}
function openPointNav(index){
 const p=pts()[index],pref=state.settings?.mapApp||'google',o=gpsOrigin();
 const c=pointCoordinates(p,index);if(!c&&p.nav==='external'&&p.url){location.href=p.url;return}
 const destination=c?`${c.lat},${c.lng}`:(p.address||p.name),d=encodeURIComponent(destination);
 if(pref==='apple'){
     location.href=o?`https://maps.apple.com/?saddr=${encodeURIComponent(o)}&daddr=${d}&dirflg=d`:`https://maps.apple.com/?daddr=${d}&dirflg=d`;
 }else{
     location.href=o?`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(o)}&destination=${d}&travelmode=driving`:`https://www.google.com/maps/dir/?api=1&destination=${d}&travelmode=driving`;
 }
}
function openNav(){openPointNav(nextRoadIndex())}
function openFullRoute(){
 const routes=FULL_ROUTE_URLS[state.day];
 if(!Array.isArray(routes)){location.href=routes;return}
 location.href=routes[segmentInfo().part];
}
function syncEtaFromMaps(){
 if(!state.started||state.paused||routeCompleted())return alert('Inicia o reanuda la jornada antes de sincronizar la ETA.');
 if(activeStop()>=0)return alert('Primero registra “Salimos”; después sincroniza la ETA del siguiente punto.');
 const i=nextRoadIndex(),p=pts()[i],zone=p.targetTimezone||route().timezone,value=prompt(`Escribe la hora de llegada que muestra Maps para ${p.name} (HH:MM).`,etaClock(i));if(value===null)return;
 const ts=timestampForClockNear(value,zone);if(!ts)return alert('La ETA debe ser una hora válida de hoy y no puede ser anterior a la hora actual. Usa formato de 24 horas, por ejemplo 16:35.');
 snapshot(`ETA de Maps para ${p.name}`);state.etaSyncs[state.day].push({index:i,etaTs:ts,createdTs:Date.now(),source:'maps_manual'});save();speakAlert(`ETA sincronizada para ${p.name}.`,`eta:${state.day}:${i}:${ts}`);render();
}
function refreshGpsOnReturn(){
 if(document.visibilityState==='hidden'){stopGpsWatch();releaseWakeLock();return}
 clearTimeout(gpsReturnTimer);
 gpsReturnTimer=setTimeout(()=>{
   ensureGpsState();
   if(state.road&&state.gps.enabled){startGpsWatch();requestWakeLock()}
   else if(state.gps.enabled)requestGps(true);
   else updateGps();
 },250);
}
document.addEventListener('visibilitychange',refreshGpsOnReturn);
window.addEventListener('pageshow',refreshGpsOnReturn);
window.addEventListener('focus',refreshGpsOnReturn);
window.addEventListener('pagehide',()=>{stopGpsWatch();releaseWakeLock()});

function startSimulation(){
 if(state.simulation?.active)return alert('El simulador ya está activo. Regresa a Ruta y usa “Salir sin guardar cambios”.');
 if(state.started||state.paused||activeBreak())return alert('Para proteger el progreso, termina o reinicia la jornada activa antes de entrar al simulador.');
 if(!confirm('¿Iniciar una prueba completa? El progreso real quedará protegido y será restaurado al salir.'))return;
 const original=JSON.parse(JSON.stringify(state));original.simulation={active:false,original:null};original.road=false;original.copilot=false;
 state={...state,day:1,started:true,road:true,copilot:false,paused:false,pauseTs:null,activeTab:'route',records:{1:{},2:{},3:{}},breaks:{1:[],2:[],3:[]},etaSyncs:{1:[],2:[],3:[]},expenses:[],undo:null,simulation:{active:true,original,virtualTs:null}};
 const ts=routeStartTs();state.simulation.virtualTs=ts;state.records[1][0]={arrivalTs:ts,departureTs:ts,arrivalSource:'simulation'};save();render();
}
function exitSimulation(){if(!state.simulation?.active)return;if(!confirm('¿Salir del simulador y restaurar exactamente el viaje real?'))return;const original=state.simulation.original;state=original;state.schemaVersion=15;state.simulation={active:false,original:null};state.road=false;state.copilot=false;stopGpsWatch();releaseWakeLock();save();render()}
function advanceSimulation(){
 if(!state.simulation?.active)return;
 const pendingBreak=activeBreak();if(pendingBreak){const ts=plannedResumeTs(pendingBreak);pendingBreak.resumeTs=ts;pendingBreak.resumeClock='06:00';state.simulation.virtualTs=ts;state.started=true;state.road=true;state.copilot=false;save();render();return}
 if(routeCompleted()){
   if(state.day>=3)return alert('Prueba completa: recorriste los tres días. Sal del simulador para recuperar el viaje real.');
   state.day++;state.started=true;state.road=true;state.copilot=false;const ts=routeStartTs();state.simulation.virtualTs=ts;state.records[state.day][0]={arrivalTs:ts,departureTs:ts,arrivalSource:'simulation'};save();render();return;
 }
 const a=activeStop();if(a>=0){if(safetyStopIndex()===a){const stoppedTs=rec(a).arrivalTs+(pts()[a].stopMin||0)*60000;state.breaks[state.day].push({id:stoppedTs,stoppedTs,resumeTs:null,resumeClock:'06:00',stopIndex:a,nextIndex:nextManual(),label:`Simulación · ${pts()[a].name}`});state.started=false;state.road=true;state.copilot=false;state.simulation.virtualTs=stoppedTs;save();render();return}if(pts()[a].type==='fuel_required')markFuelFull();const departureTs=rec(a).arrivalTs+(pts()[a].stopMin||0)*60000;state.simulation.virtualTs=departureTs;state.records[state.day][a]={...rec(a),departureTs};save();render();return}
 registerArrival(nextManual(),'simulation');if(state.simulation?.active&&!routeCompleted()){state.road=true;save();render()}
}
function addSimulationDelay(){if(!state.simulation?.active)return;const i=nextRoadIndex(),base=etaTs(i),last=Math.max(0,...state.etaSyncs[state.day].map(x=>Number(x.createdTs)||0));state.etaSyncs[state.day].push({index:i,etaTs:base+30*60000,createdTs:Math.max(Date.now(),last+1),source:'simulation_delay'});save();render()}
async function runDiagnostic(){
 const box=q('#diagnosticList');box.innerHTML='<div class="diagRow"><span>Revisando el teléfono…</span><b>⌛</b></div>';
 const rows=[],add=(name,status,detail='')=>rows.push({name,status,detail});
 add('Enlace seguro HTTPS',gpsSecureContext()?'ok':'bad',gpsSecureContext()?'Correcto':'Necesario para usar GPS');
 let storageOk=false;try{localStorage.setItem(KEY+'_test','1');localStorage.removeItem(KEY+'_test');storageOk=true}catch(e){}add('Guardado del progreso',storageOk?'ok':'bad',storageOk?'Disponible':'Sin espacio o bloqueado');
 add('Conexión actual',navigator.onLine===false?'warn':'ok',navigator.onLine===false?'Sin internet; la ruta local debe seguir disponible':'En línea');
 add('Configuración de mapas','ok',state.settings.mapApp==='apple'?'Apple Maps seleccionado; se abrirá al navegar':'Google Maps seleccionado; se abrirá al navegar');
 add('Voz',('speechSynthesis'in window&&'SpeechSynthesisUtterance'in window)?'ok':'warn',('speechSynthesis'in window)?'Compatible':'No disponible');
 add('Vibración',navigator.vibrate?'ok':'warn',navigator.vibrate?'Compatible':'iPhone puede no permitir vibración web');
 add('Pantalla activa',navigator.wakeLock?'ok':'warn',navigator.wakeLock?'Compatible':'Depende del navegador');
 add('Instalación y modo sin conexión',('serviceWorker'in navigator)?'ok':'warn',navigator.serviceWorker?.controller?'Control sin conexión activo':'Disponible; instala o vuelve a abrir la app');
 if(!navigator.geolocation)add('GPS','bad','No disponible');else await new Promise(resolve=>{navigator.geolocation.getCurrentPosition(pos=>{applyGpsPosition(pos);add('GPS real',Number(pos.coords.accuracy)<=100?'ok':'warn',`Precisión aproximada ${Math.round(pos.coords.accuracy)} m`);resolve()},err=>{add('GPS real','bad',gpsErrorMessage(err).replace(/^[^ ]+ /,''));resolve()},{enableHighAccuracy:true,timeout:15000,maximumAge:0})});
 box.innerHTML='';rows.forEach(r=>{const e=document.createElement('div');e.className='diagRow';e.innerHTML=`<span>${escapeHtml(r.name)}${r.detail?`<br><span class="muted">${escapeHtml(r.detail)}</span>`:''}</span><b>${r.status==='ok'?'🟢':r.status==='warn'?'🟡':'🔴'}</b>`;box.appendChild(e)});
}
function reachedKmForDay(){let km=0;for(let i=1;i<pts().length;i++){const p=pts()[i],reached=manual(p)?Boolean(rec(i).arrivalTs):pts().slice(i+1).some((later,o)=>manual(later)&&rec(i+1+o).arrivalTs);if(reached)km+=p.km}return km}
function daySummaryData(){const first=rec(0).departureTs||rec(0).arrivalTs,b=latestBreak(),last=rec(pts().length-1).arrivalTs||(b&&!b.resumeTs?b.stoppedTs:null);if(!first||!last)return null;const expense=state.expenses.filter(e=>e.day===state.day).reduce((s,e)=>s+e.n,0),arrivals=pts().filter((p,i)=>manual(p)&&rec(i).arrivalTs).length,km=reachedKmForDay(),fuelUsed=km/(state.fuel.kmPerL||KM_PER_L),loads=pts().filter((p,i)=>i>0&&p.type==='fuel_required'&&rec(i).arrivalTs).length,lastIndex=b&&!b.resumeTs?b.stopIndex:pts().length-1,delay=Math.round((last-plannedEtaTimestamp(lastIndex))/60000);return {first,last,elapsed:fmtDur((last-first)/60000),km,expense,arrivals,fuelUsed,loads,delay}}
function summaryText(){const s=daySummaryData();if(!s)return'';return `Viaje familiar · Día ${state.day}\nSalida: ${clock(s.first,route().timezone)}\nCierre: ${clock(s.last,pts()[pts().length-1].targetTimezone||route().timezone)}\nTiempo total: ${s.elapsed}\nRecorrido registrado: ~${s.km} km\nParadas registradas: ${s.arrivals}\nCargas planeadas alcanzadas: ${s.loads}\nConsumo calculado: ~${s.fuelUsed.toFixed(1)} L\nDiferencia contra plan: ${s.delay>0?'+':''}${s.delay} min\nGastos del día: ${money(s.expense)}\nCombustible estimado restante: ${Math.round(state.fuel.percent)}%`}
function renderDaySummary(){const card=q('#daySummary'),s=daySummaryData();card.classList.toggle('hidden',!s);if(!s)return;q('#daySummaryGrid').innerHTML=`<div class="stat"><span class="muted">TIEMPO</span><b>${s.elapsed}</b></div><div class="stat"><span class="muted">RECORRIDO</span><b>~${s.km} km</b></div><div class="stat"><span class="muted">COMBUSTIBLE</span><b>~${s.fuelUsed.toFixed(1)} L</b></div><div class="stat"><span class="muted">DIFERENCIA</span><b>${s.delay>0?'+':''}${s.delay} min</b></div><div class="stat wide"><span class="muted">GASTOS</span><b>${money(s.expense)}</b></div>`}

function endJourneyHere(){if(!state.started||routeCompleted())return;const a=activeStop(),from=a>=0?a:currentProgressIndex(),next=nextRoadIndex(),suggested=a>=0?pts()[a].name:`Entre ${pts()[from].name} y ${pts()[next].name}`,label=prompt('¿Dónde terminarán la jornada?',suggested);if(label===null)return;if(!confirm(`¿Terminar la jornada en “${label.trim()||suggested}”? El avance, combustible y gastos quedarán guardados.`))return;snapshot('Cierre de jornada');const origin=gpsOrigin(null,60*60*1000),parts=origin?origin.split(',').map(Number):[null,null];state.breaks[state.day].push({id:Date.now(),stoppedTs:Date.now(),resumeTs:null,resumeClock:'06:00',stopIndex:from,nextIndex:next,label:(label.trim()||suggested).slice(0,120),lat:Number.isFinite(parts[0])?parts[0]:null,lng:Number.isFinite(parts[1])?parts[1]:null});state.started=false;state.road=false;state.copilot=false;state.paused=false;state.pauseTs=null;stopGpsWatch();releaseWakeLock();save();saveAutoBackup(`Jornada del Día ${state.day} cerrada en ${label.trim()||suggested}`);render()}
function continueAfterOvernight(){const b=activeBreak();if(!b)return;const now=Date.now(),advice=scheduleAdvice(now,b.stopIndex);if(advice.status==='stop'&&!advice.recommended)return alert('Con esta hora de salida no hay un punto planeado seguro antes de las 19:00. Sal más temprano o define primero una parada segura cercana.');if(advice.status==='stop'&&!confirm(`El destino completo quedaría para las ${advice.finalClock}. Hoy la app limitará la jornada en ${advice.recommended.name}, aproximadamente a las ${advice.recommended.clock}. ¿Iniciar con ese límite?`))return;snapshot('Reanudación de jornada');b.resumeTs=now;b.resumeClock=q('#overnightStartTime').value||b.resumeClock||'06:00';b.plannedStopIndex=advice.status==='stop'?advice.recommended.index:pts().length-1;state.started=true;state.paused=false;state.pauseTs=null;state.road=false;state.copilot=false;save();render()}
function hasLaterDayProgress(day){for(let d=day+1;d<=3;d++){if(Object.keys(state.records[d]||{}).length||Object.keys(state.checks[d]||{}).length||(state.breaks[d]||[]).length||(state.etaSyncs[d]||[]).length||state.expenses.some(e=>e.day===d))return true}return false}
function prepareNextDay(){if(!routeCompleted())return alert('Primero registra la llegada al destino final del día.');if(state.day>=3)return;const next=state.day+1,R=ROUTES[String(next)];if(!confirm(`¿Preparar el Día ${next}? La salida base es ${R.startClock}. El día comenzará cuando pulses “Iniciar día”.`))return;state.day=next;state.started=false;state.road=false;state.copilot=false;state.paused=false;state.pauseTs=null;state.undo=null;state.activeTab='route';addTravelLog('day',`📅 Preparado Día ${next} · ${R.name}`);save();render()}
function resetCurrentDay(){if(hasLaterDayProgress(state.day))return alert('Hay progreso en un día posterior. Reinicia primero los días posteriores o usa “Borrar todos los datos del viaje” para evitar inconsistencias.');if(!confirm(`¿Reiniciar solamente el Día ${state.day}? Se borrará su avance; los gastos y los días anteriores se conservan.`))return;if(!saveAutoBackup(`Antes de reiniciar el Día ${state.day}`)&&!confirm('No se pudo crear el respaldo automático. ¿Continuar de todos modos?'))return;stopGpsWatch();releaseWakeLock();state.started=false;state.road=false;state.copilot=false;state.paused=false;state.pauseTs=null;state.records[state.day]={};state.checks[state.day]={};state.breaks[state.day]=[];state.etaSyncs[state.day]=[];state.skipped[state.day]={};state.travelLog=(state.travelLog||[]).filter(e=>e.day!==state.day);state.undo=null;const odo=completedDistanceKm();ensureFuelState();state.fuel.estimatedOdoKm=odo;state.fuel.lastSyncOdoKm=Math.min(Number(state.fuel.lastSyncOdoKm)||0,odo);state.fuel.lastFillOdoKm=Math.min(Number(state.fuel.lastFillOdoKm)||0,odo);save();render()}

qa('.tab').forEach(b=>b.addEventListener('click',()=>{const target=b.dataset.tab;if(target==='roadQuick'){state.activeTab='route';state.road=true;if(state.started&&!state.paused&&!routeCompleted()){requestWakeLock();if(state.gps?.enabled)startGpsWatch();else if(!state.simulation?.active)requestGps(false)}save();render();return}state.activeTab=target;if(target!=='route'){stopGpsWatch();releaseWakeLock();state.road=false;state.copilot=false}save();render()}));
qa('[data-more]').forEach(b=>b.addEventListener('click',()=>{state.moreTab=b.dataset.more;save();render()}));
qa('.day[data-day]').forEach(b=>b.addEventListener('click',()=>{const target=Number(b.dataset.day);if(target===state.day)return;if((state.started||activeBreak())&&!routeCompleted()){alert('Este día tiene una jornada en curso o pendiente de reanudar. Complétala o reiníciala antes de cambiar de día para proteger el progreso.');return}stopGpsWatch();releaseWakeLock();state.day=target;state.started=false;state.copilot=false;state.paused=false;state.pauseTs=null;state.road=false;state.showAllTimeline=false;save();render()}));
q('#startJourney').addEventListener('click',()=>{if(state.started||routeCompleted())return;if(!criticalChecksReady()&&!confirm('Faltan elementos críticos del checklist (llantas y combustible). ¿Ya los verificaste y deseas iniciar?'))return;if(state.fuel.percent<95&&!confirm('La salida requiere tanque lleno. ¿Deseas registrar el tanque como FULL ahora?'))return;if(!saveAutoBackup(`Antes de iniciar el Día ${state.day}`)&&!confirm('No se pudo crear el respaldo automático. ¿Continuar de todos modos?'))return;snapshot('Inicio del día');if(state.fuel.percent<95)markFuelFull();const ts=Date.now();state.started=true;state.paused=false;state.pauseTs=null;state.records[state.day][0]={...rec(0),arrivalTs:ts,departureTs:ts};addTravelLog('start',`🚗 Inicio de Día ${state.day} · ${pts()[0].name}`);save();render()});
q('#roadToggle').addEventListener('click',()=>{state.road=!state.road;if(!state.road){state.copilot=false;stopGpsWatch();releaseWakeLock()}save();render();if(state.road&&!state.simulation?.active){requestWakeLock();if(state.gps&&state.gps.enabled)startGpsWatch();else requestGps(false)}});
q('#roadExit').addEventListener('click',()=>{stopGpsWatch();releaseWakeLock();state.road=false;state.copilot=false;save();render()});
q('#roadChangePlans')?.addEventListener('click',()=>q('#changePlansCard')?.classList.toggle('hidden'));
q('#arriveBtn').addEventListener('click',()=>registerArrival(nextManual(),'manual'));
q('#departBtn').addEventListener('click',()=>{
 const i=activeStop();if(i<0)return;
 const p=pts()[i];
 snapshot(`Salida de ${p.name}`);
 if(p.type==='fuel_required' && state.fuel.percent<95){
   if(confirm('Esta es una carga obligatoria. ¿Llenaste el tanque?'))markFuelFull();
   else if(!confirm('No se registró tanque lleno. ¿Continuar sin llenar bajo tu responsabilidad?')){state.undo=null;return}
 }
 state.records[state.day][i]={...rec(i),departureTs:Date.now()};
 save();render();
 if(state.day===1&&i===10)speakAlert('Tramo uno terminado. Abre el tramo dos hacia Navojoa.','segment:1:2');
 else{const n=nextRoadIndex();speakAlert(`Siguiente punto: ${pts()[n].name}.`,`next:${state.day}:${n}`)}
});
q('#pauseJourney').addEventListener('click',()=>{if(!state.started||state.paused)return;snapshot('Pausa');stopGpsWatch();releaseWakeLock();state.paused=true;state.pauseTs=Date.now();state.road=false;state.copilot=false;save();render()});
q('#resumeJourney').addEventListener('click',()=>{if(!state.paused||!state.pauseTs)return;const duration=Date.now()-state.pauseTs;if(activeStop()<0){for(let i=pts().length-1;i>=0;i--){if(rec(i).departureTs){state.records[state.day][i].departureTs+=duration;break}}}state.paused=false;state.pauseTs=null;save();render()});
q('#endDayHere').addEventListener('click',endJourneyHere);q('#roadEndDay').addEventListener('click',endJourneyHere);
q('#continueTomorrow').addEventListener('click',continueAfterOvernight);
q('#overnightStartTime').addEventListener('change',e=>{const b=activeBreak();if(!b)return;b.resumeClock=e.target.value||'06:00';save();renderOvernight()});
q('#cancelOvernight').addEventListener('click',()=>{const b=activeBreak();if(!b)return;if(!confirm('¿Cancelar el cierre de jornada y volver al viaje en curso?'))return;state.breaks[state.day].pop();state.started=true;state.copilot=false;state.paused=false;state.pauseTs=null;state.undo=null;save();saveAutoBackup(`Cierre de jornada del Día ${state.day} cancelado`);render()});
q('#nextRoute').addEventListener('click',prepareNextDay);
q('#resetDay').addEventListener('click',resetCurrentDay);
q('#resetTrip').addEventListener('click',()=>{if(confirm('¿Borrar TODO el progreso, combustible, checklist, gastos y ajustes? Esta acción no se puede deshacer.')&&confirm('Confirmación final: ¿borrar todos los datos del viaje?')){stopGpsWatch();localStorage.removeItem(KEY);localStorage.removeItem(MIRROR_KEY);localStorage.removeItem(RECOVERY_KEY);localStorage.removeItem(BACKUP_KEY);location.reload()}});
q('#navBtn').addEventListener('click',openNav);q('#gpsBtn').addEventListener('click',()=>requestGps(false));q('#fullRouteBtn').addEventListener('click',openFullRoute);q('#etaSyncBtn').addEventListener('click',syncEtaFromMaps);
q('#savePointLocation').addEventListener('click',()=>{if(state.settings?.routeLocked!==false)return alert('El itinerario oficial está congelado. Desbloquéalo temporalmente en Ajustes si realmente necesitas cambiar la ubicación de un punto.');saveCurrentPointLocation()});q('#copilotToggle').addEventListener('click',()=>{state.copilot=!state.copilot;save();render()});
q('#startSimulation').addEventListener('click',startSimulation);q('#simAdvance').addEventListener('click',advanceSimulation);q('#simDelay').addEventListener('click',addSimulationDelay);q('#simExit').addEventListener('click',exitSimulation);q('#globalSimExit').addEventListener('click',exitSimulation);q('#runDiagnostic').addEventListener('click',runDiagnostic);q('#restoreAutoBackup').addEventListener('click',restoreAutoBackup);
q('#copySummary').addEventListener('click',async()=>{const text=summaryText();if(!text)return;try{await navigator.clipboard.writeText(text);alert('Resumen copiado.')}catch(e){prompt('Copia el resumen',text)}});

q('#fuelFull').addEventListener('click',()=>{snapshot('Carga de combustible');markFuelFull()});
qa('[data-fuelpct]').forEach(b=>b.addEventListener('click',()=>{snapshot('Ajuste de combustible');syncFuelPercent(Number(b.dataset.fuelpct))}));
q('#fuelPctApply').addEventListener('click',()=>{
 const v=Number(q('#fuelPctInput').value);
 if(!isFinite(v)||v<0||v>100)return;
 q('#fuelPctInput').value='';
 snapshot('Ajuste de combustible');
 syncFuelPercent(v);
});

q('#addExpense').addEventListener('click',()=>{snapshot('Agregar gasto');const n=Number(q('#expenseAmount').value),liters=Number(q('#expenseLiters').value)||0;if(!Number.isFinite(n)||n<=0)return alert('Escribe un monto válido.');const cat=q('#expenseCat').value,note=q('#expenseNote').value.trim().slice(0,200);state.expenses.push({c:cat,n,t:note,day:state.day,ts:Date.now(),liters:Math.max(0,liters)});addTravelLog('expense',`💳 ${cat} · ${money(n)}${note?' · '+note:''}`);q('#expenseAmount').value='';q('#expenseLiters').value='';q('#expenseNote').value='';save();renderExpenses()});
q('#openFuel').addEventListener('click',()=>{state.activeTab='fuel';save();render()});
q('#toggleTimeline').addEventListener('click',()=>{state.showAllTimeline=!state.showAllTimeline;save();renderTimeline()});
q('#undoAction').addEventListener('click',undoLast);q('#roadUndo').addEventListener('click',undoLast);
q('#saveSettings').addEventListener('click',()=>{state.settings={...state.settings,mapApp:q('#mapPreference').value,proximityEnabled:q('#proximityEnabled').checked,proximityRadius:Number(q('#proximityRadius').value)||350,voiceAlerts:q('#voiceAlerts').checked,keepAwake:q('#keepAwake').checked,emergencyContact:q('#emergencyContact').value.trim().slice(0,120),insurerContact:q('#insurerContact').value.trim().slice(0,120),vehicleInfo:q('#vehicleInfo').value.trim().slice(0,120)};save();if(state.road){if(state.settings.keepAwake)requestWakeLock();else releaseWakeLock()}updateGps();alert('Ajustes guardados.')});
q('#copyGps').addEventListener('click',async()=>{const o=gpsOrigin(6,24*60*60*1000);if(!o)return alert('Actualiza primero la ubicación desde Modo carretera.');const text=`Mi ubicación: https://maps.google.com/?q=${o}`;try{await navigator.clipboard.writeText(text);alert('Ubicación copiada.')}catch(e){prompt('Copia esta ubicación',text)}});
q('#shareGps').addEventListener('click',async()=>{const o=gpsOrigin(6,24*60*60*1000);if(!o)return alert('Actualiza primero la ubicación desde Modo carretera.');const text=`Mi ubicación actual: https://maps.google.com/?q=${o}${state.settings.vehicleInfo?` · Vehículo: ${state.settings.vehicleInfo}`:''}`;if(navigator.share){try{await navigator.share({title:'Mi ubicación de viaje',text})}catch(e){}}else{try{await navigator.clipboard.writeText(text);alert('Ubicación copiada.')}catch(e){prompt('Copia esta ubicación',text)}}});
q('#safetyGpsRefresh').addEventListener('click',()=>requestGps(false));
q('#exportData').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({app:'Viaje Familiar',version:'5.0.5 OFICIAL',exportedAt:new Date().toISOString(),state:exportableState()},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`viaje-familiar-respaldo-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)});
function validImportedState(x){return x&&typeof x==='object'&&[1,2,3].includes(Number(x.day||1))&&x.records&&typeof x.records==='object'&&x.checks&&typeof x.checks==='object'&&x.fuel&&typeof x.fuel==='object'&&Number.isFinite(Number(x.fuel.percent))&&Number.isFinite(Number(x.fuel.kmPerL))&&(!x.breaks||typeof x.breaks==='object')&&(!x.expenses||Array.isArray(x.expenses))}
q('#importData').addEventListener('click',()=>q('#importFile').click());q('#importFile').addEventListener('change',async e=>{const file=e.target.files?.[0];if(!file)return;try{if(file.size>5*1024*1024)throw new Error('Archivo demasiado grande');const data=JSON.parse(await file.text()),incoming=data.state||data;if(!validImportedState(incoming))throw new Error('Formato inválido');if(!confirm('¿Reemplazar los datos actuales por este respaldo?'))return;if(!saveAutoBackup('Antes de importar un respaldo')&&!confirm('No se pudo crear un respaldo de seguridad. ¿Continuar de todos modos?'))return;const restored={...incoming,schemaVersion:15,simulation:{active:false,original:null},road:false,copilot:false,paused:false,pauseTs:null};localStorage.setItem(KEY,JSON.stringify(restored));localStorage.setItem(MIRROR_KEY,JSON.stringify(restored));location.reload()}catch(err){alert('No se pudo importar: el archivo no es un respaldo válido.')}finally{e.target.value=''}});

q('#smartNavigate')?.addEventListener('click',openNav);
q('#changePlans')?.addEventListener('click',()=>q('#changePlansCard')?.classList.toggle('hidden'));
q('#planStay')?.addEventListener('click',endJourneyHere);
q('#planSkip')?.addEventListener('click',skipNextPoint);
q('#planAddStop')?.addEventListener('click',addCustomDelay);
q('#planResume')?.addEventListener('click',()=>{q('#changePlansCard')?.classList.add('hidden');state.activeTab='route';save();render()});
q('#saveRealFill')?.addEventListener('click',saveRealFill);
q('#copyLog')?.addEventListener('click',copyTravelLog);
q('#openFuelMore')?.addEventListener('click',()=>{state.activeTab='fuel';save();render()});
q('#openSafetyMore')?.addEventListener('click',()=>{state.activeTab='emergency';save();render()});
q('#backFromFuel')?.addEventListener('click',()=>{state.activeTab='more';state.moreTab='fuelMore';save();render()});
q('#backFromSafety')?.addEventListener('click',()=>{state.activeTab='more';state.moreTab='safetyMore';save();render()});
// En Más, Gasolina y Seguridad reutilizan los paneles completos mediante navegación interna.
q('#mapPreference').value=state.settings.mapApp||'google';q('#proximityEnabled').checked=state.settings.proximityEnabled!==false;q('#proximityRadius').value=String(state.settings.proximityRadius||350);q('#voiceAlerts').checked=state.settings.voiceAlerts!==false;q('#keepAwake').checked=state.settings.keepAwake!==false;q('#emergencyContact').value=state.settings.emergencyContact||'';q('#insurerContact').value=state.settings.insurerContact||'';q('#vehicleInfo').value=state.settings.vehicleInfo||'Buick Enclave 2013 FWD';
render();
inspectGpsPermission();
q('#saveBudget')?.addEventListener('click',()=>{state.budget=state.budget||{};qa('.budgetInput').forEach(el=>state.budget[el.dataset.budget]=Math.max(0,Number(el.value)||0));save();saveAutoBackup('Presupuesto actualizado');renderExpenses()});
q('#confirmGpsArrival')?.addEventListener('click',()=>{const box=q('#arrivalPrompt'),i=Number(box?.dataset.index);box?.classList.add('hidden');if(Number.isInteger(i))registerArrival(i,'gps_confirmed')});
q('#dismissGpsArrival')?.addEventListener('click',()=>q('#arrivalPrompt')?.classList.add('hidden'));
window.addEventListener('pagehide',()=>{if(!state.simulation?.active)save()});document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&!state.simulation?.active)save()});
if(state.road&&state.gps.enabled)setTimeout(()=>{startGpsWatch();requestWakeLock()},250);
if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js?v=4.4.0',{updateViaCache:'none'}).then(reg=>reg.update().catch(()=>{})).catch(()=>{})}

/* ===== v4.4 enhancements ===== */
const HISTORY_KEY=KEY+'_trip_history_v44';
function ensureV44State(){
 state.schemaVersion=15;
 state.tripMeta=state.tripMeta&&typeof state.tripMeta==='object'?state.tripMeta:{name:'Los Algodones → Tequila',createdTs:Date.now()};
 state.tripHistory=Array.isArray(state.tripHistory)?state.tripHistory:[];
 state.favorites=state.favorites&&typeof state.favorites==='object'?state.favorites:{};
 state.stopNotes=state.stopNotes&&typeof state.stopNotes==='object'?state.stopNotes:{};
 state.maintenance=state.maintenance&&typeof state.maintenance==='object'?state.maintenance:{startOdo:null,nextService:null,notes:''};
 state.telemetry=state.telemetry&&typeof state.telemetry==='object'?state.telemetry:{lastTs:null,lastLat:null,lastLng:null,driveMs:0,stopMs:0,distanceKm:0,speedSamples:[],lastDistanceToNext:null,deviationScore:0};
 state.settings=state.settings||{};
 if(typeof state.settings.driveLock!=='boolean')state.settings.driveLock=true;
 if(typeof state.settings.autoDark!=='boolean')state.settings.autoDark=true;
}
ensureV44State();
function haversineKm(a,b,c,d){const R=6371,toRad=x=>x*Math.PI/180,dp=toRad(c-a),dl=toRad(d-b),q=Math.sin(dp/2)**2+Math.cos(toRad(a))*Math.cos(toRad(c))*Math.sin(dl/2)**2;return 2*R*Math.asin(Math.sqrt(q))}
function updateTelemetry(pos){
 ensureV44State(); const t=state.telemetry,ts=Number(pos.timestamp)||Date.now(),lat=Number(pos.coords.latitude),lng=Number(pos.coords.longitude),rawSpeed=Number(pos.coords.speed),speedKmh=Number.isFinite(rawSpeed)&&rawSpeed>=0?rawSpeed*3.6:null;
 if(Number.isFinite(t.lastTs)&&ts>t.lastTs&&ts-t.lastTs<120000&&Number.isFinite(t.lastLat)&&Number.isFinite(t.lastLng)){
   const dt=ts-t.lastTs,dist=haversineKm(t.lastLat,t.lastLng,lat,lng),calcSpeed=dist/(dt/3600000),v=speedKmh??calcSpeed;
   if(v>7){t.driveMs+=dt;t.distanceKm+=dist}else t.stopMs+=dt;
   if(v>=2&&v<180){t.speedSamples.push({ts,v});t.speedSamples=t.speedSamples.filter(x=>ts-x.ts<3*60*60*1000).slice(-180)}
 }
 t.lastTs=ts;t.lastLat=lat;t.lastLng=lng;
 const i=nextRoadIndex(),d=distanceToPoint(pts()[i],i);
 if(Number.isFinite(d)){
   if(Number.isFinite(t.lastDistanceToNext)&&d>t.lastDistanceToNext+1.2)t.deviationScore=Math.min(5,(t.deviationScore||0)+1); else if(d<t.lastDistanceToNext)t.deviationScore=Math.max(0,(t.deviationScore||0)-1);
   t.lastDistanceToNext=d;
 }
}
function avgTelemetrySpeed(){const a=state.telemetry?.speedSamples||[];if(!a.length)return null;const vals=a.map(x=>x.v).filter(v=>v>7&&v<160);return vals.length?vals.reduce((x,y)=>x+y,0)/vals.length:null}
function dynamicEtaText(){const avg=avgTelemetrySpeed(),i=nextRoadIndex(),d=distanceToPoint(pts()[i],i);if(!avg||!Number.isFinite(d)||avg<15)return null;const mins=Math.round(d/avg*60);return `${fmtDur(mins)} según avance real`}
function readTripHistory(){try{const x=JSON.parse(localStorage.getItem(HISTORY_KEY));if(Array.isArray(x))return x;return Array.isArray(state.tripHistory)?state.tripHistory:[]}catch(e){return Array.isArray(state.tripHistory)?state.tripHistory:[]}}
function writeTripHistory(a){const clean=a.slice(0,20);state.tripHistory=clean;localStorage.setItem(HISTORY_KEY,JSON.stringify(clean))}
function tripKey(day,index){return `${day}:${index}`}
function currentStopKey(){return tripKey(state.day,nextRoadIndex())}
function currentStopName(){return pts()[nextRoadIndex()]?.name||'Parada'}
function shareText(){const i=nextRoadIndex(),p=pts()[i],eta=state.started&&!routeCompleted()?etaClock(i):'—',gps=gpsOrigin(6,24*60*60*1000),spent=totalExpenses();return `Viaje familiar · Día ${state.day}\nSiguiente: ${p?.name||'—'}\nETA: ${eta}\nCombustible: ${Math.round(state.fuel.percent)}%\nGasto acumulado: ${money(spent)}${gps?`\nUbicación: https://maps.google.com/?q=${gps}`:''}`}
function renderV44(){
 ensureV44State();
 const online=navigator.onLine,cb=q('#connectionBadge');if(cb){cb.className=`connectionBadge ${online?'online':'offline'}`;cb.textContent=online?'● En línea':'● Sin señal'}
 document.body.classList.toggle('forceDark',state.settings.autoDark!==false&&matchMedia?.('(prefers-color-scheme: dark)')?.matches);
 q('#app')?.classList.toggle('driveLocked',Boolean(state.road&&state.settings.driveLock));
 const t=state.telemetry,avg=avgTelemetrySpeed();
 const drive=fmtDur((t.driveMs||0)/60000),stop=fmtDur((t.stopMs||0)/60000),avgt=avg?`${Math.round(avg)} km/h`:'—';
 if(q('#driveTimeReal'))q('#driveTimeReal').textContent=drive;if(q('#stopTimeReal'))q('#stopTimeReal').textContent=stop;if(q('#avgSpeedReal'))q('#avgSpeedReal').textContent=avgt;
 if(q('#roadDrivingTime'))q('#roadDrivingTime').textContent=`🚗 ${drive}`;if(q('#roadStoppedTime'))q('#roadStoppedTime').textContent=`⏸ ${stop}`;if(q('#roadAvgSpeed'))q('#roadAvgSpeed').textContent=`Promedio ${avgt}`;
 const dyn=dynamicEtaText(); if(dyn&&q('#etaSyncNote')&&!latestEtaSyncFor(nextRoadIndex()))q('#etaSyncNote').textContent=`ETA dinámica: ${dyn}. Horario oficial sigue visible arriba.`;
 const dev=(t.deviationScore||0)>=3;if(q('#routeHealth'))q('#routeHealth').textContent=!state.gps?.enabled?'Sin GPS':dev?'Revisar ruta':'En ruta';if(q('#deviationStatus'))q('#deviationStatus').textContent=dev?'🟡 La distancia al siguiente punto está aumentando. Revisa Maps antes de continuar.':'🟢 Sin señales de desvío detectadas con los datos disponibles.';
 if(q('#toggleDriveLock'))q('#toggleDriveLock').textContent=state.settings.driveLock?'🔒 Bloqueo carretera activo':'🔓 Bloqueo carretera apagado';
 const key=currentStopKey(),note=state.stopNotes[key]||'';if(q('#stopNote')&&document.activeElement!==q('#stopNote'))q('#stopNote').value=note;if(q('#toggleFavorite'))q('#toggleFavorite').textContent=state.favorites[key]?'★ Favorita':'☆ Marcar favorita';
 const fav=q('#favoritesList');if(fav){fav.innerHTML='';const entries=Object.entries(state.favorites).filter(([,v])=>v).slice(-8);fav.innerHTML=entries.length?entries.map(([k,v])=>`<div class="favoriteRow"><span>★ ${escapeHtml(v.name||k)}</span><span class="muted">${escapeHtml(state.stopNotes[k]||'')}</span></div>`).join(''):'<div class="muted">Todavía no hay paradas favoritas.</div>'}
 if(q('#tripName')&&document.activeElement!==q('#tripName'))q('#tripName').value=state.tripMeta.name||'';
 const hist=readTripHistory(),box=q('#tripHistory');if(box){box.innerHTML=hist.length?hist.map((h,i)=>`<div class="historyRow"><span><b>${escapeHtml(h.name)}</b><br><span class="muted">${new Date(h.ts).toLocaleDateString('es-MX')} · ${h.km||0} km · ${money(h.spent||0)}</span></span><button class="btn restoreArchived" data-h="${i}">Restaurar</button></div>`).join(''):'<div class="muted">No hay viajes archivados.</div>';qa('.restoreArchived').forEach(b=>b.onclick=()=>restoreArchivedTrip(Number(b.dataset.h)))}
 if(q('#maintStartOdo')&&document.activeElement!==q('#maintStartOdo'))q('#maintStartOdo').value=state.maintenance.startOdo??'';if(q('#maintNextService')&&document.activeElement!==q('#maintNextService'))q('#maintNextService').value=state.maintenance.nextService??'';if(q('#maintNotes')&&document.activeElement!==q('#maintNotes'))q('#maintNotes').value=state.maintenance.notes||'';
 if(q('#maintenanceStatus')){const endOdo=state.realFuel?.lastOdoKm||state.maintenance.startOdo||null,service=state.maintenance.nextService; q('#maintenanceStatus').textContent=endOdo&&service?`Odómetro actual aprox. ${endOdo} km · faltan ${Math.max(0,service-endOdo)} km para servicio.`:'Guarda odómetro y próximo servicio para dar seguimiento después del viaje.'}
}
const _renderV44base=render;render=function(){_renderV44base();renderV44()};
function archiveCurrentTrip(){state.tripMeta.name=(q('#tripName')?.value||state.tripMeta.name||'Viaje').trim().slice(0,80);const h=readTripHistory();h.unshift({name:state.tripMeta.name,ts:Date.now(),km:totalTripKmRecorded(),spent:totalExpenses(),state:cleanStateCopy(state)});writeTripHistory(h);addTravelLog('archive',`📦 Viaje archivado · ${state.tripMeta.name}`);save();render();alert('Viaje guardado en historial local.')}
function resetProgressKeepingPlan(){const keep={settings:{...state.settings},budget:{...state.budget},maintenance:{...state.maintenance},favorites:{...state.favorites},stopNotes:{...state.stopNotes}};state.records={1:{},2:{},3:{}};state.checks={1:{},2:{},3:{}};state.breaks={1:[],2:[],3:[]};state.etaSyncs={1:[],2:[],3:[]};state.expenses=[];state.travelLog=[];state.realFuel={fills:[],lastOdoKm:null,lastFillOdoKm:null,lastFillLiters:null,measuredKmPerL:null};state.skipped={1:{},2:{},3:{}};state.day=1;state.started=false;state.road=false;state.copilot=false;state.paused=false;state.pauseTs=null;state.activeTab='route';state.moreTab='check';state.fuel={percent:100,liters:TANK_L,kmPerL:KM_PER_L,lastSyncOdoKm:0,lastSyncPercent:100,lastFillOdoKm:0,lastFillTs:null,estimatedOdoKm:0};state.telemetry={lastTs:null,lastLat:null,lastLng:null,driveMs:0,stopMs:0,distanceKm:0,speedSamples:[],lastDistanceToNext:null,deviationScore:0};Object.assign(state,keep);state.tripMeta={name:`${state.tripMeta?.name||'Viaje'} · copia`,createdTs:Date.now()};saveAutoBackup('Antes de duplicar viaje');save();render()}
function restoreArchivedTrip(i){const h=readTripHistory()[i];if(!h?.state)return;if(!confirm(`¿Restaurar “${h.name}”? Se creará respaldo del estado actual.`))return;saveAutoBackup('Antes de restaurar viaje archivado');state={...h.state,schemaVersion:15,road:false,copilot:false,simulation:{active:false,original:null}};ensureV44State();save();render()}
function downloadText(name,text,type='text/plain'){const blob=new Blob([text],{type}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function tripComparisonText(){const plannedKm=Object.values(ROUTES).reduce((s,r)=>s+r.points.slice(1).reduce((a,p)=>a+Number(p.km||0),0),0),realKm=totalTripKmRecorded(),budget=Object.values(state.budget||{}).reduce((a,v)=>a+Number(v||0),0),spent=totalExpenses();return `VIAJE FAMILIAR · PLANEADO VS REAL\nPlaneado: ~${plannedKm} km\nRegistrado: ~${realKm} km\nPresupuesto: ${money(budget)}\nGastado: ${money(spent)}\nDiferencia: ${money(budget-spent)}\nRendimiento real: ${state.realFuel?.measuredKmPerL?state.realFuel.measuredKmPerL.toFixed(2)+' km/L':'pendiente'}\nTiempo conduciendo: ${fmtDur((state.telemetry?.driveMs||0)/60000)}\nTiempo detenido: ${fmtDur((state.telemetry?.stopMs||0)/60000)}`}
async function shareOrCopy(text,title='Estado del viaje'){if(navigator.share){try{await navigator.share({title,text});return}catch(e){}}try{await navigator.clipboard.writeText(text);alert('Texto copiado.')}catch(e){prompt('Copia el texto',text)}}
q('#imHere')?.addEventListener('click',()=>{if(!state.gps?.enabled||Date.now()-Number(state.gps.lastTs||0)>5*60000)return requestGps(false);const i=nextRoadIndex(),p=pts()[i];if(confirm(`Ubicación actual disponible. ¿Quieres usarla para confirmar que estás en ${p.name}?`))registerArrival(i,'manual_gps_here')});
q('#shareTripStatus')?.addEventListener('click',()=>shareOrCopy(shareText(),'Estado del viaje'));
q('#toggleDriveLock')?.addEventListener('click',()=>{state.settings.driveLock=!state.settings.driveLock;save();render()});
q('#saveStopNote')?.addEventListener('click',()=>{state.stopNotes[currentStopKey()]=(q('#stopNote')?.value||'').trim().slice(0,500);save();render();alert('Nota guardada.')});
q('#toggleFavorite')?.addEventListener('click',()=>{const k=currentStopKey();if(state.favorites[k])delete state.favorites[k];else state.favorites[k]={name:currentStopName(),day:state.day,index:nextRoadIndex(),ts:Date.now()};save();render()});
q('#archiveTrip')?.addEventListener('click',archiveCurrentTrip);
q('#duplicateTrip')?.addEventListener('click',()=>{if(confirm('¿Guardar el estado actual y crear un viaje nuevo usando la misma ruta y ajustes?')){archiveCurrentTrip();resetProgressKeepingPlan()}});
q('#saveMaintenance')?.addEventListener('click',()=>{state.maintenance={startOdo:Number(q('#maintStartOdo')?.value)||null,nextService:Number(q('#maintNextService')?.value)||null,notes:(q('#maintNotes')?.value||'').trim().slice(0,800)};save();render();alert('Estado del vehículo guardado.')});
q('#exportTripReport')?.addEventListener('click',()=>downloadText(`resumen-viaje-${new Date().toISOString().slice(0,10)}.txt`,tripComparisonText()+'\n\n'+(state.travelLog||[]).map(e=>`${new Date(e.ts).toLocaleString('es-MX')} · ${e.text}`).join('\n')));
q('#copyTripCompare')?.addEventListener('click',()=>shareOrCopy(tripComparisonText(),'Resumen del viaje'));
window.addEventListener('online',renderV44);window.addEventListener('offline',renderV44);

// ===== v5.0: auditoría anti-duplicados y capa de resiliencia =====
function ensureV50State(){
 state.settings={...state.settings,routeLocked:state.settings?.routeLocked!==false};
 if(!Array.isArray(state.trashExpenses))state.trashExpenses=[];
 state.trashExpenses=state.trashExpenses.filter(x=>x&&Date.now()-Number(x.deletedTs||0)<24*60*60*1000).slice(0,10);
 if(!state.meta)state.meta={};
 if(!Array.isArray(state.errorLog))state.errorLog=[];
}
function safetyScoreInfo(extraMin=0){
 ensureV50State();let score=100,reasons=[];
 const f=predictedFuelAtNext();if(f.pct<15){score-=40;reasons.push('combustible crítico')}else if(f.pct<25){score-=20;reasons.push('combustible bajo')}
 const end=pts().length-1,z=pts()[end].targetTimezone||route().timezone,final=etaTs(end)+extraMin*60000,goal=dailyBoundaryTs(dailyAnchorTs(),route().nightGoal,z),limit=dailyBoundaryTs(dailyAnchorTs(),route().nightLimit,z);
 if(final>limit){score-=45;reasons.push('rebasa 19:00')}else if(final>goal){score-=20;reasons.push('jornada ajustada')}
 const driveH=(state.telemetry?.driveMs||0)/3600000;if(driveH>7){score-=20;reasons.push('jornada larga')}else if(driveH>5){score-=10;reasons.push('conviene descanso')}
 if(state.gps?.enabled===false)score-=5;
 score=Math.max(0,Math.min(100,score));
 return {score,cls:score>=80?'good':score>=55?'warn':'bad',label:score>=80?'🟢 Cómoda':score>=55?'🟡 Ajustada':'🔴 Replanificar',reasons,finalTs:final,zone:z};
}
function projectedFinalArrival(extraMin=0){const s=safetyScoreInfo(extraMin);return `${clock(s.finalTs,s.zone)} · Día ${state.day}`}
function assistantText(extraMin=0){const x=safetyScoreInfo(extraMin),next=pts()[nextRoadIndex()],f=predictedFuelAtNext();if(!state.started)return 'Inicia el día para activar recomendaciones en tiempo real.';if(x.score<55)return `No conviene continuar toda la jornada como está: ${x.reasons.join(', ')}. Considera el Plan B antes de seguir.`;if(f.pct<25)return `Puedes avanzar, pero conviene cargar combustible en la siguiente opción segura. Próximo punto: ${next?.name||'—'}.`;if(x.score<80)return `Puedes continuar con precaución. La jornada está ajustada y conviene evitar retrasos adicionales.`;return `Puedes continuar. Horario y combustible mantienen un margen razonable hacia ${next?.name||'el siguiente punto'}.`}
function scenarioText(min){const x=safetyScoreInfo(min);return `Si agregas ${min} min: ${x.label} · llegada estimada ${clock(x.finalTs,x.zone)}${x.reasons.length?' · '+x.reasons.join(', '):''}. No se modificó el viaje.`}
function statusCenter(){const backups=readAutoBackups(),saved=Number(state.meta?.savedTs||0);return {data:state.saveError?'⚠️ Revisar':'✓ OK',gps:state.gps?.enabled?'✓ Activo':'— Pendiente',offline:'serviceWorker'in navigator?(navigator.serviceWorker?.controller?'✓ Listo':'○ Disponible'):'⚠️ No',backup:backups.length?`✓ ${backups.length}`:'○ Ninguno',saved:saved?new Date(saved).toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'}):'—'}}
function latestGoodBackup(){return readAutoBackups()[0]||null}
function emergencyRestore(){const b=latestGoodBackup();if(!b)return alert('No hay respaldo automático disponible todavía.');if(!confirm(`¿Restaurar el último estado correcto (${new Date(b.ts).toLocaleString('es-MX')})?`))return;try{localStorage.setItem(KEY,JSON.stringify({...b.state,road:false,copilot:false,simulation:{active:false,original:null}}));localStorage.setItem(MIRROR_KEY,localStorage.getItem(KEY));location.reload()}catch(e){alert('No se pudo restaurar automáticamente. Usa Importar respaldo.')}}
function errorReportText(){const h=statusCenter();return `Viaje Familiar v5.0\nFecha: ${new Date().toLocaleString('es-MX')}\nDía: ${state.day}\nIniciado: ${state.started?'sí':'no'}\nModo carretera: ${state.road?'sí':'no'}\nDatos: ${h.data}\nGPS: ${h.gps}\nOffline: ${h.offline}\nRespaldos: ${h.backup}\nÚltimo guardado: ${h.saved}\nConexión: ${navigator.onLine?'en línea':'sin señal'}\nUA: ${navigator.userAgent}`}
function renderV50(){
 ensureV50State();const x=safetyScoreInfo();
 if(q('#safetyScore'))q('#safetyScore').textContent=`${x.label} · ${x.score}/100`;
 if(q('#finalArrival'))q('#finalArrival').textContent=projectedFinalArrival();
 if(q('#assistantAdvice')){q('#assistantAdvice').className=`limitBanner ${x.cls}`;q('#assistantAdvice').textContent=assistantText()}
 const h=statusCenter();if(q('#healthData'))q('#healthData').textContent=h.data;if(q('#healthGps'))q('#healthGps').textContent=h.gps;if(q('#healthOffline'))q('#healthOffline').textContent=h.offline;if(q('#healthBackup'))q('#healthBackup').textContent=h.backup;if(q('#healthSaved'))q('#healthSaved').textContent=`Último guardado: ${h.saved}`;
 if(q('#trashStatus'))q('#trashStatus').textContent=state.trashExpenses.length?`${state.trashExpenses.length} elemento(s) recuperable(s) durante 24 h.`:'Sin elementos eliminados.';
 if(q('#restoreTrash'))q('#restoreTrash').disabled=!state.trashExpenses.length;
 if(q('#routeLocked'))q('#routeLocked').checked=state.settings.routeLocked!==false;
 if(q('#onboardingText'))q('#onboardingText').textContent=state.meta.onboardingDone?'Teléfono marcado como listo. Puedes repetir la prueba cuando quieras.':'Ejecuta la comprobación antes del viaje y confirma cuando todo esté listo.';
 if(q('#repairStatus'))q('#repairStatus').textContent=`Autorreparación: principal + espejo + recuperación + ${readAutoBackups().length} respaldo(s).`;
 if(q('#finalTripSummary'))q('#finalTripSummary').textContent=tripComparisonText()+`\nLlegada proyectada hoy: ${projectedFinalArrival()}`;
}
q('#canContinue')?.addEventListener('click',()=>alert(assistantText()));
q('#scenario30')?.addEventListener('click',()=>{q('#scenarioResult').textContent=scenarioText(30)});
q('#scenario60')?.addEventListener('click',()=>{q('#scenarioResult').textContent=scenarioText(60)});
q('#restoreTrash')?.addEventListener('click',()=>{ensureV50State();const x=state.trashExpenses.shift();if(!x)return;delete x.deletedTs;state.expenses.push(x);save();renderExpenses();renderV50()});
q('#routeLocked')?.addEventListener('change',e=>{state.settings.routeLocked=e.target.checked;save();renderV50()});
q('#emergencyRestore')?.addEventListener('click',emergencyRestore);
q('#copyErrorReport')?.addEventListener('click',()=>shareOrCopy(errorReportText(),'Reporte de diagnóstico'));
q('#onboardingTest')?.addEventListener('click',()=>runDiagnostic());
q('#onboardingDone')?.addEventListener('click',()=>{state.meta.onboardingDone=true;saveAutoBackup('Puesta a punto completada');save();renderV50()});
window.addEventListener('error',e=>{try{ensureV50State();state.errorLog.unshift({ts:Date.now(),msg:String(e.message||'Error'),src:String(e.filename||'').slice(-80),line:e.lineno||0});state.errorLog=state.errorLog.slice(0,20);save()}catch(_){}});
const _renderV50base=render;render=function(){_renderV50base();renderV50()};
render();save();
