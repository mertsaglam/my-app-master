import React from "react";
import ReactDOM from "react-dom/client";
//import css file
import "./index.css";

const author = "Drew Gilpin Faust";
const img = "https://images-na.ssl-images-amazon.com/images/I/81LGc69gzQL._AC_UL900_SR900,600_.jpg";
const title = "Necessary Trouble: Growing Up at Midcentury";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81LGc69gzQL._AC_UL900_SR900,600_.jpg",
  title: "Necessary Trouble: Growing Up at Midcentury",
  author: "Drew Gilpin Faust"
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81u5A4IvUfL._AC_UL900_SR900,600_.jpg",
  title:
    "Tasting History: Explore the Past through 4,000 Years of Recipes (A Cookbook)",
  author: "Max Miller, Ann Volkwein",
};
const Booklist = () => {
  return (
    <section className="booklist">
      <Book img={firstBook.img} author={firstBook.author} title={firstBook.title} />
      <Book img={secondBook.img} author={secondBook.author} title={secondBook.title} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
