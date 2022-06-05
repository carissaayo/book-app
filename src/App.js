import { useEffect } from "react";
import Container from "./components/Container/Container";
import Sidebar from "./components/Sidebar/Sidebar";
import { fetchGiphy } from "./context/giphyContext";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";

function App() {
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
