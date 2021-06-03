import React, { useState } from 'react'
import { SliderData } from './SliderData'
import './ImageSlider.css';
import Dots from './Dots';


const ImageSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  };

  const clickSlide = (number) => {
    setCurrent(number)
  };

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <Dots className="dots" slides={slides} activeSlide={current} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && (
              <img src={slide.image} alt="image" className="image"/>
            )}
          </div>

          
        );
      })}
      <span className="prev" onClick={prevSlide}>&#10094;</span>
      <span className="next" onClick={nextSlide}>&#10095;</span>
    </section>
  );
};

export default ImageSlider;
