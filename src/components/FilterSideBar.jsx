import React from "react";

const FilterSideBar = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Filters</h2>
        <button className="hover:underline">Clear</button>
      </div>
      <div>
      <input className="px-4" type="text" placeholder="Search" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">Price</h3>
        <div className="flex gap-16 pt-4">
          <p>1000</p>
          <p>1500</p>
          <p>2000</p>
        </div>
        <div>
          <input
            className="w-[100%]"
            type="range"
            min="1000"
            max="4000"
            step="200"
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Sort by</h3>
        <div className="grid grid-cols-1 gap-2 px-2">
          <label>
            <input type="radio" name="sort" />
            <span>Price - High to Low</span>
          </label>
          <label>
            <input type="radio" name="sort" />
            <span>Price - Low to High</span>
          </label>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Rating</h3>
        <div className="grid grid-cols-1 gap-2 px-2">
          <label>
            <input type="radio" name="rating" value="4" />
            <span>4 Stars and above</span>
          </label>
          <label>
            <input type="radio" name="rating" value="3" />
            <span>3 Stars and above</span>
          </label>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Category</h3>
        <div className="grid grid-cols-1 gap-2 px-2">
          <label>
            <input type="checkbox" value="FORMALS" />
            <span>Formals</span>
          </label>
          <label>
            <input type="checkbox" value="SNEAKERS" />
            <span>Sneakers</span>
          </label>
          <label>
            <input type="checkbox" value="SPORTS" />
            <span>Sports</span>
          </label>
          <label>
            <input type="checkbox" value="CASUALS" />
            <span>Casuals</span>
          </label>
          <label>
            <input type="checkbox" value="BOOTS" />
            <span>Boots</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterSideBar;
