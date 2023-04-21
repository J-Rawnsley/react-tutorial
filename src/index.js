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

function EventExamples() {
  const handleFormInput = (e) => {
    console.log("changed");
  };
  const handleButtonClick = (e) => {
    alert(e.timeStamp)
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log("form submitted");
    console.log(e.target.inputBox.value);
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
      <h1>My Form</h1>
      <input
        type="text"
        placeholder="please don't type here."
        name="inputBox"
        onChange={handleFormInput}
        style={{ margin: "1rem 0" }}
      ></input>
      </form>
      <button onClick = {handleButtonClick}>Don't Click the Button!</button>
      </section>
  );
}

function BookFormat(props) {
  const { imgLink, imgDesc, title, author, children } = props;
  return (
    <article className="book">
      <img src={imgLink} alt={imgDesc} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
}

const dataMap = (data) =>
  data.map((book) => {
    return <BookFormat {...book} key={book.id} />;
  });

function CreateBookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {dataMap(bookData)}
    </section>
  );
}

console.log(dataMap(bookData));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<CreateBookList />);
