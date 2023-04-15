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
  console.log(props);
  const { imgLink, imgDesc, title, author, children } = props;
  return (
    <article className="book">
      <img src={imgLink} alt={imgDesc} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const dataMap = (data) => data.map((book) => {
  let { title, author, imgLink, imgDesc, id } = book;
  return (
    <BookFormat
      title={title}
      author={author}
      imgLink={imgLink}
      imgDesc={imgDesc}
      key={id}
    />
  );
});

function CreateBookList() {
  return (
    <section className="booklist">
      {dataMap(bookData)}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CreateBookList />);
