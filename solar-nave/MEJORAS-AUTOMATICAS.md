# Registro de mejoras de Órbita

Registro único para elegir mejoras nuevas, conservar su evidencia y evitar repetir trabajo. Inicializado el 17 de octubre de 2026 con las **40 mejoras ya publicadas** en las versiones 0.2.0, 0.3.0 y 0.4.0. La versión inicial y la creación de este registro no cuentan como mejoras automáticas nuevas.

## Cómo consultar y actualizar el registro

1. Antes de elegir una mejora, lee este archivo desde la versión vigente de `main`, los documentos de versión y las propuestas abiertas. Comprueba también el código: los títulos distintos pueden describir la misma función.
2. Compara el problema, la función afectada y el resultado esperado con las entradas existentes. No vuelvas a implementar una función que ya figura como publicada.
3. Una corrección o ampliación de una función existente necesita una diferencia concreta y demostrable: fallo reproducido o capacidad adicional. Enlázala con el ID anterior y explica esa diferencia.
4. Antes de empezar, añade una entrada `AUTO-001`, `AUTO-002`, etc., con estado **En curso**, objetivo, criterio de aceptación y relación con mejoras anteriores. Inclúyela en la rama y la propuesta de esa mejora. Si hay trabajo pendiente, reanúdalo antes de abrir otro. Una mejora en una propuesta abierta también cuenta como reservada.
5. Al verificar, registra archivos, comprobaciones, resultado y enlace a la propuesta. Usa **Verificada** si los cambios están comprobados pero todavía no se ha confirmado su publicación. Usa **Publicada** solo tras confirmar la incorporación a `main` y GitHub Pages. Si la confirmación llega después del cierre de la propuesta, complétala en una actualización documental; nunca inventes evidencia de publicación.
6. Conserva entradas **Bloqueadas** o **Descartadas**, con el motivo, para evitar intentos repetidos sin nueva información. No borres el historial ni renumeres IDs.

## Base publicada: primeras veinte mejoras

