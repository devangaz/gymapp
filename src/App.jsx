import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import BMICaluclator from "./components/BMICaluclator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import WorkoutSession from "./components/WorkoutSession";
import Trainer from "./components/Trainer"; // import Trainer

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <Trainer />  
      <Contact />
      <BMICaluclator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
