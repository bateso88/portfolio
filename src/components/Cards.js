import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these things</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/img-1.jpg"
              text="This is some text"
              label="Number 1"
              path="/about"
            />
            <CardItem 
              src="images/img-1.jpg"
              text="Some more stuff"
              label="Number 2"
              path="/about"
            />
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Cards
