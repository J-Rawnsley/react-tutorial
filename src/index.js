import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const topBooks = [
  {
    author: "Joe Pilkey",
    title: "Dog Man: Twenty Thousand Fleas Under the Sea",
    imgLink: "./images/dog-man-cover.jpg",
    imgDesc: "A book cover showing a cartoon dog riding on a submarine",
  },
  {
    author: "James Clear",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    imgLink: "./images/atomic-habits-cover.jpg",
    imgDesc:
      "Book cover with the title 'atomic habits' in orange on a yellow background",
  },
  {
    author: "Peter Attia MD, Bill Gifford",
    title: "Outlive: The Science and Art of Longevity",
    imgLink: "./images/outlive-cover.jpg",
    imgDesc: "Book cover with the book title on a multi-coloured background",
  },
];

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={topBooks[0].title}
        author={topBooks[0].author}
        imgLink={topBooks[0].imgLink}
        imgDesc={topBooks[0].imgDesc}
      />
      <Book
        title={topBooks[1].title}
        author={topBooks[1].author}
        imgLink={topBooks[1].imgLink}
        imgDesc={topBooks[1].imgDesc}
      />
      <Book
        title={topBooks[2].title}
        author={topBooks[2].author}
        imgLink={topBooks[2].imgLink}
        imgDesc={topBooks[2].imgDesc}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { imgLink, imgDesc, title, author } = props;
  return (
    <article className="book">
      <img src={imgLink} alt={imgDesc} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const testFunc = (arg1, arg2) => {
  console.log(`the first argument is ${arg1} and the second is ${arg2}.`);
};

testFunc("a banana", "a potato");

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement(React.createElement("h2", {}, "hello world"))
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
