import React from 'react';
import './slide.css'
export default function Slide() {
  return <div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"650px"}}src="https://images.unsplash.com/photo-1642969451212-224d695c5550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="... "/>
    </div>
    <div className="carousel-item">
      <img style={{height:"650px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YGDLvP39LcOw9S4-lLtRgQDIZWtZmMhMGw&usqp=CAU" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img style={{height:"650px"}}src="https://images.unsplash.com/photo-1642969451212-224d695c5550?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
<div className='kk'>
<p className='pppp'>Best Employement Oppotunities</p>
<button className='boot'>Find Your Career</button>
</div>
</div> 
</div>
  </div>;
}
