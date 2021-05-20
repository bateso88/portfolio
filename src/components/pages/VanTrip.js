import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';


function VanTrip () {
  return (
    <>
      <h1 className='vantrip'>#vanlife</h1>
      <h5 className='vantrip-photos-title'>PHOTOS</h5>
      <ImageSlider slides={ SliderData }/>
    </>
  )
}

export default VanTrip;