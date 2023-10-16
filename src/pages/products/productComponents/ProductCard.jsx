import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { products } from "../../../db/products";

const ProductCard = () => {

  return (
    <div className="my-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-[100%]">
      {products.map((product) => (
        <div key={product?._id} className="w-[250px] rounded-lg shadow-md hover:shadow-2xl">
        <img
          className="w-[100%] h-[200px] border-b-2 border-creame rounded-t-lg"
          src={product?.img}
          alt=""
        />
        <div className="bg-white p-4 rounded-b-lg">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold ">{product?.productName}</h2>
            <button>
              <FaHeart className="fill-current text-sage" />
            </button>
          </div>
          <div className="flex gap-2 ">
            <p className="text-sm text-red line-through">{`₹ ` + product?.mrp}</p>
            <p className="text-sm text-green-600">{product?.offer + `% off`}</p>
          </div>
          <p className="font-semibold">{`₹ ` + Math.round(product?.mrp-(product?.mrp*product?.offer)/100)}</p>
          <div className="bg-sage text-creame rounded-lg my-2 py-2 w-[100%] mx-auto flex gap-2 justify-center items-center cursor-pointer">
            <FaShoppingCart />
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default ProductCard;
