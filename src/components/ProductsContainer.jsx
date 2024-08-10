import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import ProductCard from "./ProductCard";
import FilterSideBar from "./FilterSideBar";
import { products } from "../db/products";

const ProductContainer = () => {
  return (
    <div className="flex gap-8 justify-between border-b-2">
      <aside className="hidden w-[20%] bg-sage text-creame p-8 xl:flex flex-col gap-4 fixed left-0 min-w-[18rem] h-[100%]">
        <FilterSideBar />
      </aside>
      <div className="w-[80%] mx-auto py-8 xl:ml-[19rem]">
        {/* <div className=" mx-auto px-4 lg:px-12 py-8 border-b-2"> */}
        <span className="cursor-pointer text-sage flex justify-end gap-2 p-4 xl:hidden">
          Show Filter
          <BsFilterLeft className="w-6 h-6 " />
        </span>
        <div className="md:px-4 w-fit">
          <h2 className="text-2xl text-sage border-b-2 border-sage">
            Showing {products.length} products
          </h2>
        </div>

        <div className="my-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center w-[100%]">
          {products.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductContainer;
