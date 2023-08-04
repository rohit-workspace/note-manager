import SearchBar from "./searchbar/SearchBar";

function Header() {
    return (
      
      <div className="header">
        <h1 className="notes__title">Note:</h1>
        <SearchBar/>
    {/* <div><input type="text" placeholder="Search"></input></div>   */}
        
        
      </div>
      
    );
  }
  
  export default Header;
  