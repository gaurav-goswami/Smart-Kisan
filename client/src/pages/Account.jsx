import React from 'react'
import MainWrapper from '../Wrapper/MainWrapper'
import { useGetFarmerProductQuery } from '../services/ProductApi'
import FarmerProductCard from '../components/Cards/FarmerProductCard'

const Account = () => {


    const {data , isLoading, isError} = useGetFarmerProductQuery();

    console.log(data, isLoading);

  return (
    <>
        <MainWrapper>
            <div className='w-[100%] md:w-[70%] xl:w-[1200px] p-2 mx-auto flex flex-wrap gap-3 h-screen'>
                {
                    isLoading ? <div className='w-[100%] md:w-[70%] xl:w-[1200px] p-2 mx-auto flex justify-center items-center h-screen gap-3'>Loading...</div>

                    :

                    (data === undefined) ? <div className='w-[100%] md:w-[70%] xl:w-[1200px] p-2 mx-auto flex justify-center items-center h-screen gap-3'>No Products</div> : 

                    (data?.products.length === 0) ? <div className='w-[100%] md:w-[70%] xl:w-[1200px] p-2 mx-auto flex justify-center items-center h-screen gap-3 text-red-600'>You don't have any product</div>

                    :

                    <div className='w-[100%] flex gap-2 p-2 h-max'> 
                        {
                            data?.products.map((item, index) => {
                                return <FarmerProductCard {...item} key={index}/>
                            })
                        }
                    </div>  
                }
            </div>
        </MainWrapper>
    </>
  )
}

export default Account
