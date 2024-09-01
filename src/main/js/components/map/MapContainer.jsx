import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Map, { Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
  selectMapStyle,
  selectMapViewState,
  setViewState,
} from '../../redux/components/map/mapSlice';
import TraccarDevicePositionSource from './sources/TraccarDevicePositionSource';
import { traccarDeviceLayer } from '../../constants/layers';

const MapContainer = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const mapStyle = useSelector(selectMapStyle);
  const viewState = useSelector(selectMapViewState);

  const onMove = useCallback((evt) => {
    dispatch(setViewState(evt.viewState));
  }, []);

  return (
    <Map {...viewState} width="100vw" height="100vh" onMove={onMove} mapStyle={mapStyle}>
      <TraccarDevicePositionSource>
        <Layer {...traccarDeviceLayer} />
      </TraccarDevicePositionSource>
    </Map>
  );
};

export default MapContainer;
