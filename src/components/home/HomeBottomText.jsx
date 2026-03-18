import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex gap-2 items-center mb-3 justify-center font-[font2]'>
     <div className='uppercase px-2 lg:px-4  flex items-center hover:border-[#d3fd50]  hover:text-[#d3fd50] h-7  border-white border-3 lg:h-[14vh] rounded-full'>
        <Link className='text-[6vw] lg:mt-3 mt-0.5'  to='/projects'>Projects</Link>
        </div>
      <div className='uppercase px-2 lg:px-4 hover:border-[#d3fd50]  hover:text-[#d3fd50]  h-7 flex items-center border-white border-3 lg:h-[14vh] rounded-full'>
        <Link className='text-[6vw] lg:mt-3 mt-0.5'  to='/agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
