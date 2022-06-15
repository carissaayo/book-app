import {useState} from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleNewBook } from "../../context/booksContext";

import "./AddBook.css";
const AddBook = () => {
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate()
    const handleSubmit = e=>{
        e.preventDefault();
        const bookAdded = {
            price,
            title,
            imgURL,
            desc,
            id:new Date().getTime()
        };
        
      
        dispatch(handleNewBook(bookAdded))
                

       
    }
  return (
    <div className="add__book">
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
      <h2>Add A New Book</h2>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="img__con">
            <label htmlFor="img">Image Url:</label>
            <input
              value={imgURL}
              onChange={(e) => setImgURL(e.target.value)}
              type="text"
              placeholder="https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL127_SR127,127_.jpg"
            />
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="desc">Description:</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              placeholder="$10.0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="btn__con">
            <button>Add Book</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBook;
