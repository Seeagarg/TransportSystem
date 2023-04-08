import React from 'react';
// import FormCar from "./FormCar";

import Carousel from 'react-bootstrap/Carousel';
import FormCar from '../Screens/Home/FormCar';
import Lil_intro from '../Screens/Home/Lil_intro';

function Carousel_Component() {
  const slides = [
  
    { src: "https://source.unsplash.com/random/900×700/?car", },
    { src:"https://source.unsplash.com/random/900×700/?bike",},
    {src:"https://source.unsplash.com/random/900×700/?ambulance"},
    {src:"https://source.unsplash.com/random/900×700/?auto"}, 
    {src:"https://source.unsplash.com/random/900×700/?temp"}, 
];
  return (
    <div>
      <Carousel
        fade
        // style={{ marginTop: "10.8vh" }}
        controls={false}
        interval={1000}
        indicators={false}
      >
        {slides.map((slide) => (
          <Carousel.Item>
            <img
              className="d-block w-100 z-0 "
              src={slide.src}
              alt="Page not reloaded"
              style={{
                filter: "brightness(30%)",
                height: "85vh",
                maxHeight: "85vh",
                width: "100vw",
              }}
            />
            <Carousel.Caption className="z-200">
            <FormCar/>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Carousel_Component
