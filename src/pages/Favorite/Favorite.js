import React from 'react'
import Container from "../../components/Container/Container";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";

import "./Favorite.css"
const Favorite = () => {
let favorites = useSelector((state) => state.favoriteList);

  return (
    <div className="favorite">
      <Sidebar />
      <Container jobsState={favorites}/>
    </div>
  );
}

export default Favorite