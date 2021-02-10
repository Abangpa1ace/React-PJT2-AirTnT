import React from 'react';
import HeaderLinks from './components/HeaderLinks';
import HeaderImgGrid from './components/HeaderImgGrid';
import { useGlobalContext } from '../../../Context';

const DetailHeader = () => {
  const { restDetail } = useGlobalContext();
  return (
    <>
      <h3>{restDetail.title}</h3>
      <HeaderLinks />
      <HeaderImgGrid />
    </>
  )
}

export default DetailHeader
