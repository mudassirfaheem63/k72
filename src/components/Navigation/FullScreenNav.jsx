import { useGSAP } from '@gsap/react';
import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { NavBarContext } from '../../context/NavContext';

const FullScreenNav = () => {
  const fullScreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavBarContext)

  useGSAP(function () {

    if (navOpen === false && fullScreenRef.current?.style.display === 'none') return;

    if (navOpen) {
      gsap.set(fullScreenRef.current, { display: 'block' })
      gsap.set('.stairing', { height: '100%' })
      gsap.set('.link', { rotateX: 0, opacity: 1 })

      const tl = gsap.timeline()

      tl.to('.stairing', {
        height: 0,
        duration: 0.6,
        stagger: { amount: 0.4, from: 'end' },
        ease: 'power2.inOut'
      })

      tl.fromTo('.link',
        { rotateX: -90, opacity: 0, transformOrigin: 'top center' },
        { rotateX: 0, opacity: 1, duration: 0.5, stagger: { amount: 0.3 }, ease: 'power2.out' },
        '-=0.1'
      )

    } else {

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(fullScreenRef.current, { display: 'none' })
          gsap.set('.link', { rotateX: 0, opacity: 1 })
        }
      })

      tl.to('.link', {
        rotateX: 90,
        opacity: 0,
        duration: 0.4,
        stagger: { amount: 0.2 },
        ease: 'power2.in'
      })

      tl.to('.stairing', {
        height: '100%',
        duration: 0.5,
        stagger: { amount: -0.3, from: 'top' },
        ease: 'power2.inOut'
      })
    }

  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav fixed top-0 left-0  text-white h-screen w-screen overflow-x-hidden"
      style={{ display: 'none', zIndex: 50 }}
    >
      <div className="absolute inset-0 bg-black" style={{ zIndex: 10 }} />

      <div className="absolute inset-0 flex" style={{ zIndex: 20 }}>
        <div className="h-full stairing w-1/5 bg-black"></div>
        <div className="h-full stairing w-1/5 bg-black"></div>
        <div className="h-full stairing w-1/5 bg-black"></div>
        <div className="h-full stairing w-1/5 bg-black"></div>
        <div className="h-full stairing w-1/5 bg-black"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 30 }}>

        <div className="flex w-full justify-between lg:p-2 p-2 items-start">
          <div className="lg:w-28 w-25">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
              <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>

          <div
            className="lg:h-22 h-24 w-24 lg:w-22 relative cursor-pointer"
            onClick={() => setNavOpen(false)}
          >
            <div className="lg:h-30 h-34 w-1 lg:w-1 origin-top -rotate-45 bg-[#d3fd50] absolute"></div>
            <div className="lg:h-30 h-34 w-1 lg:w-1 origin-top right-0 rotate-45 bg-[#d3fd50] absolute"></div>
          </div>
        </div>

        <div id="all-links" className="lg:py-33 py-60">

          <div className="link origin-top relative border-t border-white overflow-hidden">
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw] text-center uppercase pt-3 leading-[0.8]">Projects</h1>
            <div className="moveLink flex absolute top-0 text-black bg-[#d3fd50]">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t border-white overflow-hidden">
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw]   text-center uppercase pt-3 leading-[0.8]">Agence</h1>
           <div className="moveLink flex absolute top-0 text-black bg-[#d3fd50]">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t border-white overflow-hidden">
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw]   text-center uppercase pt-3 leading-[0.8]">Contact</h1>
            <div className="moveLink flex absolute top-0 text-black bg-[#d3fd50]">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y border-white overflow-hidden">
            <h1 className="font-[font2] lg:text-[8vw] text-[15vw]   text-center uppercase pt-3 leading-[0.8]">Blogs</h1>
            <div className="moveLink flex absolute top-0 text-black bg-[#d3fd50]">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-[15vw]  text-center uppercase pt-3 leading-[0.8]">Pour Toit Voir</h2>
                <img className="lg:w-48 shrink-0 rounded-full w-28 h-10 lg:h-20 object-cover" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;