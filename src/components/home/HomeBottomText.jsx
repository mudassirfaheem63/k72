import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex gap-2 items-center mb-3 justify-center font-[font2]'>
      <p className='absolute lg:w-[25vw] w-64 lg:right- right-0 bottom-28  lg:bottom-28 font-[font1] lg:text-md text-xs lg:leading-relaxed leading-tight'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
     <div className='uppercase px-4 pt-2 pb-2 lg:px-4  flex items-center hover:border-[#d3fd50]  hover:text-[#d3fd50]  md:h-[6vw] md:pt-3 md:pb-2 md:px-3 h-7 border-white border-2 lg:border-3 lg:h-[14vh] rounded-full'>
        <Link className='text-[6vw] lg:mt-3 mt-0.5'  to='/projects'>Projects</Link>
        </div>
      <div className='uppercase px-4 pt-2 pb-2 lg:px-4  hover:border-[#d3fd50]  hover:text-[#d3fd50] md:h-[6vw] md:pt-3 md:pb-2 md:px-3  h-7 flex items-center border-white border-2 lg:border-3 lg:h-[14vh] rounded-full'>
        <Link className='text-[6vw] lg:mt-3 mt-0.5'  to='/agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
