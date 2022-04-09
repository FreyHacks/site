import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Register from '../components/Register'

const Registered = () => {
  return (
    <div className='flex flex-col items-center w-full  overflow-x-hidden overflow-y-auto'>
      <div className='w-full min-h-screen flex flex-col items-center overflow-hidden'>
        <Nav external={true}/>
        <Register/>
      </div>
      <Footer external={true}/>
    </div>
  )
}

export default Registered