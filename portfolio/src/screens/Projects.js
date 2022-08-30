import React from 'react'
import Nav from '../components/Navbar/nav'
import PortfolioList from '../components/portfolioList/portfolioList'

export default function App() {
    return (
        <div className="App">
          <Nav page={"Project"}/>
          <PortfolioList/>
        </div>
      );
}
