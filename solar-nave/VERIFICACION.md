# Verificación de Órbita 4 · versión 0.4.0

## Comprobaciones automatizadas

42 pruebas satisfactorias con Node: catálogo de 17 destinos, posiciones/referencias, escala científica, gravedad, atmósferas, aterrizaje, guardados anteriores, portabilidad y validación de importaciones, caché aislada y módulos sin conexión, coordenadas y relieve LOLA/MOLA, normales y colisiones de la malla, escáner, tres naves, recursos opcionales, daños, reparaciones, criterios de acoplamiento, iluminación, instrumentos, capítulos y preguntas.

Las pruebas del controlador ejecutan una aproximación completa al puerto, órbita guiada, rutas con varias escalas y pausa tras aterrizar, movimiento de mochila y retorno de seguridad, recuperación de acoplamiento y parada del piloto al agotar reservas. No se limitan a comparar copias de constantes.

Construcción estática en dist/ con los módulos nuevos y todos los datos y mapas locales. Comprobación de sintaxis de los módulos modificados.

## Comprobaciones del navegador

- Inicio y carga de los 17 destinos sin errores ni advertencias de consola.
- Activación de campaña y lectura del gravímetro en la Tierra.
- Pregunta docente, corrección y explicación; respuestas registradas.
- Aproximación y acoplamiento en Horizonte; combustible y energía repuestos.
- Cambio a Aurora, activación de recursos limitados, desacoplamiento y paseo espacial.
- Movimiento con mochila, frenado y regreso mediante línea de seguridad.
- Nota personal y generación del enlace de exportación del cuaderno.
- Ruta completa Tierra (órbita) → Vesta (sobrevuelo) → 67P (descenso).
- Espectrómetro, gráfico y radiómetro en 67P; selección de noche y luces.
- Recuperación de partida de Órbita 4 conservando nave, cuaderno, recursos y progreso.
- Viaje a la Luna, descenso a Apollo 11, registro histórico y muestra a pie; tres capítulos completados en orden.
- Fotografía PNG y miniatura visible en el cuaderno.
- Revisión del Centro de misión en 390 × 844 y del cuaderno en 1280 × 800.

## Límites de la verificación

No se han probado Android/iPhone físicos ni lectores de pantalla de forma exhaustiva. No se han completado manualmente todos los aterrizajes o toda la campaña en el navegador; la secuencia completa de capítulos y los nuevos cuerpos se cubren con pruebas automatizadas. No se ha ensayado una transferencia manual entre dos dispositivos ni la instalación en cada navegador. No se garantiza una frecuencia de imágenes determinada.

Los modelos y límites científicos están documentados en MEJORAS-V4.md. Las fotos completas se descargan por separado; el cuaderno conserva hasta seis miniaturas. Los originales de altimetría en .terrain-source/ son locales y no forman parte de la publicación ni de dist/.
