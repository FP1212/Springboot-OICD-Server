import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import useWebSocket from '../hooks/useWebSocket';
import { useKeycloak } from '@react-keycloak/web';

const TrackMap = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [messageData, setMessageData] = useState({});
  const { keycloak } = useKeycloak();

  const traccarWSUrl = new URL('ws://localhost:8082/api/socket');
  traccarWSUrl.searchParams.append('token', keycloak.token);

  const { webSocket, subscribeToEvent, unsubscribeFromEvent } = useWebSocket(
    traccarWSUrl.toString(),
  );

  useEffect(() => {
    if (!webSocket) return;
    subscribeToEvent('message', (data) => {
      setMessageData(data);
    });

    return () => {
      unsubscribeFromEvent('message');
    };
  }, [webSocket, subscribeToEvent, unsubscribeFromEvent]);

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <section className="map-component">
      {JSON.stringify(messageData)}
      <div className="map">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>
    </section>
  );
};

export default TrackMap;
