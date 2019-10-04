import React from 'react'
import smoothscroll from 'smoothscroll-polyfill';
import scrollTo from 'gatsby-plugin-smoothscroll'

import './ButtonScroll.css'

smoothscroll.polyfill();

const ButtonScroll = ({
  image,
  classe
}) => (
  <div id="ScrollLink">
    <button onClick={() => scrollTo('#top')}>My link</button>
  </div> 
)
export default ButtonScroll