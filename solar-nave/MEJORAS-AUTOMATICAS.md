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

No hay todavía mejoras automáticas registradas al inicializar este archivo. El siguiente ID disponible es **AUTO-001**. Antes de asignarlo, comprueba `main` y las propuestas abiertas por si una ejecución posterior ya lo reservó.

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
