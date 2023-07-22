import React from 'react'
import { Link } from 'react-router-dom'

const NavigationButton = ({path, children}) => {
  return (
    <Link to={path} className='w-fit'>
        <button className='bg-green-400 px-6 py-3 rounded-lg font-semibold'>{children}</button>
    </Link>
  )
}

export default NavigationButton
