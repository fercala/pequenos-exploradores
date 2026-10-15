# Publicación de VillaChispa

Destino elegido: carpeta `villachispa/` del repositorio público `fercala/pequenos-exploradores`, que ya publica GitHub Pages desde `main` y la carpeta raíz.

Dirección prevista, que debe verificarse después del despliegue:

https://fercala.github.io/pequenos-exploradores/villachispa/

Los archivos de VillaChispa se publican directamente porque el juego no requiere compilación. Sus rutas, manifiesto y service worker son relativos a esa carpeta. El flujo de ejemplo incluido dentro de `.github/workflows` de esta carpeta sirve para una futura migración a un repositorio dedicado; no configura ni reemplaza el flujo del repositorio contenedor.

El service worker del juego contenedor debe omitir la subcarpeta `villachispa/` para que una instalación previa de Pequeños Exploradores no redirija las nuevas navegaciones al juego anterior. La actualización de compatibilidad mantiene el contenido del juego contenedor y acota la selección de caché de cada juego.
