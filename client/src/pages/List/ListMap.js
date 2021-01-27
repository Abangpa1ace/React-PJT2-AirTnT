import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '../../components/Global/GlobalComponent';
import { flexCenter } from '../../styles/theme';

const { kakao } = window;

const MapContainer = styled.div`
  position: sticky;
  top: 0;
  width: 53%;
  height: 100vh;
`;

const MapCheckBox = styled.div`
  ${flexCenter};
  position: absolute;
  top: 80px;
  right: 50%;
  transform: translateX(50%);
  width: 200px;
  height: 40px;
  margin: 30px 0 0 0;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #9c9c9c;
  z-index: 2;

  p {
    margin: 0 0 0 10px;
  }
`;

const ZoomBtn = styled.div`
  position: absolute;
  top: 120px;
  right: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #9c9c9c;
  overflow: hidden;
  z-index: 2;

  &:before {
    content: '';
    position: absolute;
    left: 2px;
    bottom: 50%;
    width: 41px;
    height: 1px;
    background: ${({ theme }) => theme.gray1};
  }
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
  }, [zoom, latitude, longitude])



  const ZoomIn = () => {
    setZoom(zoom < 0 ? 0 : zoom - 1)
  }

  const ZoomOut = () => {
    setZoom(zoom > 14 ? 14 : zoom + 1)
  }

  return (
    <MapContainer className="map-container">
      <MapCheckBox>
        <input type="checkbox" />
        <p>지도를 움직이며 검색하기</p>
      </MapCheckBox>
      <ZoomBtn>
        <Button
          width="45px"
          height="45px"
          background="#ffffff"
          backgroundHov={({ theme }) => theme.gray0}
          radius="0px"
          fontSize="24px"
          onClick={ZoomIn}
        >+</Button>
        <Button
          width="45px"
          height="45px"
          background="#ffffff"
          backgroundHov={({ theme }) => theme.gray0}
          radius="0px"
          fontSize="24px"
          onClick={ZoomOut}
        >-</Button>
      </ZoomBtn>
    </MapContainer>
  )
}

export default ListMap;
