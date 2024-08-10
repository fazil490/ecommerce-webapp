import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-creame text-sa
    ge">
      <div className="px-4 lg:px-16 py-8 md:flex justify-between items-start border-b-2">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold mb-8 md:mb-0">BRANDNAME</h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-bold">QUICK LINKS</h2>
            <ul className="py-4">
              <Link to="/products" className="hover:underline">
                {" "}
                <li className="py-2">Products</li>
              </Link>
              <Link to="/cart" className="hover:underline">
                {" "}
                <li className="py-2">Cart</li>
              </Link>
              <Link to="/wishlist" className="hover:underline">
                {" "}
                <li className="py-2">Wishlist</li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">LEGAL</h2>
            <ul className="py-4">
              <Link className="hover:underline">
                <li className="py-2">Privacy Policy</li>
              </Link>
              <Link className="hover:underline">
                <li className="py-2">Terms & Conditions</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-16 py-8 md:flex gap-4 justify-center">
        <p className="pb-4">© 2023 Bottom. All Rights Reserved.</p>
        <div className="flex gap-8">
          <div>
            <a href="https://github.com/fazil490/ecommerce-webapp">
              <FaGithub className="fill-current text-sage w-5 h-5" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/mohamed-ismail-fazil-kj">
              <FaLinkedinIn className="fill-current text-sage w-5 h-5" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/fazil490">
              <FaTwitter className="fill-current text-sage w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
