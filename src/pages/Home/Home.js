import React from 'react'
import Container from "../../components/Container/Container";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css"
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Container />
    </div>
  );
}

export default Home