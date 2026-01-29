import './App.css'
import {Routes, Route} from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";




function App() {
  

  return (

    

    <>
    <div className='app-layout'>
    
      <Navbar /> 

      

      <Routes className="page-container">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      

      <Footer />

      </div>
    </>
  )
}

export default App
