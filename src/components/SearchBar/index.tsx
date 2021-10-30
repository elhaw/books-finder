import React, { useState, FC } from "react";
import { ISearchBar } from "./ISearchBar";
import "./styles.css";
const SearchBar: FC<ISearchBar.IProps> = ({getSearchQuery}) => {
  const [searchKeyword, setSearchKeyWord] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchQuery = e.currentTarget.value;
    setSearchKeyWord(searchQuery);
  };

  const onSearchButtonClick = () => {
    getSearchQuery(searchKeyword);
  };

  return (
    <div className="search_bar_wrapper">
      <input
        className="search_input"
        type="text"
        placeholder="Search"
        value={searchKeyword}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onSearchButtonClick();
        }}
        className="search_btn"
        type="submit"
      >
        {" "}
        search{" "}
      </button>
    </div>
  );
};

export default SearchBar;
