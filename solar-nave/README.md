# Órbita · Explorador del sistema solar

Aplicación web 3D para mouse y pantallas táctiles, en español. Primera versión jugable, sin registro, servicios de pago ni servidor de aplicación.

## Ejecutar

En Windows, con Node.js 20 o posterior instalado, hacer doble clic en `Iniciar.cmd`. También se puede ejecutar `npm run dev` y abrir `http://127.0.0.1:4186/solar-nave/`. No abrir index.html directamente desde el explorador de archivos: los módulos y el service worker necesitan HTTP o HTTPS.

`npm test` verifica la frontera de colisión, guardados, presión atmosférica y protección ante impactos. `npm run build` prepara `dist/`, una web estática sin dependencias externas de ejecución. Three.js r180 se incluye localmente con licencia MIT.

## Jugar

- Arrastrar la escena orienta la nave. Mirar permite observar sin cambiar rumbo.
- El deslizador controla el empuje, incluida reversa. DETENER frena inmediatamente.
- Las flechas desplazan la nave y los botones ↶ ↷ permiten girarla. En móvil se usa joystick; los controles ampliados de Ajustes añaden giro y freno.
- Destinos muestra el sistema solar y permite viajar a cualquiera de sus ocho planetas en 16 segundos de simulación activa.
- Descender inicia una aproximación asistida de 12 segundos. Regresar al espacio inicia un ascenso de 10 segundos.
- Mercurio, Venus, Tierra y Marte permiten aterrizar. Los gigantes permiten sumergirse en nubes hasta un límite simulado de profundidad con ascenso automático de seguridad.
- El viaje y la física se pausan cuando se abre un panel o la aplicación pasa a segundo plano.
- Cabina, seguimiento y observación ofrecen vistas diferentes. Se puede fotografiar la escena.

## Instalación y descarga

La PWA incluye manifiesto, iconos de 192/512 píxeles y service worker con ámbito relativo a su carpeta. En navegadores compatibles aparece la opción de instalación. iPhone muestra instrucciones de Safari para añadir a inicio. Ajustes permite descargar la aplicación completa para usar los ocho mundos sin conexión y borrar únicamente las cachés propias.

Los terrenos y texturas se generan localmente. La descarga completa es pequeña, por lo que no se necesitan ocho paquetes separados. No se promete funcionamiento offline antes de que la descarga haya terminado. El almacenamiento del navegador puede ser liberado por el sistema.

## Alcance y simplificaciones

Esta versión usa una escena local por planeta y un mapa del sistema solar con distancias comprimidas. El viaje entre escenas es asistido; no simula un continuo orbital físico entre todos los cuerpos. Los planetas no completan órbitas o rotaciones astronómicas durante el vuelo. La inclinación se refleja en los anillos; los demás ejes se documentan en las fichas. Las sombras reales de anillos y una escala científica intercambiable quedan para siguientes versiones.

Los paisajes no son reconstrucciones cartográficas. La Tierra muestra continentes procedurales ilustrativos. Se usa el mismo campo de altura para geometría, aterrizaje y colisiones. La región de aterrizaje contiene rocas adicionales. Las nubes y anillos son representaciones simplificadas. No hay astronauta a pie, ciudades, misiones espaciales históricas, combustible, vehículos terrestres, multijugador ni lunas visitables en esta versión.

La escala local usa un radio base de 600 unidades por planeta para que el vuelo sea estable. La interfaz identifica altitudes y profundidades como simuladas. Los datos astronómicos de las fichas no se sustituyen por los datos de juego. El escudo, el viaje rápido y la supervivencia dentro de atmósferas extremas son ficticios. La gravedad de vuelo está reducida y la asistencia puede compensarla. La iluminación exterior se realza para permitir observar los mundos distantes. La temperatura y presión mostradas son referencias aproximadas, no un modelo climático.

## Publicar

Para un repositorio dedicado, subir estos archivos, usar rama `main` y seleccionar GitHub Actions en Settings → Pages. El flujo `.github/workflows/pages.yml` ejecuta pruebas, genera `dist` y lo publica. Las rutas relativas permiten usar una subcarpeta de un repositorio existente sin modificar sus otras aplicaciones. En ese caso, el flujo anidado es solo un ejemplo y no se ejecuta; se utiliza el despliegue ya configurado del repositorio contenedor.

Un service worker de una aplicación contenedora podría interceptar subcarpetas: verificarlo antes de publicar. La aplicación registra únicamente su propio ámbito.

## Créditos

- Diseño, modelos de nave, texturas y terrenos: generados mediante código para Órbita.
- Motor: Three.js r180, Copyright 2010–2025 Three.js Authors, licencia MIT; ver `vendor/LICENSE.txt`.
- Fuentes científicas: NASA Science, con enlace específico en cada ficha y en `data.js`.
- No se utilizan imágenes externas, fuentes remotas, analítica ni cookies de seguimiento.
