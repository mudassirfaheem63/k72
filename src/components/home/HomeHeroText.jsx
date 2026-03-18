import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className=' font-[font2] text-center mt-90  lg:mt-0 pt-5 '>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase  leading-12 lg:leading-[8vw]'> 
        L'étincelle
        </div>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase leading-12 lg:leading-[8vw]'>
        qui
        <div className="lg:h-[7vw] h-[10vw] w-[16vw]  border-r   rounded-full  overflow-hidden ">
            <Video />
            </div>
            génère
        </div>
      <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase leading-12 lg:leading-[8vw]'>
        la créativité
         </div>
    </div>
  )
}

export default HomeHeroText
