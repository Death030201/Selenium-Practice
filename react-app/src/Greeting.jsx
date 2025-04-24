import React from 'react'

const Greeting = ({name="xyz",age=0,flag=true}) => {
  return (
    flag && 
    <div style={{color:'red'}}>
        <h1>
         Hi {name} 
        </h1>
         <h2>Your age is {age}</h2>
    </div>
  )
}

export default Greeting