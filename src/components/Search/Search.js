import React from "react";

export default function Search({handleSearch}) {
  return (
    <div>
      <input
      onChange={handleSearch}
        id="search"
        name="search"
        placeholder="Search Products"
        style={{ width: "50%" }}
      />
    </div>
  );
}