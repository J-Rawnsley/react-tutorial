import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { bookData } from "./books";
import BookComponent from "./bookComponent";

function CreateBookList() {
  const dataMap = (data) =>
    data.map((book, rank) => {
      return <BookComponent {...book} rank={rank + 1} key={book.id} />;
    });
  return (
    <>
      <h1 className="header">Best Sellers in Books</h1>
      <section className="booklist">{dataMap(bookData)}</section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CreateBookList />);
