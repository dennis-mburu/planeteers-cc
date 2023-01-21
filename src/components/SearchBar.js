import React from "react";

function SearchBar({ onSearchChange }) {
  return (
    <div className="search">
      <label>Search</label>
      <input
        type="text"
        placeholder="Who would you like to Search For?"
        style={{ display: "block", margin: "auto", width: "100%" }}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <label>Sort</label>
      <input type="checkbox" style={{marginTop: "1rem"}}/> 
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
