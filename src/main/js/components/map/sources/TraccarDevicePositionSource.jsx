import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layer, Source } from 'react-map-gl/maplibre';
import { useSelector } from 'react-redux';
import { selectPositionsAsFeatureColletions } from '../../../redux/components/traccar/positions/positionsSlice';

const TraccarDevicePositionSource = ({ children }) => {
  const data = useSelector(selectPositionsAsFeatureColletions);

  return (
    <Source id="traccar-device-position-source-id" type="geojson" data={data}>
      {children}
    </Source>
  );
};

TraccarDevicePositionSource.propTypes = {
  children: PropTypes.node,
};

export default TraccarDevicePositionSource;
