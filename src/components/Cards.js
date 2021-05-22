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
              src="https://oliverbateswebsite.s3.amazonaws.com/splash.png"
              text='Sloth - A mobile app that gamifies the pedometer and "guilt trips" the user to go for a walk!'
              label="JavaScript, React Native, Expo"
              path="https://github.com/bateso88/Guilt_Trip"
            />
            <CardItem 
              src="https://oliverbateswebsite.s3.amazonaws.com/hatch.png"
              text="Hatch - A complex web app for a budding property company."
              label="Rails, JavaScript, Heroku"
              path="https://github.com/bateso88/Hatch"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="https://oliverbateswebsite.s3.amazonaws.com/spacebook.png"
              text="Spacebook - A team project to build a clone of Facebook."
              label="Rails, JavaScript, HTML & CSS"
              path="https://github.com/bateso88/acebook-sholk"
            />
            <CardItem 
              src="https://oliverbateswebsite.s3.amazonaws.com/bank.png"
              text="Bank - A tech test to demonstrate TDD, OOP, SRP, DDD, dependency injection, etc."
              label="Ruby, RSpec"
              path="https://github.com/bateso88/bank-tech-test"
            />
             <CardItem 
              src="https://oliverbateswebsite.s3.amazonaws.com/gol.png"
              text='Game of Life - My take on the classic "no player" game.'
              label="JavaScript"
              path="https://github.com/bateso88/game-of-life"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="https://oliverbateswebsite.s3.amazonaws.com/notes.png"
              text="Notes - A simple one page app that allows a user to store notes on local storage."
              label="JavaScript"
              path="https://github.com/bateso88/notes-app"
            />
            <CardItem 
              src="https://oliverbateswebsite.s3.amazonaws.com/bowling.png"
              text="Bowling Scorecard - Some complex logic and Ajax requests."
              label="Javascript, HTML/CSS"
              path="https://github.com/bateso88/bowling-challenge"
            />
            <CardItem 
              src="https://oliverbateswebsite.s3.amazonaws.com/thiswebsite.png"
              text="This Website! - Check out the source code for my first React project."
              label="React, JavaScript"
              path="https://github.com/bateso88/portfolio"
            />
            <CardItem 
              src="https://oliverbateswebsite.s3.amazonaws.com/cv.png.png"
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
