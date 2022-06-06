import React from 'react'
import FavContainer from "../../components/Container/FavContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Favorite.css"
const Favorite = () => {

  return (
    <div className="favorite">
      <Sidebar />
      <FavContainer/>
    </div>
  );
}

export default Favorite