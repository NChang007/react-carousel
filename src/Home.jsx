import React from 'react'
import Carousel from './carousel/carousel'

const Home = () => {
    let imageList = [
        "https://images.pexels.com/photos/9444052/pexels-photo-9444052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18084236/pexels-photo-18084236/free-photo-of-artist-in-her-workshop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18057891/pexels-photo-18057891/free-photo-of-young-woman-sitting-on-the-ground-with-rugs-with-traditional-oriental-patterns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18173392/pexels-photo-18173392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18147565/pexels-photo-18147565/free-photo-of-city-people-street-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  return (
    <div>
        <Carousel>
            {imageList.map((i) => (
                <div  className="carousel-slide">
                    <img className='carousel-image' src={i}/>
                </div>
            ))}
        </Carousel>
    </div>
  )
}

export default Home