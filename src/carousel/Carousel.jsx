import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import './carousel.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const CaroSlide = ({children}) => {
  return (
    <div 
      className='carousel-slide'
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexShrink: '0'
      }}
    >
      {children}
    </div>
  )
}


// image sub-component 
// used as Carousel.Image
const CaroImage = (props) => {
  return (
    <img
      className='carousel-image'
      src={props.src} 
      alt={props.alt}
      style={{
        height: '100%',
        maxHeight: '700px',
        objectFit: 'cover'
      }}
    />
  )
}
CaroImage.defaultProps = {
  src : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fimages%2Fplaceholder.png&f=1&nofb=1&ipt=9ec8b7bbbc9869c2e7427e71af79f99b92b5724c1b827145561724a8c2d31042&ipo=images",
  alt : "Carousel Image"
}
CaroImage.propTypes = {
  src : PropTypes.string,
  alt : PropTypes.string
}


const Carousel = ({ children: slides, autoSlide, autoSlideInterval }) => {
  // I am using the index as the "curr"(currentIDX)
  // Then bassed on what index we are at we translateX by the full width multiplied by the idx 
  const [curr, setCurr] = useState(0)
  const prev = () => {
    setCurr((curr => curr === 0 ? slides.length -1 : curr - 1))
  }
  const next = () => {
    setCurr((curr => curr === slides.length -1 ? 0 : curr + 1))
  }

  useEffect(() => {
    if(!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='carousel'>
        <div 
          className='carousel-items'
          style={{
            transform: `translateX(-${curr * 100}%)`,
            height: '500px',
            display: 'flex',
            transition: 'all ease-out 500ms'
          }}
        >
          {slides}
        </div>

        <div 
          className="carousel-navigation"
          style={{
            position: 'absolute',
            inset: '0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button 
            className='carousel-left-btn'
            onClick={prev}
          >
            {<FaAngleLeft/> ? <FaAngleLeft/> : "<"}
          </button>
          <button 
            className='carousel-right-btn'
            onClick={next}
          >
            <FaAngleRight/>
          </button>
        </div>

        <div className="slide-indicator">
          <div className="center-indicators">
            {slides.map((slide, idx) => (
              <div 
                style={{
                  transition: 'all 500ms',
                  backgroundColor: 'white',
                  width: '5px',
                  height: '5px',
                  opacity: `${curr === idx ? 1 : 0.5}`,
                  padding: `${curr === idx ? 4 : 0}px`
                }}
              />
            ))}
          </div>
        </div>
    </div>
  )
}
Carousel.defaultProps = {
  autoSlide : false,
  autoSlideInterval: 3000
}
Carousel.propTypes = {
  autoSlide : PropTypes.bool,
  autoSlideInterval : PropTypes.number
}

Carousel.Slide = CaroSlide
Carousel.Image = CaroImage

export default Carousel