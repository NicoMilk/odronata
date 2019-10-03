import React from 'react'
import Fade from 'react-reveal/Fade';
import './ImageParallax.css'

const ImageParallax = ({
  image,
  title,
  group,
  parallax,
  pave,
  section
}) => (
  <div id={group} className="parallax__group">
    {image === 'dark' && (
      <div className={parallax}
        style={{
          background: `#16161D`
        }}
      >
      <div className="title">{title}</div>
        {pave === 'gauche' && (
          <div className="parallax__layer flexi">
            <div className="title flexi">
              <Fade><div className='pave1'>{section}</div></Fade>
              <Fade right><div className='pave2'>Foreground Layer 2</div></Fade>
            </div>
          </div>
        )}
        {pave === 'droite' && (
          <div className="parallax__layer flexi">
            <div className="title flexi">
              <Fade left><div className='pave2'>Foreground Layer 2</div></Fade>
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
      <div className="title">{title}</div>
      </div>
    )}
  </div>
)

export default ImageParallax
