import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../db/categories";

const Categories = () => {
  return (
    <section className="mx-4 md:mx-6 mt-24">
      <h2 className="text-center tracking-wider font-medium text-xl lg:text-2xl">
        Featured Categories
      </h2>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:w-[80%] mx-auto lg:w-[70%] lg:gap-10 xl:w-1/2">
        {categories.map((category, i) => (
          <Link to={`/products/${category?.description}`} key={i}>
            <div className="rounded-xl w-[150px] h-[120px] md:w-[165px] md:h-[135px] lg:w-[190px] lg:h-[160px] relative transition-all shadow-md">
              <img className="w-full h-full rounded-xl" src={category.img} alt="Categories" />
              <div className="w-full h-full text-white bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-60 duration-500 tracking-wider rounded-xl absolute top-0 flex items-center text-lg justify-center">{category.categoryName}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
