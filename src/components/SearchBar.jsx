import React from "react";

const SearchBar = ({ value, filterNotes }) => {
  return (
    <div className="mb-3">
      <input
        className="w-full outline-none p-2 px-4 rounded-3xl"
        type="search"
        placeholder="Search in notes..."
        value={value}
        onChange={(e) => filterNotes(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;
