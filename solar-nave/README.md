# Órbita 4 · Explorador del sistema solar

Simulador web 3D en español, con mouse o pantalla táctil, instalable y descargable para usar sin conexión. Versión 0.5.11.

**Publicado:** https://fercala.github.io/pequenos-exploradores/solar-nave/

## Explorar

Diecisiete destinos: ocho planetas, Luna, Europa, Titán, Ganímedes, Encélado, Plutón, Ceres, Vesta y cometa 67P. Vuelo continuo, descensos asistidos/manuales, caminata, rover, tres naves, atlas orbital, fotografías y guardado de expedición.

- **Centro de misión:** rutas con escalas, piloto configurable, estación y acoplamiento, paseo espacial, hangar, combustible/energía opcionales, daños y mantenimiento, día/noche, lugares históricos, instrumentos, cuaderno, campaña y modo docente.
- **Expedición:** salir a pie, conducir el rover, saltar, tomar muestras, sondas, fotografías y exportar/importar partidas.
- **Superficie:** mapa global, coordenadas y destinos, sitios históricos y regiones medidas de Tycho y monte Olimpo.
- **Escáner / Luces:** asistencia para aproximación y focos de exploración.
- **Accesibilidad:** texto grande, contraste, avisos, movimiento reducido y botones para orientar sin gestos.

Las rutas pausan tras un descenso para explorar; usa Reanudar desde siguiente escala. Cambia de nave aterrizado o acoplado. Para pasear en el espacio, desacopla y alcanza una región de vacío; la línea de seguridad permite volver. Los recursos limitados son opcionales. Los daños específicos se activan desde Ajustes → Desafío con daños.

## Ejecutar en tu ordenador

Necesita Node.js 20 o posterior, sin instalar dependencias. Doble clic en `Iniciar.cmd`, o ejecuta `npm run dev`. Abre la dirección que muestra el servidor. `npm run build` prepara `dist/`; `npm test` ejecuta las pruebas. No abras `index.html` directamente: los módulos y el almacenamiento sin conexión requieren HTTP/HTTPS.

## Móvil y sin conexión

PWA con manifiesto e iconos locales. Ajustes ofrece instalación o instrucciones para Safari/iPhone. La descarga inicial, de unos 10 MB, incluye motor, módulos, mapas y datos de elevación. El navegador puede liberar almacenamiento. No es una aplicación de tienda.

La partida conserva nave, acoplamiento, recursos, sistemas, vehículos, misiones, cuaderno, campaña y respuestas. Las rutas se recuperan pausadas. Exporta la partida para cambiar de dispositivo; exporta el cuaderno para conservar observaciones y resultados docentes. Las versiones anteriores migran con valores iniciales compatibles.

## Ciencia y límites

Órbitas circulares y trayectorias asistidas; escalas, física y tiempos adaptados. El atlas científico usa una escala común de radios/distancias, con etiquetas ampliadas. Las estaciones, flota, recursos y campaña son ficticios. Los instrumentos usan el modelo o plantillas didácticas, no datos astronómicos en directo.

LOLA y MOLA aportan rejillas reducidas de elevación para Tycho y Olimpo. El resto del relieve es generado. Las texturas de los seis cuerpos nuevos reutilizan bases de otros mundos y se identifican como ilustrativas. Vesta y 67P tienen gravedad radial y geometría aproximadas. No se afirma la existencia de vida ni se simula acceso a océanos internos.

Fuentes y licencias: `assets/textures/CREDITS.md`, `assets/terrain/CREDITS.md`, `catalog-v4.js`. Motor Three.js r180 bajo MIT en `vendor/`.

Detalles: [MEJORAS-V4.md](MEJORAS-V4.md), [MEJORAS-V3.md](MEJORAS-V3.md), [MEJORAS.md](MEJORAS.md), [VERIFICACION.md](VERIFICACION.md).

Registro para evitar duplicados y seguir la mejora horaria: [MEJORAS-AUTOMATICAS.md](MEJORAS-AUTOMATICAS.md).

## Tripulante y superficie (0.5.0)

Aterriza y pulsa **Salir a explorar**. Camina con el joystick o el control **Caminar**; arrastra para orientar y usa **Saltar**. En **Mochila y actividades** puedes examinar, tomar muestras, colocar una baliza, usar el rover, fotografiar y regresar a la nave. Cada mundo sólido conserva su recorrido y cuatro objetivos. [Detalles y validación](MEJORAS-V5.md).

En 0.5.5, la misión de 100 m del rover cuenta el recorrido de cada mundo. Los parciales nuevos se guardan por destino. Las partidas antiguas conservan su total histórico y misiones completadas; como no guardaban el reparto de kilómetros, el contador local empieza en cero.

En 0.5.6, el ritmo del reloj orbital elegido en Ajustes se conserva localmente al recargar, incluida Pausa. El reloj del atlas mantiene su selector independiente.
