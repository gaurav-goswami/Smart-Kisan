import React from 'react';

const FarmerProductCard = ({image, createdAt, commodityName , rate, stock}) => {
  return (
    <>
        <div className='md:w-[270px] p-0.5 bg-gray-200 flex flex-col max-[450px]:w-[70%] w-[45%] h-auto  md:h-auto'>

            <div className='w-full overflow-hidden'>
                <img src={image} alt="product-image" className='w-full h-full object-cover object-center' />
            </div>

            <div className='flex flex-col gap-1 p-2'>
                <p>Posted on : {createdAt}</p>
                <p>Commodity : {commodityName}</p>
                <p>Price : {rate} Rs. per kg</p>
                <p>Stock : {stock} kg</p>
            </div>
        
        </div>
    </>
  )
}

export default FarmerProductCard
