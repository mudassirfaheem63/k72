import React from 'react'
import ProjetCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

   const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]
 
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from(".hero",{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.lol',
         start:'top 100%',
         end:'top -150%',
         scrub:true
      },
               
    })
  })
 
  return (
    <div className='p-2'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2]  uppercase text-[18vw] lg:text-[12vw]'>Projets</h2>
      </div>
      <div className='-lg:mt-14 -mt-6 lol'>
        {projects.map(function(elem, idx) {
          return     <div key={idx} className='hero w-full lg:h-100  mb-4 flex lg:flex-row flex-col gap-2 lg:gap-4'>
          <ProjetCard image1={elem.image1} image2={elem.image2}/> 
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects
