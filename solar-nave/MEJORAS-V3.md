# Órbita 3 · exploración de superficie

Versión 0.3.0. Cinco mejoras prioritarias sobre Órbita 2.

1. **Mapa de superficie.** Mapas globales con ubicación actual, lugares de interés, coordenadas editables y destino de descenso. Selección mediante mouse, un toque, botones de lugares o campos numéricos. Los gigantes gaseosos explican que no tienen suelo sólido. Hay que despegar en la nave antes de preparar un nuevo descenso.
2. **Relieve medido.** Dos rejillas numéricas de 64 × 64: cráter Tycho (LOLA, unos 1,9 km por muestra) y monte Olimpo (MOLA reducido, unos 11,1 km). Una única malla integra las muestras y la misma función de alturas dirige colisiones, vehículos, escáner y destino asistido. Se conservan proporciones verticales con el radio jugable; no hay exageración vertical añadida. La transición exterior del 8 % se mezcla con el relieve generado. El resto del mundo sigue siendo procedural. Fuentes y datum en `assets/terrain/CREDITS.md`.
3. **Escáner de aterrizaje.** Actualiza cuatro veces por segundo una cuadrícula de 5 × 5 muestras sobre 12 × 12 unidades jugables. Muestra pendiente, desnivel, agua y proximidad de rocas generadas. También comprueba tren, velocidad, velocidad vertical, actitud y altura. Las advertencias incluyen texto y símbolos. Es una ayuda del juego: las rejillas reales no resuelven obstáculos pequeños y el escáner no garantiza un aterrizaje.
4. **Luces de exploración.** Un foco sigue la orientación del vehículo activo, con posición adaptada a nave, rover o astronauta. Funciona con sonido apagado y puede encenderse desde la barra. Se apaga visualmente en el atlas; el ajuste se guarda.
5. **Accesibilidad.** Texto grande, contraste alto, avisos destacados, reducción de movimiento y partículas, y botones de orientación/zoom/cámara que evitan arrastrar o pellizcar. Se conservan los ajustes. Las acciones nuevas tienen nombres accesibles, foco visible y controles de al menos 44 px. El mapa ofrece selección equivalente mediante botones y coordenadas.

Los terrenos y módulos nuevos se incluyen en la descarga sin conexión. No se modifica el gestor compartido de otros juegos. Las partidas de las versiones anteriores siguen siendo compatibles.

## Comprobación

25 pruebas automáticas: catálogo, física, guardados, navegación, sin conexión, coordenadas, interpolación y escala de datos reales, orientación de malla y decisiones del escáner. Revisión visual en navegador de escritorio y viewport móvil de 390 × 844. El comportamiento táctil en teléfonos físicos y una auditoría completa con lectores de pantalla siguen pendientes.
