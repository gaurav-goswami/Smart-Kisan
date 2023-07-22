import React from 'react'
import homeVideo from "../../assets/home-video.mp4"
import NavigateButton from '../common/NavigationButton'

const HomeMainSection = () => {
  return (
    <>
      <div className='w-screen md:h-[500px] relative'>
        <div className='w-[100%] h-[100%] relative'>
          <video src={homeVideo} autoPlay loop className='w-full h-full object-cover'/>

          <div className='absolute top-0 bottom-0 left-0 right-0 opacity-70 bg-green-900'></div>
        </div>

        <div className='absolute w-[60%] md:w-[50%] lg:w-[40%] p-2 flex flex-col gap-2 top-0 bottom-0 left-10 justify-center leading-normal md:gap-4'>
          <h2 className='font-extrabold text-md md:text-5xl uppercase tracking-wider text-white'>smart-kisan</h2>

          <p className='text:sm md:text-xl text-white font-semibold'>A platform that provides numerous services to farmers and save their interest.</p>

          <NavigateButton path="/commodity/commodity-price">Explore Now</NavigateButton>
          
        </div>

      </div>
    </>
  )
}

export default HomeMainSection
