import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../../Context';
import { Button } from '../../../Components/Global/GlobalComponent';
import MapModal from '../ListMap/MapModal';
import { flexCenter } from '../../../Styles/theme';

const { kakao } = window;

const ListMap = ({ restId }) => {
  // Map Setting
  const { restList } = useGlobalContext();
  const [latitude, setLatitude] = useState(37.5024);
  const [longitude, setLongitude] = useState(126.7772);
  const [zoom, setZoom] = useState(8);

  useEffect(() => {
    loadMap();
  }, [restList, zoom, restId]);

  // Modal Setting
  const [isModalOn, setIsModalOn] = useState(false);
  const [modalX, setModalX] = useState(0);
  const [modalY, setModalY] = useState(0);
  const [modalData, setModalData] = useState({});

  // Load Map
  const loadMap = () => {
    const mapContainer = document.querySelector('.map-container');
    mapContainer.innerHTML = '';

    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: zoom,
    }
    const map = new kakao.maps.Map(mapContainer, options);

    // Marker, Custom Overlay Pinning
    setMarker(map, restList);
    setCustomOverlay(map, restList);

    // Erase Modal when click map
    kakao.maps.event.addListener(map, 'click', () => {
      setIsModalOn(false)
    })

    // update center(lat, lng) when drag map
    kakao.maps.event.addListener(map, 'dragend', () => {
      const center = map.getCenter();
      setLatitude(center.getLat());
      setLongitude(center.getLng());
      setIsModalOn(false);
    })

    // update Zoom Level when zoom in/out
    kakao.maps.event.addListener(map, 'zoom_changed', () => {
      const nowZoom = map.getLevel();
      setZoom(nowZoom);
      setIsModalOn(false);
    })
  }

  const setMarker = (map, list) => {
    list.forEach((rest) => {
      const imgSrc= 'https://image.flaticon.com/icons/png/512/1201/1201643.png';
      const imgSize = new kakao.maps.Size(35, 35);
      const marker = new kakao.maps.Marker({
        map: map,
        image: new kakao.maps.MarkerImage(imgSrc, imgSize),
        position: new kakao.maps.LatLng(rest.location.lat, rest.location.long),
        title: rest.title,
        zIndex: 3,
      })
      kakao.maps.event.addListener(marker, 'click', () => {
        showModal(marker.Pc.x, marker.Pc.y, rest);
      })
      marker.setMap(map);
    })
  }

  const setCustomOverlay = (map, list) => {
    list.forEach((rest) => {
      const content = 
      `<div 
        class= 'pin ${rest.id === restId ? 'focus' : ''}'>
        ₩${rest.price.toLocaleString()}
      </div>`;
      let priceCusOver = new kakao.maps.CustomOverlay({
        map: map,
        position: new kakao.maps.LatLng(rest.location.lat, rest.location.long),
        content: content,
        clickable: true,
        yAnchor: 0,
        zIndex: 2,
      })
      priceCusOver.setMap(map);
    })
  }

  const showModal = (x, y, rest) => {
    setModalData(rest);
    setModalX(x);
    setModalY(y);
    setIsModalOn(true);
  }

  const ZoomIn = () => {
    setZoom(zoom < 0 ? 0 : zoom - 1)
  }

  const ZoomOut = () => {
    setZoom(zoom > 14 ? 14 : zoom + 1)
  }

  return (
    <Listmap>
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
      {isModalOn && <MapModal isModalOn={isModalOn} modalX={modalX} modalY={modalY} modalData={modalData} />}
    </Listmap>
  )
}

const Listmap = styled.main`
  position: sticky;
  top: 0;
  width: 53%;
  height: 100vh;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;

  .pin {
    padding: 5px 10px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px #aaaaaa;
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
  box-shadow: 1px 1px 5px 1px #aaaaaa;
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
  box-shadow: 1px 1px 5px 1px #aaaaaa;
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

export default ListMap;

