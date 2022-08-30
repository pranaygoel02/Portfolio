import React from 'react'
import Nav from '../components/Navbar/nav'
import About from '../components/About/about'
// import './index.css'

export default function Home() {
    return (
        <div className="App">
          <Nav page={"Home"}/>
          <About/>
        </div>
      );
}
