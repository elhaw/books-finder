import React, { useState } from "react";
import "./App.css";
import { FormatedText, SearchBar } from "./components";
import { BooksListContainer } from "./components/containers";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const getSearchQuery = (searchKeyword: string): void => {
    setSearchQuery(searchKeyword);
  };
  return (
    <div className="App">
      <div className="container">
        <FormatedText
          textSize="XL"
          Tag="h2"
          textColor="primary"
          textTransform="uppercase"
          textType="heading"
          text="book finder"
        />
        <SearchBar getSearchQuery={getSearchQuery} />
        <BooksListContainer searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;
