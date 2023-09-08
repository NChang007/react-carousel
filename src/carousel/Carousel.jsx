import React, { useState } from 'react'
import './carousel.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Carousel = ({ children: slides }) => {
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
          {/* {slides[curr === 0 ? slides.length -1 : curr - 1]} */}
          {slides}
          {/* {slides[curr === slides.length -1 ? 0 : curr + 1]} */}
        </div>
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

export default Carousel