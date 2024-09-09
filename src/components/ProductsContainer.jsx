import { AiOutlineFilter } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import ProductCard from "./ProductCard";
import FilterSideBar from "./FilterSideBar";
import { products } from "../db/products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductContainer = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filtered = products.filter((item) =>
        item?.categoryName.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products)
    }
  }, [category]);

  return (
    <div className="flex border-b-2">
      <aside className="hidden bg-white w-[20%] sticky top-0 left-0 mx-6 my-8 lg:flex flex-col gap-4 min-w-[18rem] h-[100%] shadow-md">
        <FilterSideBar />
      </aside>
      <div className="px-4 xl:px-12 md:w-[80%] mx-auto py-8">
        {/* <div className=" mx-auto px-4 lg:px-12 py-8 border-b-2"> */}
        <div className="md:px-4 flex justify-between items-center">
          <h2 className="text-xl text-sage border-b-2 border-sage">
            Showing {filteredProducts?.length} products
          </h2>
          <div className="lg:hidden flex items-center gap-2">
            <span className="text-xl p-1 rounded-md bg-zinc-200">
              <AiOutlineFilter />
            </span>
            <span className="text-xl p-1 rounded-md bg-zinc-200">
              <BiSort />
            </span>
          </div>
          <div className="hidden xl:flex">
            <select
              name=""
              id=""
              className="p-1 rounded-md focus:outline-none border-2 border-green-600"
            >
              <option value="">Default</option>
              <option value="">Price Low to High</option>
              <option value="">Price High to Low</option>
            </select>
          </div>
        </div>

        <div className="my-10 flex gap-8 flex-wrap justify-center items-center w-[100%]">
          {filteredProducts.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductContainer;
