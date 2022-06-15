import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBook } from "../../context/booksContext";
import "./SingleBook.css"
const SingleBook = () => {
  const dispatch = useDispatch();
  let booksState = useSelector((state) => state.books);
  const { singleBook } = booksState;
  const location = useLocation();
  const id = location.pathname.split("/")[2];
const navigate = useNavigate()
  useEffect(() => {
    dispatch(getSingleBook(Number(id)));
  }, [id]);

  if(singleBook.length<=0){
    return (
          <div className="loading">
          <h2>Loading ...</h2>
        </div>)
  }

  return (
    <div className="singlebook__con">
      <button className="btn" onClick={()=>{navigate("/")}}>Go Back</button>
      {singleBook && (
        <section className="singlebook">
          <div className="singlebook__img__con">
            <img src={singleBook[0]?.img} alt="book" />
          </div>
          <div className="singlebook__details">
            <div className="singlebook__details__min__con">
              <h2 className="singlebook__title">{singleBook[0]?.title}</h2>
              <p className="singlebook__price">${singleBook[0]?.price}</p>
            </div>
            <p className="singlebook__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus odio sapiente voluptatem necessitatibus atque fugit
              praesentium dignissimos quo magnam. Corrupti dolore pariatur odit
              voluptas eveniet illum praesentium? Inventore, laudantium
              sapiente!
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleBook;
