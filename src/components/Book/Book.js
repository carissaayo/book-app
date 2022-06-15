import { useEffect } from "react";
import "./Book.css";
// import { addToFavorite,removeFromFavorite } from "../../context/booksContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Book = ({ item }) => {
  const { id, title, price, img } = item;
  const [isLiked, setIsLiked] = useState(false);
  let dispatch = useDispatch();
  let jobsState = useSelector((state) => state.books);
  // const { } = jobsState;
  const handleClick= ()=>{
    
  }
  return (
    <Link to={`/books/${id}`}>
      <section className="book">
        <div className="book__img__con">
          <img src={img || ""} alt="book" className="book__img" />
        </div>
        <div className="book__details">
          <div>
            <h4 className="book__name">{title}</h4>
            <p className="book__price">{price}</p>
          </div>
          {/* <div className="book__button__con">
            <button type="button" className="book__button" >
              View
            </button>
          </div> */}
        </div>
      </section>
    </Link>
  );
};

export default Book;
