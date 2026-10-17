# Órbita 2 · Las veinte mejoras

Funciones jugables de una aplicación educativa; no equivalen a simulaciones astronómicas o atmosféricas de alta precisión.

| # | Mejora | Implementación |
|---|---|---|
| 1 | Vuelo continuo | Coordenadas orbitales compartidas, viaje asistido continuo y cambio de referencia conservando posición global. Vuelo manual con crucero. |
| 2 | Mapas más fieles | Trece mapas acreditados de Solar System Scope y mosaicos oficiales de Europa y Titán. Relieve local ilustrativo. |
| 3 | Controles táctiles ajustables | Tamaños de botones y joystick, distribución para zurdos y posición del joystick arrastrable. |
| 4 | Rendimiento móvil | Resolución automática, reducción de estrellas y mallas; mapas limitados a 1024 px en calidad baja y 2048 px en escritorio. |
| 5 | Tutorial interactivo | Pasos que responden a orientar, propulsar, frenar, viajar y aterrizar. Se puede omitir o repetir. |
| 6 | Aterrizaje manual | Tren, velocidad y actitud necesarios para un contacto seguro, colisiones y asistencia opcional. |
| 7 | Astronauta | Caminar, saltar y embarcar cerca de la nave estacionada. Traje protector ficticio. |
| 8 | Rover | Modelo de seis ruedas, conducción, marcha atrás, contador de distancia y estacionamiento. |
| 9 | Lunas visitables | Luna, Europa y Titán con superficies, gravedad, mapas y fichas propias. |
| 10 | Cabina instrumentada | Brújula, velocidad vertical, horizonte artificial y calentamiento. |
| 11 | Gravedad diferenciada | Gravedad por cuerpo e inverso del cuadrado de distancia; saltos distintos. Asistencia compensa caída en vuelo. |
| 12 | Entrada atmosférica | Densidad, resistencia, calentamiento, efecto visual y daños en modo Desafío, simplificados. |
| 13 | Clima | Partículas, nubes, bruma y turbulencia configurables e ilustrativas. |
| 14 | Órbitas y rotaciones | Círculos aproximados con periodos distintos, rotación retrógrada y reloj acelerable. Se estabiliza el giro del terreno cerca de superficie. |
| 15 | Selector de escala | Atlas con escala jugable/científica, etiquetas ampliadas y enfoque por destino. |
| 16 | Navegación asistida | Destino, distancia, tiempo restante, orientación y estimación de frenado; crucero limitado en aproximación. |
| 17 | Misiones científicas | Medir, tomar muestras, desplegar sondas, fotografiar y conducir; progreso por destino. Datos de catálogo, no lecturas reales. |
| 18 | Audio | Motor dentro de cabina, ambiente atmosférico y avisos sintetizados. Silencio exterior en vacío, activación voluntaria. |
| 19 | Fotografía avanzada | Vista sin HUD, cámara de observación, zoom, exposición y PNG con destino y fecha. |
| 20 | Partida portátil | Exportar/importar JSON validado, migración de partidas anteriores y conservación de destino, vehículo y misiones. |

## Acceso

- Expedición: astronauta, rover, salto, mediciones, sonda, fotografía y partida portátil.
- Ajustes: controles, calidad, audio, clima y descarga sin conexión.
- Atlas 3D: escala, enfoque y ritmo orbital.
- Destinos: ocho planetas y tres lunas.

## Límites científicos

La escala jugable comprime tamaños y distancias. Sus velocidades y altitudes usan unidades adaptadas. El atlas científico usa un factor común para radios y distancias; las etiquetas se amplían para poder localizar los mundos. Las órbitas no son efemérides: se aproximan con círculos. No se integran fuerzas N-cuerpos ni transferencias orbitales reales. El vuelo usa gravedad local y asistencia. La cartografía de color no define elevaciones exactas. Los gigantes no tienen suelo. Los escudos y la supervivencia en entornos extremos son ficticios.

Ver `assets/textures/CREDITS.md` para atribuciones. Titán utiliza un mosaico infrarrojo, no fotografía en color visible. No se garantiza un FPS universal ni se sustituye la validación en teléfonos físicos.
