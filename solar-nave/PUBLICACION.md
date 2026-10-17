# Publicación de Órbita

Destino: nueva carpeta `solar-nave/` del repositorio público `fercala/pequenos-exploradores`, que ya dispone de GitHub Pages.

Dirección publicada y verificada: https://fercala.github.io/pequenos-exploradores/solar-nave/

La propuesta https://github.com/fercala/pequenos-exploradores/pull/1 se incorporó con autorización del usuario a `main`, en el commit `fa92ce28a023f185d73fb681e964fdcd749fd930`. GitHub Pages completó correctamente el despliegue https://github.com/fercala/pequenos-exploradores/actions/runs/39006839171 .

Verificación pública: respuesta HTTP 200 para HTML, aplicación, escena 3D, service worker, manifiesto, motor e icono; inicio de expedición comprobado en el navegador integrado, sin errores de JavaScript. Captura de comprobación guardada en `outputs/orbita-publicada.png` de la carpeta de trabajo.

Los archivos estáticos de la aplicación se publican directamente. La carpeta no sustituye a las otras aplicaciones del repositorio. El service worker contenedor se actualiza para omitir esta nueva carpeta, del mismo modo que ya omite VillaChispa. Cada aplicación conserva sus cachés y ámbito.

El flujo de `.github/workflows/pages.yml` dentro de esta carpeta es una plantilla para migrar a un repositorio dedicado; el repositorio contenedor mantiene su despliegue existente.
