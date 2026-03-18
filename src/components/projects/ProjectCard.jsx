import React from 'react'

const ProjetCard = (props) => {
  return (
         <>
          <div className='w-1/2  group transition-all  relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
          <img className='w-full h-full object-cover' src={props.image1} alt="" />
          <div className='opacity-0 transition-all  group-hover:opacity-100 h-full w-full top-0 flex items-center justify-center left-0 absolute bg-black/10'>
          <h2 className='text-Center text-4xl uppercase font-[font1] px-6  pt-2 text-center text-white border-white border-3  rounded-full'>Voir Let Projet</h2>
          </div>
          </div>
          <div className='w-1/2 group transition-all  relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
          <img className='w-full h-full object-cover' src={props.image2} alt="" />
          <div className='opacity-0 transition-all  group-hover:opacity-100 h-full w-full top-0 flex items-center justify-center left-0 absolute bg-black/10'>
          <h2 className='text-Center text-4xl uppercase font-[font1] px-6  pt-2 text-center text-white border-white border-3  rounded-full'>Voir Let Projet</h2>
          </div>
          </div>
         </>
  )
}

export default ProjetCard
