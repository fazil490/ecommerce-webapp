import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../db/categories";

const Categories = () => {
  return (
    <section className="mx-4 md:mx-6 mt-24">
      <h2 className="text-center tracking-wider font-medium text-xl lg:text-2xl">
        Featured Categories
      </h2>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:w-[80%] mx-auto lg:w-[80%] lg:gap-10 xl:w-[60%]">
        {categories.map((category, i) => (
          <Link to={`/products?category=${category?.description}`} key={i}>
            <div className="rounded-xl w-[150px] h-[135px] md:w-[175px] md:h-[150px] lg:w-[200px] lg:h-[170px] relative transition-all shadow-md">
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
