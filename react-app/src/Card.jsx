import React from 'react'

const Card = ({children}) => {
  return (
    <div style={{border:'3px solid black', height:'150px',width:'150px'}}>
        {children}
    </div>
  )
}

export default Card