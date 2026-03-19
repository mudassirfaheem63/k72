import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  const onUpdateHandler = (elem) => {
    let imageIndex
    if (elem.progress < 1) {
      imageIndex = Math.floor(elem.progress * imageArray.length)
    } else {
      imageIndex = imageArray.length - 1
    }
    imageRef.current.src = imageArray[imageIndex]
  }

  useGSAP(function () {
    const mm = gsap.matchMedia()

    // ── Large screens (lg = 1024px+) — original values unchanged ──
    mm.add('(min-width: 1024px)', () => {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: 'top 24%',
          end: 'top -140%',
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: onUpdateHandler,
        },
      })
    })

    // ── Small screens (below 1024px) — adjusted start/end ──
    // The image is smaller and the heading takes less vertical space,
    // so we pin earlier and extend the end far enough that the animation
    // plays while the text paragraph is in view.
    mm.add('(max-width: 1023px)', () => {
      gsap.to(imageDivRef.current, {
        scrollTrigger: {
          trigger: imageDivRef.current,
          start: 'top 5%',   // pin kicks in sooner (image is near top of viewport)
          end: 'top -100%',   // longer scrub range to cover full text scroll on mobile
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: onUpdateHandler,
        },
      })
    })

    return () => mm.revert()
  })

  return (
    <div>
      <div id='section1' className='py-1'>
        <div
          ref={imageDivRef}
          className='lg:h-[20vw] h-28 w-22 rounded-xl overflow-hidden lg:top-45 -top-15 lg:w-[15vw] left-[30vw] absolute'
        >
          <img
            ref={imageRef}
            className='h-full object-cover w-full'
            src='https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7'
            alt=''
          />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[25vh] lg:mt-[55vh]'>
            <h1 className='lg:text-[19vw] text-[18vw] text-center uppercase leading-[18vw]'>
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className='lg:pl-[40%] px-2 mt-15'>
            <p className='lg:text-4xl lg:leading-8 leading-6 text-2xl'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C'est pour ça qu'on s'engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence