import React from 'react'
import './ImageParallax.css'

const ImageParallax = ({
  image,
  title
}) => (
  <div
    className="full-width-image margin-top-0"
    style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: `top left`,
      backgroundAttachment: `fixed`,
    }}
  >
    <h1 className="parallaxTitle">{title}</h1>
  </div>
)

export default ImageParallax
