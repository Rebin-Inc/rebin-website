import React, { useState } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Layout from './Layout';
import Contact from './pages/contact/Contact';
import HowItWorks from './pages/how-it-works/HowItWorks';
import References from './pages/references/References';
import About from './pages/about/About';
import Software from './pages/software/Software';
import Consulting from './pages/consulting/Consulting';
import Sensor from './pages/sensor/Sensor';
import Home from './pages/home/Home';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const titles = {
  '/': [
    'Optimize asset management with our smart technology',
    "Revolutionise your asset monitoring with Rebin's technology. Optimise collection & reduce costs while promoting a greener environment. Streamline your asset collection process with Rebin today.",
  ],
  '/how-it-works': [
    'How it works',
    'Quick and easy installation; your asset becomes smart in just one minute.',
  ],
  '/software': [
    'The solution',
    'Monitor fill levels of assets, optimize collection, and save costs.',
  ],
  '/references': [
    'References',
    "Curious about how we've helped other organisations? Check it out.",
  ],
  '/about': ['About us', 'Interested in our story? Read it now.'],
  '/contact': [
    'Contact',
    'Contact Rebin to make your asset management more efficient.',
  ],
};

function App() {
  const [title, setTitle] = useState('Rebin');
  const [description, setDescription] = useState(
    "Revolutionise your asset monitoring with Rebin's technology. Optimise collection & reduce costs while promoting a greener environment. Streamline your asset collection process with Rebin today.",
  );

  const location = useLocation();

  useEffect(() => {
    setTitle(
      titles[location.pathname]
        ? `Rebin | ${titles[location.pathname][0]}`
        : 'Rebin',
    );
    setDescription(
      titles[location.pathname]
        ? titles[location.pathname][1]
        : "Revolutionise your asset monitoring with Rebin's technology. Optimise collection & reduce costs while promoting a greener environment. Streamline your asset collection process with Rebin today.",
    );
  }, [location.pathname]);

  useEffect(() => {
    /* Scroll to top on route change */
    window.scrollTo(0, 0);
  });

  return (
    <Routes>
      <Route
        element={
          /* Set the title and description meta tags */
          <>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={description} />
            </Helmet>
            <Outlet />
          </>
        }
      >
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="references" element={<References />} />
          <Route path="about" element={<About />} />
          <Route path="software" element={<Software />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="sensor" element={<Sensor />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
