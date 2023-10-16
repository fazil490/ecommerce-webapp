import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from "../../components/Footer"
import ProductsList from './productComponents/ProductsList'

const Products = () => {
  return (
    <div className='bg-creame'>
       <Navbar/>
       <ProductsList/>
       <Footer/>
    </div>
  )
}

export default Products