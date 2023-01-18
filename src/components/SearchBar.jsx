import React from "react";
import useSearch from "../store/useSearch.jsx";

const SearchBar = () => {
  const [inputValue, setInputValue] = useSearch((state) => [
    state.inputValue,
    state.setInputValue,
  ]);
  return (
    <div className="mb-3">
      <input
        className="w-full from-neutral-900 outline-none p-2 px-4 rounded-3xl"
        type="search"
        placeholder="Search in notes..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
