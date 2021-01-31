import React, { useEffect } from 'react'
import HomeImage from './components/HomeImage';
import HomeCities from './components/HomeCities';
import HomeRecommend from './components/HomeRecommend';
import HomeExperience from './components/HomeExperience';
import HomeHosting from './components/HomeHosting';
import { useGlobalContext } from '../../Context';

export default function Home() {
  const { setNavFixed, handleNavFixed, setSearchOn } = useGlobalContext();

  useEffect(() => {
    setNavFixed(false);
    setSearchOn(true);
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleNavFixed);
    return () => window.removeEventListener('scroll', handleNavFixed);
  }, [handleNavFixed]);

  return (
    <>
      <HomeImage />
      <HomeCities />
      <HomeRecommend />
      <HomeExperience />
      <HomeHosting />
    </>
  )
}