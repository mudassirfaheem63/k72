import React from 'react'

const Projects = () => {
  return (
    <div className='p-2'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2]  uppercase text-[12vw]'>Projets</h2>
      </div>
      <div className='-mt-14'>
        <div className='w-full h-100 mb-4 -mt-10 flex gap-4'>
          <div className='w-1/2 group transition-all  relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
          <img className='w-full h-full object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg' alt="" />
          <div className='opacity-0 transition-all  group-hover:opacity-100 h-full w-full top-0 flex items-center justify-center left-0 absolute bg-black/10'>
          <h2 className='text-Center text-4xl uppercase font-[font1] px-6  pt-2 text-center text-white border-white border-3  rounded-full'>Voir Let Projet</h2>
          </div>
          </div>
          <div className='w-1/2 group transition-all  relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
          <img className='w-full h-full object-cover' src='https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg' alt="" />
          <div className='opacity-0 transition-all  group-hover:opacity-100 h-full w-full top-0 flex items-center justify-center left-0 absolute bg-black/10'>
          <h2 className='text-Center text-4xl uppercase font-[font1] px-6  pt-2 text-center text-white border-white border-3  rounded-full'>Voir Let Projet</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
