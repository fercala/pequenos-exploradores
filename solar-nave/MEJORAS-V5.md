# Órbita 0.5.0 · Expediciones del tripulante

Petición directa SOL-001. Amplía la caminata, rover y actividades existentes (O2-007, O2-008 y O2-017).

- Al aterrizar aparece **Salir a explorar**. A pie, el mando se llama **Caminar**; joystick, arrastre y botones funcionan sin teclado.
- El tripulante mueve brazos y piernas al caminar, lleva mochila y puede saltar. La cámara permite verlo y acercar/alejar la vista; respeta movimiento reducido.
- **Mochila y actividades** reúne examen del entorno, muestra, fotografía, rover y regreso a la nave. Mediciones y muestras reutilizan el catálogo y cuaderno existentes.
- Cada mundo sólido propone cuatro objetivos: 50 m simulados a pie, examinar, tomar una muestra y colocar una baliza.
- La baliza es una señal 3D anclada al terreno, movible desde la mochila y conservada con la partida. Se guarda una por mundo, con coordenadas locales.
- Lejos de la nave se puede orientar al tripulante hacia ella; cerca se puede embarcar. El botón Despegar sigue disponible al volver a bordo.

El recorrido a pie y las balizas se incluyen en guardados y exportaciones, sin cambiar la versión del formato portable. Los archivos anteriores empiezan con progreso de superficie vacío. Los módulos nuevos se incluyen en la caché propia v16. No cambia el gestor compartido.

Las distancias son las del mundo comprimido del juego. Traje y balizas son ficticios; no se simula supervivencia real. Los gigantes gaseosos conservan la exploración atmosférica y no admiten caminatas. No se añaden datos astronómicos nuevos.

## Validación

61 pruebas satisfactorias: se añaden siete casos para distancia de caminata sin contar saltos verticales, migración, límites de importación, objetivos por mundo, animación y movimiento reducido, baliza sobre terreno, retorno/orientación, despegue y rechazo de interacciones inválidas.

Navegador: aterrizaje en Tierra, salida a pie, marcha de 3 m/s, salto, examen, muestra, baliza visible, cuatro objetivos completados, recarga con progreso conservado, orientación de regreso, embarque, rover y despegue. Vistas 1280, 390 y 320 px. Los botones nuevos rápidos miden 61 × 48 px a 320 px. Sin errores de consola. No equivale a validación en todos los teléfonos físicos ni a una prueba manual en los diecisiete mundos.
