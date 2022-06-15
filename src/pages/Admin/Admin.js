import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {deleteFromList} from "../../context/booksContext";

import "./Admin.css"

const Admin = () => {
  const navigate = useNavigate()
  let booksState = useSelector((state) => state.books);
const dispatch = useDispatch()
  const { data } = booksState;
  return (
    <div className="admin">
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
      <div className="add__book__con">
        <h2>Manage Books</h2>
        <button
          onClick={() => {
            navigate("/add-book");
          }}
        >
          Add new Book
        </button>
      </div>
      <section>
        {data &&
          data.map((item) => (
            <div className="admin__con" key={item.id}>
              <div className="admin__img__con">
                <img src={item?.img} alt="book" />
              </div>
              <div className="admin__title">
                <p>{item?.title}</p>
              </div>
              <div className="admin__price__con">
                <p>{item?.price}</p>
              </div>
              <div className="admin__btn__con">
                <button>
                  <Link to={`/books/${item.id}`}>View</Link>
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteFromList(item.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default Admin