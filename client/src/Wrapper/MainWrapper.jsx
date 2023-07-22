import React from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'

const MainWrapper = ({children}) => {
  return (
    <>
        <div>
            <Navbar />
            <div className='mt-[45px]'>
                {children}
            </div>
            <Footer />
        </div>
    </>
  )
}

export default MainWrapper
