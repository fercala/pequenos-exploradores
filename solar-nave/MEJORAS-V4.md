# Órbita 4 · las quince mejoras restantes

Versión 0.4.0. Se abre desde **Centro de misión**. Conserva las cinco mejoras de Órbita 3 y añade:

| Propuesta | Implementación |
| --- | --- |
| 3 · Emplazamientos históricos | Apollo 11, Bradbury Landing (Curiosity) y Jezero (Perseverance), fuentes y coordenadas, descenso elegido, modelos ilustrativos y registro de visita. También aparecen en el mapa de superficie. Los rovers históricos no representan su posición actual. |
| 5 · Rutas con escalas | Hasta doce destinos, con órbita, sobrevuelo o descenso en cada escala; añadir, quitar, iniciar, detener y reanudar. Los descensos pausan la ruta para explorar. |
| 6 · Piloto configurable | Maniobras guiadas de órbita/sobrevuelo con altura de 250–2000 u y duración de 8–90 segundos; descenso con el sistema existente y cancelación disponible. |
| 7 · Estaciones y acoplamiento | Estación ficticia Horizonte junto a cada mundo. Aproximación asistida y acoplamiento manual con límites de distancia, velocidad y alineación; desacoplamiento, suministros y mantenimiento. |
| 8 · Paseo espacial | Salida únicamente en vacío de juego, movimiento libre con mochila propulsora, inercia amortiguada, reserva de mochila, regreso cercano y línea de seguridad de 250 u. |
| 9 · Tres naves | Exploradora, Centella y Aurora con apariencia, escala, aceleración, velocidad y consumo distintos. Cambio en superficie o estación. |
| 10 · Recursos opcionales | Combustible y energía limitados, consumo por empuje, maniobras y luces, recarga en estación, detención del piloto al agotarse y suministro de emergencia. Se desactivan independientemente del modo con daños. |
| 11 · Daños y reparaciones | Propulsión, protección térmica y casco. El daño reduce empuje o aumenta pérdida de protección. Reparación en superficie, acoplado o junto a la nave durante una salida. Activos en Desafío con daños. |
| 13 · Exploración nocturna | Luz solar aproximada automática o amanecer, mediodía, atardecer y medianoche de demostración. Noche más oscura, estrellas y focos activos de Órbita 3. |
| 14 · Más lunas y planetas enanos | Ganímedes, Encélado, Plutón y Ceres; radio, gravedad, periodos, fichas y fuentes NASA/JPL. Atlas y navegación actualizados a 17 destinos. |
| 15 · Asteroide y cometa | Vesta y 67P, aterrizaje/exploración con baja gravedad, núcleo de dos lóbulos aproximado para 67P y cola visual ilustrativa. No se simula actividad cometaria real. |
| 16 · Instrumentos científicos | Gravímetro conectado al modelo de gravedad; radiómetro con escenario de iluminación; espectrómetro con curva y plantillas didácticas de roca/hielo. Lecturas registradas en el cuaderno. |
| 17 · Cuaderno científico | Lecturas, muestras, visitas, notas, servicios y fotografías con coordenadas/tiempo de expedición. Hasta 80 registros y seis miniaturas; exportación JSON e inclusión en la partida portable. |
| 18 · Campaña narrativa | «Archivos del hielo», cinco capítulos encadenados: gravedad terrestre, Apollo 11, muestra lunar, espectro marciano y espectro de 67P. Cada evento se comprueba en el mundo correspondiente y conserva el progreso. |
| 20 · Modo docente | Tres secuencias con rutas preparadas, seis preguntas, corrección explicada, respuestas guardadas y exportación de resultados sin cuentas ni envío de datos. |

## Uso

Las acciones usan botones, selectores, campos y los controles de vuelo existentes. No se requiere teclado. El mapa tiene alternativas a la selección gráfica y las opciones de accesibilidad de la versión anterior se mantienen.

Las rutas se reabren pausadas al recuperar/importar una partida para evitar que la nave inicie una maniobra sin avisar. El acoplamiento, la nave elegida, recursos, sistemas, cuaderno, capítulos y respuestas se conservan. Las partidas anteriores reciben valores iniciales compatibles.

## Límites del modelo

Las estaciones, flota, recursos, campaña y asistencia son ficticios. Las órbitas son trayectorias guiadas/circulares, sin transferencias orbitales reales ni efemérides. Los cuerpos pequeños usan una gravedad radial aproximada y tamaños muy ampliados para poder explorarlos. Su terreno no reproduce la forma real. Las texturas de los seis cuerpos nuevos reutilizan mapas de otros cuerpos como ilustración y se identifican como tales; las fuentes originales siguen en `assets/textures/CREDITS.md`.

El modelo de radiómetro no calcula temperatura de equilibrio, inercia térmica, estaciones ni meteorología; el espectrómetro no usa espectros observados ni calibración de longitudes de onda. Las muestras no son análisis mineralógicos reales. Solo las regiones de Tycho y Olimpo conservan datos numéricos de elevación medidos y reducidos.

Fuentes de nuevos destinos y lugares históricos: `catalog-v4.js`, con enlaces NASA/JPL, archivos de misiones y ESA. No se ha afirmado la existencia de vida en ninguno de los mundos.
