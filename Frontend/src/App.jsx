import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header";
import Hero from './components/Hero';
import Services from "./components/services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Landing =()=>{
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  },[]);

  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
  
  /* return <h1>Hello, YegnaFarm!</h1>; */


}