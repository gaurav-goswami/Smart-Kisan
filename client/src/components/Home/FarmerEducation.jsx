import React from 'react'
import { FARMER_EDUCATION } from '../../data/messages'
import {GiFarmer} from "react-icons/gi";

const FarmerEducation = () => {
  return (
    <>
        <div className='w-[95%] md:w-[80%] lg:w-[70%] mx-auto my-4 flex flex-col gap-4 items-center p-6 bg-yellow-100'>

            <h2 className='text-3xl md:text-5xl font-bold text-gray-700 inline-flex'>Farmer's Education? <GiFarmer />  </h2>
            <p className='text-md md:text-lg text-gray-600 font-semibold'>
                {FARMER_EDUCATION}
            </p>
        </div>
    </>
  )
}

export default FarmerEducation
