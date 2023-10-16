import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex bg-creame px-4 lg:px-16 py-4 justify-between shadow-md items-center">
      <div className="cursor-pointer lg:hidden">
        <div className="p-[0.1rem]  bg-sage min-w-[1.2rem]"></div>
        <div className="p-[0.1rem] my-1 bg-sage min-w-[1.2rem]"></div>
        <div className="p-[0.1rem]  bg-sage min-w-[1.2rem]"></div>
      </div>
      <div className="cursor-pointer">
        <Link to="/">
          <h1 className="text-sage text-2xl  font-bold">BRANDNAME</h1>
        </Link>
      </div>
      <div className="hidden lg:inline-block">
        <ul className="flex gap-4 lg:gap-8">
          <Link to="/">
            <li className="font-semibold text-gray-500 hover:text-sage">
              Home
            </li>
          </Link>
          <Link to="/products">
            <li className="font-semibold text-gray-500 hover:text-sage">
              Products
            </li>
          </Link>
          <Link to="/cart">
            <li className="font-semibold text-gray-500 hover:text-sage">
              Cart
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4 lg:gap-8">
        <Link to="/products">
          <div>
            <FaShoppingBag className="fill-current text-sage w-5 h-5 lg:w-6 lg:h-6" />
          </div>
        </Link>
        <Link to="/wishlist">
          <div>
            <FaHeart className="fill-current text-sage w-5 h-5 lg:w-6 lg:h-6" />
          </div>
        </Link>
        <Link to="/cart">
          <div>
            <FaShoppingCart className="fill-current text-sage w-5 h-5 lg:w-6 lg:h-6" />
          </div>
        </Link>
        <Link to="/profile">
          <div>
            <FaUserAlt className="fill-current text-sage w-5 h-5 lg:w-6 lg:h-6" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
