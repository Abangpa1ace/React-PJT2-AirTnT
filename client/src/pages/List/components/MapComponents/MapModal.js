import React from 'react';
import styled from 'styled-components';

const RestModal = styled.article`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  background: red;
  z-index: 100;
`;

const MapModal = () => {
  return (
    <RestModal>
      hihi
    </RestModal>
  )
}

export default MapModal;
