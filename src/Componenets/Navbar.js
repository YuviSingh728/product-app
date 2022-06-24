import React from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
  <div class="row">
    <div class="col-xl-4 col-lg-4 col">
      <h1 style={{fontWeight:"bold"}}>Summer Collection</h1>
    </div>
    <div class="col-xl-4 col-lg-4 col">
      <Link to="/" className='btn fs-5 fw-bold' style={{border:"none"}}>Home</Link>
      <Link to="/" className='btn fs-5 fw-bold'>Product</Link>
      <Link to="/" className='btn fs-5 fw-bold'>About</Link>
      <Link to="/" className='btn fs-5 fw-bold'>Contact</Link>
    </div>
    <div class="col-xl-4 col-lg-4 col">
      <button className='btn btn-outline-dark fw-bold fs-5 mx-2 py-2 px-4'>Login</button>
      <button className='btn btn-outline-dark fw-bold fs-5 mx-2 py-2 px-4'>Register</button>
      <button className='btn btn-outline-dark fw-bold fs-5 mx-2 py-2 px-4'>Cart</button>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Navbar