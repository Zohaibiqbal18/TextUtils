import React from 'react'

export default function welcome(props) {
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center mt-5 bg-${props.mode}`}>
      <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Welcome to the TextUtils Website!</h1>
      <h3 className={`bg-warning d-inline-block p-3 text-${props.mode === "light" ? "dark" : "danger"}`}>Please Click on Home in the Navbar to start using our website.</h3>
      <h4 className={`text-${props.mode === "light" ? "dark" : "light"}`}>Thanks!</h4> 
    </div>
  )
}
