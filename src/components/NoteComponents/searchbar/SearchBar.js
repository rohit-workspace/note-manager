import React, { useState } from "react";
import './SearchBar.css';
const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

const handleInputChange= (event)=>{
setSearchQuery(event.target.value);
onSearch(event.target.value);
console.log("===>",event.target.value);
};
 
return(
    <div className="search"> 
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
}
export default SearchBar;