Estado de todas las entradas de esta tabla: **Publicada**, 2026-10-17, versión 0.2.0. Evidencia: [propuesta #2](https://github.com/fercala/pequenos-exploradores/pull/2), [corrección de reanudación #3](https://github.com/fercala/pequenos-exploradores/pull/3) y [MEJORAS.md](MEJORAS.md).

| ID | Función ya realizada | Alcance que no debe repetirse como novedad |
| --- | --- | --- |
| O2-001 | Vuelo continuo | Coordenadas compartidas, cambio de referencia y crucero manual. |
| O2-002 | Mapas planetarios | Trece mapas locales acreditados; Europa y Titán incluidos. |
| O2-003 | Controles ajustables | Tamaños, joystick movible y distribución para zurdos. |
| O2-004 | Rendimiento móvil | Resolución adaptativa, estrellas y detalle reducidos, límites de texturas. |
| O2-005 | Tutorial interactivo | Cinco pasos activados por acciones, omitir y repetir. |
| O2-006 | Aterrizaje manual | Tren, velocidad, actitud, colisiones y asistencia. |
| O2-007 | Exploración a pie | Caminar, saltar y regresar a la nave. |
| O2-008 | Rover | Conducir, retroceder, estacionar y medir distancia. |
| O2-009 | Tres lunas iniciales | Luna, Europa y Titán como destinos visitables. |
| O2-010 | Instrumentos de cabina | Brújula, velocidad vertical, horizonte y calor de entrada. |
| O2-011 | Gravedad diferenciada | Valores por cuerpo, variación con distancia y efecto en saltos. |
| O2-012 | Entrada atmosférica | Densidad, resistencia, calentamiento y daños simplificados. |
| O2-013 | Clima configurable | Partículas, nubes, bruma y turbulencia ilustrativas. |
| O2-014 | Órbitas y rotación | Periodos aproximados, giro retrógrado y reloj acelerable. |
| O2-015 | Atlas con dos escalas | Escala jugable/científica y enfoque por mundo. |
| O2-016 | Navegación asistida | Destino, distancia, tiempo, frenado y límite de crucero al aproximarse. |
| O2-017 | Actividades científicas | Mediciones, muestras, sondas, fotos y misiones por destino. |
| O2-018 | Audio opcional | Cabina, atmósfera y avisos; silencio exterior en vacío. |
| O2-019 | Modo fotografía | Ocultar HUD, cámara, zoom, exposición y descarga PNG. |
| O2-020 | Partidas portátiles | Exportar/importar JSON, validación y migración de guardados. |

## Segunda serie: veinte mejoras

Estado de todas las entradas de esta tabla: **Publicada**, 2026-10-17. Las cinco de 0.3.0 se incorporaron en [#4](https://github.com/fercala/pequenos-exploradores/pull/4); las quince de 0.4.0, en [#5](https://github.com/fercala/pequenos-exploradores/pull/5). Los números mantienen el orden de la segunda propuesta de veinte mejoras.

| ID | Función ya realizada | Versión | Alcance que no debe repetirse como novedad |
| --- | --- | --- | --- |
| O4-001 | Mapa de superficie | 0.3.0 | Ubicación, lugares de interés, coordenadas y destino de descenso. |
| O4-002 | Relieve medido | 0.3.0 | Rejillas LOLA de Tycho y MOLA de Olimpo; integración con malla y colisiones. |
| O4-003 | Emplazamientos históricos | 0.4.0 | Apollo 11, Curiosity y Perseverance; descenso, modelos y registro. |
| O4-004 | Escáner de aterrizaje | 0.3.0 | Pendiente, desnivel, agua, rocas y condiciones de aproximación. |
| O4-005 | Rutas con escalas | 0.4.0 | Hasta doce escalas; añadir, quitar, iniciar, detener y reanudar. |
| O4-006 | Piloto configurable | 0.4.0 | Órbita, sobrevuelo, descenso y parámetros de altura/duración. |
| O4-007 | Estación y acoplamiento | 0.4.0 | Horizonte, aproximación asistida, acoplamiento manual, salida y suministros. |
| O4-008 | Paseo espacial | 0.4.0 | Mochila en vacío, reserva, regreso y línea de seguridad. |
| O4-009 | Tres naves | 0.4.0 | Exploradora, Centella y Aurora; aspecto, empuje, velocidad y consumo. |
| O4-010 | Recursos limitados opcionales | 0.4.0 | Combustible, energía, recarga y suministro de emergencia. |
| O4-011 | Daños y reparaciones | 0.4.0 | Propulsión, protección térmica y casco, con consecuencias y reparación. |
| O4-012 | Focos de exploración | 0.3.0 | Luces orientadas para nave, rover y astronauta. |
| O4-013 | Exploración nocturna | 0.4.0 | Iluminación automática y horas solares de demostración. |
| O4-014 | Más lunas y planetas enanos | 0.4.0 | Ganímedes, Encélado, Plutón y Ceres; fichas, atlas y navegación. |
| O4-015 | Asteroide y cometa | 0.4.0 | Vesta y 67P explorables; baja gravedad, núcleo y cola ilustrativos. |
| O4-016 | Instrumentos científicos | 0.4.0 | Gravímetro, radiómetro, espectrómetro y registro de lecturas. |
| O4-017 | Cuaderno científico | 0.4.0 | Notas, muestras, fotos, visitas, lecturas y exportación. |
| O4-018 | Campaña narrativa | 0.4.0 | Cinco capítulos de Archivos del hielo, con avance comprobado. |
| O4-019 | Accesibilidad | 0.3.0 | Texto grande, contraste, avisos, movimiento reducido y botones sin gestos. |
| O4-020 | Modo docente | 0.4.0 | Tres secuencias, seis preguntas, explicaciones y resultados exportables. |

Evidencia detallada: [MEJORAS-V3.md](MEJORAS-V3.md), [MEJORAS-V4.md](MEJORAS-V4.md), [VERIFICACION.md](VERIFICACION.md). La versión 0.4.0 pasó 42 pruebas automáticas y una revisión de navegador; esas comprobaciones no equivalen a pruebas en todos los teléfonos físicos.

## Mejoras automáticas posteriores

Antes de asignar un ID nuevo, comprueba `main`, las entradas siguientes y las propuestas abiertas. Reanuda primero cualquier mejora pendiente.

### AUTO-001 · Conservar el combustible de la nave durante la exploración exterior

- **Inicio / última actualización:** 2026-10-17 22:23 UTC / 22:27 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** `mission-control.js` envía el mismo deslizador de propulsión a `consumeResources` tanto en nave como a pie, en rover y durante un paseo espacial. `systems.js` lo aplica siempre al depósito de la nave. Así, con recursos limitados, moverse fuera de ella gasta su combustible aunque permanezca estacionada.
- **Relación:** O4-010 (recursos), O4-008 (mochila), O2-007 (caminata) y O2-008 (rover). Es una corrección del consumo por vehículo; no una nueva implementación de esas funciones.
- **Criterio de aceptación:** caminar, conducir el rover o propulsarse con la mochila no reduce el combustible de la nave; la mochila sigue consumiendo su propia reserva; el vuelo y el piloto automático de la nave mantienen su consumo. Pausa, acoplamiento y guardados conservan su comportamiento.
- **Rama:** `codex/orbita-auto-001-combustible-exterior`.
- **Cambio:** `systems.js` descuenta combustible solo cuando el vehículo activo es la nave; `mission-control.js` transmite ese vehículo y explica la separación de reservas en Recursos. Versión 0.4.1; caché propia v7 para distribuir el arreglo sin conexión.
- **Validación:** 44 pruebas satisfactorias y construcción estática. Dos regresiones nuevas cubren caminata, rover y EVA, los tres modelos, marcha atrás, consumo de vuelo/piloto y reserva propia de la mochila. Reproducción anterior: 10 s de mochila al máximo bajaban el depósito de 100 a 98,2 %. En navegador, después del paseo el depósito permanece en 100,0 %, la mochila baja al 97 % y la energía sigue activa (99,7 %). Sin errores de consola. Texto revisado en 390 × 844; teléfonos físicos pendientes.
- **Propuesta:** [#7](https://github.com/fercala/pequenos-exploradores/pull/7). Commit de código: `401a159f1e279e152aa7fdf176849df4ab11dfdb`; incorporación a main: `ffac750e1106849edc611375967708f255c05c11`.
- **Publicación confirmada:** 2026-10-17 22:27 UTC. [GitHub Pages: ejecución 39075076241 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39075076241). Los módulos públicos devuelven HTTP 200, incluyen el guardado de combustible por vehículo y transmiten el vehículo activo; el gestor propio sirve caché v7. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-002 · Exigir la superficie para el capítulo final de 67P

- **Inicio / última actualización:** 2026-10-17 23:23 / 2026-10-18 05:51 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** el objetivo final dice «Aterriza en 67P y registra un espectro», pero `storyAdvance` solo comprueba mundo y tipo de lectura. Un espectro durante vuelo bajo puede completar la campaña sin haber aterrizado.
- **Relación:** O4-018 (campaña) y O4-016 (instrumentos). Esta corrección comprueba la condición de superficie que ya exige el objetivo; no añade otra campaña ni otro instrumento.
- **Criterio de aceptación:** un espectro desde vuelo, EVA, acoplamiento o una maniobra no completa el capítulo final. Una nueva lectura tras aterrizar, o durante caminata/rover cerca del suelo, sí lo completa. La lectura en vuelo sigue guardándose y explica el requisito pendiente. Se conservan los otros capítulos y las partidas ya completadas.
- **Rama:** `codex/orbita-auto-002-final-en-superficie`.
- **Cambio:** condición explícita de superficie para el último capítulo, comprobada desde el controlador con vehículo, aterrizaje, altura real del terreno, maniobra y acoplamiento. La lectura aérea se conserva y explica el requisito. Se limpia ese aviso al completar. Versión 0.4.2 y caché propia v8.
- **Archivos:** systems.js, mission-control.js, tests/systems.test.mjs, tests/mission-control.test.mjs, package.json, README.md y sw.js, además de este registro.
- **Validación:** 46 pruebas satisfactorias y construcción estática. Regresiones para vuelo bajo, EVA, maniobra, acoplamiento, altura excesiva, nave aterrizada, caminata, rover y partidas completadas. Navegador: prueba de integración con el laboratorio y controlador reales, estado de mundo controlado: lectura en vuelo conserva 4/5 y un registro; nueva lectura en superficie deja 5/5 y dos registros, sin aviso pendiente ni errores de consola. Mensaje revisado a 390 × 844; no probado en teléfono físico. La importación de la partida de prueba no conservó el escenario tras reanudar; se usó la prueba aislada y se deja el posible fallo de importación para otra ejecución, sin añadirlo a esta mejora.
- **Propuesta:** [#9](https://github.com/fercala/pequenos-exploradores/pull/9). Commit de código: 8f1707bd531b43086904d644cf4f9d6da7713fa8; incorporación a main: 7845713cb4ddc009802daaaa620db1417505e170.
- **Publicación confirmada:** 2026-10-18 05:51 UTC. [GitHub Pages: ejecución 39101933336 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39101933336). Los módulos públicos devuelven HTTP 200 e incluyen la exigencia de superficie, su comprobación y el mensaje de lectura guardada; el gestor propio sirve caché v8. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-003 · Conservar la partida importada durante la recarga

- **Inicio / última actualización:** 2026-10-18 05:53 / 06:19 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** al importar se escribe el archivo validado y se recarga, pero pagehide y visibilitychange llaman a persist con la expedición antigua. En AUTO-002, dos importaciones de 67P reanudaron la Tierra. Reproducción del orden de escrituras: importada comet67p; tras persist de la sesión anterior, earth.
- **Relación:** O2-020 (partidas portátiles); hallazgo pendiente documentado en AUTO-002. Corrige la sustitución del guardado durante la transición, sin añadir otra función de importación.
- **Diferencia:** los archivos ya se validan; falta impedir que la sesión saliente vuelva a escribir después de una importación válida.
- **Criterio de aceptación:** importar y continuar recupera destino, progreso y campaña del archivo. Los eventos de salida, pérdida de foco y guardado periódico no lo sobrescriben. Archivo inválido o fallo de almacenamiento conserva la sesión y permite seguir guardando. Tras recargar, los nuevos guardados funcionan normalmente.
- **Rama:** codex/orbita-auto-003-importacion-segura.
- **Cambio:** una sesión de guardado protege la sustitución válida hasta recargar. persist y los eventos de salida comparten esa protección. Una escritura fallida libera la protección. La siguiente página crea una sesión nueva que guarda normalmente. Ajustes y Expedición usan el mismo importador. Versión 0.4.3; caché propia v9.
- **Archivos:** core.js, app.js, expansion.js, tests/expansion.test.mjs, package.json, README.md y sw.js, además de este registro.
- **Validación:** 48 pruebas satisfactorias y construcción estática. Dos regresiones cubren escrituras tardías de salida/foco/guardado periódico, progreso/campaña/cuaderno importados, rechazo de archivo inválido, fallo de almacenamiento y guardado de la siguiente sesión. Navegador real: importar 67P desde una sesión en Tierra, continuar en 67P con tres destinos visitados, cuatro capítulos completados y la muestra lunar del archivo; añadir una nota nueva, recargar y recuperar ambas entradas. Archivo inválido mantiene la sesión abierta. Sin errores de consola. Progreso revisado a 390 × 844; teléfono físico pendiente. Evidencia local: outputs/orbita-auto-003-prueba.png y outputs/orbita-auto-003-campana.png.
- **Propuesta:** [#11](https://github.com/fercala/pequenos-exploradores/pull/11). Commit de código: 8c830174cf65d1a50ab8d7dae3b63174fcabaebd; incorporación a main: be1c5c5797e8c0ad15f00ffb3f662b616c84dd9a.
- **Publicación confirmada:** 2026-10-18 06:19 UTC. [GitHub Pages: ejecución 39103571101 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39103571101). core.js, app.js, expansion.js y sw.js públicos devuelven HTTP 200; contienen la protección de la sesión, su uso en persist y en el importador y caché v9. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-004 · Reiniciar el recorrido al preparar una ruta nueva

- **Inicio / última actualización:** 2026-10-18 06:56 / 07:30 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** los botones de preparar ruta de campaña y docente sustituyen las escalas pero conservan routeIndex y routePhase anteriores. Reproducción con el controlador vigente: ruta nueva de cuatro escalas, índice 4 y fase finish; Reanudar responde «No quedan escalas pendientes».
- **Relación:** O4-005 (rutas), O4-018 (campaña) y O4-020 (docente). Corrige el estado de una ruta recién sustituida; no añade otro planificador ni reinicia los capítulos o respuestas.
- **Diferencia:** Iniciar ya fuerza la primera escala; preparar una ruta nueva debe descartar también la posición del recorrido anterior para que Reanudar no omita escalas ni rechace el recorrido.
- **Criterio de aceptación:** preparar campaña o clase deja índice 0 y fase travel, conserva los progresos científicos/docentes y permite Reanudar desde el primer destino. Una ruta activa sigue protegida frente a sustituciones y una ruta pausada sin sustituir conserva su avance.
- **Rama:** codex/orbita-auto-004-ruta-nueva.
- **Cambio:** la preparación de recorridos de campaña y docente reinicia índice y fase mediante una función común. Se mantienen las guardas contra sustituir rutas activas y el avance de rutas pausadas que no se sustituyen. Versión 0.4.4; caché propia v10.
- **Archivos:** mission-control.js, tests/mission-control.test.mjs, package.json, README.md y sw.js, además de este registro.
- **Validación:** 50 pruebas satisfactorias y construcción estática. Dos regresiones prueban los botones de campaña y clase con índices anteriores 1, 4 y 12, conservación de capítulos/respuestas/cuaderno, viaje hacia el primer destino, protección de rutas activas y reanudación de una ruta pausada sin sustituir. Navegador real: partida en Marte con ruta anterior terminada; preparar campaña y Reanudar inicia RUMBO A TIERRA y marca Tierra como primera escala actual. Sin errores de consola. Vista 390 × 844 revisada; teléfono físico pendiente. Evidencia local: outputs/orbita-auto-004-prueba.png.
- **Propuesta:** [#13](https://github.com/fercala/pequenos-exploradores/pull/13). Commit de código: 3ff7cd8cd861fe61bf461a015cfc63c4fa95f4a5; incorporación a main: c3bd419c8c281d939338b214e0cd8bf9b05c911b.
- **Publicación confirmada:** 2026-10-18 07:30 UTC. [GitHub Pages: ejecución 39107882374 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39107882374). mission-control.js público devuelve HTTP 200 e incluye el reinicio del recorrido y su uso tanto en campaña como en clase; sw.js devuelve HTTP 200 y caché v10. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### Plantilla de entrada

- **ID / título:** AUTO-XXX · Nombre concreto.
- **Fecha de inicio / última actualización:** fecha y hora UTC.
- **Estado:** En curso / Bloqueada / Descartada / Verificada / Publicada.
- **Problema u oportunidad:** qué sucede actualmente y cómo se comprobó.
- **Relación con mejoras anteriores:** IDs relacionados; diferencia que justifica trabajo nuevo.
- **Criterio de aceptación:** resultado observable que debe conseguirse.
- **Cambio y archivos:** qué se modificó.
- **Validación:** comprobaciones realizadas y su resultado; límites pendientes.
- **Rama / propuesta / commit:** enlaces o referencias comprobadas.
- **Publicación:** enlace del despliegue satisfactorio o evidencia equivalente; pendiente hasta comprobarla.
- **Bloqueo o descarte:** motivo y condición concreta que permitiría reanudar, si corresponde.
