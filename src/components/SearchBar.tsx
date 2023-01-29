import React from "react";
import { useSearch } from "../store/useSearch";

const SearchBar = () => {
  const {inputValue, setInputValue} = useSearch();
  return (
    <div className="mb-8">
      <input
        className="w-full from-neutral-900 outline-none py-3 px-5 rounded-3xl"
        type="search"
        placeholder="Search in notes..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
