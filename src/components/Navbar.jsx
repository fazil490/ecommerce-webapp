import { Link } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import {
  IoHeartOutline,
  IoBagCheckOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";

const navItems = [
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
  {
    route: "profile",
    name: "Profile",
    icon: <IoPersonOutline />,
  },
];
const Navbar = () => {
  return (
    <nav className="flex bg-white px-4 py-3 justify-between shadow-md items-center">
      <div className="">
        <Link to="/">
          <h1 className="text-sage text-2xl  font-semibold">
            <span className="text-red">B</span>randname
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1 w-[25vw] focus:outline-none border border-rose-100 focus:border focus:border-rose-300 rounded-full"
        />
        <button className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-lightGreen">
          <IoSearchOutline />
        </button>
      </div>
      <div className="inline-block">
        <ul className="flex items-center gap-4 lg:gap-5">
          {navItems.map((items, i) => (
            <li key={i} className="hover:bg-lightGreen rounded-full">
              <Link to={`/${items?.route}`}>
                <div className="flex items-center justify-center text-2xl w-10 h-10 rounded-full hover:bg-lightGreen">
                  {items.icon}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
