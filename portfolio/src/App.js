import Home from './screens/Home'
import WebDev from './screens/WebDev'
import Graphic from './screens/Graphic'
import Sketch from './screens/Sketch'
import Projects from  './screens/Projects'
import Footer from './components/Footer/footer'
import Nav from './components/Navbar/nav' 
import {Route, Routes } from 'react-router-dom'
import Contact from './screens/Contact'

function App() {
  return (
    <div className='Main-App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Projects />}/>
        <Route path="/project/web-development"  element={<WebDev />}/>
        <Route path="/project/graphic-design"  element={<Graphic />}/>
        <Route path="/project/sketches"  element={<Sketch />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path='*' element={<h1>Oops! 404 Not Found.</h1>}/>
      </Routes>
      <Footer/>  
    </div>
  );
}

export default App;
