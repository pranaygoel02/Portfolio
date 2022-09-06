import React from 'react'
import Nav from '../components/Navbar/nav'
import About from '../components/About/about'
import TestimonialCard from '../components/Testimonial/TestimonialCard';
// import './index.css'

export default function Home() {
    return (
        <div className="App">
          <Nav page={"Home"}/>
          <About/>
          <TestimonialCard/>
        </div>
      );
}
