import React, { useContext, useState } from "react";
import {
  IoHeartOutline,
  IoArrowBackOutline,
  IoBagCheckOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const MobileNavbar = () => {
  const [searchOff, setSearchOff] = useState(true);
  const { setSidebar } = useContext(DataContext);
  const mobileNavItems = [
    {
      route: "products",
      name: "Explore Products",
      icon: <MdOutlineExplore />,
    },
    {
      route: "wishlist",
      name: "Wishlist",
      icon: <IoHeartOutline />,
    },
    {
      route: "cart",
      name: "Cart",
      icon: <IoBagCheckOutline />,
    },
  ];
  const handleSearchBar = () => {
    setSearchOff(!searchOff);
  };

  return (
    <div>
      {searchOff ? (
        <nav className="flex bg-white px-2 py-3 justify-between shadow-md items-center">
          <div className="flex items-center cursor-pointer">
            <button
              onClick={() => setSidebar(true)}
              className="hover:bg-lightGreen rounded-full p-2 text-2xl"
            >
              <RiMenu2Fill />
            </button>
            <div>
              <Link to="/">
                <h1 className="text-[22px] font-semibold">
                  <span className="text-red">B</span>randname
                </h1>
              </Link>
            </div>
          </div>
          <div>
            <ul className="flex items-center gap-2 lg:gap-6">
              <li>
                <button
                  onClick={handleSearchBar}
                  className=" cursor-pointer flex items-center justify-center text-[18px] fill-current text-black w-10 h-10 rounded-full hover:bg-lightGreen"
                >
                  <IoSearchOutline />
                </button>
              </li>
              {mobileNavItems.map((items, i) => (
                <li key={i}>
                  <Link to={`/${items?.route}`}>
                    <div className="flex items-center justify-center text-[18px] fill-current text-black w-10 h-10 rounded-full hover:bg-lightGreen">
                      {items.icon}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="lg:hidden flex bg-white px-2 py-3 justify-between shadow-md items-center">
          <div className={`flex items-center gap-1 w-[100%]`}>
            <button
              onClick={handleSearchBar}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-lightGreen"
            >
              <IoArrowBackOutline />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-1 w-[80%] focus:outline-none border border-rose-100 focus:border focus:border-rose-300 rounded-full"
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-lightGreen">
              <IoSearchOutline />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileNavbar;
