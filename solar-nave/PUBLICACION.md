# Publicación de Órbita

Destino: nueva carpeta `solar-nave/` del repositorio público `fercala/pequenos-exploradores`, que ya dispone de GitHub Pages.

Dirección prevista: https://fercala.github.io/pequenos-exploradores/solar-nave/

Los archivos estáticos de la aplicación se publican directamente. La carpeta no sustituye a las otras aplicaciones del repositorio. El service worker contenedor se actualiza para omitir esta nueva carpeta, del mismo modo que ya omite VillaChispa. Cada aplicación conserva sus cachés y ámbito.

El flujo de `.github/workflows/pages.yml` dentro de esta carpeta es una plantilla para migrar a un repositorio dedicado; el repositorio contenedor mantiene su despliegue existente.
