# Relieve numérico real de Luna y Marte

`regions.js` contiene dos rejillas de 64 × 64 alturas en metros, filas de norte a sur y columnas de oeste a este. Son recortes de altimetría láser, no alturas estimadas a partir del brillo de fotografías. Los límites `west/east/south/north` son los **centros** de la primera/última muestra, longitud positiva al este expresada entre −180° y 180°; interpolar entre esos centros. La transformación a la escala jugable y cualquier exageración vertical pertenecen al simulador, no a estos datos.

## Luna: cráter Tycho

- Fuente: NASA LRO / equipo LOLA, `LDEM_16`, versión V3.1, creado el 15 de marzo de 2019.
- [IMG original](https://imbrium.mit.edu/DATA/LOLA_GDR/CYLINDRICAL/IMG/LDEM_16.IMG) y [etiqueta PDS](https://imbrium.mit.edu/DATA/LOLA_GDR/CYLINDRICAL/IMG/LDEM_16.LBL).
- [NASA: explicación del modelo LOLA y sus unidades](https://svs.gsfc.nasa.gov/4720/).
- Original de 5760 × 2880 valores int16 little endian; altura = valor × 0,5 metros respecto a una esfera de radio 1 737 400 m. Marco Mean Earth / Polar Axis DE421. Registro de píxel, centros en 89,96875° N / 0,03125° E.
- Se recortan 346°–350° E y 45°–41° S sin remuestreo. Resolución de 0,0625°, aproximadamente 1,895 km de norte a sur. Se redondean los medios metros a metros en el archivo web.
- Esta rejilla permite representar la forma general de Tycho; no resuelve rocas, huellas, obstáculos ni pendientes a escala de un módulo de aterrizaje. El producto original incluye interpolación y puede tener artefactos en bordes de bandas de 45°.

## Marte: monte Olimpo

- Fuente: NASA Mars Global Surveyor / equipo MOLA, producto `MEGT90N000EB`, MEGDR versión 2.0, creado el 3 de abril de 2003.
- [Página oficial PDS](https://pds-geosciences.wustl.edu/missions/mgs/megdr.html).
- [IMG original](https://pds-geosciences.wustl.edu/mgs/urn-nasa-pds-mgs_mola_topography_derived/meg016/megt90n000eb.img) y [etiqueta PDS](https://pds-geosciences.wustl.edu/mgs/urn-nasa-pds-mgs_mola_topography_derived/meg016/megt90n000eb.lbl).
- Original de 5760 × 2880 valores int16 big endian, alturas en metros sobre el areoide MOLA GMM3 (radio planetario menos radio del areoide), latitud planetocéntrica IAU2000 y longitud positiva al este.
- Se recortan 220°–232° E y 12°–24° N, y se promedia cada bloque de 3 × 3 muestras, pasando de 192 × 192 a 64 × 64. Paso resultante 0,1875°, aproximadamente 11,115 km norte-sur. Las medias se redondean a metros. Esta reducción suaviza cimas, caldera y escarpes; no conserva el extremo máximo global del producto.
- El original ya combina medianas e interpolación en celdas sin observaciones. La etiqueta indica huecos de hasta 12 km entre perfiles. Las pendientes de la versión del simulador no sirven para navegación real ni describen obstáculos pequeños.

## Uso y atribución

Crédito: **NASA / GSFC / LRO LOLA Science Team; NASA / GSFC / MGS MOLA Science Team; NASA Planetary Data System Geosciences Node**. Los datos científicos se reutilizan con atribución de fuente; no se implica respaldo de NASA. Véanse las [directrices de NASA para contenido educativo y simulaciones](https://www.nasa.gov/nasa-brand-center/images-and-media/). No se incluyen logotipos ni material de terceros.

Descarga y extracción: 17 de octubre de 2026. Cada objeto conserva URL de fuente, SHA-256 del IMG, resolución, método, datum, unidades, registro y extremos. Los originales de unos 33 MB por cuerpo no se distribuyen en la aplicación; solo las rejillas reducidas.
