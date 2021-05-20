import React from 'react'
import './Dots.css'

const Dots = ({ slides, activeSlide }) => {
  return (
    <div className="dots">
      {slides.map((slide, index) => (
        <span className={index === activeSlide ? "dot active" : "dot"} key={index} />
      ))}
    </div>
  )
}

export default Dots