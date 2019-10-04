import React from 'react'
import Fade from 'react-reveal/Fade'

import './ImageParallax.css'

const ImageParallax = ({
  image,
  illustration,
  title,
  group,
  parallax,
  parallax_group,
  pave,
  section
}) => (
  <div id={group} className={parallax_group}>
    {image === 'dark' && (
      <div className={parallax}
        style={{
          background: `#16161D`
        }}
      >
      <div className="title">{title}</div>
        {pave === 'gauche' && (
          <div className="parallax__layer">
            <div className="title flexi2">
              <Fade><div className='pave1'>{section}</div></Fade>
              <Fade right><div className='pave2'
              style={{
                backgroundImage: `url(${illustration})`
              }}
              ></div></Fade>
            </div>
          </div>
        )}
        {pave === 'droite' && (
          <div className="parallax__layer">
            <div className="title flexi">
              <Fade left><div className='pave2'
              style={{
                backgroundImage: `url(${illustration})`
              }}
              ></div></Fade>
              <Fade><div className='pave1'>{section}</div></Fade>
            </div>
          </div>
        )}
      </div>
    )}
    {image !== 'dark' && (
      <div className={parallax}
        style={{
          backgroundImage: `url(${image})`
        }}
      >
      <div className="title2">{title}</div>
      </div>
    )}
  </div>
)

export default ImageParallax
