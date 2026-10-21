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

### AUTO-012 · Actualizar las misiones completadas sin reabrir el panel

- **Inicio / última actualización:** 2026-10-18 15:57 / 16:00 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** renderMissions calcula los estados solo al abrir. complete modifica el progreso pero no el panel. Durante la comprobación de AUTO-011, una muestra válida mostraba Muestra virtual registrada mientras la lista seguía Pendiente; solo al reabrir aparecía completada.
- **Relación / diferencia:** O2-017 (misiones) y AUTO-011 (requisitos de recogida). La condición científica ya funciona: esta corrección muestra inmediatamente el progreso real, evitando incertidumbre y repeticiones innecesarias. No añade otra actividad ni cambia sus requisitos.
- **Criterio de aceptación:** una medición o muestra válida cambia su fila a Completada con el panel abierto; un rechazo mantiene Pendiente. Se conserva el foco del botón y el texto del resultado; la actualización del estado puede anunciarse a tecnologías de asistencia. Reabrir y recuperar partidas conservan los mismos estados.
- **Rama:** codex/orbita-auto-012-estado-misiones.
- **Cambio:** versión 0.5.3; cada estado de misión tiene un identificador estable y role status. complete actualiza solo el texto de la fila correspondiente, sin reconstruir el panel ni sus botones. Conserva los resultados y los requisitos publicados. Caché propia v19.
- **Archivos:** expansion.js, package.json, README.md, sw.js y este registro.
- **Validación:** 65 pruebas existentes satisfactorias, sintaxis y construcción estática. Navegador real en Tierra: muestra rechazada desde la nave mantiene Pendiente; medición válida cambia su fila inmediatamente; salida a pie y muestra válida cambia su fila en vista 390 × 844. El foco DOM permanece en mission-measure y mission-sample, respectivamente, y el resultado sigue visible. Tras recargar y Continuar, ambas misiones siguen completadas. Escritorio y móvil inspeccionados; sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-012-misiones.png. No se realizó auditoría con lector de pantalla ni prueba en teléfono físico.
- **Propuesta:** [#31](https://github.com/fercala/pequenos-exploradores/pull/31). Commit de código: 2c9bd4f8f3347a0cb3a3bcd3666679a3c0ce4395; incorporación a main: e1086856fff6ba4e3610849ab39ccd1c15790d0d.
- **Publicación confirmada:** 2026-10-18 16:00 UTC. [GitHub Pages: ejecución 39142995787 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39142995787), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 y contiene la actualización del estado de misión; package.json confirma 0.5.3 y sw.js confirma caché v19, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-013 · Evitar que el rover herede el salto del tripulante

- **Inicio / última actualización:** 2026-10-18 17:02 / 17:06 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** changeVehicle coloca el nuevo vehículo en el suelo pero no limpia jumpHeight/jumpSpeed. surfacePhysics aplica esos valores tanto al astronauta como al rover. Subir al rover desde un salto lo hace continuar la parábola; embarcar en la nave y volver a salir puede reanudar un salto antiguo.
- **Relación / diferencia:** O2-007 (salto), O2-008 (rover), SOL-001 (mochila) y AUTO-011 (contacto con el suelo). Se corrige el estado físico de la transición de vehículo; no se añaden saltos, vehículos ni otro requisito de recogida.
- **Criterio de aceptación:** un cambio exitoso de vehículo descarta altura e impulso de salto previos; el rover permanece en su altura normal de conducción y salir otra vez de la nave empieza en el suelo. Un cambio rechazado conserva el salto que aún está en curso. Los saltos normales a pie mantienen su comportamiento.
- **Rama:** codex/orbita-auto-013-salto-vehiculo.
- **Cambio:** versión 0.5.4; al completar un cambio de vehículo se ponen a cero la altura y velocidad del salto. Se mantiene la colocación sobre el terreno y las guardas de acceso existentes; un cambio rechazado retorna antes de limpiar el salto. Caché propia v20.
- **Archivos:** expansion.js, tests/vehicle-transition.test.mjs, package.json, README.md, sw.js y este registro.
- **Validación:** 68 pruebas satisfactorias y construcción estática. Tres regresiones ejecutan createExpansion y su física real con interfaz simulada: pasar del salto al rover mantiene altura r+1; embarcar en nave y salir otra vez mantiene r+1,7 y permite un salto nuevo; un cambio rechazado conserva el salto. Antes del arreglo fallaban los dos primeros casos (altura heredada 0,6352 e impulso 3,176). Navegador real: viaje/descenso lunar, salir a pie, saltar y abrir Expedición con altitud DOM 4 m; conducir rover, altitud 1 m y velocidad vertical 0. Escritorio y 390 × 844 inspeccionados; sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-013-rover.png. Teléfono físico pendiente.
- **Propuesta:** [#33](https://github.com/fercala/pequenos-exploradores/pull/33). Commit de código: d6a41c0f97d9f35faf6ab6ad596bfb6513d627a0; incorporación a main: 353b90f790859828f08cec3013f5be6885e6fd5a.
- **Publicación confirmada:** 2026-10-18 17:06 UTC. [GitHub Pages: ejecución 39147961602 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39147961602), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 y contiene la limpieza de altura/impulso antes de activar el nuevo vehículo; package.json confirma 0.5.4 y sw.js confirma caché v20, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-014 · Contar los recorridos del rover por mundo

- **Inicio / última actualización:** 2026-10-18 18:05 / 18:08 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** surfacePhysics usa roverDistance, acumulado de toda la expedición, para completar la misión de 100 m de cada destino. Tras superar 100 m en un mundo, activar el rover en otro puede completar su misión incluso sin desplazamiento.
- **Relación / diferencia:** O2-008 (contador rover), O2-017 (misiones por destino), O2-020 (partidas), AUTO-010 (estacionamiento) y AUTO-012 (estado visible). Esta mejora separa el recorrido que acredita la misión de cada mundo; no añade vehículos, misiones ni estacionamientos nuevos.
- **Criterio de aceptación:** el recorrido de un mundo no completa la misión de otro; cada uno requiere 100 m locales. Volver a un mundo, recuperar o importar conserva su parcial. Se mantiene el total histórico y todas las misiones completadas. La interfaz identifica el contador local. Datos portátiles inválidos se descartan con límites y compatibilidad antigua.
- **Rama:** codex/orbita-auto-014-rover-por-mundo.
- **Cambio:** versión 0.5.5; contador roverDistances por destino, usado para acreditar los 100 m y visible en navegación/Misiones. Snapshot, restauración e importación conservan parciales independientes y validan mundos sólidos, números finitos y límites. roverDistance histórico y misiones completadas se conservan. Las partidas antiguas no contienen desglose: comienzan parciales locales nuevos en cero, explicado en README. Caché propia v21.
- **Archivos:** expansion.js, simulation.js, tests/vehicle-transition.test.mjs, tests/expansion.test.mjs, package.json, README.md, sw.js y este registro.
- **Validación:** 71 pruebas satisfactorias y construcción estática. Regresión del controlador reproducida antes del arreglo: total 1000 m completaba Luna sin moverse. Ahora exige recorrido lunar, completa tras 100 m locales y Marte permanece pendiente. Snapshot → JSON → validación → restauración conserva parciales independientes; migración conserva total/misiones antiguas, descarta datos inválidos y limita distancias. Navegador real: partida local anterior recuperada en Luna, contador local 0; conducir hasta 93/100 deja misión pendiente, recargar/Continuar conserva 93, continuar hasta 135 completa la misión. Escritorio y 390 × 844 revisados; sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-014-recorrido.png. Cambio entre mundos cubierto automáticamente, no recorrido manual entre dos mundos en esta ejecución; teléfono físico pendiente.
- **Propuesta:** [#35](https://github.com/fercala/pequenos-exploradores/pull/35). Commit de código: 81869f3165f5d08080659475b3ac444e5bb49f40; incorporación a main: 727ba5f2432122a92d5cb37543775f7c5c5e8bfd.
- **Publicación confirmada:** 2026-10-18 18:08 UTC. [GitHub Pages: ejecución 39152761792 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39152761792), sobre el commit de incorporación. expansion.js y simulation.js públicos devuelven HTTP 200 e incluyen requisito de 100 m locales y validación de parciales. package.json confirma 0.5.5 y sw.js confirma caché v21, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-015 · Conservar el ritmo elegido del reloj orbital

- **Inicio / última actualización:** 2026-10-18 19:06 / 19:09 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** createExpansion inicializa timeScale siempre a 60. El selector orbit-time solo cambia ese valor en memoria y no llama a settingsSave. Elegir Pausa, Tiempo real o una hora/segundo se pierde al recargar, reanudando otro ritmo sin indicación.
- **Relación / diferencia:** O2-014 (reloj orbital), O2-003 (ajustes) y O2-020 (recuperación). Las velocidades ya existen; se conserva la preferencia local del reloj de exploración. El ritmo independiente del atlas no cambia.
- **Criterio de aceptación:** elegir cualquiera de los cuatro ritmos lo guarda como ajuste local y recupera el mismo valor al recargar/continuar. Pausa permanece en cero, sin confundirse con un valor ausente. Ajustes antiguos o inválidos usan el ritmo inicial de 60. La partida y los demás ajustes permanecen compatibles.
- **Rama:** codex/orbita-auto-015-reloj-persistente.
- **Cambio:** versión 0.5.6; el selector guarda orbitTime en los ajustes locales y el controlador inicia el reloj con esa preferencia. Solo admite 0, 1, 60 y 3600; valores ausentes/incorrectos usan 60. La pausa cero se conserva explícitamente. No cambia el reloj independiente del atlas ni el formato de partidas. Caché propia v22.
- **Archivos:** expansion.js, tests/vehicle-transition.test.mjs, package.json, README.md, sw.js y este registro.
- **Validación:** 73 pruebas satisfactorias y construcción estática. Dos regresiones del controlador fallaban antes: pausa recuperada como 60 y selector sin escritura de ajuste. Ahora cubren las cuatro velocidades, avance del reloj según velocidad, conservación de cero, valores inválidos y selector → ajuste → controlador nuevo. Navegador real: elegir Pausa en Ajustes, recargar, Continuar y comprobar Pausa seleccionada. Escritorio y 390 × 844 revisados, sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-015-reloj.png. Preferencia local del navegador, no se afirma sincronización entre dispositivos; teléfono físico pendiente.
- **Propuesta:** [#37](https://github.com/fercala/pequenos-exploradores/pull/37). Commit de código: a98ba42bce101d9aaf8925112908323ff33ebbed; incorporación a main: 975a8b25529fd3d7614a900997bec17538384462.
- **Publicación confirmada:** 2026-10-18 19:09 UTC. [GitHub Pages: ejecución 39157375016 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39157375016), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 y conserva orbitTime mediante ajustes; package.json confirma 0.5.6 y sw.js confirma caché v22, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-016 · Sincronizar el panel al restablecer controles

- **Inicio / última actualización:** 2026-10-18 20:02 / 20:04 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** reset-controls cambia buttonScale, joystickSize y leftHanded en ajustes y estilos, pero no actualiza los inputs ya abiertos. El panel sigue mostrando tamaños anteriores y la casilla de zurdos marcada aunque la distribución ya haya vuelto a la original.
- **Relación / diferencia:** O2-003 (controles ajustables) y O4-019 (accesibilidad). AUTO-015 conserva el ritmo orbital; esta corrección sincroniza los valores mostrados tras restablecer controles. No añade otro restablecimiento ni modifica preferencias ajenas.
- **Criterio de aceptación:** al restablecer, los dos deslizadores muestran 1 y 96 y la casilla de zurdos queda desmarcada, coincidiendo con estilos y ajustes guardados, sin cerrar el panel ni perder el foco. Los demás ajustes, incluido ritmo orbital, permanecen como estaban.
- **Rama:** codex/orbita-auto-016-restablecer-panel.
- **Cambio:** versión 0.5.7; restablecer controles actualiza los valores de ambos deslizadores y el estado de la casilla de zurdos a partir de los ajustes restablecidos. Mantiene el panel y sus nodos, el foco y el guardado existentes. Caché propia v23.
- **Archivos:** expansion.js, package.json, README.md, sw.js y este registro.
- **Validación:** 73 pruebas existentes satisfactorias, sintaxis y construcción estática. Reproducción real antes del arreglo: inputs 1,5/140/zurdos marcado, frente a CSS 1/96 px/distribución normal después de restablecer. Después: los tres inputs coinciden con CSS 1/96 px/normal sin reabrir el panel, foco en reset-controls y reloj todavía en Pausa. Escritorio y 390 × 844 revisados, sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-016-controles.png. Teléfono físico pendiente.
- **Propuesta:** [#39](https://github.com/fercala/pequenos-exploradores/pull/39). Commit de código: 1addf8aa90ebdd01de13a39b24cfc592d6b22b41; incorporación a main: 88d90237d5a87aaa46a72abf070b4872cc376b20.
- **Publicación confirmada:** 2026-10-18 20:04 UTC. [GitHub Pages: ejecución 39161544030 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39161544030), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 e incluye las tres asignaciones de valores restablecidos al panel; package.json confirma 0.5.7 y sw.js confirma caché v23, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-017 · Conservar la exploración al reconstruir el mismo mundo

- **Inicio / última actualización:** 2026-10-18 21:05 / 21:07 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** el selector de calidad y la recuperación gráfica llaman a setPlanet con el mundo actual. SolarUniverse.setPlanet borra siempre roverParked y su orientación, aunque no cambie el destino, por lo que el rover desaparece y no se puede embarcar lejos de la nave. También reinicia el ángulo del terreno durante esa reconstrucción.
- **Relación / diferencia:** O2-004 (calidad móvil), O2-008 (rover), O2-014 (rotación) y AUTO-010 (estacionamiento persistente). AUTO-010 cubre guardar/recuperar y evita rover fantasma al viajar; este caso conserva la referencia local al reconstruir el mismo destino en una sesión viva, sin cargar una partida.
- **Criterio de aceptación:** cambiar calidad en el mismo mundo conserva ubicación/orientación del rover y giro del terreno; después se puede embarcar cerca del rover aunque la nave esté lejos. Cambiar a otro mundo sí limpia el estacionamiento y establece su orientación inicial. La carga inicial sigue funcionando.
- **Rama:** codex/orbita-auto-017-reconstruccion-mundo.
- **Cambio:** versión 0.5.8; setPlanet distingue reconstrucción del mismo destino de un viaje. Conserva el anclaje/orientación del rover y la fase finita del terreno en el primer caso; limpia el estacionamiento e inicializa la rotación en el segundo. La fase ausente usa el cálculo inicial existente. Caché propia v24.
- **Archivos:** world-v2.js, tests/world-rebuild.test.mjs, package.json, README.md, sw.js y este registro.
- **Validación:** 76 pruebas satisfactorias y construcción estática. Tres casos ejecutan el método de reconstrucción con ensamblado base reducido: mismo mundo conserva transformaciones y fase, nuevo mundo limpia rover/inicializa fase, carga inicial/fase ausente usan cálculo inicial. El primer caso fallaba antes al desaparecer el anclaje. Navegador real: partida lunar, rover a 134 m de la nave, bajar, cambiar calidad Automática → Baja y volver a conducir junto al rover; altitud 1 m y progreso 135 m conservado. Escritorio y 390 × 844 revisados, sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-017-calidad.png. No se provocó pérdida real de contexto gráfico ni se probó teléfono físico; la recuperación gráfica usa el mismo método comprobado.
- **Propuesta:** [#41](https://github.com/fercala/pequenos-exploradores/pull/41). Commit de código: 3bb2d81493bbb7f304a36f3270cff9404e138e1f; incorporación a main: 7779b0ecfef906649d12586fba42d64e154c82e0.
- **Publicación confirmada:** 2026-10-18 21:07 UTC. [GitHub Pages: ejecución 39166396103 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39166396103), sobre el commit de incorporación. world-v2.js público devuelve HTTP 200 e incluye conservación de estado al reconstruir el mismo destino; package.json confirma 0.5.8 y sw.js confirma caché v24, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-018 · Reactivar el audio guardado al comenzar o continuar

- **Inicio / última actualización:** 2026-10-18 22:10 / 22:13 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** sound se carga desde orbita-settings y aparece marcado, pero SpaceAudio empieza desactivado. La única llamada a audio.enable está en el cambio de casilla; start no lo invoca, por lo que tras recargar el sonido configurado permanece inactivo hasta volver a conmutarlo.
- **Relación / diferencia:** O2-018 (sonido opcional) y O2-020 (recuperación). AUTO-015 guarda el ritmo orbital; aquí se restaura el motor de audio a partir de una preferencia ya guardada, usando la pulsación de inicio compatible con la activación de audio del navegador.
- **Criterio de aceptación:** pulsar Comenzar o Continuar inicia/reanuda el audio si la preferencia guardada está activada. Si está desactivada no crea un contexto ni emite sonido. Un fallo de activación se comunica sin impedir empezar la expedición ni generar una promesa rechazada sin tratar.
- **Rama:** codex/orbita-auto-018-audio-recuperado.
- **Cambio:** versión 0.5.9; Comenzar/Continuar invocan la recuperación del audio según sound dentro de la pulsación del usuario. El selector usa la misma ruta, que trata errores sin bloquear la expedición. Desactivar espera la suspensión del contexto para poder tratar también su rechazo. Se reutiliza el motor existente y su preferencia; caché propia v25.
- **Archivos:** app.js, expansion.js, audio.js, tests/vehicle-transition.test.mjs, package.json, README.md, sw.js y este registro.
- **Validación:** 78 pruebas satisfactorias, sintaxis y construcción estática. Dos casos nuevos cubren preferencia activada/desactivada, comunicación de fallo, contexto ausente cuando está silenciado, creación/reanudación con API de audio simulada, reutilización de un único motor y tratamiento de errores de suspensión. Navegador real: continuar, activar sonido, recargar, Continuar y recuperar casilla marcada sin errores/advertencias ni aviso de fallo; escritorio y 390 × 844 revisados. Evidencia: outputs/orbita-auto-018-audio.png. No se realizó medición o escucha auditiva ni prueba de audio en teléfono físico; el ciclo del contexto se comprueba automáticamente. La prueba local termina silenciada.
- **Propuesta:** [#43](https://github.com/fercala/pequenos-exploradores/pull/43). Commit de código: 4abf79decec05ee723a1c840e1ee6e2dc6297c45; incorporación a main: a93ac53be5b510ed31e643c9daf208a0c5c40ab3.
- **Publicación confirmada:** 2026-10-18 22:13 UTC. [GitHub Pages: ejecución 39171208634 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39171208634), sobre el commit de incorporación. app.js, expansion.js y audio.js públicos devuelven HTTP 200 e incluyen recuperación al iniciar, ruta compartida y suspensión esperada. package.json confirma 0.5.9 y sw.js confirma caché v25, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-019 · Conservar las 64 misiones al recuperar una partida

- **Inicio / última actualización:** 2026-10-18 23:15 / 2026-10-19 07:33 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** el catálogo ofrece 64 misiones válidas (missionList de 17 mundos), pero validatePortable recorta missions a 60. Con progreso completo, se pierden comet67p:scan/sample/rover/photo; start también valida el guardado local al continuar. Los duplicados pueden consumir el límite antes del recorte.
- **Relación / diferencia:** O2-017 (misiones), O2-020 (guardados), O4-014/015 (catálogo ampliado) y AUTO-003 (importación). AUTO-003 evita sobrescribir el archivo importado al salir; esta corrección evita perder misiones dentro de su propia validación, al recuperar o importar.
- **Criterio de aceptación:** todas las misiones del catálogo sobreviven guardar → validar → recuperar, incluida 67P. Duplicados no desplazan otras misiones; identificadores desconocidos o actividades inexistentes en un mundo no se conservan. Guardados antiguos válidos y otros campos permanecen compatibles, sin introducir un límite arbitrario menor que el catálogo.
- **Rama:** codex/orbita-auto-019-misiones-completas.
- **Cambio:** versión 0.5.10; validación de progreso según los identificadores del catálogo de misiones, en orden canónico y sin duplicados. Conserva las 64 actividades actuales y adapta el máximo al catálogo, descartando combinaciones inexistentes sin recortar progreso legítimo. Sin cambios de formato. Caché propia v26.
- **Archivos:** simulation.js, tests/expansion.test.mjs, package.json, README.md, sw.js y este registro.
- **Validación:** 80 pruebas satisfactorias y construcción estática. Dos regresiones fallaban antes: guardar/serializar/validar recortaba las cuatro misiones de 67P; cien duplicados desplazaban otras. Ahora conservan todas, también en una segunda validación, y descartan actividades imposibles/desconocidas con migración v1. Navegador real: importar archivo sintético local con 64 misiones, Continuar y comprobar las cuatro de 67P completadas; otra recarga/Continuar conserva las cuatro. Escritorio y 390 × 844 revisados, sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-019-misiones.png. No se afirma haber jugado manualmente las 64 actividades; teléfono físico pendiente.
- **Continuidad:** la selección del archivo de prueba quedó retenida por la herramienta de navegador durante varias horas. Se retomó la misma mejora, con main sin cambios ni propuestas abiertas; no se inició otra mejora ni se publicó durante la espera.
- **Propuesta:** [#45](https://github.com/fercala/pequenos-exploradores/pull/45). Commit de código: 5aa0346c2dedeb2dc755abfc5ceeb9ca688665f3; incorporación a main: 03289989ac5bcd15399f6984649b1c4c3bfdb66c.
- **Publicación confirmada:** 2026-10-19 07:33 UTC. [GitHub Pages: ejecución 39216472389 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39216472389), sobre el commit de incorporación. simulation.js público devuelve HTTP 200 e incluye validación completa según catálogo sin recorte a 60. package.json confirma 0.5.10 y sw.js confirma caché v26, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-020 · Asociar los nombres de los ajustes a sus controles

- **Inicio / última actualización:** 2026-10-19 07:37 / 07:40 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** renderSettings muestra Calidad gráfica, Movimiento reducido, Modo de exploración y Controles táctiles ampliados en div, sin label for ni nombre accesible en sus campos. Las observaciones de navegador anteriores muestran los selectores solo por su valor y casillas sin nombre; pulsar el texto no activa su campo.
- **Relación / diferencia:** O2-003 (ajustes) y O4-019 (accesibilidad). AUTO-008 identifica el modo Mirar de vuelo; aquí se corrigen cuatro campos del panel básico de Ajustes. No se añaden preferencias ni se cambia su significado o guardado.
- **Criterio de aceptación:** los cuatro controles reciben su nombre del texto visible mediante etiquetas asociadas; pulsar el texto de las dos casillas cambia su estado. Se conserva la distribución, funcionamiento de selectores y preferencias existentes, con revisión de escritorio y móvil.
- **Rama:** codex/orbita-auto-020-etiquetas-ajustes.
- **Cambio:** versión 0.5.11; etiquetas HTML asociadas mediante for a los cuatro campos, manteniendo textos, valores y controladores existentes. El nombre accesible se deriva del texto visible y este activa su campo. Caché propia v27.
- **Archivos:** app.js, package.json, README.md, sw.js y este registro.
- **Validación:** 80 pruebas existentes satisfactorias, sintaxis y construcción estática. Navegador real: los cuatro campos muestran su nombre en el árbol accesible y una asociación labels al texto correspondiente; pulsar etiquetas activa/desactiva Movimiento reducido y Controles táctiles ampliados, con foco en sus casillas. Los selectores se operan por nombre de etiqueta; Calidad cambia Baja → Media → Baja. Escritorio y 390 × 844 revisados, sin errores/advertencias de consola. La prueba restituye sus valores iniciales. Evidencia: outputs/orbita-auto-020-etiquetas.png. No se afirma auditoría completa con lector de pantalla ni teléfono físico.
- **Propuesta:** [#47](https://github.com/fercala/pequenos-exploradores/pull/47). Commit de código: 71df4011515d30e8d669655e5870f738f7056bd3; incorporación a main: 7fb78a2d313baba7083b7ff14399e2a0dd6337aa.
- **Publicación confirmada:** 2026-10-19 07:40 UTC. [GitHub Pages: ejecución 39217376954 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39217376954), sobre el commit de incorporación. app.js público devuelve HTTP 200 e incluye las cuatro etiquetas asociadas. package.json confirma 0.5.11 y sw.js confirma caché v27, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-021 · Conservar la posición del tren de aterrizaje en la partida

- **Inicio / última actualización:** 2026-10-19 08:40 UTC / 2026-10-19 08:46 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** gear se inicializa siempre como true y no aparece en snapshot, validatePortable ni restore. Recuperar/importar una partida con tren retraído lo cambia silenciosamente a desplegado, aunque el tren forma parte de las condiciones del aterrizaje manual.
- **Relación / diferencia:** O2-006 (tren y aterrizaje), O2-020 (partidas) y AUTO-010/019 (otras correcciones de progreso guardado). Se conserva un estado físico de la nave omitido; no se añade otro tren ni se cambian las reglas de contacto o el descenso asistido.
- **Criterio de aceptación:** retraer/desplegar se guarda y recupera de forma coherente en estado y mundo, tanto local como portátil. Partidas anteriores sin el campo y valores inválidos usan desplegado. El descenso asistido conserva su despliegue automático existente.
- **Rama:** codex/orbita-auto-021-tren-guardado.
- **Cambio y archivos:** `expansion.js` guarda el tren al accionarlo y lo incluye en snapshot/restauración del estado y mundo; `simulation.js` conserva únicamente el booleano false explícito y usa desplegado como valor compatible. Pruebas en `tests/vehicle-transition.test.mjs` y `tests/expansion.test.mjs`; versión 0.5.12 en package/README y caché propia v28 en sw.js.
- **Validación:** 82 pruebas y compilación correctas. Las nuevas pruebas fallaron antes del arreglo y comprueban ambos estados, serialización/validación portátil/restauración y valores antiguos o inválidos. Navegador a 390 × 844: partida lunar con rover activo, retraer tren de la nave, recargar y Continuar conserva «Tren retraído»; consola sin errores/avisos. Evidencia local: `outputs/orbita-auto-021-tren.png`. No se realizó aterrizaje manual ni importación por selector de archivos en esta comprobación; descenso asistido sin cambios.
- **Propuesta:** [#49](https://github.com/fercala/pequenos-exploradores/pull/49). Commit de código: 0c5bd41b84addaf33c9f30d16601b32d09e4c5fb; incorporación a main: 0a704b335c0f4c9c55baef3a7f38aaf8af33da3f.
- **Publicación confirmada:** 2026-10-19 08:46 UTC. [GitHub Pages: ejecución 39224942204 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39224942204), sobre el commit de incorporación. expansion.js y simulation.js públicos devuelven HTTP 200 e incluyen la conservación de gear; package.json confirma 0.5.12 y sw.js confirma caché v28, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-022 · Mostrar la escala real al volver a abrir el atlas

- **Inicio / última actualización:** 2026-10-19 09:43 / 09:47 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** enterAtlas crea siempre el selector con Jugable seleccionada, pero conserva w.realScale de la visita anterior. Tras elegir Científica, salir y volver a abrir, el mapa continúa proporcional mientras el control indica Jugable y el texto describe la escala comprimida.
- **Relación / diferencia:** O2-015 (atlas de dos escalas) y O2-014 (órbitas). AUTO-016 sincroniza los controles restablecidos de Ajustes; aquí se sincronizan selector y explicación del atlas al reabrirlo, sin añadir otra escala ni cambiar datos astronómicos.
- **Criterio de aceptación:** abrir/reabrir muestra la escala actualmente usada y su explicación correspondiente. Científica y Jugable siguen cambiando el mapa; las aproximaciones siguen identificadas. No cambia el guardado ni el reloj del atlas.
- **Rama:** codex/orbita-auto-022-escala-atlas.
- **Cambio y archivos:** expansion.js sincroniza selector y nota desde w.realScale al abrir y al cambiar escala; conserva las instrucciones de giro/zoom y los límites científicos. Regresión del controlador en tests/vehicle-transition.test.mjs. Versión 0.5.13 en package.json/README y caché propia v29 en sw.js.
- **Validación:** 83 pruebas correctas y construcción estática. La regresión falló antes al reabrir con selector Jugable frente a mapa Científica; usa DOM reducido con el valor inicial del selector recreado. Navegador real: seleccionar Científica → salir → reabrir mantiene Científica y explicación proporcional; Jugable también coincide al reabrir. Escritorio y 390 × 844 revisados, instrucciones visibles y sin errores/advertencias de consola. Evidencia: outputs/orbita-auto-022-atlas.png. No se afirma persistencia entre recargas ni prueba en teléfono físico.
- **Propuesta:** [#51](https://github.com/fercala/pequenos-exploradores/pull/51). Commit de código: 462ea398a2acd77956494a618a5aadc8edb8bb8c; incorporación a main: e472d1968a02976d50ba93dff70515791abbbc09.
- **Publicación confirmada:** 2026-10-19 09:47 UTC. [GitHub Pages: ejecución 39232496511 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39232496511), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 e incluye syncAtlasScale; package.json confirma 0.5.13 y sw.js caché v29, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-023 · Mantener el nombre de cámara al cambiar de controles

- **Inicio / última actualización:** 2026-10-19 10:47 / 10:49 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** Cambiar cámara en Orientación sin gestos modifica world.cameraMode, pero solo el botón de cámara estándar actualiza camera-label. Navegador: activar botones sin gestos, cambiar a Cabina y desactivarlos deja «Seguimiento» en el botón estándar aunque aparecen los instrumentos de cabina.
- **Relación / diferencia:** O4-019 (orientación accesible), O2-010 (cabina) y O2-019 (cámara fotográfica). AUTO-008 identifica el botón Mirar; AUTO-020 asocia campos de Ajustes. Aquí se evita informar un modo de cámara distinto al activo al alternar controles.
- **Criterio de aceptación:** el nombre visible del botón estándar sigue el modo real Seguimiento/Cabina/Observación incluso tras cambiarlo con controles sin gestos; el ciclo normal y el regreso del modo fotografía siguen funcionando. No cambia preferencias ni partidas.
- **Rama:** codex/orbita-auto-023-nombre-camara.
- **Cambio y archivos:** app.js sincroniza camera-label con world.cameraMode en la actualización común del HUD; escribe solo si cambia el texto, independientemente del control que modificó la cámara. Versión 0.5.14 en package.json/README y caché propia v30 en sw.js.
- **Validación:** 83 pruebas existentes correctas y construcción estática. Navegador antes: cambiar a Cabina con botones accesibles y desactivarlos muestra Seguimiento junto a los instrumentos de Cabina. Después: alternar controles conserva Cabina y Observación en el nombre; ciclo estándar operativo. Entrar en fotografía desde Cabina y Volver al vuelo recupera Cabina y sus instrumentos. Revisado en escritorio y 390 × 844; sin errores/avisos de consola. Evidencia: outputs/orbita-auto-023-camara.png. No se probó teléfono físico ni lector de pantalla; la preferencia de botones sin gestos vuelve a su valor inicial desactivado.
- **Propuesta:** [#53](https://github.com/fercala/pequenos-exploradores/pull/53). Commit de código: 4d672e3d97f73443899a61602a0300360a561ab2; incorporación a main: 5f6c96598fe1cbcc375ba4564e85475bcff1b663.
- **Publicación confirmada:** 2026-10-19 10:49 UTC. [GitHub Pages: ejecución 39240001902 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39240001902), sobre el commit de incorporación. app.js público devuelve HTTP 200 e incluye la sincronización cameraLabel; package.json confirma 0.5.14 y sw.js caché v30, ambos HTTP 200. La primera consulta durante el despliegue aún devolvía la versión anterior; se repitió tras completarse y confirmó los tres cambios. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-024 · Recuperar la exposición al volver al modo fotografía

- **Inicio / última actualización:** 2026-10-19 11:50 / 11:51 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** photo-exposure cambia el renderizador, pero cerrar fotografía lo devuelve a 1.12 y volver a abrir no lo aplica. El deslizador conserva el valor elegido mientras la imagen usa otro, perdiendo el ajuste de composición entre capturas.
- **Relación / diferencia:** O2-019 (fotografía). AUTO-023 corrige el nombre del modo de cámara; aquí se conserva y aplica la exposición seleccionada al reentrar en fotografía durante la misma sesión, sin alterar la exposición normal de vuelo ni las partidas.
- **Criterio de aceptación:** elegir una exposición, salir y volver a fotografía aplica el valor mostrado por el deslizador. Al salir se conserva el valor normal de vuelo 1.12; la primera apertura y el ciclo de cámara siguen funcionando. No se promete conservar este ajuste entre recargas.
- **Rama:** codex/orbita-auto-024-exposicion-foto.
- **Cambio y archivos:** expansion.js aplica al entrar la exposición numérica del deslizador existente; la salida mantiene el restablecimiento a 1.12. Regresión en tests/vehicle-transition.test.mjs. Versión 0.5.15 en package.json/README y caché propia v31 en sw.js.
- **Validación:** 84 pruebas y construcción estática correctas. La nueva prueba falló antes: primera apertura usaba 1.12 frente al 1.1 mostrado. Ahora verifica primera apertura, ajuste 2.3, regreso a vuelo 1.12/Cabina y reapertura con 2.3. Navegador real: seleccionar 2.3, salir y reabrir conserva el deslizador, con imagen renderizada revisada en escritorio y 390 × 844; sin errores/avisos de consola. Evidencia: outputs/orbita-auto-024-exposicion.png. La propiedad del renderizador se comprueba en la prueba del controlador, sin afirmar medición de luminancia ni teléfono físico.
- **Propuesta:** [#55](https://github.com/fercala/pequenos-exploradores/pull/55). Commit de código: 6f54dc91ef8c3c0bd159f9ee8958f70f01695212; incorporación a main: d3414a250c4324a4be045f10dd5d3228996c69ee.
- **Publicación confirmada:** 2026-10-19 11:51 UTC. [GitHub Pages: ejecución 39247567877 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39247567877), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 y aplica el valor de photo-exposure al entrar; package.json confirma 0.5.15 y sw.js caché v31, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-025 · Embarcar en el rover en su posición estacionada

- **Inicio / última actualización:** 2026-10-19 12:53 / 12:54 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** changeVehicle permite conducir a menos de 20 m del rover, pero cambia de vehículo usando posición y orientación del caminante. El rover salta hacia el tripulante en lugar de ocupar su ubicación estacionada; su orientación guardada tampoco se usa para embarcar.
- **Relación / diferencia:** O2-008 (rover), SOL-001 (exploración), AUTO-010 (guardar anclaje) y AUTO-017 (conservarlo al reconstruir). Esas mejoras conservan el rover estacionado; aquí se usa su transformación al embarcar cerca, evitando desplazarlo hasta 20 m sin conducir.
- **Criterio de aceptación:** embarcar junto al rover usa su posición y orientación, con apoyo normal en terreno. Lejos del rover/nave se rechaza sin mover al tripulante. Desplegar cerca de la nave sin un rover próximo conserva su funcionamiento, y no cambian formato ni progreso.
- **Rama:** codex/orbita-auto-025-embarcar-rover.
- **Cambio y archivos:** expansion.js copia posición y orientación del rover cercano al pasar de caminante a conductor, antes del ajuste normal al terreno. Mantiene los límites de embarque y el despliegue cerca de la nave. Dos casos en tests/vehicle-transition.test.mjs; versión 0.5.16 en package.json/README y caché propia v32 en sw.js.
- **Validación:** 86 pruebas y construcción correctas. Regresión falla antes al conservar la posición del caminante en vez del anclaje; ahora verifica posición/orientación del rover, anclaje sin mutar y despliegue normal con rover antiguo lejano. La prueba existente de rechazo lejano sigue pasando. Navegador real: rover lunar a 134 m de la nave, bajar y caminar 13 m (nave a 146 m); Conducir rover devuelve al vehículo estacionado a 134 m y altura 1 m, con contador de rover 135 m conservado. Escritorio y 390 × 844 revisados, sin errores/avisos de consola. Evidencia: outputs/orbita-auto-025-rover.png. Transformación exacta comprobada en prueba de controlador; teléfono físico pendiente.
- **Propuesta:** [#57](https://github.com/fercala/pequenos-exploradores/pull/57). Commit de código: ad7d631607b0c44b7e25fe8907952f00b088a950; incorporación a main: 268ae3216def64929ee2062c252cc2786bdfd7da.
- **Publicación confirmada:** 2026-10-19 12:54 UTC. [GitHub Pages: ejecución 39255624524 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39255624524), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 e incluye la copia de posición/orientación del rover al embarcar; package.json confirma 0.5.16 y sw.js caché v32, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-026 · Permitir inclinar la vista del atlas

- **Inicio / última actualización:** 2026-10-19 13:53 / 13:56 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** arrastrar verticalmente o pulsar Mirar arriba/abajo actualiza viewPitch, pero la cámara del atlas calcula siempre su altura como distance × 0.55 e ignora ese ángulo. Solo funciona el giro horizontal; no se puede observar el plano orbital desde arriba o abajo.
- **Relación / diferencia:** O2-015 (atlas) y O4-019 (orientación sin gestos). AUTO-022 sincroniza el selector de escala; aquí se corrige una dirección de navegación inoperante, sin añadir otra escala ni datos científicos.
- **Criterio de aceptación:** el movimiento vertical y los botones accesibles inclinan la vista del atlas; giro horizontal, enfoque y zoom se conservan. Ángulo limitado antes de los polos para evitar inversión; la vista inicial mantiene su composición y distancia.
- **Rama:** codex/orbita-auto-026-inclinar-atlas.
- **Cambio y archivos:** world-v2.js usa coordenadas esféricas para aplicar viewPitch y viewYaw al desplazamiento de cámara, manteniendo el radio y la elevación inicial anteriores. Limita el ángulo polar a 0.1…π−0.1 para evitar inversión. Regresión del renderizador en tests/world-rebuild.test.mjs; versión 0.5.17 en package.json/README y caché propia v33 en sw.js.
- **Validación:** 87 pruebas y construcción correctas. La regresión ejecuta SolarUniverse.update con ensamblado base reducido y cámara Three.js real; fallaba antes al no cambiar la altura. Cubre composición inicial exacta, inclinación arriba/abajo, giro horizontal, radio constante y valores extremos sin polos. Navegador real: arrastre vertical de 210 px cambia visiblemente el plano orbital; a 390 × 844 seis pulsaciones Mirar arriba elevan la vista. Reloj del atlas pausado durante ambas comparaciones. Sin errores/avisos; preferencia sin gestos restituida. Evidencia: outputs/orbita-auto-026-atlas.png. No se probó teléfono físico ni gesto táctil físico.
- **Propuesta:** [#59](https://github.com/fercala/pequenos-exploradores/pull/59). Commit de código: 8b9f41bcca5c9c7d50441dd2f43c19738bcefb41; incorporación a main: 6b12afeebbf2beea18a1b5f7daac0c9719647346.
- **Publicación confirmada:** 2026-10-19 13:56 UTC. [GitHub Pages: ejecución 39264248886 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39264248886), sobre el commit de incorporación. world-v2.js público devuelve HTTP 200 e incluye el desplazamiento esférico con inclinación; package.json confirma 0.5.17 y sw.js caché v33, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-027 · Detener la propulsión al entrar en el atlas

- **Inicio / última actualización:** 2026-10-19 14:52 / 14:54 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** enterAtlas pone la velocidad a cero y pausa la física de vuelo, pero conserva throttle y el deslizador. Si se abre con motores activos, volver del mapa vuelve a acelerar la nave o mover al tripulante sin otra acción sobre la marcha.
- **Relación / diferencia:** O2-015 (atlas), O2-001 (vuelo) y SOL-001 (marcha de superficie). AUTO-026 habilita inclinación del mapa; aquí se elimina la propulsión pendiente al cambiar a la navegación del atlas, con el mismo control de potencia existente.
- **Criterio de aceptación:** entrar al atlas detiene potencia y velocidad y sincroniza el deslizador; al volver no se reinicia movimiento por el valor anterior. Una apertura rechazada por maniobra no modifica el control de vuelo. No cambian posiciones, partidas ni preferencias.
- **Rama:** codex/orbita-auto-027-atlas-sin-propulsion.
- **Cambio y archivos:** expansion.js llama a setThrottle(0) en la entrada válida al atlas, junto al frenado de velocidad existente. Usa la función común para actualizar estado, deslizador y porcentaje. Regresión en tests/vehicle-transition.test.mjs; versión 0.5.18 en package.json/README y caché propia v34 en sw.js.
- **Validación:** 88 pruebas y construcción correctas. La regresión falló antes con potencia 0.8 tras entrar; ahora comprueba potencia/velocidad cero y salida sin reactivar potencia, además de rechazo durante viaje sin alterar velocidad/potencia. Navegador real: 80 % y 38 m/s antes de abrir; al volver, deslizador y texto 0 %, velocidad 0 m/s con estabilización activa. Escritorio y 390 × 844 revisados, sin errores/avisos. Evidencia: outputs/orbita-auto-027-potencia.png. No se afirma inmovilidad permanente sin estabilización ni teléfono físico.
- **Propuesta:** [#61](https://github.com/fercala/pequenos-exploradores/pull/61). Commit de código: f327af87c71513089586761a9b77a96d2c222d62; incorporación a main: 5fb8b92b8a7e11cc652dae18390bca5131878574.
- **Publicación confirmada:** 2026-10-19 14:54 UTC. [GitHub Pages: ejecución 39272988661 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39272988661), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 e incluye setThrottle(0) al entrar al atlas; package.json confirma 0.5.18 y sw.js caché v34, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-028 · Permitir arrastre táctil en todo el atlas y la fotografía

- **Inicio / última actualización:** 2026-10-19 15:56 / 16:56 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** pointerdown del canvas descarta todo toque iniciado en el 35 % izquierdo para reservar la zona del joystick. También lo hace en atlas y fotografía, aunque esos modos ocultan el joystick: una parte amplia de la escena no permite comenzar un arrastre con un dedo.
- **Relación / diferencia:** O2-003 (controles táctiles), O2-015 (atlas), O2-019 (fotografía). AUTO-026 hace funcionar la inclinación y AUTO-027 detiene propulsión al entrar; aquí se elimina una zona táctil inactiva exclusivamente en los dos modos sin joystick, conservando la reserva lateral durante vuelo y caminata.
- **Criterio de aceptación:** los toques del lado izquierdo pueden iniciar orientación de cámara en atlas/fotografía; la zona lateral sigue reservada al joystick en vuelo/superficie. Se mantienen captura de puntero, pellizco, mouse y cancelación de toques, sin cambiar partidas.
- **Rama:** codex/orbita-auto-028-arrastre-tactil.
- **Cambio y archivos:** app.js limita la reserva lateral de toques a los modos que no son atlas ni fotografía; no cambia seguimiento de punteros, captura, pellizco ni liberación. Versión 0.5.19 en package.json/README y caché propia v35 en sw.js.
- **Validación:** 88 pruebas existentes y construcción correctas. Revisión de la condición: el rechazo de touch a la izquierda solo permanece si overview y photo son falsos; mouse conserva su ruta anterior. Navegador real a 390 × 844: joystick oculto en atlas/fotografía y visible en vuelo; arrastres de mouse iniciados en el lado izquierdo giran ambas escenas, con imagen final revisada. Sin errores/avisos. Evidencia: outputs/orbita-auto-028-arrastre.png. La herramienta de navegador ejecuta arrastres de mouse: no se afirma prueba táctil física ni del pellizco; la corrección táctil se verifica por revisión del controlador.
- **Propuesta:** [#63](https://github.com/fercala/pequenos-exploradores/pull/63). Commit de código: d943de913940c882502b1bccf3a1893fa945ccb4; incorporación a main: c5012a4ad4e1b2df9bc6f5b9b4c43c0dbe05f066.
- **Publicación confirmada:** 2026-10-19 16:56 UTC. [GitHub Pages: ejecución 39282392765 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39282392765), sobre a3af62d62cce5b8f05ad968d3b31a291fe9a2f8d (#64), que incluye el código de #63. La ejecución inicial 39281692251 quedó cancelada; la siguiente publicó correctamente el mismo cambio. app.js público devuelve HTTP 200 con la excepción de arrastre en atlas/fotografía; package.json confirma 0.5.19 y sw.js caché v35, ambos HTTP 200. Se reanudó la comprobación pendiente sin iniciar otra mejora. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-029 · Respetar el modo Mirar en los botones accesibles

- **Inicio / última actualización:** 2026-10-19 17:56 / 17:58 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** el arrastre comprueba look para mover solo cámara; Orientación sin gestos no recibe ese estado. Activar Mirar y después botones accesibles hace que Girar/Mirar arriba cambien la orientación del vehículo en Seguimiento/Cabina, contradiciendo el modo que sigue activo.
- **Relación / diferencia:** O4-019 (botones accesibles), O2-003 (orientación) y AUTO-008 (nombre/estado de Mirar). AUTO-023 sincroniza el nombre de cámara; aquí los botones respetan la separación entre orientar cámara y vehículo, igual que el arrastre.
- **Criterio de aceptación:** con Mirar activo, botones direccionales actualizan vista sin girar nave o tripulante. Desactivado, conservan su control normal; atlas, superficie, cámara Observación y zoom mantienen comportamiento. Sin cambios de partida ni preferencias.
- **Rama:** codex/orbita-auto-029-mirar-accesible.
- **Cambio y archivos:** app.js expone una consulta del estado Mirar al controlador; exploration.js la comprueba en la misma rama de orientación de cámara que atlas/Observación. Dos casos en tests/exploration-controls.test.mjs; versión 0.5.20 en package.json/README y caché propia v36 en sw.js.
- **Validación:** 90 pruebas y construcción correctas. El caso nuevo fallaba antes porque no se modificaba viewYaw en Mirar; ahora nave, caminante y rover conservan quaternion al orientar la vista, y el zoom sigue operativo. Sin Mirar giran el vehículo; Observación sigue orientando cámara. Navegador real: activar Mirar, habilitar botones sin gestos, pulsar izquierda/arriba y revisar vista e indicador; escritorio y 390 × 844 sin errores/avisos. La separación exacta de transformaciones se verifica en el controlador real con DOM reducido. Evidencia: outputs/orbita-auto-029-mirar.png. Preferencia y modo Mirar restablecidos; teléfono físico pendiente.
- **Propuesta:** [#66](https://github.com/fercala/pequenos-exploradores/pull/66). Commit de código: 3778300dc24e7c1836825e9519e65f86db91a94e; incorporación a main: 089d74bf1bee5832d465b434bd122354943c4e76.
- **Publicación confirmada:** 2026-10-19 17:58 UTC. [GitHub Pages: ejecución 39298427030 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39298427030), sobre el commit de incorporación. app.js y exploration.js públicos devuelven HTTP 200 con la consulta y uso de isLooking; package.json confirma 0.5.20 y sw.js caché v36, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-030 · Suspender el escáner oculto en atlas y fotografía

- **Inicio / última actualización:** 2026-10-19 18:54 / 18:56 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** CSS oculta el escáner en atlas/fotografía, pero exploration.tick continúa muestreando terreno, recorriendo rocas y dibujando su canvas cada 0.25 s si estaba activado. Se ejecuta trabajo invisible durante los dos modos, también en móvil.
- **Relación / diferencia:** O4-004 (escáner), O2-004 (rendimiento), O2-015/019 (atlas/fotografía). AUTO-028 corrige el área táctil de esos modos; aquí se suspende solo el cálculo invisible del escáner y se conserva su estado para regresar.
- **Criterio de aceptación:** en atlas/fotografía no se muestrea ni redibuja el escáner activo; al volver reanuda sin obligar a encenderlo otra vez. El botón y la lectura visible conservan funcionamiento. No cambia el terreno ni los guardados.
- **Rama:** codex/orbita-auto-030-escaner-oculto.
- **Cambio y archivos:** expansion.js comunica suspensión durante atlas/fotografía; exploration.js omite scanTerrain mientras está suspendido, sin borrar su selección ni el tiempo acumulado para reanudar. Regresión en tests/exploration-controls.test.mjs. Versión 0.5.21 en package.json/README y caché propia v37 en sw.js.
- **Validación:** 91 pruebas y construcción correctas. La regresión falló antes con 26 consultas de terreno durante suspensión; ahora no consulta ni dibuja, reanuda 25 celdas y vuelve a suspender/reanudar sin apagar el control. Navegador real: escáner seleccionado y visible, oculto en atlas/fotografía, visible con lectura al volver de ambos sin encender otra vez; revisión de escritorio y 390 × 844 sin errores/avisos. Evidencia: outputs/orbita-auto-030-escaner.png. No se midió ahorro de batería/FPS ni teléfono físico; la eliminación de trabajo se verifica contando llamadas en el controlador.
- **Propuesta:** [#68](https://github.com/fercala/pequenos-exploradores/pull/68). Commit de código: a004b42e23529e8ccfad43318da9f4ec63a8a83d; incorporación a main: 59325ef5101536330d3ff56358a57b2b00c2d57b.
- **Publicación confirmada:** 2026-10-19 18:56 UTC. [GitHub Pages: ejecución 39306511925 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39306511925), sobre el commit de incorporación. expansion.js y exploration.js públicos devuelven HTTP 200 con la suspensión del escáner; package.json confirma 0.5.21 y sw.js caché v37, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-031 · Mantener accesibles todos los botones en pantallas de 320 px

- **Inicio / última actualización:** 2026-10-19 19:59 / 20:00 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** a 320 px, Orientación sin gestos mantiene siete botones en una fila. Medición de navegador: Cambiar cámara ocupa x=291.6…333.6, fuera del ancho visible; parte del botón queda recortada. Los otros controles no pueden compensar esa acción al estar oculta la barra normal.
- **Relación / diferencia:** O4-019 (accesibilidad), O2-003 (controles móviles), AUTO-023 (nombre de cámara) y AUTO-029 (Mirar). Aquí se corrige el recorte de un control en pantalla estrecha, sin añadir otro botón ni cambiar sus acciones.
- **Criterio de aceptación:** a 320 px los siete botones caben completos, con área mínima 44 × 44 px y sin desplazamiento horizontal; Cambiar cámara sigue pulsable. A 390 px y escritorio se conserva la disposición existente. No cambia partidas ni preferencias.
- **Rama:** codex/orbita-auto-031-botones-320.
- **Cambio y archivos:** style.css distribuye Orientación sin gestos en dos filas centradas por debajo de 361 px y asegura ancho mínimo de 44 px. Las cuatro direcciones quedan en la primera fila y zoom/cámara en la segunda. Versión 0.5.22 en package.json/README y caché propia v38 en sw.js.
- **Validación:** 91 pruebas existentes y construcción correctas. Navegador a 320 × 760: antes Cambiar cámara terminaba en x=333.6; después los siete botones están dentro de x=66…254, todos 44 × 44 px, en dos filas. Pulsar Cambiar cámara activa Cabina. A 390 px todos caben en una fila; escritorio conserva una fila. Sin errores/avisos; preferencia sin gestos restituida. Evidencia: outputs/orbita-auto-031-botones.png. No se afirma prueba en teléfono físico.
- **Propuesta:** [#70](https://github.com/fercala/pequenos-exploradores/pull/70). Commit de código: 08526bc71071be820d78f2d3b81c18d57dfc76c2; incorporación a main: 64a2bd5e08154e9fd0caebb47d3baab6da9b2a82.
- **Publicación confirmada:** 2026-10-19 20:00 UTC. [GitHub Pages: ejecución 39315571101 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39315571101), sobre el commit de incorporación. style.css público devuelve HTTP 200 con la distribución estrecha en dos filas; package.json confirma 0.5.22 y sw.js caché v38, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-032 · Orientar al tripulante hacia su baliza

- **Inicio / última actualización:** 2026-10-19 20:57 / 20:58 UTC.
- **Estado:** Publicada.
- **Problema / oportunidad:** la baliza se conserva por mundo, pero Mochila solo permite colocarla o moverla. Lejos del lugar no existe una acción para orientar al tripulante hacia esa señal; el regreso orientado existente solo apunta a la nave.
- **Relación / diferencia:** SOL-001 (baliza y regreso a la nave), O2-007/008 (exploración). Se reutiliza la baliza guardada como un destino de orientación distinto de la nave; no se añade otra baliza, teletransporte ni objetivo duplicado.
- **Criterio de aceptación:** con baliza en el mundo actual, Mochila permite orientarse hacia ella a pie o en rover, deteniendo la marcha y sin cambiar posición. Sin baliza no ofrece la acción activa. Rechaza saltos/manobras y avisa si ya está cerca; conserva baliza/progreso y partidas anteriores.
- **Rama:** codex/orbita-auto-032-orientar-baliza.
- **Cambio y archivos:** field-expedition.js añade Orientar hacia baliza a Mochila, desactivado sin marca guardada en el mundo. Convierte coordenadas locales al terreno actual, orienta sobre el plano tangente y detiene la marcha sin mover al jugador ni la señal. Incluye avisos de proximidad/suelo y caso antipodal. Dos pruebas en tests/field.test.mjs; versión 0.5.23 en package.json/README y caché propia v39 en sw.js.
- **Validación:** 93 pruebas y construcción correctas. Casos nuevos comprueban rumbo a la marca en mundo rotado para caminante/rover, posición intacta, marcha cero, cámara de seguimiento, registro sin mutar y rechazo sin marca/en salto/proximidad. Navegador real: acción desactivada sin baliza; colocar marca lunar, caminar de 13 a 27 m de progreso y orientar a la baliza a 15 m, con marcha 0 % y señal delante. Mochila revisada en escritorio y 390 × 844, sin errores/avisos. Evidencia: outputs/orbita-auto-032-mochila.png. No se afirma recorrido automático ni teléfono físico.
- **Propuesta:** [#72](https://github.com/fercala/pequenos-exploradores/pull/72). Commit de código: 70cca9d501c91450863d25eff7630b67495e61a7; incorporación a main: 911282f0d7cdea433dc763e9e9952221620058a3.
- **Publicación confirmada:** 2026-10-19 20:58 UTC. [GitHub Pages: ejecución 39323653038 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39323653038), sobre el commit de incorporación. field-expedition.js público devuelve HTTP 200 e incluye findBeacon y la acción de mochila; package.json confirma 0.5.23 y sw.js caché v39, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-033 · Localizar la baliza en el mapa de superficie

- **Inicio / última actualización:** 2026-10-19 21:58 / 22:00 UTC.
- **Estado:** Publicada.
- **Problema / oportunidad:** drawMap muestra lugares, posición actual y destino, pero omite la baliza guardada. Tras alejarse no puede localizarse en el mapa ni marcar sus coordenadas sin copiarlas manualmente de Mochila.
- **Relación / diferencia:** O4-001 (mapa), SOL-001 (baliza) y AUTO-032 (orientación a la marca). AUTO-032 orienta al tripulante; esta ampliación sitúa la misma marca en la cartografía y permite seleccionarla como destino del mapa mediante botón, sin crear otra señal ni teletransportar.
- **Criterio de aceptación:** el mapa del mundo actual muestra Tu baliza cuando existe y un botón con coordenadas permite marcarla como destino; sin marca queda desactivado. Las balizas de otros mundos no aparecen. Conserva coordenadas, partidas y reglas del descenso.
- **Rama:** codex/orbita-auto-033-baliza-mapa.
- **Cambio y archivos:** expansion.js proporciona la baliza del mundo solicitado; exploration.js dibuja Tu baliza y añade Marcar mi baliza con coordenadas, desactivado sin marca. Seleccionarla reutiliza el destino del mapa, con etiqueta combinada para no superponer baliza/destino. Regresión en tests/exploration-controls.test.mjs; versión 0.5.24 en package.json/README y caché propia v40 en sw.js.
- **Validación:** 94 pruebas y construcción correctas. La regresión falló antes por marcador ausente; ahora verifica dibujo, selección exacta de coordenadas, etiqueta combinada, posición y baliza intactas, ausencia en otro mundo y estado desactivado sin marca. Navegador real: recuperar baliza lunar −31.36°, −85.16°, verla en cartografía y seleccionarla con el botón, actualizando coordenadas y destino. Escritorio y 390 × 844 revisados sin errores/avisos. Evidencia: outputs/orbita-auto-033-mapa.png. No se ejecutó un descenso ni se probó teléfono físico.
- **Propuesta:** [#74](https://github.com/fercala/pequenos-exploradores/pull/74). Commit de código: bc2284b059298d2089b01dd17a65d4eb335f7c2c; incorporación a main: 3468902b14f55547295e10465cbf4fb12767974f.
- **Publicación confirmada:** 2026-10-19 22:00 UTC. [GitHub Pages: ejecución 39331673066 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39331673066), sobre el commit de incorporación. expansion.js y exploration.js públicos devuelven HTTP 200 con consulta de baliza y marcador/selección del mapa; package.json confirma 0.5.24 y sw.js caché v40, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-034 · Mantener la caída del salto junto al agua

- **Inicio / última actualización:** 2026-10-19 23:02 / 23:04 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** surfacePhysics rechaza un movimiento hacia agua con return antes de integrar jumpSpeed/jumpHeight. Mantener la marcha hacia una costa durante un salto congela la caída mientras dure el intento de cruzar el agua.
- **Relación / diferencia:** O2-007 (saltos), SOL-001 (caminata) y AUTO-013 (limpiar salto al cambiar vehículo). Aquí se mantiene la gravedad del salto cuando una colisión horizontal bloquea el paso, sin cambiar límites de agua ni permitir atravesarla.
- **Criterio de aceptación:** un salto junto al agua sigue subiendo/cayendo hasta apoyar en suelo aunque se mantenga la marcha. La posición horizontal permanece bloqueada y no acumula distancia ficticia; el rover sigue sin cruzar agua. No cambia la gravedad ni los guardados.
- **Rama:** codex/orbita-auto-034-salto-costa.
- **Cambio y archivos:** expansion.js bloquea la componente horizontal al detectar agua, pero continúa integrando gravedad/altura del salto con la normal anterior. Dos regresiones en tests/vehicle-transition.test.mjs; versión 0.5.25 en package.json/README y caché propia v41 en sw.js.
- **Validación:** 96 pruebas y construcción correctas. Antes, el salto con marcha hacia costa no cambiaba altura/velocidad. Ahora el caso mantiene la marcha 5.6 s y comprueba ascenso, caída y apoyo final, sin desplazamiento horizontal ni distancia a pie ficticia. Rover mantiene posición, velocidad cero y contador intacto al chocar con agua. Navegador real en suelo lunar seco: Saltar sube de 2 a 4 m, vuelve a 2 m y velocidad vertical 0; vista 390 × 844 sin errores/avisos. Evidencia final en suelo: outputs/orbita-auto-034-salto.png. La costa se verifica con el controlador real y terreno de prueba; no se ensayó una costa manual ni teléfono físico.
- **Propuesta:** [#76](https://github.com/fercala/pequenos-exploradores/pull/76). Commit de código: 48a06179e0a10ec0d9bc80e5192964170242b1c4; incorporación a main: 729ba111c92b42b14b2b93320680be67b9ca1533.
- **Publicación confirmada:** 2026-10-19 23:04 UTC. [GitHub Pages: ejecución 39339055899 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39339055899), sobre el commit de incorporación. expansion.js público devuelve HTTP 200 y mantiene integración tras bloquear el movimiento hacia agua; package.json confirma 0.5.25 y sw.js caché v41, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-035 · Nombrar avance y retroceso según el vehículo

- **Inicio / última actualización:** 2026-10-19 23:55 / 23:58 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** los botones data-hold up/down siempre anuncian Ascender/Descender, pero surfacePhysics los usa para avanzar/retroceder a pie o en rover. Sus nombres accesibles describen una acción vertical que no realizan en superficie.
- **Relación / diferencia:** O2-003 (controles), O4-019 (accesibilidad) y SOL-001 (tripulante/rover). AUTO-008 y AUTO-029 tratan Mirar; aquí los nombres de dos controles de movimiento siguen al vehículo activo, sin modificar su función.
- **Criterio de aceptación:** a pie anuncian Avanzar a pie/Retroceder a pie; en rover Avanzar en rover/Retroceder en rover; en nave o EVA Ascender/Descender. Se actualizan al cambiar de vehículo y conservan botones, tamaño y controles existentes.
- **Rama:** codex/orbita-auto-035-nombres-movimiento.
- **Cambio y archivos:** field-expedition.js actualiza aria-label de avance/retroceso solo cuando cambia el vehículo, con nombres de caminata/rover y nombres espaciales para nave/EVA. Mantiene los mismos nodos y manejadores. Versión 0.5.26 en package.json/README y caché propia v42 en sw.js.
- **Validación:** 96 pruebas existentes y construcción correctas. Navegador real: nombres iniciales Ascender/Descender; recuperar caminante muestra Avanzar a pie/Retroceder a pie; embarcar rover muestra Avanzar en rover/Retroceder en rover en el árbol accesible; bajar vuelve a los nombres a pie. Vista de 390 × 844 revisada sin errores/avisos, controles existentes conservados y ajuste ampliado restituido. Evidencia visual de la escena a pie: outputs/orbita-auto-035-controles.png. Los nombres se verificaron en DOM/árbol accesible; no se afirma lector de pantalla, prueba manual EVA ni teléfono físico.
- **Propuesta:** [#78](https://github.com/fercala/pequenos-exploradores/pull/78). Commit de código: 8dc74f3ca02edfc769c34b5735e722a1347f8718; incorporación a main: f23b0ed5781c1309f93f0717cc60ec87464100fd.
- **Publicación confirmada:** 2026-10-19 23:58 UTC. [GitHub Pages: ejecución 39344713526 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39344713526), sobre el commit de incorporación. field-expedition.js público devuelve HTTP 200 con los nombres por vehículo; package.json confirma 0.5.26 y sw.js caché v42, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-036 · Evitar salir al espacio con la mochila agotada

- **Inicio / última actualización:** 2026-10-20 01:04 / 01:05 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** eva-exit permite salir con evaFuel igual a cero; el siguiente paso de física devuelve inmediatamente al tripulante mediante la línea de seguridad, sin explicar que debe reponer la mochila.
- **Relación / diferencia:** O4-008 (EVA), O4-009 (recursos) y AUTO-001 (consumo por vehículo). Se conserva el retorno automático existente; esta corrección impide iniciar una salida inviable y explica cómo recuperar la reserva, sin alterar combustible ni partidas.
- **Criterio de aceptación:** reserva agotada mantiene al jugador a bordo, conserva posición/controles/progreso y anuncia que se repone al acoplar en la estación; con reserva positiva sigue permitida una salida válida. Se mantiene la protección de atmósfera, maniobra, altura y acoplamiento.
- **Rama:** codex/orbita-auto-036-mochila-agotada.
- **Cambio y archivos:** mission-control.js rechaza la salida cuando evaFuel <= 0 mediante el aviso accesible existente y explica la reposición en estación también en las instrucciones. tests/mission-control.test.mjs cubre reserva nula y positiva; package.json/README 0.5.27 y sw.js caché propia v43.
- **Validación:** prueba de regresión falló antes del cambio (salía en EVA) y pasó después. 97 pruebas satisfactorias y construcción correcta. El caso agotado conserva posición, nave estacionada, velocidad, potencia y número de guardados; 0,1 % permite salir. Navegador: salida válida desde Tierra, retorno con línea de seguridad e instrucciones legibles a 390 × 844, sin avisos/errores. Captura outputs/orbita-auto-036-mochila.png. El agotamiento se verifica con el controlador real en prueba automatizada; no se agotó manualmente la mochila ni se probó un teléfono físico.
- **Propuesta:** [#80](https://github.com/fercala/pequenos-exploradores/pull/80). Commit de código: e02d417430635449c8539f92ce56ab4b4ba27739; incorporación a main: 70bf723eb5734d237f4487d900818401bbab5a26.
- **Publicación confirmada:** 2026-10-20 01:05 UTC. [GitHub Pages: ejecución 39351404855 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39351404855), sobre el commit de incorporación. mission-control.js público HTTP 200 incluye el bloqueo de mochila agotada; package.json confirma 0.5.27 y sw.js caché v43, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-037 · Una captura por pulsación mientras se genera la foto

- **Inicio / última actualización:** 2026-10-20 01:58 / 02:00 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** capture es asíncrona y espera toBlob sin bloquear nuevas llamadas. Dos pulsaciones rápidas crean dos fotografías, registros y contadores para la misma captura pendiente, además de dos conversiones PNG.
- **Relación / diferencia:** O2-019 (fotografía), O4-017 (cuaderno) y AUTO-024 (exposición). Aquí se evita la concurrencia de capturas y se libera el botón tras éxito o error; no cambia la exposición ni el formato de imagen.
- **Criterio de aceptación:** mientras una captura espera su PNG, el botón indica progreso y no acepta otra; una llamada repetida tampoco duplica el trabajo. Tras éxito o fallo se permite reintentar. Una captura correcta sigue generando un registro, una foto y su enlace.
- **Rama:** codex/orbita-auto-037-captura-unica.
- **Cambio y archivos:** expansion.js bloquea capturas simultáneas, desactiva Capturar imagen y muestra Capturando… mientras espera el PNG; finally libera el botón tanto al terminar como al fallar. tests/vehicle-transition.test.mjs simula la conversión pendiente, repetición, fallo y reintento. README/package.json 0.5.28 y caché propia v44 en sw.js.
- **Validación:** regresión reproducida antes del cambio: dos conversiones en lugar de una; después, 98 pruebas y construcción satisfactorias. El test verifica un registro y un contador ante llamadas simultáneas, enlace final y botón recuperado tras fallo/reintento. Navegador real: botón Capturando… desactivado durante la conversión, vista previa y enlace de descarga correctos, botón habilitado al terminar. Revisión a 390 × 844, sin avisos/errores; captura outputs/orbita-auto-037-foto.png. No se forzó fallo de conversión en el navegador ni se probó un teléfono físico; esos caminos se cubren con el controlador real en la prueba automatizada.
- **Propuesta:** [#82](https://github.com/fercala/pequenos-exploradores/pull/82). Commit de código: 8ecbae74c1a01db27c1242cef976dae70b26a63c; incorporación a main: 14cf0f821c99e3cdf1e3b9fd5089f7b192f0bb78.
- **Publicación confirmada:** 2026-10-20 02:00 UTC. [GitHub Pages: ejecución 39356467965 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39356467965), sobre el commit de incorporación. expansion.js público HTTP 200 incluye el bloqueo de captura concurrente; package.json confirma 0.5.28 y sw.js caché v44, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-038 · No registrar fotografías cuya generación falla

- **Inicio / última actualización:** 2026-10-20 02:59 / 03:01 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** capture añade la miniatura al cuaderno antes de resolver toBlob. Si la conversión PNG devuelve null, anuncia un error y no suma fotografía, pero el registro ya persiste y puede desplazar registros/miniaturas anteriores por sus límites.
- **Relación / diferencia:** O2-019 (fotografía), O4-017 (cuaderno) y AUTO-037 (bloqueo de concurrencia). AUTO-037 evita llamadas simultáneas; este cambio condiciona el registro a que exista un PNG válido, evitando efectos de una captura fallida.
- **Criterio de aceptación:** mientras se convierte o si la conversión falla, no se añade registro fotográfico; una captura exitosa añade exactamente uno y conserva contador/enlace. Un reintento tras fallo funciona y el bloqueo de AUTO-037 sigue activo.
- **Rama:** codex/orbita-auto-038-foto-valida.
- **Cambio y archivos:** expansion.js añade la fotografía al cuaderno después de comprobar que toBlob produjo un PNG. tests/vehicle-transition.test.mjs amplía la regresión de captura con el registro real de mission-control y comprueba que el cuaderno permanece idéntico durante una conversión fallida. README/package.json 0.5.29 y sw.js caché propia v45.
- **Validación:** regresión falló antes del cambio (un registro antes de resolver el PNG) y pasó después. 98 pruebas y construcción satisfactorias. Se verifican espera sin registro, éxito con uno, fallo sin modificar el cuaderno, reintento y bloqueo de concurrencia. Navegador: PNG y enlace generados; cuaderno muestra exactamente una fotografía con miniatura. Revisión a 390 × 844, sin avisos/errores; evidencia outputs/orbita-auto-038-cuaderno.png. El fallo de conversión se verifica en la prueba automatizada con el controlador real, no se forzó en el navegador ni se probó un teléfono físico.
- **Propuesta:** [#84](https://github.com/fercala/pequenos-exploradores/pull/84). Commit de código: 2aa167824b17b0fe2b026124b541fdb72a19856b; incorporación a main: 8bcf7a2526c8ed3f56a800514bf2f39efad91b6c.
- **Publicación confirmada:** 2026-10-20 03:01 UTC. [GitHub Pages: ejecución 39362000822 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39362000822), sobre el commit de incorporación. expansion.js público HTTP 200 registra la foto tras comprobar el PNG; package.json confirma 0.5.29 y sw.js caché v45, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-039 · Los avisos no interceptan los controles de vuelo

- **Inicio / última actualización:** 2026-10-20 04:00 / 04:02 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** al iniciar una expedición de escritorio, el aviso de bienvenida se superpone al botón Fotografiar. elementFromPoint sobre su centro devuelve toast y pulsar el botón no abre la cámara. La regla pointer-events:none solo existe para avisos durante exploración de superficie, no en vuelo.
- **Relación / diferencia:** O2-003 (mouse/tacto), O4-019 (avisos/accesibilidad) y AUTO-008 (nombre de Mirar). Se conserva el texto/lectura de avisos; esta corrección hace que todos dejen pasar los punteros, sin cambiar controles ni duración.
- **Criterio de aceptación:** con un aviso visible en vuelo, el botón superpuesto recibe la pulsación inmediatamente; los avisos siguen siendo visibles y conservan role=status/aria-live. Revisar escritorio y 390 px sin alterar partidas ni superficie.
- **Rama:** codex/orbita-auto-039-avisos-controles.
- **Cambio y archivos:** style.css aplica pointer-events:none a la regla general de avisos, ampliando el comportamiento ya existente en superficie. El aviso mantiene texto, estilo, duración, role=status y aria-live=polite. README/package.json 0.5.30 y caché propia v46 en sw.js.
- **Validación:** 98 pruebas existentes y construcción satisfactorias. Antes, navegador de escritorio: aviso visible, hit-test del centro de Fotografiar devuelve toast y una pulsación deja la cámara cerrada. Después: mismo aviso visible, hit-test devuelve photo-btn y una pulsación abre fotografía. DOM confirma pointer-events:none y atributos accesibles conservados. A 390 × 844, aviso de tren visible con la misma regla, DETENER recibe el hit-test y Fotografiar responde; sin avisos/errores de consola. Evidencia outputs/orbita-auto-039-avisos.png. Prueba de mouse y viewport móvil; no se afirma pantalla táctil física ni lector de pantalla.
- **Propuesta:** [#86](https://github.com/fercala/pequenos-exploradores/pull/86). Commit de código: ec616eca9a50a29a1406810d02fa9db6948971b1; incorporación a main: fb799d2d3ff78612efd895dfe5ae363bb5b94459.
- **Publicación confirmada:** 2026-10-20 04:02 UTC. [GitHub Pages: ejecución 39367368293 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39367368293), sobre el commit de incorporación. style.css público HTTP 200 incluye pointer-events:none en los avisos generales; package.json confirma 0.5.30 y sw.js caché v46, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-040 · Localizar la nave estacionada en el mapa de superficie

- **Inicio / última actualización:** 2026-10-21 10:20 / 10:24 UTC.
- **Estado:** Publicada.
- **Problema / oportunidad comprobada:** el mapa muestra al tripulante, lugares y baliza, pero no la nave que queda aparcada al caminar o conducir. El regreso de SOL-001 orienta al jugador; falta comparar visualmente su posición con la nave y consultar sus coordenadas desde el mapa.
- **Relación / diferencia:** O4-001 (mapa), SOL-001 (regreso a nave) y AUTO-033 (baliza en mapa). Se añade el anclaje real de la nave estacionada, distinto de la baliza movible del jugador. No se añade teletransporte ni otro sistema de regreso.
- **Criterio de aceptación:** a pie/en rover, mapa con marcador Tu nave y botón con sus coordenadas locales que permite marcarla como destino sin mover al jugador ni modificar el anclaje. A bordo no muestra un anclaje antiguo. Conserva baliza, puntos y controles existentes.
- **Rama:** codex/orbita-auto-040-nave-en-mapa.
- **Cambio y archivos:** exploration.js calcula coordenadas locales desde parkedPosition a pie/en rover, dibuja Tu nave y ofrece Marcar mi nave con coordenadas textuales. La selección reutiliza el destino existente, con etiqueta Tu nave · destino; a bordo el acceso y marcador de aparcamiento se ocultan. tests/exploration-controls.test.mjs cubre caminante/rover, selección sin mover anclajes y ocultación a bordo. README/package.json 0.5.31 y caché propia v47 en sw.js.
- **Validación:** prueba nueva falló antes al no existir el marcador; después, 99 pruebas y construcción satisfactorias. Navegador: continuar partida lunar a pie, abrir mapa con baliza y nave distintas, Marcar mi nave fija 13.82°, -79.80° y se ve Tu nave · destino. Revisión 390 × 844, botón y texto accesibles, mapa existente conservado, sin avisos/errores. Evidencia outputs/orbita-auto-040-nave-mapa.png. Rover/ocultación se cubren en la prueba automatizada; no se afirma teléfono físico ni lector de pantalla.
- **Propuesta:** [#88](https://github.com/fercala/pequenos-exploradores/pull/88). Commit de código: a29794d86c1c7c3177597ac8145d3e1ba226c883; incorporación a main: 2416196cc2bc653edcf365b5e57cc8dcce15f809.
- **Publicación confirmada:** 2026-10-21 10:24 UTC. [GitHub Pages: ejecución 39584153451 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39584153451), sobre el commit de incorporación. exploration.js público HTTP 200 incluye Tu nave · destino; package.json confirma 0.5.31 y sw.js caché v47, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-041 · Detener la marcha al recolocar el joystick

- **Inicio / última actualización:** 2026-10-21 11:24 / 11:28 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** Mover joystick activa editing y pausa la física, pero conserva la potencia y velocidad anteriores. Al pulsar Listo, el vehículo reanuda su marcha sin una nueva orden de avance, mientras se está probando la nueva posición del control.
- **Relación / diferencia:** O2-003 (distribución), AUTO-016 (restablecer controles) y AUTO-027 (detener propulsión al abrir atlas). Se aplica la parada al editor de posición del joystick; no al atlas ni al restablecimiento de preferencias.
- **Criterio de aceptación:** entrar en Mover joystick deja potencia y velocidad a cero en nave, caminante y rover; terminar la edición conserva ese estado y guarda las preferencias. Mantiene vehículo, posición, orientación y posición personalizada del joystick.
- **Rama:** codex/orbita-auto-041-editar-en-reposo.
- **Cambio y archivos:** expansion.js pone potencia y velocidad a cero al activar el editor; el aviso indica Movimiento detenido. tests/vehicle-transition.test.mjs cubre nave, caminante y rover con marcha previa, conservación de anclajes y preferencias, y salida de edición sin reanudar. README/package.json 0.5.32 y sw.js caché propia v48.
- **Validación:** regresión falló antes (potencia 0,7 al entrar) y pasó después. 100 pruebas y construcción satisfactorias. Navegador a 390 × 844: potencia 60 antes de editar, 0 durante y después de Listo; arrastre de mouse recoloca joystick, y recargar/Continuar conserva 13.3333vw / 53.5545dvh. Sin errores/avisos de consola; evidencia outputs/orbita-auto-041-joystick.png. Caminante/rover y velocidad interna cubiertos en prueba del controlador; no se afirma teléfono físico ni prueba táctil.
- **Propuesta:** [#90](https://github.com/fercala/pequenos-exploradores/pull/90). Commit de código: 0c06781a34a854f4dcf8f56c47e36ceab3773218; incorporación a main: fc4d207b4f57366bf12aab8feff87ed193be63b2.
- **Publicación confirmada:** 2026-10-21 11:28 UTC. [GitHub Pages: ejecución 39591989190 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39591989190), sobre el commit de incorporación. expansion.js público HTTP 200 incluye parada y aviso de Movimiento detenido; package.json confirma 0.5.32 y sw.js caché v48, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-042 · Suspender el escáner cuando el juego está en pausa

- **Inicio / última actualización:** 2026-10-21 12:20 / 12:23 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** frame pasa frozen a la expansión al pausar, abrir un panel o editar controles; expansion.tick no lo transmite al escáner. Si sigue activado, muestrea 25 puntos, busca obstáculos y redibuja cuatro veces por segundo aunque la simulación esté detenida.
- **Relación / diferencia:** O4-004 (escáner), O2-004 (rendimiento móvil) y AUTO-030 (suspensión en atlas/foto). Se amplía la suspensión existente a la pausa de la simulación y los paneles; se conserva la selección y el último resultado.
- **Criterio de aceptación:** frozen detiene el muestreo del escáner, como atlas/foto; al continuar vuelve a actualizarse si estaba activado. No desactiva el botón, borra el resultado ni altera la partida.
- **Rama:** codex/orbita-auto-042-escaner-en-pausa.
- **Cambio y archivos:** expansion.js transmite frozen a la suspensión existente del escáner, además de atlas/foto. tests/vehicle-transition.test.mjs usa los controladores reales y cuenta los dibujos de las celdas antes, durante y después de pausar; añade un contexto de lienzo a la fixture. README/package.json 0.5.33 y sw.js caché propia v49.
- **Validación:** regresión falló antes: al pausar los dibujos subían de 25 a 50; después se mantienen en 25 durante pausa/foto/atlas y llegan a 50 al continuar, sin volver a pulsar Escáner. 101 pruebas y construcción satisfactorias. Navegador: escáner activo, pausa muestra último resultado y botón seleccionado; continuar conserva selección y panel visible. Vista 390 × 844 revisada sin avisos/errores; evidencia outputs/orbita-auto-042-escaner-pausa.png. La ausencia de trabajo se mide en la prueba del controlador, no mediante perfilado del navegador; no se afirma ahorro energético cuantificado ni teléfono físico.
- **Propuesta:** [#92](https://github.com/fercala/pequenos-exploradores/pull/92). Commit de código: dba1644085a4199819d7b05a416bda5e3f9cbae2; incorporación a main: 8eda80a23f5d3caae9e0e7e691ca106ed657606b.
- **Publicación confirmada:** 2026-10-21 12:23 UTC. [GitHub Pages: ejecución 39599028427 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39599028427), sobre el commit de incorporación. expansion.js público HTTP 200 transmite frozen al escáner; package.json confirma 0.5.33 y sw.js caché v49, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-043 · Centrar la vista al cambiar cámara con botones accesibles

- **Inicio / última actualización:** 2026-10-21 13:28 / 13:31 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** camera-btn cambia el modo y pone viewYaw/viewPitch a cero; Cambiar cámara de Orientación sin gestos conserva los ángulos de Mirar/Observación. El usuario entra en cabina mirando hacia un lado o arriba al usar el control accesible, con un resultado distinto del botón normal.
- **Relación / diferencia:** O4-019 (orientación accesible), O2-010 (cabina), AUTO-023 (nombre de cámara) y AUTO-029 (respetar modo Mirar). Se sincroniza el centrado al cambiar de cámara; no se modifica el giro del vehículo ni la orientación mientras se mantiene un modo.
- **Criterio de aceptación:** los tres cambios de modo accesibles centran solo la cámara como el botón estándar, conservando vehículo, orientación, posición y zoom. Los controles de mirar siguen funcionando después.
- **Rama:** codex/orbita-auto-043-centrar-camara.
- **Cambio y archivos:** exploration.js centra viewYaw/viewPitch al cambiar cámara desde Orientación sin gestos, igual que el botón estándar. tests/exploration-controls.test.mjs recorre cabina/observación/seguimiento desde ángulos distintos, comprueba posición/orientación/zoom conservados y vuelve a mirar en cada modo. README/package.json 0.5.34 y sw.js caché propia v50.
- **Validación:** regresión falló antes (viewYaw 0,8 al cambiar) y pasó después. 102 pruebas y construcción satisfactorias. Navegador: activar Mirar y botones accesibles, mirar izquierda/arriba, cambiar a cabina y revisar imagen; después observación y seguimiento funcionan, etiqueta normal coincide al ocultar controles accesibles. Vista 390 × 844, sin avisos/errores; evidencia outputs/orbita-auto-043-cabina.png. Los ángulos y conservación del vehículo se verifican con el controlador real; no se afirma lector de pantalla ni teléfono físico.
- **Propuesta:** [#94](https://github.com/fercala/pequenos-exploradores/pull/94). Commit de código: aa0a59611f7fcac33c926c53be7c4683338f31f8; incorporación a main: 57fba90e9531751dcba2766043cace15242799a8.
- **Publicación confirmada:** 2026-10-21 13:31 UTC. [GitHub Pages: ejecución 39608626332 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39608626332), sobre el commit de incorporación. exploration.js público HTTP 200 centra viewYaw/viewPitch tras cambiar modo; package.json confirma 0.5.34 y sw.js caché v50, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-044 · Distancia a la baliza durante la marcha

- **Inicio / última actualización:** 2026-10-21 14:25 / 14:35 UTC.
- **Estado:** Publicada.
- **Problema / oportunidad comprobada:** Buscar mi baliza orienta y anuncia la distancia una vez, pero al avanzar el panel de superficie solo indica distancia a la nave y objetivos. Falta comprobar sin abrir menús si el tripulante/rover se acerca a su baliza.
- **Relación / diferencia:** SOL-001 (baliza), AUTO-032 (orientarse hacia ella) y AUTO-033 (marcarla en mapa). Se añade una distancia actualizada durante la marcha, reutilizando el anclaje renderizado del mundo actual; no otra baliza ni un nuevo sistema de orientación.
- **Criterio de aceptación:** a pie/en rover y con baliza local, el estado de superficie muestra Nave, Baliza y objetivos; la distancia disminuye al acercarse y aumenta al alejarse. Sin baliza local no muestra distancia ajena. Conserva posición, progreso y controles.
- **Rama:** codex/orbita-auto-044-distancia-baliza.
- **Cambio y archivos:** field-expedition.js añade Baliza N m al estado de superficie a pie/en rover cuando existe una baliza local, usando la posición del marcador que ya se actualiza con el mundo. tests/field.test.mjs cubre acercarse, alejarse, cambio de mundo y conservación de anclajes/progreso. README/package.json 0.5.35 y sw.js caché propia v51.
- **Validación:** prueba nueva falló antes por ausencia de distancia; después, 103 pruebas y construcción satisfactorias. Navegador lunar a pie 390 × 844: indicador pasa de 2 m a 17 m al alejarse y baja a 5 m al orientarse/volver; nave y objetivos siguen visibles, controles operativos. Sin avisos/errores; evidencia outputs/orbita-auto-044-distancia-baliza.png. Rover y ausencia de baliza local cubiertos por controlador real en prueba; no se afirma teléfono físico. Distancias del mundo comprimido, sin añadir datos astronómicos.
- **Propuesta:** [#96](https://github.com/fercala/pequenos-exploradores/pull/96). Commit de código: c0855926fd68b1369f651f1d96f7141f587373da; incorporación a main: 9cd345750ac2bd7ae9b4c800e740a192cb31476b.
- **Publicación confirmada:** 2026-10-21 14:35 UTC. [GitHub Pages: ejecución 39616991401 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39616991401), sobre el commit de incorporación, tras espera en cola de GitHub. field-expedition.js público HTTP 200 incluye distancia al marcador; package.json confirma 0.5.35 y sw.js caché v51, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-045 · Encontrar el rover aparcado en el mapa

- **Inicio / última actualización:** 2026-10-21 15:33 / 15:36 UTC.
- **Estado:** Publicada.
- **Problema / oportunidad comprobada:** el rover conserva su posición al bajar, pero el mapa no lo dibuja. Tras alejarse a pie no se pueden consultar sus coordenadas para localizarlo; Marcar mi nave y Marcar mi baliza son anclajes diferentes.
- **Relación / diferencia:** O2-008 (rover), AUTO-010 (guardar aparcamiento), AUTO-025 (embarcar en su posición), AUTO-033 y AUTO-040 (baliza/nave en mapa). Se representa el anclaje existente del rover, sin desplegar otro, moverlo ni reemplazar la nave o baliza.
- **Criterio de aceptación:** con rover aparcado, a pie/a bordo el mapa muestra Tu rover y un botón con coordenadas locales para marcarlo. Sin rover o conduciéndolo no muestra un aparcamiento antiguo. Seleccionar conserva anclajes, orientación, posición y progreso.
- **Rama:** codex/orbita-auto-045-rover-en-mapa.
- **Cambio y archivos:** exploration.js obtiene coordenadas locales de roverParked cuando se camina o se está a bordo; dibuja Tu rover y ofrece Marcar mi rover. Selección con etiqueta Tu rover · destino; oculta el aparcamiento si no existe o se conduce el rover. tests/exploration-controls.test.mjs cubre selección y anclajes conservados, navegación a pie/a bordo, conducción y ausencia. README/package.json 0.5.36 y sw.js caché propia v52.
- **Validación:** regresión falló antes por ausencia del marcador; después, 104 pruebas y construcción satisfactorias. Navegador: partida lunar a pie, seleccionar rover a -31.36°, -85.16°, mapa y botón legibles en 390 × 844; embarcar rover oculta el botón de aparcamiento, y bajar devuelve el estado a pie. Sin avisos/errores; evidencia outputs/orbita-auto-045-rover-mapa.png. Caso a bordo/sin rover y conservación de anclajes cubiertos por controlador real en prueba; no se afirma teléfono físico ni lector de pantalla.
- **Propuesta:** [#98](https://github.com/fercala/pequenos-exploradores/pull/98). Commit de código: d01fd5c168aa8a78c22f265853f35d67019d63f2; incorporación a main: 9c963e2d14da617a281151e2234c72138d1202d3.
- **Publicación confirmada:** 2026-10-21 15:36 UTC. [GitHub Pages: ejecución 39627082257 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39627082257), sobre el commit de incorporación. exploration.js público HTTP 200 incluye Tu rover · destino; package.json confirma 0.5.36 y sw.js caché v52, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-046 · Avisar si falla el guardado automático

- **Inicio / última actualización:** 2026-10-21 16:30 / 16:33 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** writeSave devuelve false cuando el almacenamiento falla, pero los guardados periódicos y de ciclo de vida ignoran el resultado de persist. El jugador puede seguir explorando sin saber que los últimos cambios no se conservan; solo guardar manualmente avisa.
- **Relación / diferencia:** O2-020 (partida portable) y AUTO-003 (proteger importación de guardados de salida). Se notifica el fallo real del guardado normal y se ofrece exportar; no se cambia el formato ni se sobrescriben las partidas anteriores.
- **Criterio de aceptación:** primer fallo de guardado normal muestra aviso con ruta a Exportar partida; fallos consecutivos no generan avisos repetidos. Un guardado posterior correcto rearma el aviso para otro fallo futuro. Importación protegida mantiene su comportamiento y exportación sigue disponible.
- **Rama:** codex/orbita-auto-046-aviso-guardado.
- **Cambio y archivos:** core.js añade notificación opcional de primer fallo a createSaveSession, permite reintentos y rearma tras éxito; mantiene la protección de reemplazo. app.js muestra el aviso existente con instrucciones para exportar desde Expedición. tests/expansion.test.mjs comprueba fallos consecutivos, partida previa intacta, recuperación, nuevo fallo e importación protegida. README/package.json 0.5.37 y sw.js caché propia v53.
- **Validación:** regresión falló antes por no notificarse el fallo; después, 105 pruebas y construcción satisfactorias. Navegador: guardado manual correcto y ruta Expedición → Exportar partida genera enlace orbita-expedicion.json, legible a 390 × 844, sin errores/avisos de consola. Evidencia outputs/orbita-auto-046-exportacion.png muestra la vía de copia, no el aviso de fallo. El almacenamiento lleno/bloqueado se simula en la prueba del controlador; no se cambiaron permisos del navegador ni se forzó el fallo allí, ni se probó teléfono físico.
- **Propuesta:** [#100](https://github.com/fercala/pequenos-exploradores/pull/100). Commit de código: 3c19502dc36d764fd2e3af7cefa29ddb7f28cfe7; incorporación a main: d8d86f7e196ece51ee7b97d25036b73801f499d3.
- **Publicación confirmada:** 2026-10-21 16:33 UTC. [GitHub Pages: ejecución 39635582116 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39635582116), sobre el commit de incorporación. core.js y app.js públicos HTTP 200 incluyen notificación de fallo y ruta de exportación; package.json confirma 0.5.37 y sw.js caché v53, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-047 · Mostrar cuándo una ruta puede iniciarse o reanudarse

- **Inicio / última actualización:** 2026-10-21 17:35 / 17:37 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** con una ruta vacía, Iniciar ruta permanece habilitado y su manejador vuelve sin respuesta. Reanudar también está habilitado aunque no quedan escalas. El jugador debe probar botones que no pueden actuar para conocer el estado de la ruta.
- **Relación / diferencia:** O4-005 (rutas), AUTO-004 (preparar rutas) y AUTO-005 (quitar escalas). Se refleja la disponibilidad de inicio/reanudación al mostrar o editar las escalas; no se cambia el itinerario ni su índice.
- **Criterio de aceptación:** ruta vacía muestra inicio/reanudación deshabilitados; añadir una escala los habilita. Tras completar todas las escalas puede iniciarse de nuevo, pero no reanudarse. Quitar la última escala vuelve a deshabilitarlos y conserva progreso ajeno.
- **Rama:** codex/orbita-auto-047-disponibilidad-ruta.
- **Cambio y archivos:** mission-control.js deshabilita Iniciar ruta si no hay escalas y Reanudar si el índice ya no tiene una escala pendiente. Se recalcula al abrir el panel, añadir o quitar escalas. tests/mission-control.test.mjs cubre vacío, añadir, completar y quitar, conservando campaña. README/package.json 0.5.38 y sw.js caché propia v54.
- **Validación:** regresión falló antes por botones sin estado deshabilitado; después, 106 pruebas y construcción satisfactorias. Navegador: ruta vacía anuncia ambos botones deshabilitados; añadir Luna habilita ambos; quitar la última vuelve a deshabilitarlos. Revisión en escritorio y 390 × 844, sin avisos/errores; evidencia outputs/orbita-auto-047-ruta.png. Ruta completada se cubre con el controlador real en prueba; no se afirma lector de pantalla ni teléfono físico.
- **Propuesta:** [#102](https://github.com/fercala/pequenos-exploradores/pull/102). Commit de código: f58fc46573800d7272f3695cc6ff0c1662f0577f; incorporación a main: e0814f16a4d47535058d41ace59bd7335fcae09a.
- **Publicación confirmada:** 2026-10-21 17:37 UTC. [GitHub Pages: ejecución 39645304103 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39645304103), sobre el commit de incorporación. mission-control.js público HTTP 200 incluye disponibilidad por escalas; package.json confirma 0.5.38 y sw.js caché v54, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-048 · Conservar los controles táctiles ampliados

- **Inicio / última actualización:** 2026-10-21 18:38 / 18:41 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** la casilla Controles táctiles ampliados solo cambia la clase extended del documento; no actualiza ni guarda ajustes. Al recargar se pierden los botones extra de giro/frenado y la casilla vuelve a desactivada.
- **Relación / diferencia:** O2-003 (controles ajustables), O4-019 (accesibilidad) y AUTO-020 (nombre/etiqueta de la casilla). Se conserva la preferencia ya existente entre sesiones; no se añaden botones ni otra distribución.
- **Criterio de aceptación:** activar o desactivar la casilla actualiza los ajustes y la visibilidad de controles; al recargar/continuar se conserva la elección y la casilla refleja el estado. Preferencias antiguas sin este campo siguen con el valor predeterminado desactivado.
- **Rama:** codex/orbita-auto-048-controles-ampliados.
- **Cambio y archivos:** data.js define extendedControls=false; app.js lee la casilla desde ajustes y guarda su cambio; exploration.js aplica la clase de controles ampliados desde esa preferencia al iniciar o aplicar ajustes. README/package.json 0.5.39 y sw.js caché propia v55. No modifica el formato de partida.
- **Validación:** antes, navegador: activar casilla y recargar/Continuar devuelve false. Después, activar, recargar/Continuar conserva true y los tres controles extra visibles; desactivar y repetir conserva false y los oculta. Caso inicial sin preferencia desactivado. Revisión 390 × 844, sin avisos/errores; evidencia outputs/orbita-auto-048-controles.png muestra controles restaurados tras recarga. 106 pruebas existentes y construcción satisfactorias. No se afirma teléfono físico ni lector de pantalla; la comprobación específica de persistencia se hizo mediante la interfaz real del navegador.
- **Propuesta:** [#104](https://github.com/fercala/pequenos-exploradores/pull/104). Commit de código: ed14afb0bd70e1a025a4b3de8d3cf28b98552dcd; incorporación a main: 37516df71341a99f4bda99b52820a560b6a6a67f.
- **Publicación confirmada:** 2026-10-21 18:41 UTC. [GitHub Pages: ejecución 39654795608 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39654795608), sobre el commit de incorporación. app.js y exploration.js públicos HTTP 200 guardan y aplican extendedControls; package.json confirma 0.5.39 y sw.js caché v55, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-049 · Mostrar el espacio disponible para una nota

- **Inicio / última actualización:** 2026-10-21 19:40 UTC / 2026-10-21 19:43 UTC.
- **Estado:** Publicada.
- **Problema / oportunidad comprobada:** la anotación tiene maxlength=600, pero el cuaderno no muestra cuánto se ha escrito ni el límite restante. Al llegar al máximo, escribir o pegar más deja de añadir texto sin explicar visualmente que la nota está llena.
- **Relación / diferencia:** O4-017 (cuaderno) y AUTO-006 (borrador persistente de 600 caracteres). Se hace visible el uso del límite mientras se escribe y se recupera el borrador; no se cambia la longitud permitida ni se recorta más contenido.
- **Criterio de aceptación:** contador 0/600 al empezar, actualizado con la nota y asociado al campo; refleja borradores recuperados y 600/600 al límite. Guardar la nota vuelve a 0/600 conservando la entrada científica.
- **Rama:** codex/orbita-auto-049-limite-nota.
- **Cambio y archivos:** contador visible y asociado al campo en mission-control.js; prueba de borradores y guardado en tests/mission-control.test.mjs. Versión 0.5.40 y caché local v56 en package.json, README.md y sw.js.
- **Validación:** 107 pruebas y compilación satisfactorias. Navegador: 0/600, 14/600 al escribir, 600/600 al límite, 14/600 al volver y tras recargar la partida; guardar conserva la nota y vuelve a 0/600. Asociación aria-describedby comprobada. Vista móvil 390×844 sin recortes; consola sin errores. Evidencia local: outputs/orbita-auto-049-nota.png. No se ha probado lector de pantalla ni teléfono físico.
- **Propuesta:** [#106](https://github.com/fercala/pequenos-exploradores/pull/106). Commit de código: d9272912ce4e8192d058963bc0f6ac6bc226212f; incorporación a main: 52395dcbf722935848f3765e6f8ebaa4ddde51f4. El intento de adjuntar la propuesta al chat fue rechazado por el límite de 100 adjuntos; el enlace queda aquí para conservar la trazabilidad.
- **Publicación confirmada:** 2026-10-21 19:43 UTC. [GitHub Pages: ejecución 39663927917 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39663927917), sobre el commit de incorporación. mission-control.js público HTTP 200 contiene note-length; package.json confirma 0.5.40 y sw.js caché v56, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-050 · Evitar guardar anotaciones vacías

- **Inicio / última actualización:** 2026-10-21 20:34 / 20:36 UTC.
- **Estado:** Publicada.
- **Problema comprobado:** Guardar nota está habilitado sin texto o con solo espacios, pero al pulsarlo no ocurre nada; el controlador retorna silenciosamente. Esto deja un control táctil aparentemente operativo sin resultado.
- **Relación / diferencia:** O4-017, AUTO-006 y AUTO-049. Se indica la disponibilidad real de guardar según contenido significativo; no se cambia el borrador persistente, el límite ni el contador.
- **Criterio de aceptación:** Guardar nota deshabilitado para borrador vacío o espacios; habilitado al escribir contenido y al recuperar un borrador válido. Tras guardar se conserva el registro y vuelve a deshabilitado. No se crean registros vacíos.
- **Rama:** codex/orbita-auto-050-nota-vacia.
- **Cambio y archivos:** mission-control.js sincroniza disabled de Guardar nota con el borrador recortado al abrir y escribir. Prueba de disponibilidad, recuperación y ausencia de registros vacíos en tests/mission-control.test.mjs. README/package.json 0.5.41 y sw.js caché propia v57.
- **Validación:** la prueba nueva falló antes de implementar y pasó después; 108 pruebas y compilación satisfactorias. Navegador: vacío y solo espacios deshabilitados, texto habilitado, recarga/Continuar conserva borrador válido y habilitación; guardar crea una nota y vuelve a deshabilitado. Vista 390×844 revisada, consola sin errores; outputs/orbita-auto-050-nota.png. No se afirma prueba en teléfono físico ni lector de pantalla.
- **Propuesta:** [#108](https://github.com/fercala/pequenos-exploradores/pull/108). Commit de código: a5460a25c6032a28f96176b76467d3e483d9d0ff; incorporación: 0158410d5a8bbec42a15f418a17d020f5768cd66. Intento de adjuntar rechazado por el límite conocido de 100 adjuntos; se conserva el enlace.
- **Publicación confirmada:** 2026-10-21 20:36 UTC. [Pages 39671535805 satisfactoria](https://github.com/fercala/pequenos-exploradores/actions/runs/39671535805) sobre el commit de incorporación. mission-control.js público HTTP 200 incluye disponibilidad según noteDraft.trim(); package.json 0.5.41 y sw.js caché v57, ambos HTTP 200. [Abrir Órbita](https://fercala.github.io/pequenos-exploradores/solar-nave/).

### AUTO-051 · Leer completas las anotaciones del cuaderno

- **Inicio / última actualización:** 2026-10-21 21:42 UTC.
- **Estado:** Verificada.
- **Problema comprobado:** una nota con varias líneas se muestra en un párrafo que colapsa los saltos; un identificador de 120 letras provoca scrollWidth 1017 frente a clientWidth 213 en 320 px. El panel termina con desplazamiento horizontal y texto fuera de vista.
- **Relación / diferencia:** O4-017 y AUTO-006/049/050. Corrige la lectura de registros guardados, no el guardado, borrador, contador ni disponibilidad de Guardar nota. No altera texto almacenado ni partidas.
- **Criterio de aceptación:** las líneas de una anotación permanecen separadas al leerla; cadenas largas se ajustan al ancho del registro sin desbordamiento horizontal, en 320 y 390 px y escritorio. Notas previas y exportación conservan exactamente el contenido.
- **Rama:** codex/orbita-auto-051-lectura-notas.
- **Cambio y archivos:** style.css aplica pre-wrap y overflow-wrap:anywhere a los párrafos de registros del cuaderno. Solo presentación; no cambia controladores, datos almacenados ni exportación. README/package.json 0.5.42 y sw.js caché propia v58.
- **Validación:** 108 pruebas existentes y compilación satisfactorias. Navegador: antes se colapsaban tres líneas y había desbordamiento 1017/213; después innerText conserva las líneas y scrollWidth=clientWidth: 213 a 320 px, 283 a 390 px y 657 en escritorio. La misma nota previa se conserva tras recargar/Continuar. Capturas móviles revisadas; consola sin errores. Evidencia outputs/orbita-auto-051-lectura.png. No se afirma teléfono físico ni lector de pantalla.
- **Propuesta / commit / publicación:** pendientes; Verificada hasta confirmar Pages.

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
