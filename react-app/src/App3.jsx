import React from 'react'

export const App3 = () => {
  return (
    <div>App3</div>
  )
}

export function App4(){
    return(
        <>
        <div>App4</div>
        </>
    )
}

export const App5 = (name) => `Hi ${name}`;

export const app6 = "Hello Students Again";

const MainApp = {App3,App4,App5,app6}

export default MainApp