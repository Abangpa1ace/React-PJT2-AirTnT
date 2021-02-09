import React from 'react';
import HeaderLinks from './components/HeaderLinks';
import HeaderImgGrid from './components/HeaderImgGrid';

const DetailHeader = ({ data }) => {
  return (
    <>
      <h3>{data && data.title}</h3>
      <HeaderLinks />
      <HeaderImgGrid />
    </>
  )
}

export default DetailHeader
