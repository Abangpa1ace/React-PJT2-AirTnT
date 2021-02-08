import React, { useEffect } from 'react'
import styled from 'styled-components';
import DetailConBox from '../../DetailConBox';
import { Button } from '../../../../Components/Global/GlobalComponent';

const { kakao } = window;

const AddMap = () => {

  useEffect(() => {
    loadAddMap()
  }, [])

  const loadAddMap = () => {
    const mapContainer = document.querySelector('.map-container');
    mapContainer.innerHTML = '';

    const options = {
      center: new kakao.maps.LatLng(37.502, 126.777),
      level: 6,
    }
    const map = new kakao.maps.Map(mapContainer, options);

    // Marker, Custom Overlay Pinning
    const imgSrc= 'https://image.flaticon.com/icons/png/512/1201/1201643.png';
    const imgSize = new kakao.maps.Size(35, 35);
    const marker = new kakao.maps.Marker({
      map: map,
      image: new kakao.maps.MarkerImage(imgSrc, imgSize),
      position: new kakao.maps.LatLng(37.502, 126.777),
      // title: rest.title,
      zIndex: 3,
    })
    marker.setMap(map);

    // update Zoom Level when zoom in/out
    kakao.maps.event.addListener(map, 'zoom_changed', () => {
      const nowZoom = map.getLevel();
      // setZoom(nowZoom);
    })

    return map;
  }
  return (
    <DetailConBox head="위치">
      <MapContainer className="map-container"></MapContainer>
      <MapDesc>
        <p>{`마포구, 서울, 한국`}</p>
        <pre>{`떠오르고 있는 핫플레이스인 합정에 위치해 있습니다.
건물을 나서지 않고도 문을 나서 엘레베이터를 타고서 지하에서 내리기만 해도 수많은 맛집과 교보문고, 카페 등을 이용할수 있습니다.
건물을 나서자 마자 보이는 횡단보도를 건너면 메세나폴리스와 연결됩니다. 수많은 패션브랜드와 쇼핑몰이 입점되어 있으며, 홈플러스 합정점이 입점되어 있습니다.`}</pre>
      </MapDesc>
      <Button
        padding="15px 25px"
        border={({ theme }) => theme.themeBlack}
        fontSize="16px"
        backgroundHov={({ theme }) => theme.gray0}
        radius="10px"
      >
        자세한 위치 정보
      </Button>
    </DetailConBox>
  )
}

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
`;

const MapDesc = styled.div`
  margin: 30px 0;

  p {
    font-weight: bold;
    margin: 0 0 15px;
  }

  pre {
    font-size: 16px;
    font-family: initial;
    line-height: 1.5;
  }
`;

export default AddMap
