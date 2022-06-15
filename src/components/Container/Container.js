import BooksList from "../BooksList/BooksList";
import "./Container.css";
import { useSelector } from "react-redux";
const Container = () => {
  let booksState = useSelector((state) => state.books);
  const { data } = booksState;

  return (
    <div className="container">
      <h1>Top Selling Books</h1>

      {data.length > 0 ? (
        <BooksList />
      ) : (
        <div className="loading">
          <h2>Loading ...</h2>
        </div>
      )}
    </div>
  );
};

export default Container;
