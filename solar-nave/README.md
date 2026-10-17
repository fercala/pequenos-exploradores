# Órbita 2 · Explorador del sistema solar

Aplicación web 3D en español, manejable con mouse o pantalla táctil. Ocho planetas, tres lunas, vuelo continuo, astronauta, rover, misiones, atlas orbital, audio opcional y fotografía. Versión 0.2.0.

## Abrir y desarrollar

Con Node.js 20 o posterior, hacer doble clic en Iniciar.cmd o ejecutar npm run dev y abrir http://127.0.0.1:4186/solar-nave/ . Los módulos y el service worker necesitan HTTP/HTTPS; no abrir index.html directamente.

- npm test: física, guardados, importación, órbitas, misiones y caché.
- npm run build: prepara dist/ con todos los recursos locales.
- No requiere instalar dependencias, registro, backend ni claves privadas.

## Uso

Arrastrar orienta la nave; Propulsión avanza o retrocede; DETENER frena. Flechas y giro completan los seis ejes. En móvil, el joystick desplaza y la zona derecha orienta. Ajustes permite cambiar tamaño, ubicación y distribución para zurdos.

Destinos inicia un viaje continuo asistido de 16 segundos. Se puede cancelar y continuar manualmente. Crucero permite recorrer distancias grandes y se desactiva al aproximarse a un cuerpo. Descender aterriza automáticamente en los cuerpos rocosos o explora la atmósfera de los gigantes. Para aterrizar manualmente, desplegar el tren, reducir la velocidad y nivelar la nave.

Expedición permite caminar, saltar, desplegar/conducir un rover, medir, tomar muestras y desplegar sondas. Para embarcar, acercarse a menos de 35 unidades de la nave. El rover usa la misma propulsión y admite marcha atrás.

Atlas 3D ofrece órbitas animadas, pausa/aceleración, escala jugable/científica y enfoque por destino. La cabina ofrece horizonte artificial y telemetría. Fotografía oculta el HUD y permite ajustar exposición y descargar un PNG con destino y fecha.

## Partida e instalación

Guardado local cada diez segundos. Exportar genera un JSON para importar en otro dispositivo. Se comprueban estructura, valores y destinos antes de escribir. Se migran partidas anteriores. Las preferencias de controles se guardan en el navegador, no en el archivo portátil.

PWA con manifiesto, iconos y service worker relativo. Ajustes permite instalar cuando el navegador lo admite o consultar instrucciones para iPhone. La descarga completa ocupa unos 10 MB e incluye los once mundos y sus mapas. El navegador puede liberar almacenamiento.

## Alcance y créditos

Las veinte mejoras están descritas en MEJORAS.md. Se usa un modelo educativo: órbitas circulares, referencia local flotante, tamaños comprimidos para volar y paisajes locales recreados. La escala científica se aplica al atlas. Los mapas no definen topografía real y el clima no usa datos vivos. Los escudos son ficticios. No hay océano subterráneo visitable en Europa ni suelo de aterrizaje en los gigantes.

- Three.js r180, MIT: vendor/LICENSE.txt.
- Mapas y licencias: assets/textures/CREDITS.md (Solar System Scope / INOVE, NASA/JPL y colaboradores).
- Datos de referencia: NASA Science, con enlaces en las fichas.
- Modelos, audio y terreno: generados mediante código para Órbita.
- Sin fuentes remotas, analítica ni cookies de seguimiento.

## Publicación

Destino autorizado: solar-nave/ en fercala/pequenos-exploradores, publicado con GitHub Pages. Las rutas relativas permiten convivir con las otras aplicaciones. El flujo anidado .github/workflows/pages.yml sirve como plantilla para un repositorio dedicado; el contenedor conserva su despliegue existente.
