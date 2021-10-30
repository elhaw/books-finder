import React from "react";
import "./App.css";
import { FormatedText } from "./components";
import { BooksListContainer } from "./components/containers";

function App() {
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
        <BooksListContainer />
      </div>
    </div>
  );
}

export default App;
