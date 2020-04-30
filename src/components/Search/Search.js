
import React from 'react'

export default function Search({handleSearchItems}) {
  return (
      <div>
        <input
          onChange={handleSearchItems}
          id="search"
          name="search"
          placeholder="Search Products"
          style={{ width: "50%" }}
        />
      </div>
  )
}

