import React from 'react'
import './Logo.css'

const Logo = ({
  image,
  classe
}) => (
  <div
  className={classe}
  style={{
    // backgroundImage: `url(/images/logo.svg)`
    backgroundImage: `url(${image})`
  }}
/>

)
export default Logo

// export default () => (
//   <div
//     className="Logo"
//     style={{
//       backgroundImage: `url(/images/logo.svg)`
//     }}
//   />
// )
