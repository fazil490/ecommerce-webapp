import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../db/products";
import { FaRegStar } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
const SingleProduct = () => {
  const { product_id } = useParams();
  console.log(product_id);
  const selectedProduct = products?.find((prod) => prod?._id === product_id);

  const relatedProducts = products?.filter(
    (prod) =>
      prod.categoryName === selectedProduct?.categoryName &&
      prod?._id !== selectedProduct?._id
  );

  console.log(products?.find((prod) => prod?._id === product_id));
  return (
    <>
      <div className="my-12 md:my-20 md:flex md:w-3/4 xl:w-1/2 md:items-start md:gap-8 w-full mx-auto">
        <img
          className="mx-auto md:mx-0 w-[270px] h-[240px] lg:w-[370px] lg:h-full rounded-lg"
          src={selectedProduct?.img}
          alt="product-img"
        />

        <div className="mx-12 mt-6 md:mt-0 md:mx-0">
          <h3 className="font-medium lg:text-lg text-zinc-500">
            {selectedProduct?.brandName}
          </h3>
          <h3 className="font-bold text-xl lg:text-2xl text-sky-900">
            {selectedProduct?.productName}
          </h3>
          <div className="flex items-center my-2 gap-1">
            {[...Array(5)].map((_, i) => (
              <div className="text-red text-xl" key={i}>
                <FaRegStar />
              </div>
            ))}
            <span>({selectedProduct?.rating})</span>
          </div>
          <ul className="flex items-center text-center gap-4 w-fit mt-4 md:mt-6">
            {selectedProduct?.size?.map((size, i) => (
              <li
                className="w-7 h-7 lg:w-9 lg:h-9 flex items-center text-xs lg:text-sm justify-center rounded-lg border border-green hover:bg-lightGreen cursor-pointer"
                key={i}
              >
                {size}
              </li>
            ))}
          </ul>
          <div className="mt-4 md:mt-6 flex items-center gap-4">
            <p className="font-medium text-lg lg:text-xl text-sky-900">
              Quantity :
            </p>
            <div className="border border-red w-fit text-lg">
              <span className="px-2 hover:bg-red cursor-pointer border-r border-red">
                -
              </span>
              <span className="px-2">1</span>
              <span className="px-2 hover:bg-green cursor-pointer border-l border-red">
                +
              </span>
            </div>
          </div>
          <p className="font-bold text-lg lg:text-2xl mt-4 text-sky-900">
            {`₹ ` +
              Math.round(
                selectedProduct?.mrp -
                  (selectedProduct?.mrp * selectedProduct?.offer) / 100
              )}
          </p>
          <div className="flex gap-2 items-center mb-4">
            <p className="text-sm lg:text-base text-red-600 line-through text-red">
              {`₹ ` + selectedProduct?.mrp}
            </p>
            <p className="text-sm lg:text-base text-green font-semibold">
              {selectedProduct?.offer + `% off`}
            </p>
          </div>
          <div>
            <button className="text-xs lg:text-sm px-4 mr-4 rounded-lg hover:bg-red hover:text-white text-red py-2 border border-red">
              Add to Cart
            </button>
            <button className="text-xs lg:text-sm px-4 py-2 rounded-lg hover:bg-green hover:text-white text-green border border-green">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="my-6 md:w-3/4 xl:w-1/2 md:mx-auto">
        <h3 className="text-center md:text-xl mb-6 sm:text-left">
          Related Products
        </h3>
        <div className="flex flex-wrap justify-center md:justify-start items-start gap-8">
          {relatedProducts.slice(0, 3)?.map((prod, i) => (
            <ProductCard key={i} product={prod} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
