import React from 'react';
 
const Video = () => {
  return (
     <div className='h-full w-full'>
        {/* Change from "./video.mp4" to one of these: */}
        <video 
          className='h-full w-full object-cover' 
          autoPlay 
          loop 
          muted 
          src={`${import.meta.env.BASE_URL}video.mp4`}
        ></video>
    </div>
  )
}
 
export default Video