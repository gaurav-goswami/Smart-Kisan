import React from 'react'

const StoreCard = ({image, title, price,}) => {
  return (
    <>
        <div className='w-[270px] h-[350px] bg-[#e4dddd] flex flex-col'>
            <div className='w-[100%] h-[70%]'> 
                <img src={image} alt="image" className='object-cover object-center h-full w-full' />
            </div>
            <div className='py-2 text-center'>
                <p className='text-center font-semibold'>{title}</p>
                <p className='text-center font-semibold'>{price} Rs</p>
                <button className='bg-green-400 w-[95%] py-3 rounded-md'>Order Now</button>
            </div>
        </div>
    </>
  )
}

export default StoreCard
