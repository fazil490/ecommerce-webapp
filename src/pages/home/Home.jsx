import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './homeComponents/Hero'
import Categories from './homeComponents/Categories'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <Categories/>
        <Footer />
    </div>
  )
}

export default Home