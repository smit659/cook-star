import React from "react";

const SearchBar = (props) => {
  return (
      <form className="main-search-bar" onSubmit={props.submits}>
        <div className="search-block">
          <div className="partition"></div>
          <label for="search">
            <img
              src="https://img.icons8.com/material-outlined/2x/search.png"
              alt=""
              className="icon"
            />
          </label>
          <input
          onChange={props.meth}
            type="search"
            name="search"
            id="search"
            placeholder="Search by recipe , ingredients , dish..."
            onchange={props.meth}
            value={props.name}
            className="main-searchbar-input"
          />
          <input type="submit" id="submit"  />
        </div>
      </form>
  );
};
export default SearchBar;
