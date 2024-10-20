import Home from "./pages/Home/Home.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Bg from "../assets/images/bg.png";
import Bg_Dark from "../assets/images/bg_dark.jpg";
import LineGrid from "../assets/images/line-grid.svg";
import Header from "./components/Header/Header.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects";
import { useTheme } from "./context/themeContext.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import { Toaster } from "react-hot-toast";
import Resume from "./pages/Resume/Resume.jsx";
import CMDK from "./widgets/CMDK/components/CMDK.jsx";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function App() {
  const { theme } = useTheme();
  return (
    <>
      <Toaster />
      <main id="parallax-container" className="relative w-full bg-gradient-to-b from-gray-900 from-30% to-black  font-poppins text-neutral-100">
        <img id="parallax-back" src={LineGrid} className="hidden sm:block sm:absolute w-full h-full md:max-h-screen inset-0 z-0 opacity-75" />
        {/* <div className="absolute inset-0 w-56 h-56 rounded-full bg-gradient-to-br from-gray-600/10 to-black/0 md:left-64 md:top-20 z-0"></div>   */}
        <section id="parallax-front" className="relative z-20">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="*" element={<h1>Oops! 404 Not Found.</h1>} />
            </Routes>
            <Header />
            <CMDK />
            <Navbar
            links={navLinks}
            className={'fixed bottom-[3rem] md:bottom-[4rem] left-[50%] z-10 -translate-x-[50%]'} 
            animation={{
              initial: { opacity: 0, y: 100, x: "-50%" },
              animate : { opacity: 1, y: 0, x: "-50%" },
              transition : { duration: 0.5, delay: 1.05 }
            }}
            id='primary-navbar'/>
          </Router>
        </section>
      </main>
    </>
  );
}

export default App;
