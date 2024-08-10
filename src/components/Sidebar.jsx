import { IoPerson } from "react-icons/io5";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(DataContext);
  return (
    <aside
      className={`${
        sidebar ? "ml-0" : "-ml-[50rem]"
      } w-[100%] h-[100vh] fixed top-0 flex transition-all duration-500`}
    >
      {sidebar && (
        <div
          className="inset-0 fixed bg-black opacity-50"
          onClick={() => setSidebar(false)}
        ></div>
      )}
      <div className="bg-white w-[60%] sm:w-[40%]  duration-300 h-[100%] z-10">
        <div className="p-8 bg-red text-white flex items-center gap-4">
          <IoPerson className="text-2xl" />
          <h2 className="font-semibold text-xl">Test User</h2>
        </div>
        <div className="flex flex-col ml-8 mr-24 mt-4">
          <span className="p-3 my-2 hover:bg-lightGreen rounded-md cursor-pointer">
            Home
          </span>
          <span className="p-3 my-2 hover:bg-lightGreen rounded-md cursor-pointer">
            Products
          </span>
          <span className="p-3 my-2 hover:bg-lightGreen rounded-md cursor-pointer">
            Profile
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
