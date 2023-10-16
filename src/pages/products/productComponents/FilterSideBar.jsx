import React from "react";

const FilterSideBar = () => {
  return (
    <aside className="hidden xl:inline-block m-8">
      <div className="flex justify-between">
        <h2>Filters</h2>
        <button>Clear</button>
      </div>
      <div>
        <h3>Price</h3>
        <div className="flex gap-4">
          <p>1000</p>
          <p>1500</p>
          <p>2000</p>
        </div>
        <div>
          <input type="range" min="1000" max="4000" step="200" />
        </div>
      </div>
      <div>
        <h3>Sort by</h3>
        <div>
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
        <h3>Rating</h3>
        <div>
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
        <h3>Category</h3>
        <div>
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
    </aside>
  );
};

export default FilterSideBar;
