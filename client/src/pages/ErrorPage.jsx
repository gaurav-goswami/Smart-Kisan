import React from 'react'
import MainWrapper from '../Wrapper/MainWrapper'
import NavigationButton from '../components/common/NavigationButton'

const ErrorPage = () => {
  return (
    <>
      <MainWrapper>
        <div className='w-screen h-screen flex justify-center items-center gap-4 flex-col'>
          <p className='text-2xl text-[#141414] font-semibold'>Oops Wrong page</p>
          <NavigationButton path="/">Back to home</NavigationButton>
        </div>
      </MainWrapper>
    </>
  )
}

export default ErrorPage
