import React from 'react'
import Container from "../../components/Container/Container";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";

import "./Home.css"
const Home = () => {
let jobsState = useSelector((state) => state.jobs);
 
const { error, pending, data } = jobsState;
 
  return (
    <>
    <div className="home">
     {data&& (
     <>
     <Sidebar />
     
      <Container />
      </>)}
    </div>
    </>
  );
}

export default Home