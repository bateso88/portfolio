import React from 'react';
import '../../App.css'
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData'


function Photos () {
  return (
    <>
      <h1 className='photos'>PHOTOS</h1> 
      <ImageSlider slides={ SliderData }/>
    </>
  )
}

export default Photos;