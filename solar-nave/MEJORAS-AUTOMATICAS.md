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

### AUTO-005 · Conservar la siguiente escala al quitar destinos

- **Inicio / última actualización:** 2026-10-18 07:55 / 08:01 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** Quitar elimina la escala con splice pero no ajusta routeIndex. En una ruta Tierra → Luna → Marte pausada antes de Marte (índice 2), quitar Tierra deja dos escalas e índice 2: Reanudar dice que no quedan escalas, aunque Marte sigue pendiente. Otros índices pueden saltarse destinos.
- **Relación:** O4-005 (edición/reanudación de rutas) y AUTO-004. AUTO-004 reinicia recorridos nuevos de campaña/clase; esta corrección conserva la identidad de la próxima escala al eliminar una escala de un recorrido existente.
- **Criterio de aceptación:** quitar una escala anterior a la pendiente mantiene el mismo destino pendiente; quitar la pendiente continúa por la siguiente; quitar una posterior no altera la próxima. Nunca salta destinos por un índice desplazado. Se conserva la protección de rutas activas, las rutas vacías y el progreso de campaña/cuaderno.
- **Rama:** codex/orbita-auto-005-quitar-escala.
- **Cambio:** al quitar una escala anterior se ajusta el índice para conservar el destino pendiente. Se reinicia la fase de aproximación tras editar, para no tratar una escala sustituta como una maniobra ya terminada. No cambia el formato de partidas. Versión 0.4.5; caché propia v11.
- **Archivos:** mission-control.js, tests/mission-control.test.mjs, package.json, README.md y sw.js, además de este registro.
- **Validación:** 52 pruebas satisfactorias y construcción estática. La regresión falla antes del arreglo (espera Marte y obtiene Venus) y pasa después. Dos regresiones cubren quitar antes, en y después de la escala pendiente, conservar campaña/cuaderno, ruta vacía y protección de ruta activa. Navegador real: crear Tierra → Marte, completar órbita terrestre, detener en segunda escala, quitar Tierra y Reanudar; comienza la maniobra orbital de Marte con RUTA 1/1. Sin errores de consola. Vista 390 × 844 revisada; teléfono físico pendiente. Evidencia local: outputs/orbita-auto-005-prueba.png.
- **Propuesta:** [#15](https://github.com/fercala/pequenos-exploradores/pull/15). Commit de código: 097797d8bd6f6a6970b3e3d51a7eaebf024d658f; incorporación a main: f3d658ab881d0e67f4d093476ad37bd99f3d8f71.
- **Publicación confirmada:** 2026-10-18 08:01 UTC. [GitHub Pages: ejecución 39109781871 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39109781871). mission-control.js público devuelve HTTP 200 e incluye el ajuste de índice y fase al quitar una escala; sw.js devuelve HTTP 200 y caché v11. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-006 · Conservar el borrador de una anotación

- **Inicio / última actualización:** 2026-10-18 08:53 / 08:56 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** notebook crea un textarea vacío en cada apertura y solo lee su contenido al pulsar Guardar nota. Cerrar el panel o abrir otro apartado elimina una anotación todavía en edición.
- **Relación:** O4-017 (cuaderno) y O2-020 (partida portable). Añade conservación de borrador; las notas ya guardadas y la protección de importación de AUTO-003 mantienen su función.
- **Diferencia:** guardar una nota ya existe; falta conservar texto en edición sin convertirlo prematuramente en un registro científico.
- **Criterio de aceptación:** escribir, cerrar/cambiar de panel y volver conserva el texto. El borrador viaja con el guardado y la partida exportada, con límite de 600 caracteres y migración compatible. Guardar nota crea un único registro y limpia el borrador; no crea registros al editar ni duplica la nota al reabrir.
- **Rama:** codex/orbita-auto-006-borrador-cuaderno.
- **Cambio:** el texto en edición forma parte de la campaña como noteDraft (hasta 600 caracteres), se restaura asignándolo al valor del campo y se incorpora a los guardados/partidas portátiles. Cambiar de panel conserva el borrador. Guardar nota crea el registro y limpia el borrador antes de persistir, sin duplicación. Se explica su funcionamiento junto al campo, con descripción accesible. Versión 0.4.6; caché propia v12.
- **Archivos:** systems.js, mission-control.js, tests/systems.test.mjs, tests/mission-control.test.mjs, package.json, README.md y sw.js, además de este registro.
- **Validación:** 54 pruebas satisfactorias y construcción estática. Regresión falla antes del cambio porque no se conserva el borrador, y pasa después. Pruebas cubren navegación entre paneles, restauración, guardado único, migración de partidas antiguas, tipos inválidos, texto plano y límite importado. Navegador real: escribir sin Guardar nota, cerrar/reabrir, recargar/Continuar y recuperar el texto con cero registros; Guardar nota deja un registro y campo vacío; segundo clic no duplica. Vista 390 × 844 revisada, sin errores de consola; teléfono físico pendiente. Evidencia local: outputs/orbita-auto-006-borrador.png.
- **Propuesta:** [#17](https://github.com/fercala/pequenos-exploradores/pull/17). Commit de código: ba280d37eacfb73bda28aa975a119ce3ba2e597b; incorporación a main: c7812c28a92408ec7ddf66b7b59e33749c8942e3.
- **Publicación confirmada:** 2026-10-18 08:56 UTC. [GitHub Pages: ejecución 39113318789 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39113318789). systems.js y mission-control.js públicos devuelven HTTP 200 e incluyen la migración limitada del borrador, restauración del campo y explicación; sw.js devuelve HTTP 200 y caché v12. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-007 · Recuperar la pausa durante el vuelo en móvil

- **Inicio / última actualización:** 2026-10-18 09:57 / 09:59 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** el botón de pausa existe en la cabecera y funciona en escritorio, pero la regla .topbar #pause-btn lo oculta por debajo de 701 px. La vista móvil no ofrece ese control de vuelo.
- **Relación:** O2-003 (controles táctiles) y O4-019 (accesibilidad). Recupera en móvil una acción que ya existía en escritorio; no añade otra función de pausa ni modifica las partidas.
- **Diferencia:** los paneles detienen temporalmente la simulación, pero no sustituyen un botón visible para pausar y continuar conservando la vista de vuelo.
- **Criterio de aceptación:** Pausar y Continuar son visibles y utilizables en móvil, con área mínima de 44 px. La cabecera no se superpone ni desborda a 320 y 390 px. Pausar muestra EN PAUSA, continuar devuelve el vuelo y los otros controles siguen accesibles. El escritorio conserva la misma acción.
- **Rama:** codex/orbita-auto-007-pausa-movil.
- **Cambio:** el botón de pausa deja de ocultarse en móvil y tiene 44 × 44 px; los iconos vecinos y Destinos mantienen altura táctil mínima de 44 px. En pantallas estrechas se compacta la marca para que quepan todas las acciones. Se reutiliza el mismo botón y la lógica existente de pausa/continuación. Versión 0.4.7; caché propia v13.
- **Archivos:** style.css, package.json, README.md y sw.js, además de este registro.
- **Validación:** 54 pruebas existentes satisfactorias y construcción estática. No se cambia la lógica de simulación ni el formato de guardado. Navegador real a 390 × 844 y 320 × 844: botón visible, Pausar muestra EN PAUSA y cambia a Continuar; Continuar recupera VUELO ESPACIAL. Medición DOM: pausa de 44 × 44 px, cabecera sin solapamientos, todas sus acciones dentro de los límites en ambos tamaños (a 320, último botón entre x=264 y 308). Escritorio 1280 × 800 conserva la pausa. Sin errores de consola; teléfono físico pendiente. Evidencia local: outputs/orbita-auto-007-pausa.png.
- **Propuesta:** [#19](https://github.com/fercala/pequenos-exploradores/pull/19). Commit de código: 64a454a79ac1be31a2c5e1f19af98ad6d5bf17a6; incorporación a main: e2302103e2da9dc8441c37ba99eea6c2d069e272.
- **Publicación confirmada:** 2026-10-18 09:59 UTC. [GitHub Pages: ejecución 39117443578 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39117443578). style.css público devuelve HTTP 200 e incluye pausa visible y cabecera compacta; sw.js devuelve HTTP 200 y caché v13. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-008 · Identificar el modo de mirar sin girar la nave

- **Inicio / última actualización:** 2026-10-18 10:53 / 10:56 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** el botón look-btn tiene solo el símbolo ◎ cuando el CSS móvil oculta Mirar, sin nombre accesible explícito. Activarlo cambia el arrastre de orientación a cámara, pero no muestra explicación ni un aviso persistente fuera del color del botón.
- **Relación:** O2-003 (controles), O2-016 (navegación) y O4-019 (accesibilidad). Aclara un modo existente; no añade otro modo de cámara ni modifica el pilotaje.
- **Criterio de aceptación:** el control conserva un nombre descriptivo en móvil y escritorio y comunica su estado pulsado. Activar explica que arrastrar mueve la cámara sin girar la nave y mantiene un aviso visible durante el vuelo libre; desactivar lo retira y restablece la vista como antes. Pausa, aterrizaje, piloto y peligro cercano al suelo conservan prioridad sobre ese aviso. No se modifican partidas ni física.
- **Rama:** codex/orbita-auto-008-modo-mirar.
- **Cambio:** nombre accesible y ayuda del botón: Mirar alrededor moviendo solo la cámara. Se anuncia activación/desactivación y se mantiene un aviso de modo durante vuelo libre. La pausa, aterrizaje, piloto y aproximación peligrosa conservan prioridad en el aviso principal. Se reutiliza el estado pulsado y el comportamiento original de cámara, sin alterar física ni partidas. Versión 0.4.8; caché propia v14.
- **Archivos:** index.html, app.js, package.json, README.md y sw.js, además de este registro.
- **Validación:** 54 pruebas existentes satisfactorias y construcción estática. Navegador real: control accesible con estado 0/1; activar muestra explicación y aviso, pausar lo sustituye, continuar lo recupera, viajar a Luna muestra PILOTO AUTOMÁTICO, cancelar y desactivar retira el aviso. Vista 390 × 844 inspeccionada; a 320 × 844 el aviso mide 218 px y queda dentro de pantalla. Sin errores de consola. La prioridad de peligro/aterrizaje conserva las condiciones previas y se revisó en código; no se reprodujo un impacto. Teléfono físico pendiente. Evidencia local: outputs/orbita-auto-008-mirar.png.
- **Propuesta:** [#21](https://github.com/fercala/pequenos-exploradores/pull/21). Commit de código: c8e6834b524ef4dd0e46e574fdfe15a1109339ab; incorporación a main: bf5f9e80b7297205674814e921ffcefe27bbc499.
- **Publicación confirmada:** 2026-10-18 10:56 UTC. [GitHub Pages: ejecución 39121142854 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39121142854). La página y app.js públicos devuelven HTTP 200 e incluyen el nombre accesible y el aviso persistente del modo mirar; sw.js devuelve HTTP 200 y caché v14. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-009 · Volver a la expedición abierta sin recargar un guardado

- **Inicio / última actualización:** 2026-10-18 11:59 / 12:03 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** pulsar la marca abre la bienvenida y ofrece Continuar expedición desde readSave. Durante una maniobra persist no guarda; Continuar carga el último estado estable mediante start(true), pero deja state.auto activo. Puede combinar una posición/campaña antigua con una maniobra que ya estaba en curso. Comenzar expedición ya retorna a la sesión abierta, pero su nombre no describe esa acción.
- **Relación:** O2-001 (vuelo), O2-020 (partidas) y navegación de la versión inicial. AUTO-003 protege la importación de archivos al recargar; esta corrección trata el regreso desde inicio durante una sesión viva, sin importar archivos ni sustituir guardados.
- **Criterio de aceptación:** al abrir inicio con una expedición viva aparece Volver a la expedición, sin una segunda acción que cargue un guardado antiguo. Volver conserva el mundo, maniobra, tiempo y progreso actuales. La bienvenida tras recargar sigue ofreciendo Comenzar y Continuar desde el guardado cuando existe. La pantalla de inicio sigue deteniendo temporalmente la simulación.
- **Rama:** codex/orbita-auto-009-volver-expedicion.
- **Cambio:** abrir inicio desde la expedición ofrece Volver a la expedición y oculta la recuperación desde disco, evitando cargar un estado anterior sobre la maniobra viva. Reutiliza el regreso existente sin restaurar el guardado. Tras recargar, la bienvenida conserva Comenzar y Continuar como antes. Versión 0.4.9; caché propia v15.
- **Archivos:** app.js, package.json, README.md y sw.js, además de este registro.
- **Validación:** 54 pruebas existentes satisfactorias y construcción estática. Navegador real: durante Tierra → Marte, inicio ofrece solo Volver; el progreso DOM permanece en 71,3206 % y reloj 00:00:14 mientras el diálogo está abierto. Volver mantiene el viaje y avanza a 72,9894 %, sin reiniciar el reloj. Tras recargar se ven Comenzar y Continuar; Continuar recupera el guardado de Marte. Vista de inicio revisada a 390 × 844 y escritorio; sin errores de consola. Teléfono físico pendiente. Evidencia local: outputs/orbita-auto-009-volver.png.
- **Propuesta:** [#23](https://github.com/fercala/pequenos-exploradores/pull/23). Commit de código: 0f35269c13dc2de286818238cb89a2101b4f473f; incorporación a main: 5eb95c4e2adbb8bdc841d71ab0bc0eb35196590d.
- **Publicación confirmada:** 2026-10-18 12:03 UTC. [GitHub Pages: ejecución 39125648197 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39125648197). app.js público devuelve HTTP 200 e incluye Volver a la expedición y oculta la recuperación de disco en ese contexto; sw.js devuelve HTTP 200 y caché v15. [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### SOL-001 · Expedición de superficie del tripulante (petición directa)

- **Inicio / última actualización:** 2026-10-18 12:17 / 12:31 UTC; petición directa posterior a AUTO-009.
- **Estado:** Publicada.
- **Problema / petición:** el usuario quiere que el tripulante explore, camine y realice actividades. La caminata, salto, muestra, medición y rover existen (O2-007/008/017), pero están dispersos en menús y la animación del astronauta es estática.
- **Diferencia / alcance:** acceso contextual al bajar de la nave, mandos de marcha claros, animación al caminar, mochila de actividades con progreso por mundo, recorrido a pie y baliza 3D persistente. Reutiliza las muestras, mediciones, rover y fotografías existentes; no las presenta como funciones nuevas.
- **Relación:** O2-007, O2-008, O2-017, O4-017 y O2-020. Conserva AUTO-006 (borradores) y demás correcciones publicadas.
- **Criterio de aceptación:** aterrizar, salir a pie, caminar con mouse/tacto, saltar, examinar, tomar una muestra, colocar una baliza visible y orientarse/volver a la nave sin teclado. Progreso y baliza se conservan al recuperar/exportar una partida; no hay caminata en gigantes gaseosos. El movimiento reducido y la descarga sin conexión siguen funcionando.
- **Rama:** codex/orbita-explorador-superficie.
- **Cambio:** versión 0.5.0, kit de superficie contextual, marcha identificada, mochila con acciones/objetivos, recorrido por mundo, baliza 3D persistente, orientación de regreso y animación del tripulante. Se reutilizan salto, muestra, medición, foto y rover. Cámara de seguimiento adaptada con zoom. La nave conserva Despegar. Detalles: MEJORAS-V5.md.
- **Archivos:** field-data.js, field-expedition.js, expansion.js, world-v2.js, systems.js, app.js, index.html, style.css, sw.js, scripts/build.mjs, tests/field.test.mjs, package.json, README.md, MEJORAS-V5.md y este registro. Solo solar-nave.
- **Validación:** 61 pruebas satisfactorias y construcción estática. Siete casos nuevos para distancia sin saltos verticales, migración y límites, objetivos científicos por mundo, animación/movimiento reducido, baliza anclada, retorno/orientación/despegue y guardas de superficie. Navegador real en Tierra: aterrizar, salir, caminar 189 m simulados, saltar, examinar, tomar muestra, colocar baliza, completar 4/4, recargar y conservar datos, orientar regreso (102 → 9 m), embarcar, usar rover, bajar y despegar. Sin errores de consola. Escritorio y móvil 390/320 px; controles rápidos de 61 × 48 px a 320. No se afirma prueba manual en los 17 mundos ni en un teléfono físico. Evidencia local: outputs/orbita-explorador-superficie.png y outputs/orbita-explorador-actividades.png. Módulos nuevos en caché v16; las comprobaciones de aislamiento/sin conexión siguen pasando.
- **Propuesta:** [#25](https://github.com/fercala/pequenos-exploradores/pull/25). Commit de código: 5b56a7e87c02ef63302a21fa2a734034b58e25c3; incorporación a main: 1e454c857492150889aade9da1f801beee58318a.
- **Publicación confirmada:** 2026-10-18 12:31 UTC. [GitHub Pages: ejecución 39127544499 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39127544499). field-expedition.js, field-data.js, world-v2.js, página y sw.js públicos devuelven HTTP 200. Se verifican mochila, colocación persistente de baliza, animación, identificador de marcha y módulos nuevos en caché v16. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-010 · Conservar el rover estacionado al recuperar una partida

- **Inicio / última actualización:** 2026-10-18 12:57 / 13:01 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** changeVehicle conserva roverParked solo en memoria; snapshot, restore y validatePortable lo omiten. Al salir del rover lejos de la nave y recuperar o importar la partida, desaparece el vehículo estacionado y no se puede embarcar allí.
- **Relación / diferencia:** O2-008 (rover), O2-020 (partidas) y SOL-001 (mochila). No añade otro rover ni repite las balizas persistentes: conserva posición y orientación del vehículo existente y limita su ubicación al mundo guardado.
- **Criterio de aceptación:** bajar del rover, guardar y recuperar/exportar/importar conserva su ubicación y orientación y permite embarcar cerca. Partidas antiguas sin ubicación siguen siendo compatibles. Datos inválidos o de otro mundo no generan un rover fantasma. Cambiar de mundo limpia el estacionamiento anterior.
- **Rama:** codex/orbita-auto-010-rover-guardado.
- **Cambio:** versión 0.5.1; posición y orientación del rover estacionado en guardado local y archivo portátil, con validación compartida al recuperar/importar. El estacionamiento se limpia al cambiar de mundo y se dibuja con el mismo apoyo sobre el suelo que al conducir. Campo opcional compatible con partidas antiguas. Caché propia v17.
- **Archivos:** expansion.js, simulation.js, world-v2.js, tests/expansion.test.mjs, package.json, README.md, sw.js y este registro.
- **Validación:** 64 pruebas satisfactorias y construcción estática. Casos nuevos: ida/vuelta por guardado y serialización portátil, copia independiente de coordenadas, compatibilidad antigua, descarte de datos inválidos/de otro mundo/gigante gaseoso y transformación visual estacionada. Navegador real: Tierra, conducir 158 m lejos de la nave, bajar, recargar, Continuar y volver a conducir desde el rover estacionado. Escritorio y vista móvil 390 × 844, sin errores de consola. Evidencia local: outputs/orbita-auto-010-rover.png. El selector de importación y un teléfono físico no se probaron manualmente en esta ejecución; la ruta de validación portátil sí se cubre automáticamente.
- **Propuesta:** [#27](https://github.com/fercala/pequenos-exploradores/pull/27). Commit de código: 1a74cb7e8281c477cf0a490f8e5f4abc3e48f5da; incorporación a main: 4ff656613f71a30c90ea7512eb485b6933d5934a.
- **Publicación confirmada:** 2026-10-18 13:01 UTC. [GitHub Pages: ejecución 39129675697 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39129675697), sobre el commit de incorporación. expansion.js, simulation.js y world-v2.js públicos devuelven HTTP 200 y contienen persistencia, validación y colocación del rover. package.json confirma 0.5.1 y sw.js confirma caché v17 (HTTP 200). [Abrir el juego](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-011 · Recoger muestras únicamente apoyado en el terreno

- **Inicio / última actualización:** 2026-10-18 15:00 / 15:06 UTC; investigación iniciada en la ejecución anterior, sin cambios publicados.
- **Estado:** Publicada.
- **Problema comprobado:** missionAllowed permite sample con solo rocky y vehicle walk: devuelve true a 100 m de altura y durante un salto. La mochila SOL-001 protege su entrada, pero Expedición y Misiones llaman a science directamente y permiten registrar/completar muestras en el aire.
- **Relación / diferencia:** O2-007 (saltos), O2-017 (muestras), O4-017 (cuaderno) y SOL-001 (mochila). AUTO-002 condiciona un espectro de la campaña final; esta corrección unifica la condición física de recogida de muestras en todos los menús. No añade otra actividad ni borra muestras anteriores.
- **Criterio de aceptación:** solo el tripulante a pie, en mundo sólido, cerca del suelo y sin salto/maniobra puede recoger una muestra. Un intento inválido no completa misión ni añade registro y explica el requisito dentro del panel. Tras tocar suelo se puede recoger normalmente; mediciones y sondas conservan sus reglas.
- **Rama:** codex/orbita-auto-011-muestras-suelo.
- **Cambio:** versión 0.5.2; la condición compartida de muestras exige caminata en mundo sólido, altura del tripulante entre 0 y 2,1 unidades sobre el terreno, salto menor de 0,01 y ausencia de maniobra. Expedición, Misiones y Mochila pasan por la misma validación. El rechazo se explica en science-result con role status además del aviso existente. Las muestras ya guardadas no se alteran. Caché propia v18.
- **Archivos:** simulation.js, expansion.js, tests/expansion.test.mjs, package.json, README.md, sw.js y este registro.
- **Validación:** 65 pruebas satisfactorias y construcción estática. Regresión con altura excesiva, negativa, ausente y NaN; salto, vehículo incorrecto, gigante y maniobra; reanudación válida y reglas de medición/sonda conservadas. Navegador real: viaje y descenso en Luna, salida a pie, salto, rechazo desde Expedición y Misiones con muestra todavía pendiente; tras tocar suelo se registra la muestra y, al reabrir Misiones, aparece completada. Revisión de escritorio y 390 × 844, sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-011-muestra.png. Teléfono físico y auditoría de lector de pantalla pendientes.
- **Propuesta:** [#29](https://github.com/fercala/pequenos-exploradores/pull/29). Commit de código: 9ccfc27d16bcc666dfa6745211ba91340dbbef9d; incorporación a main: 513b57b812f961985bf212767cf3ad897fce13c7.
- **Publicación confirmada:** 2026-10-18 15:06 UTC. [GitHub Pages: ejecución 39138885738 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39138885738), sobre el commit de incorporación. simulation.js y expansion.js públicos devuelven HTTP 200 y contienen la condición de proximidad y transmisión del salto; package.json confirma 0.5.2 y sw.js caché v18, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

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
