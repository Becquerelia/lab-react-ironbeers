import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {

  const style = {
    color:"white"
  }

  return (
    <div className='navbarStyle' >
      <Link to="/">
      <h1 style= {style} >Home</h1>
      </Link>
    </div>
  )
}

export default Navbar