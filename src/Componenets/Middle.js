import { Button } from 'bootstrap'
import React from 'react'

const Middle = () => {
  return (
    <div>

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators" style={{margin:" 4% 0%"}}>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" style={{width:"90%",margin:"2% 5%"}}>
      <img src="/Image/shut.jpg" className="d-block w-100" alt="Loading" style={{height:"75vh", width:"70%",borderRadius:"15px"}}/>
      <div className="carousel-caption d-none d-md-block text-primary " style={{margin:"5% 0%" ,fontFamily:"Lobster Two", fontSize:"40px"}}>
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
        <button className="btn btn-outline-primary" style={{width:"15vw",height:"7vh",fontFamily:"cursive"}}>Join Us</button>

      </div>
    </div>
    <div className="carousel-item" style={{width:"90%",margin:"2% 5%"}}>
      <img src="/Image/photo.jpeg" className="d-block w-100" alt="Loading" style={{height:"75vh", width:"70%",borderRadius:"15px"}}/>
      <div className="carousel-caption d-none d-md-block text-success " style={{margin:"5% 0%",fontFamily:"Lobster Two", fontSize:"40px"}}>
        <h1>Second slide label</h1>
        <p>Some representative placeholder content for the second slide.</p>
        <button className="btn btn-outline-success" style={{width:"15vw",height:"7vh"}}>Join Us</button>
      </div>
    </div>
    <div className="carousel-item" style={{width:"90%",margin:"2% 5%"}}>
      <img src="/Image/eco.jpg" className="d-block w-100" alt="Loading" style={{height:"75vh", width:"70%",borderRadius:"15px"}}/>
      <div className="carousel-caption d-none d-md-block   " style={{margin:"5% 0%", color:"maroon",fontFamily:"Lobster Two", fontSize:"40px"}}>
      <h1>Second slide label</h1>
    

        <p>Some representative placeholder content for the second slide.</p>
        <button className="btn btn-outline-danger" style={{width:"15vw",height:"7vh"}}>Join Us</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>






        {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Image/shut.jpg" className="d-block w-100" alt="Loading" />
    </div>
    <div className="carousel-item">
      <img src="/Image/photo.jpeg" className="d-block w-100" alt="Loading" />
    </div>
    <div className="carousel-item">
      <img src="/Image/shut.jpg" className="d-block w-100" alt="Loading" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
    </div>
  )
}

export default Middle