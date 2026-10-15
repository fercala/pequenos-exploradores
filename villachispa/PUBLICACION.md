# Publicación de VillaChispa

Destino elegido: carpeta `villachispa/` del repositorio público `fercala/pequenos-exploradores`, que ya publica GitHub Pages desde `main` y la carpeta raíz.

Dirección publicada y verificada el 15 de octubre de 2026:

https://fercala.github.io/pequenos-exploradores/villachispa/

GitHub Pages completó correctamente el despliegue del commit `2093e8e3bee54ed7d5e19c5f4721007cdbc70d63`. La prueba de la web pública comprobó igualdad de archivos con la entrega local, arranque y reanudación de partida, ámbito de instalación, recarga sin conexión y convivencia con una instalación del juego contenedor. No sustituye la comprobación en teléfonos físicos.

Los archivos de VillaChispa se publican directamente porque el juego no requiere compilación. Sus rutas, manifiesto y service worker son relativos a esa carpeta. El flujo de ejemplo incluido dentro de `.github/workflows` de esta carpeta sirve para una futura migración a un repositorio dedicado; no configura ni reemplaza el flujo del repositorio contenedor.

El service worker del juego contenedor debe omitir la subcarpeta `villachispa/` para que una instalación previa de Pequeños Exploradores no redirija las nuevas navegaciones al juego anterior. La actualización de compatibilidad mantiene el contenido del juego contenedor y acota la selección de caché de cada juego.
