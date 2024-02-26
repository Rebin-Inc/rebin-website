import React from "react";
import Contact from "./pages/contact/Contact";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
