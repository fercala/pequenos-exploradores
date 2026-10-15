# VillaChispa

[**Jugar online e instalar**](https://fercala.github.io/pequenos-exploradores/villachispa/)

Primera versión jugable de un pueblo educativo 2D con profundidad visual para 3–6 años. Recursos gráficos vectoriales originales, sin paquetes ni servicios de producción externos.

## Contenido real de esta versión

- Pueblo explorable con edificios y personajes, casa, tienda y parque.
- Bomberos: equipo, carga de agua (4–6 años), viaje, acompañamiento de animales a una zona segura, agua orientable, cuidado y secuenciación (4–6 años).
- Calendario: siete jornadas con preparación, desplazamiento y una actividad diferente; incluye colegio, reparto, cuento secuenciado, huerto, música, cometa y picnic.
- Niveles de 3, 4, 5 y 6 años. En bomberos se reducen fases y cantidades para 3 años y se añade elección de ruta a partir de 5; las jornadas adaptan cantidades y apoyos. La versión de 6 años comparte gran parte del contenido de 5 y no equivale a un curso completo de Primaria.
- Monedas, compras permanentes y parque libre con pelota, piezas y pintura gratis. La cometa, flores, instrumentos y pista comprados son utilizables.
- Guardado local, copia exportable/importable, modo tranquilo, modo festivo, interfaz táctil y alternativas mediante botones.
- PWA y recursos locales cacheados para jugar sin conexión después de la descarga completa.

El diseño completo de 12 barrios y sus 36 aventuras está en el documento de propuesta entregado por separado; no está implementado entero aquí. Esta muestra concede recompensa por cada jornada terminada del calendario y un bonus único al completar los siete días.

## Jugar en el ordenador

Para una demostración rápida sin instalar herramientas, abre `Jugar.html` en un navegador. Es una copia autónoma del juego; la instalación PWA requiere la versión servida por HTTPS o la vista previa local. El almacenamiento de un archivo local depende del navegador y puede ser distinto al de la versión web.

Requiere Node.js 20 o superior. En esta carpeta:

```sh
npm run dev
```

Abrir la dirección que muestra el servidor. Ratón o dedo para objetos; botones junto al escenario para una alternativa sin arrastre. `Escape` vuelve al pueblo. Los menús y botones se manejan también con teclado; el mundo visual no se presenta como plenamente accesible a lectores de pantalla.

## GitHub Pages

Esta entrega ya está publicada en la carpeta `villachispa/` de `fercala/pequenos-exploradores`. Véase `PUBLICACION.md`. Las instrucciones siguientes sirven si se desea moverla después a un repositorio dedicado.

1. Subir **el contenido de esta carpeta** a un repositorio dedicado, en su rama `main`.
2. En Settings → Pages, elegir GitHub Actions como origen.
3. El flujo `.github/workflows/pages.yml` ejecuta las pruebas, genera `dist/` y publica.
4. Abrir la URL que devuelve GitHub. Todas las rutas son relativas y admiten una subcarpeta de repositorio.

Alternativa manual: `npm run build`; publicar el contenido de `dist/` como sitio estático. No subir partidas personales ni credenciales. Esta carpeta no incluye claves ni cuentas de usuarios.

## Instalación y sin conexión

En Android, usar la opción de instalar del navegador compatible. En iPhone/iPad, abrir en Safari y usar Compartir → Añadir a pantalla de inicio. La zona adulta muestra instrucciones. La descarga está terminada cuando el pie indica «Juego listo sin conexión».

El núcleo completo es pequeño y se almacena como una unidad. No se anuncian paquetes futuros como descargados. Las siguientes versiones deberán incrementar el identificador en `sw.js`; el nuevo trabajador se activa al cerrar las pestañas anteriores, sin interrumpir una aventura abierta. El navegador puede liberar almacenamiento. Exporta copias si necesitas conservar partidas.

**Voces:** esta muestra usa síntesis de voz del navegador en español, no doblaje grabado. La disponibilidad, calidad y funcionamiento sin conexión dependen del dispositivo. No se requiere voz para jugar: los textos, objetos, señales y botones siguen disponibles. Las demostraciones animadas y la accesibilidad audiovisual se pueden ampliar antes de uso escolar generalizado.

## Verificación

```sh
npm test
npm run build
```

Las pruebas unitarias cubren recompensa única, repetición, ayudas, compras, bonus semanal y validación de copias. Las pruebas de navegador y sus resultados están documentados en `VERIFICACION.md` cuando se hayan ejecutado.

## Decisiones y límites

La progresión es una propuesta, no un currículo autonómico validado. Aún no se han realizado pruebas de aprendizaje con niños ni validación docente. No hay cuenta, pagos, anuncios, micrófono, cámara, analítica ni sincronización entre dispositivos. El uso acompaña el juego físico y la conversación con adultos.

Ilustraciones y código creados para este proyecto. No se incluyen marcas, personajes comerciales ni recursos gráficos de terceros. Los símbolos de interfaz usan las fuentes del sistema.
