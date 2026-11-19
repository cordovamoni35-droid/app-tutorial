const btnTema=document.getElementById('btnTema');
btnTema.addEventListener('click',()=>{document.body.classList.toggle('oscuro');btnTema.textContent=document.body.classList.contains('oscuro')?'☀️ Modo claro':'🌙 Modo oscuro';});
document.getElementById('btnMenu').addEventListener('click',()=>{document.getElementById('menuLateral').classList.toggle('mostrar');});
document.getElementById('buscador').addEventListener('input',(e)=>{const t=e.target.value.toLowerCase();document.querySelectorAll('.modulo').forEach(m=>{m.style.display=m.textContent.toLowerCase().includes(t)?'block':'none';});});
const checks=document.querySelectorAll('.visto');
function actualizarProgreso(){const total=checks.length;const marcados=document.querySelectorAll('.visto:checked').length;const porc=Math.round((marcados/total)*100);document.getElementById('barraProgreso').style.width=porc+'%';document.getElementById('textoProgreso').textContent=porc+'% completado';}
checks.forEach(c=>c.addEventListener('change',actualizarProgreso));
function marcarTodo(){checks.forEach(c=>c.checked=true);actualizarProgreso();alert('¡Felicidades! Ya viste todo el tutorial 🎉');}
function probarSensor(){document.getElementById('resultadoSensor').textContent='✅ ¡Detectado! Tu celular tiene acelerómetro y giroscopio funcionando. Así las apps saben si te mueves, giras o caminas.';}
function lanzarNotificacion(){if(Notification.permission==='granted'){new Notification('📱 Tutorial Móvil',{body:'¡Así se ve una notificación push! Tu app te avisó en segundo plano.'});}else{Notification.requestPermission().then(p=>{if(p==='granted')lanzarNotificacion();else alert('🔔 Ejemplo: ¡Tienes un mensaje nuevo! Así funciona una notificación push.');});}}
const datos=['El 90% de las apps usan Git para controlar sus versiones.','Tu celular tiene más de 10 sensores trabajando al mismo tiempo.','La primera app móvil se creó en 1997: el juego Snake en Nokia.','Firebase puede mandar notificaciones a millones de celulares en segundos.','Instagram guarda tus fotos con persistencia en la nube para que no se borren.'];
let i=0;function cambiarDato(){i=(i+1)%datos.length;document.getElementById('datoCurioso').textContent=datos[i];}
const preguntas=[
{q:'¿Qué herramienta se usa para el control de versiones distribuido?',ops:['Photoshop','Git','Word'],correcta:1},
{q:'¿Qué base de datos local es la más usada en móvil?',ops:['SQLite','Netflix','Spotify'],correcta:0},
{q:'¿Qué sensor te da tu ubicación?',ops:['Acelerómetro','GPS','Micrófono'],correcta:1},
{q:'¿Qué es Flutter?',ops:['Un videojuego','Un toolkit para crear apps','Una red social'],correcta:1},
{q:'¿Qué hace la depuración?',ops:['Buscar y corregir errores','Borrar tu app','Poner música'],correcta:0},
{q:'¿Qué es un ORM?',ops:['Convertir tablas en objetos','Un juego','Un virus'],correcta:0},
{q:'¿Qué es un Content Provider?',ops:['Compartir datos entre apps','Un cargador','Un sensor'],correcta:0},
{q:'¿Qué significa FCM?',ops:['Firebase Cloud Messaging para notificaciones','Un celular','Una foto'],correcta:0},
{q:'¿Dónde se guardan las imágenes en Android?',ops:['res/drawable','En la papelera','En WhatsApp'],correcta:0},
{q:'¿Qué es Logcat?',ops:['Ventana que muestra lo que pasa en tu app','Un gato','Un juego'],correcta:0}
];
let actual=0,puntaje=0;
function mostrarPregunta(){const p=preguntas[actual];document.getElementById('preguntaQuiz').textContent=(actual+1)+'. '+p.q;const cont=document.getElementById('opcionesQuiz');cont.innerHTML='';p.ops.forEach((op,idx)=>{const b=document.createElement('button');b.textContent=op;b.onclick=()=>{if(idx===p.correcta){puntaje++;document.getElementById('resultadoQuiz').textContent='✅ ¡Correcto!';}else document.getElementById('resultadoQuiz').textContent='❌ Ups, esa no era. La correcta era: '+p.ops[p.correcta];document.getElementById('puntaje').textContent=puntaje+' / 10';};cont.appendChild(b);});}
function siguientePregunta(){actual++;if(actual>=preguntas.length){alert('¡Terminaste el quiz! Tu puntaje: '+puntaje+'/10 🎉');actual=0;puntaje=0;document.getElementById('puntaje').textContent='0 / 10';}document.getElementById('resultadoQuiz').textContent='';mostrarPregunta();}
mostrarPregunta();