import React from 'react'
import FeatureCard from '../Cards/FeatureCard'
import marketIcon from "../../assets/marketIcon.png"
import storeIcon from "../../assets/storeIcon.png"
import farmerEducationIcon from "../../assets/farmerEducationIcon.png"
import labTestIcon from "../../assets/labTestIcon.png"
import newsIcon from "../../assets/newsIcon.png"
import coldStorageIcon from "../../assets/coldStorageIcon.png"

const Features = () => {

    const features = [
        {title : "Daily Market Price" , path : "/commodity/commodity-price", icon : marketIcon},
        {title : "Farmer Store" , path : "/farmer/store" , icon : storeIcon},
        {title : "Farmer Education" , path : "/farmer/education" , icon : farmerEducationIcon},
        {title : "Lab Test" , path : "/lab-test" , icon : labTestIcon},
        {title : "Agriculture News" , path : "/farming/news" , icon : newsIcon},
        {title : "Cold Storage" , path : "/cold-storage" , icon : coldStorageIcon},
    ]

    return (
        <>
            <div className='flex flex-col flex-wrap p-2 w-screen  bg-green-700 mx-auto gap-4 justify-center'>

                <h2 className='text-center text-3xl font-bold text-gray-300'>Smart-Kisan Features</h2>
                <div className='flex flex-wrap p-2 gap-4 justify-center w-[100%]'>
                {
                    features.map((item , index) => {
                        return <FeatureCard {...item} key={index}/>
                    })
                }
                </div>
            </div>
        </>
    )
}

export default Features
