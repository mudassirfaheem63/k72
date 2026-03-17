import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='text-white'>
     <div className=" h-screen fixed w-screen">
      <Video />
     </div>
     <div className="relative h-screen w-screen overflow-hidden flex flex-col justify-between">
      <HomeHeroText />
      <HomeBottomText />
     </div>
    </div>
  )
}

export default Home
