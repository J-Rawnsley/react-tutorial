import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const bookData = [
  {
    author: "Joe Pilkey",
    title: "Dog Man: Twenty Thousand Fleas Under the Sea",
    imgLink: "./images/dog-man-cover.jpg",
    imgDesc: "A book cover showing a cartoon dog riding on a submarine",
    id: 1,
  },
  {
    author: "James Clear",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    imgLink: "./images/atomic-habits-cover.jpg",
    imgDesc:
      "Book cover with the title 'atomic habits' in orange on a yellow background",
    id: 2,
  },
  {
    author: "Peter Attia MD, Bill Gifford",
    title: "Outlive: The Science and Art of Longevity",
    imgLink: "./images/outlive-cover.jpg",
    imgDesc: "Book cover with the book title on a multi-coloured background",
    id: 3,
  },
];

function BookFormat(props) {
  const { imgLink, imgDesc, title, author, getBook, children, id } = props;
  const logTitle = () => console.log(title);
  return (
    <article className="book">
      <img src={imgLink} alt={imgDesc} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>Log this book</button>
      {children}
    </article>
  );
}

function CreateBookList() {
  const getBook = (id) => console.log(bookData.find((book) => book.id === id));
  const dataMap = (data) =>
    data.map((book) => {
      return <BookFormat {...book} key={book.id} getBook={getBook} />;
    });
  return <section className="booklist">{dataMap(bookData)}</section>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CreateBookList />);
