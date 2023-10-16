import React from 'react'
import {FaFilter} from 'react-icons/fa'
import ProductCard from './ProductCard';

const ProductsList = () => {
  return (
    <div className='px-4 py-8 border-b-2'>
      {/* <h2 className="text-center font-bold pt-8 text-sage text-2xl lg:text-3xl">
        PRODUCTS
      </h2> */}
      <div className='grid grid-cols-2'>
        <FaFilter className='cursor-pointer bg-sage p-1 rounded-lg fill-current text-creame w-6 h-6'/>
        <input className='px-4' type="text" placeholder='Search'></input>
      </div>
      <ProductCard/>
    </div>
  );
}

export default ProductsList