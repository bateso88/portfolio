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
              text="Spacebook - A team project to build a clone of Facebook."
              label="Rails, JavaScript, HTML & CSS"
              path="https://github.com/bateso88/acebook-sholk"
            />
            <CardItem 
              src="images/img-1.jpg"
              text="Bank - A tech test to demonstrate TDD, OOP, SRP, DDD, dependency injection, etc."
              label="Ruby, RSpec"
              path="https://github.com/bateso88/bank-tech-test"
            />
             <CardItem 
              src="images/img-1.jpg"
              text='Game of Life - My take on the classic "no player" game.'
              label="JavaScript"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="images/img-1.jpg"
              text="Notes - A simple one page app that allows a user to store notes on local storage."
              label="JavaScript"
              path="/"
            />
            <CardItem 
              src="images/img-1.jpg"
              text="Bowling Scorecard - Some complex logic and Ajax requests."
              label="Javascript, HTML/CSS"
              path="/"
            />
            <CardItem 
              src="images/img-1.jpg"
              text="This Website! - Check out the source code for my first React project."
              label="React, JavaScript"
              path="https://github.com/bateso88/portfolio"
            />
            <CardItem 
              src="images/img-1.jpg"
              text="CV - Please feel free to have a look!"
              label="CV"
              path="https://github.com/bateso88/CV"
            />
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Cards
