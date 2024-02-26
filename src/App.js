import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import Contact from "./pages/contact/Contact";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import References from "./pages/references/References";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Solution from "./pages/solution/Solution";
import Software from "./pages/software/Software";
import Consulting from "./pages/consulting/Consulting";
import Sensor from "./pages/sensor/Sensor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="contact" element={<Contact />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="references" element={<References />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="solution" element={<Solution />} />
        <Route path="software" element={<Software />} />
        <Route path="consulting" element={<Consulting />} />
        <Route path="sensor" element={<Sensor />} />
      </Route>
    </Routes>
  );
}

export default App;
