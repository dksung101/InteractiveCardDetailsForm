import React from 'react'

const Card = ({className, bg_image, children}) => {
  return (
    <>
    <div style={{backgroundImage: `url(${(bg_image)})`, backgroundSize:"contain"}} className={className} 
    >{children}</div>
    </>
  )
}

export default Card