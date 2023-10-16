import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../db/categories";

const Categories = () => {
  return (
    <section className="pb-8 bg-creame border-b-2">
      <h2 className="text-center font-bold p-8 text-sage text-2xl lg:text-3xl">
        CATEGORIES
      </h2>
      <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {categories.map((category) => (
          <Link to={`/products?categorires=${category?.categoryName}`}>
            <div key={category?._id} className="rounded-lg shadow-md my-4 max-w-[200px] md:max-w-[250px] lg:max-w-[300px] hover:shadow-2xl">
              <img
                className="w-[100%] rounded-t-lg"
                src={category?.img}
                alt=""
              />
              <h3 className="rounded-b-lg p-4 text-center lg:text-xl font-bold bg-sage text-creame">
                {category?.categoryName}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
