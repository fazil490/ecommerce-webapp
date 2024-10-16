import { products } from "../db/products";
import ProductCard from "./ProductCard";
const BestSelling = () => {
  const bestSellingProducts = products.filter(
    (product) => product.bestSelling === true
  );

  return (
    <div className="mx-4 my-6 md:mx-6 mt-24">
      <h2 className="text-center tracking-wider font-medium text-xl lg:text-2xl">
        Best Sellers
      </h2>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:w-[80%] mx-auto lg:w-full lg:gap-10 xl:w-[65%]">
        {bestSellingProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
