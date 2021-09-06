import { StyledMap } from "../../../../styles/styled_map.js";
import { useRef, useEffect } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyY29zbGV6Y2FubyIsImEiOiJja3Q2dW05cXIwbWJmMnBwazhoMGN4bTZ0In0.YVQqLqP6MASn3JN3H0zdGQ";

export const MapBox = ({ latitude, longitude }) => {
  const mapContainer = useRef(null);

  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 9,
    });
  });
  return (
    <StyledMap>
      <div ref={mapContainer} className="map-container" />
    </StyledMap>
  );
};

export default MapBox;
