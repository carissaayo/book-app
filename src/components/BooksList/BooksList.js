import { useSelector } from "react-redux";
import Book from "../Book/Book";
import "./BooksList.css";
const BooksList = () => {
  let jobsState = useSelector((state) => state.books);
  const { data } = jobsState;
  console.log(data);
  return (
    <div className="bookslist">
      {data &&
        data.map((item) => {
          return (
            
              <Book item={item && item} key={item.id} />
         
          );
        })}
    </div>
  );
};

export default BooksList;
