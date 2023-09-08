import React, { useState } from 'react'
import './carousel.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const CaroSlides = ({children}) => {
  return (
    <div className='carousel-slide'>
      {children}
    </div>
  )
}

const CaroImage = (props) => {
  return (
    <img
      className='carousel-image'
      src={props.src} 
      alt='Carousel Image'
    />
  )
}


const Carousel = ({ children: slides }) => {
  // I am using the index as the "curr"(currentIDX)
  // Then bassed on what index we are at we translateX by the full width multiplied by the idx 
  const [curr, setCurr] = useState(0)
  const prev = () => {
    setCurr((curr => curr === 0 ? slides.length -1 : curr - 1))
  }
  const next = () => {
    setCurr((curr => curr === slides.length -1 ? 0 : curr + 1))
  }
  return (
    <div className='carousel'>
        <div 
          className='carousel-items'
          style={{transform: `translateX(-${curr * 100}%)`}}
        >
          {slides}
        </div>

        {/* this are the 2 btns on the screen */}
        <div className="carousel-navigation">
          <button 
            className='carousel-left-btn'
            onClick={prev}
          >
            <FaAngleLeft/>
          </button>
          <button 
            className='carousel-right-btn'
            onClick={next}
          >
            <FaAngleRight/>
          </button>
        </div>
    </div>
  )
}
Carousel.Slides = CaroSlides
Carousel.Image = CaroImage

export default Carousel