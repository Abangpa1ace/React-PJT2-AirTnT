import React from 'react';
import styled from 'styled-components';
import AsideStickyBox from './AsideStickyBox';

const DetailAside = () => {
  return (
    <Detailaside>
      <AsideStickyBox />
    </Detailaside>
  )
}

const Detailaside = styled.aside`
  height: 100%;
`;

export default DetailAside
