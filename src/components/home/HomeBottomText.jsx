import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex gap-2 items-center justify-center font-[font2]'>
     <div className='uppercase px-14 flex items-center hover:border-[#d3fd50]  hover:text-[#d3fd50]  border-white border-3 h-[14vh] rounded-full'>
        <Link className='text-[6vw] mt-3'  to='/projects'>Projects</Link>
        </div>
      <div className='uppercase px-14 hover:border-[#d3fd50]  hover:text-[#d3fd50]   flex items-center border-white border-3 h-[14vh] rounded-full'>
        <Link className='text-[6vw] mt-3' to='/agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
