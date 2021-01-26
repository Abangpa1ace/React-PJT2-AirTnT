import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const { kakao } = window;

const MapContainer = styled.div`
  position: sticky;
  top: 0;
  width: 53%;
  height: 100vh;
`;

const ListMap = () => {
  const [latitude, setLatitude] = useState(35.450701);
  const [longitude, setLongitude] = useState(126.570667);
  const [zoom, setZoom] = useState(8);

  useEffect(() => {
    const container = document.querySelector('.map-container');
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: zoom,
    }
    const map = new kakao.maps.Map(container, options);
  }, [])

  return (
    <MapContainer className="map-container" />
  )
}

export default ListMap;
