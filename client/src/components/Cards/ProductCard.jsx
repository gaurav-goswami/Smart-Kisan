import React from 'react';
import {ImLocation} from "react-icons/im";


const ProductCard = ({productImage, date, productName , price, sellerName, location}) => {
  return (
    <>
        <div className='md:w-[270px] p-0.5 bg-gray-200 flex flex-col max-[450px]:w-[70%] w-[45%] h-[400px] md:h-auto'>

            <div className='w-full overflow-hidden'>
                <img src={productImage} alt="product-image" className='w-full h-full object-cover object-center' />
            </div>

            <div className='flex flex-col gap-1 p-2'>
                <p>Posted on : {date}</p>
                <p>Commodity : {productName}</p>
                <p>Price : {price}</p>
                <p>Seller : {sellerName}</p>
                <p className='inline-flex items-center mt-2 text-green-500'><ImLocation className='text-xl'/> {location}</p>
            </div>
        
        </div>
    </>
  )
}

export default ProductCard
