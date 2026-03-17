import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {

    const currentPath = useLocation().pathname

     const stairParentRef = useRef(null)
     const pageRef = useRef(null)

  useGSAP(function(){
      
    const tl = gsap.timeline()

     tl.to(stairParentRef.current,{
      display:'block'
    })
    tl.from('.stair',{
    height:0,
    duration:2,
    stagger:{
      amount:-0.25
    }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
      amount:-0.25
    }
    })
    tl.to(stairParentRef.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:'0',
    })

    gsap.from(pageRef.current,{
        opacity:0,
        delay:1.2,
        scale:1.3,
    })
  },[currentPath])
  console.log(props.children)
  return (
   <div>
     <div ref={stairParentRef} className='pointer-events-none'>
       <div className="fixed inset-0 z-20 flex  ">
        <div className="h-full stair w-1/5 bg-black"></div>
        <div className="h-full stair w-1/5 bg-black"></div>
        <div className="h-full stair w-1/5 bg-black"></div>
        <div className="h-full stair w-1/5 bg-black"></div>
        <div className="h-full stair w-1/5 bg-black"></div>
      </div>
     </div>
     <div ref={pageRef}>
        {props.children}
     </div>
   </div>
  )
}

export default Stair
