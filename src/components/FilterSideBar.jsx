import { Checkbox } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const filterOptions = [
  {
    name: "Categories",
    items: [
      "Formals",
      "Casuals",
      "Loafers",
      "Sneakers",
      "Sport Shoes",
      "Boots",
    ],
  },
  {
    name: "Brand",
    items: ["Woodland", "Bata", "Abros"],
  },
  {
    name: "Size",
    items: ["7", "8", "9", "10"],
  },
];

const FilterSideBar = () => {
  const [openAccordian, setOpenAccordian] = useState({});
  const handleAccordian = (name) => {
    setOpenAccordian((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-zinc-100 p-5">
        <h2 className="text-base font-semibold">FILTERS</h2>
        <button className="text-sm font-medium">CLEAR ALL</button>
      </div>
      {filterOptions.map((item, i) => (
        <div key={i} className="border-b-2 border-zinc-100 px-5 pb-4">
          <div
            onClick={() => handleAccordian(item.name)}
            className="flex items-center justify-between text-sm font-semibold cursor-pointer"
          >
            {item.name.toUpperCase()}

            <span
              className={`mr-2 transition-transform duration-300 ${
                openAccordian[item.name] ? "" : "rotate-180"
              }`}
            >
              <FaChevronDown />
            </span>
          </div>
          {openAccordian[item.name] ? (
            <ul className="text-sm mt-2 font-medium flex flex-col">
              {item.items.map((item, i) => (
                <li key={i}>
                  <span>
                    <Checkbox size="small" />
                  </span>{" "}
                  {item}{" "}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default FilterSideBar;
