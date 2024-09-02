export const traccarDeviceLayer = Object.freeze({
  id: 'traccarDeviceLayer',
  type: 'symbol',
  source: 'points',
  layout: {
    'icon-image': 'carSvg', // Usa un icono predefinido
    'icon-size': 1.5,
    'icon-allow-overlap': true,
  },
  paint: {
    'icon-color': '#ff0000', // Color del icono
  },
});
