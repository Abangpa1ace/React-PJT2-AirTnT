import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../Context';
import { Button } from '../../components/Global/GlobalComponent';
import MapModal from './components/MapComponents/MapModal';
import { flexCenter } from '../../styles/theme';

const { kakao } = window;

const MapContainer = styled.div`
  position: sticky;
  top: 0;
  width: 53%;
  height: 100vh;

  .pin {
    padding: 7px 15px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 1px 1px 5px 2px #999999;
    font-weight: bold;
    transition: all .2s ease;

    &:hover {
      transform: scale(1.15);
    }

    &.focus {
      background: ${({ theme }) => theme.themeBlack};
      color: #ffffff;
    }
  }
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
  const [latitude, setLatitude] = useState(37.5024);
  const [longitude, setLongitude] = useState(126.7772);
  const [zoom, setZoom] = useState(8);
  const { restList, restId } = useGlobalContext();
  const pinList = restList.map((ele) => {
    return {
      id: ele.id,
      title: ele.title,
      price: ele.price,
      ...ele.location,
    }
  });

  useEffect(() => {
    loadMap();
  }, [zoom, restList, restId]);

  const loadMap = () => {
    const container = document.querySelector('.map-container');
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: zoom,
    }
    const map = new kakao.maps.Map(container, options);
    
    pinList.forEach((pin) => {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(pin.lat, pin.long),
        title: pin.title,
        zIndex: 3,
      })
      const content = 
      `<div 
        class= 'pin ${pin.id === restId ? 'focus' : ''}'>
        ₩${pin.price.toLocaleString()}
      </div>`;
      let pinBox = new kakao.maps.CustomOverlay({
        map: map,
        position: new kakao.maps.LatLng(pin.lat, pin.long),
        content: content,
        clickable: true,
        yAnchor: 1.3,
        zIndex: 2,
      })
      kakao.maps.event.addListener(marker, 'click', () => {
        console.log(marker);
      })
    })
  }

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
      <MapModal />
    </MapContainer>
  )
}

export default ListMap;
