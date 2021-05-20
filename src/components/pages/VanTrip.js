import React from 'react';
import '../../App.css'
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData'


function VanTrip () {
  return (
    <>
      <h1 className='vantrip'>PHOTOS</h1> 
      <ImageSlider slides={ SliderData }/>
    </>
  )
}

export default VanTrip;