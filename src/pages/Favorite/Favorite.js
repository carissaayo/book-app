import React from 'react'
import Container from "../../components/Container/Container";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Favorite.css"
const Favorite = () => {
  return (
    <div className="favorite">
      <Sidebar />
      <Container />
    </div>
  );
}

export default Favorite