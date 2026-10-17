# Verificación · Órbita 2

## Comprobaciones automáticas

Veinte pruebas correctas: fronteras de terreno, presión, daños, persistencia, importación y migración, once destinos, separación de lunas, conservación de posición entre referencias, escala científica, periodos y rotaciones, gravedad, calentamiento, aterrizaje con tren/actitud, permisos de misiones, tutorial y caché/aislamiento del service worker.

Los mapas JPEG fueron validados por dimensiones y decodificación. Sus fuentes y licencias están en assets/textures/CREDITS.md. Las imágenes son recursos locales del despliegue.

## Comprobaciones en navegador integrado

- Inicio, aterrizaje en Tierra, recuperación de partida y salida a pie.
- Toma de una muestra y registro de misión.
- Despliegue del rover, avance, marcha atrás, frenado y retorno a la nave.
- Atlas 3D, escala científica y reloj orbital.
- Viaje continuo desde Tierra hasta Luna, llegada y aterrizaje lunar.
- Modo fotografía: ocultación del HUD, creación de imagen y enlace PNG con nombre del destino.
- Exportación: generación del enlace de partida JSON. El validador y la migración se verifican en pruebas automáticas.
- Distribución de escritorio a 1280×800 y móvil a 390×844; recuperación de partida lunar.
- Sin errores de JavaScript ni mapas ausentes en los recorridos comprobados.

## Límites de la verificación

El navegador de prueba utiliza mouse; no sustituye una pantalla táctil física. Quedan pendientes instalación en teléfonos Android/iPhone físicos, audio escuchado en distintos dispositivos, transferencia manual del archivo entre dos dispositivos y una matriz exhaustiva de vuelos/aterrizajes manuales en todos los destinos. No se garantiza un FPS universal. El clima, las órbitas y la física son modelos simplificados documentados en MEJORAS.md.
