import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <>
      <Heading/>
      <Content/>
    </>
  );



}

const Heading = () => <h2>A Very Important Page</h2>
const Content = () => <p>This is a very important sentence contained within the page</p>

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement(React.createElement("h2", {}, "hello world"))
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
