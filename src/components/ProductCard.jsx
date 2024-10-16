import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/products/${product?.categoryName.toLowerCase()}/${product?._id}`);
  };
  return (
    <div
      key={product?._id}
      className="relative w-[230px] h-[300px] bg-white rounded-lg shadow-md cursor-pointer transition-transform hover:-translate-y-[6px] duration-300"
    >
      <img
        onClick={() => {
          handleCardClick();
        }}
        className="w-[100%] h-[170px] border-b-2 border-creame rounded-t-lg"
        src={product?.img}
        alt=""
      />
      <button
        onClick={() => {
          console.log("liked");
        }}
        className="absolute p-1 z-10 top-4 right-4"
      >
        <FiHeart className="" />
      </button>
      {/* {
        item.bestSelling ? <div className="bg-green text-[13px] px-2 w-fit absolute top-4 rounded-r-md text-white">
          Best Seller
        </div> : null
      } */}
      <div
        onClick={() => {
          console.log("card clicked");
        }}
        className="flex flex-col gap-[4px] p-4"
      >
        <h2 className="font-medium text-gray-500 text-[15px]">
          {product?.brandName}
        </h2>
        <h2 className="font-medium text-gray-800 text-[17px] tracking-tighter">
          {product?.productName}
        </h2>
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-[18px] text-green">
            {`₹ ` +
              Math.round(product?.mrp - (product?.mrp * product?.offer) / 100)}
          </p>
          <p className="text-sm text-red-600 line-through text-red">
            {`₹ ` + product?.mrp}
          </p>
          <p className="text-sm text-green font-semibold">
            {product?.offer + `% off`}
          </p>
        </div>
        {/* <div className="flex items-center gap-2">
          <div className="text-gray-500 text-[17px]">Size :</div>
          {item.size.map((size, i) => (
            <span
              className="px-2 rounded-md cursor-pointer border-[1px] border-gray-200"
              key={i}
            >
              {size}
            </span>
          ))}
        </div> */}
        {/* <div className=" rounded-md mt-2 w-full mx-auto flex gap-2 py-1 border-[1px] border-green-600 justify-center items-center cursor-pointer">
          <button>Add to cart</button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
