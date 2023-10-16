import React from 'react'

const ProductCard = () => {
  return (
    <div className="my-12 grid grid-cols-1 place-items-center">
      <div className="bg-white w-[250px] rounded-lg">
        <img
          className="w-[100%] h-[200px] border-b-2 rounded-t-lg"
          src="https://res.cloudinary.com/dewisedrc/image/upload/v1697342435/woodland-casual-blue_w864uz.webp"
          alt=""
        />
        <div className='px-2 py-8'>
          <h2 className='text-lg font-semibold'>WOODLAND GREY SNEAKERS</h2>
          <div className='flex gap-2 '>

          <p className='text-red line-through'>₹ 2999</p>
          <p className='text-green-600'>50% off</p>
          </div>
          <p className='font-semibold'>₹ 1999</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard