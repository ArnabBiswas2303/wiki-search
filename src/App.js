// Components & React Hooks Imports
import Search from "./Components/Search/Search";
import Feed from "./Components/Feed/Feed";
import Mario from "./Components/Mario/Mario";
import { useState } from "react";

// Styles Imports
import './App.css';

export default function App() {

  const [searchTerm, setSearchTerm] = useState(null);  
  
  let handleSearchData = (data) => {
    console.log("THIS IS ENTERING ", data);
    setSearchTerm(data);
  }

  return (
    <div className="App">
      <Search onSearchChange={handleSearchData} hello="hello"/>
      {searchTerm === null ? <Mario/> : <Feed wikidata={searchTerm}/> }
    </div>
  );
}