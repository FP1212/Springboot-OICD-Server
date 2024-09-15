import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Map, {
  MapProvider,
  Layer,
  NavigationControl,
  GeolocateControl,
  ScaleControl,
  AttributionControl,
  FullscreenControl,
} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
  selectMapStyle,
  selectMapViewState,
  setViewState,
} from '../../redux/components/map/mapSlice';
import TraccarDevicePositionSource from './sources/TraccarDevicePositionSource';
import { traccarDeviceLayer } from '../../constants/layers';
import PreloadAssetsHandler from '../handlers/PreloadAssertsHandler';
import MapOverlay from './MapOverlay';

const MapContainer = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const mapStyle = useSelector(selectMapStyle);
  const viewState = useSelector(selectMapViewState);
  const [preloaded, setIsPreloaded] = useState(false);

  const onMove = useCallback((evt) => {
    dispatch(setViewState(evt.viewState));
  }, []);

  return (
    <>
      <MapProvider>
        <Map
          {...viewState}
          width="100vw"
          height="100vh"
          onMove={onMove}
          mapStyle={mapStyle}
          reuseMaps
        >
          <PreloadAssetsHandler setIsPreloaded={setIsPreloaded} />
          <NavigationControl />
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <ScaleControl />
          <AttributionControl />
          <FullscreenControl />
          {preloaded && (
            <>
              <MapOverlay />
              <TraccarDevicePositionSource>
                <Layer {...traccarDeviceLayer} />
              </TraccarDevicePositionSource>
            </>
          )}
        </Map>
      </MapProvider>
    </>
  );
};

export default MapContainer;
