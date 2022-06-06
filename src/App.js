import { useEffect } from "react";
import {  fetchJobs ,fetchCurrencies} from "./context/jobsContext";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  let jobsState = useSelector((state) => state.jobs);
  const {currencies } = jobsState;
  let dispatch = useDispatch();

    
   useEffect(() => {
     try {
       dispatch(fetchJobs());
       dispatch(fetchCurrencies());
       
       
     } catch (error) {
       console.log(error);
     }
     
    
   }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
