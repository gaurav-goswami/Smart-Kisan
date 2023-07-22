import React from 'react'
import MainWrapper from '../Wrapper/MainWrapper'
import HomeMainSection from '../components/Home/HomeMainSection'
import TrustedBySection from '../components/Home/TrustedBySection'
import FarmerEducation from '../components/Home/FarmerEducation'
import Features from '../components/Home/Features'

const HomePage = () => {
  return (
    <>
      <MainWrapper>
        <HomeMainSection />
        <TrustedBySection />
        <FarmerEducation />
        <Features />
      </MainWrapper>
    </>
  )
}

export default HomePage
