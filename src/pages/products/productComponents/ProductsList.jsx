import React from "react";
import { FaFilter } from "react-icons/fa";
import Card from "./Card";
import FilterSideBar from "./FilterSideBar";

const ProductsList = () => {
  return (
    <div className="flex justify-between border-b-2">
      <div className="hidden xl:inline-block w-[20%] ">
        <FilterSideBar />
      </div>
      <div className="w-[80%] mx-auto py-8">
        {/* <div className=" mx-auto px-4 lg:px-12 py-8 border-b-2"> */}
          <div className="grid grid-cols-2 lg:px-8">
            <FaFilter className="cursor-pointer bg-sage p-1 rounded-lg fill-current text-creame w-6 h-6 xl:hidden" />
            <input className="px-4" type="text" placeholder="Search"></input>
          </div>

          <Card />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductsList;
