import React from 'react'
import HomeImage from './components/HomeImage';
import HomeCities from './components/HomeCities';
import HomeRecommend from './components/HomeRecommend';
import HomeExperience from './components/HomeExperience';
import HomeHosting from './components/HomeHosting';

export default function Home() {
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