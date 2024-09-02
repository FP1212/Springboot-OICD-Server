import React, { useEffect } from 'react';
import { useMap } from 'react-map-gl';
import mapIcons from '../../constants/mapIcons';
import { svgToCanvas } from '../../utils/ImageUtility';
import PropTypes from 'prop-types';

function PreloadAssetsHandler({ setIsPreloaded }) {
  const { current: map } = useMap(); // Obtiene la instancia actual del mapa

  useEffect(() => {
    if (!map) return;

    const loadIcons = async () => {
      for (const [iconName, url] of Object.entries(mapIcons)) {
        if (map.hasImage(iconName)) continue;
        const svgCanvas = await svgToCanvas(url, 24, 24);

        if (svgCanvas) {
          const image = await map.loadImage(svgCanvas);
          map.addImage(iconName, image.data);
          setIsPreloaded(true);
        }
      }
    };

    loadIcons();
    return () => {
      Object.keys(mapIcons).forEach((iconName) => {
        if (map.hasImage(iconName)) {
          map.removeImage(iconName);
        }
      });
    };
  }, [map]);

  return null;
}

PreloadAssetsHandler.propTypes = {
  setIsPreloaded: PropTypes.func,
};

export default PreloadAssetsHandler;
