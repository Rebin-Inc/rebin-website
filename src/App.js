import React from "react";
import { HashRouter as Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Layout from "./Layout";
import Contact from "./pages/contact/Contact";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import References from "./pages/references/References";
import About from "./pages/about/About";
import Software from "./pages/software/Software";
import Consulting from "./pages/consulting/Consulting";
import Sensor from "./pages/sensor/Sensor";
import Home from "./pages/home/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="references" element={<References />} />
          <Route path="about" element={<About />} />
          <Route path="software" element={<Software />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="sensor" element={<Sensor />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
