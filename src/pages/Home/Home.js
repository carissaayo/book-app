import React from 'react'
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";

import "./Home.css"
import Footer from '../../components/Footer/Footer';
const Home = () => {
let booksState = useSelector((state) => state.books);
 
const {  data } = booksState;
 
  return (
    <>
      <div className="home">
        {data && (
          <>
            <Container />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default Home