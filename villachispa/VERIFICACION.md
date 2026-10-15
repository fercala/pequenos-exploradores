# Comprobaciones de la primera versión

15 de octubre de 2026. Pruebas realizadas en Chrome de escritorio mediante automatización de navegador. Servidor local con la aplicación bajo la subruta `/villachispa/`, equivalente al tipo de ruta de un repositorio de GitHub Pages.

## Resultado

- Seis pruebas unitarias superadas: pagos únicos y repetición, ayudas, compra persistente, saldo insuficiente, bonus semanal, validación de copias y diferencias de secuencia entre 3 y 5 años.
- Bomberos completado en 3 años: preparación de equipo, viaje, acompañamiento de oveja, dos focos de agua y cuidado. Monedas concedidas una sola vez al recargar el cierre.
- Cambio entre aventuras sin pérdida del punto de guardado.
- Cometa comprada, saldo descontado, uso en parque y persistencia tras recarga.
- Siete jornadas del calendario completadas: preparación, desplazamiento y actividad de cada día. Sábado y domingo conducen al parque. Domingo vuelve al lunes. Bonus semanal único.
- Bomberos completado en 5 años: equipo ampliado, palanca del depósito, elección de camino con puente cerrado, dos animales, tres focos y ordenación de recuerdos. Repetición pagada con tres monedas.
- Descarga de recursos verificada; recarga y juego con red desactivada, incluida construcción y guardado en el parque.
- Emulación de móvil táctil a 390 × 844 y 844 × 390: botones de selección y destino, cambio de orientación y ausencia de desbordamiento horizontal.
- Revisión visual de capturas de pueblo, bomberos y móvil.
- Prueba adicional de arrastre real del casco y la manguera al camión, y de la oveja al corral. El chorro sostenido se ha orientado con el ratón hacia ambos focos hasta completar la fase.
- Comprobación de la versión final del service worker con caché aislada por subruta: recarga y juego sin conexión correctos.
- `Jugar.html` abierto directamente como archivo local y aventura iniciada correctamente, sin servidor.
- Sin excepciones de JavaScript durante los recorridos anteriores.

## Límites de estas pruebas

La emulación no sustituye la prueba en un teléfono físico. No se han verificado instalación real en iOS o Android, Safari, Firefox, calidad de voces españolas en cada dispositivo, accesibilidad completa con lector de pantalla, uso con niños ni resultados de aprendizaje. Los recorridos completos usaron botones alternativos y la prueba específica de interacción añadió arrastre y orientación sostenida con ratón.

La publicación en GitHub Pages necesita un repositorio de destino. El proyecto contiene el flujo de publicación y sus rutas relativas, pero una compilación local no prueba que exista una web pública.

La ejecución de `npm test` requiere únicamente Node.js. `tests/browser.mjs` utiliza Playwright y Chrome del entorno donde se desarrolló; para otro entorno configurar `VILLA_PLAYWRIGHT`, `VILLA_BROWSER` y, si procede, `VILLA_URL`.
