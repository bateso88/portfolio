import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
            <CardItem 
              src="images/IMG_0215.jpeg"
              text='Sloth - A mobile app that gamifies the pedometer and "guilt trips" the user to go for a walk!'
              label="JavaScript, React Native, Expo"
              path="https://github.com/bateso88/Guilt_Trip"
            />
            <CardItem 
              src="images/img-1.jpg"
              text="Hatch - A complex web app for a budding property company."
              label="Rails, JavaScript, Heroku"
              path="https://github.com/bateso88/Hatch"
            />
          </ul>
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
