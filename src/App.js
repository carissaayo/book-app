import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleBook from "./pages/SingleBook/SingleBook";

import "./App.css";
import dummyData from "./data/dummyData"
import Admin from "./pages/Admin/Admin";
import AddBook from "./pages/AddBook/AddBook";
function App() {
  let booksState = useSelector((state) => state.books);
  // const { } = booksState;
  let dispatch = useDispatch();
  

    
   useEffect(() => {
    localStorage.setItem("data",JSON.stringify(dummyData))
   }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
