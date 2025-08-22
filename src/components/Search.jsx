
import React from "react";

const Search = ({ city, setCity, onSearch }) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter your City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded border border-gray-300 flex-1"
      />
      <button
        onClick={onSearch}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Get Report
      </button>
    </div>
  );
};

export default Search;
