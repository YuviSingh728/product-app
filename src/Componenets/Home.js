import React from 'react'
import Navbar from './Navbar'
import Middle from './Middle'
import Products from './Products'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
         <Navbar />
      <Middle />
      <Products />
      <Footer />
    </div>
  )
}

export default Home