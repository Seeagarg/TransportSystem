import React from "react";
import Header from "../../Components/Header";
// import Carousel from 'react-bootstrap/Carousel';
//
import { useEffect, useState } from "react";
import FormCar from "./FormCar";
import Lil_intro from "./Lil_intro";
import Footer from "../../Components/Footer";
import Carousel_Component from "../../Components/Carousel_Component";
// import Layout from '../Layout';

function Home_Page() {
  const slides = [
  
    { src: "https://source.unsplash.com/random/900×700/?car", },
    { src:"https://source.unsplash.com/random/900×700/?tikki",},
    {src:"https://source.unsplash.com/random/900×700/?tikki"},
    {src:"https://source.unsplash.com/random/900×700/?tikki"},
    {src:"https://source.unsplash.com/random/900×700/?tikki"},
 
  
    
];
  return (
    <>
      <div>
        <Header title={"Street Cab"}/>
        <Carousel_Component/>
        <Lil_intro/>
        <Footer/>
      </div>
    </>
  );
}

export default Home_Page;
