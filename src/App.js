import { useEffect } from "react";
import {  fetchJobs } from "./context/jobsContext";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  let dispatch = useDispatch();
  
    
   useEffect(() => {
     dispatch(fetchJobs());
   }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
