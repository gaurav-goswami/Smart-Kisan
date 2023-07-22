import React from 'react'
import Navbar from '../components/Header/Navbar'

const MainWrapper = ({children}) => {
  return (
    <>
        <div>
            <Navbar />
            <div className='mt-[45px]'>
                {children}
            </div>
        </div>
    </>
  )
}

export default MainWrapper
