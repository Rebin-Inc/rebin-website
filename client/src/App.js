import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Layout from './Layout';
import Contact from './pages/contact/Contact';
import References from './pages/references/References';
import About from './pages/about/About';
import Cities from './pages/solution/cities/Cities';
import Collectors from './pages/solution/collectors/Collectors';
import Home from './pages/home/Home';
import Maarkedal from './pages/references/components/Maarkedal';
import Rotterdam from './pages/references/components/Rotterdam';
import Moorslede from './pages/references/components/Moorslede';
import Download from './pages/download/Download';
import { Helmet } from 'react-helmet';

const titles = {
  '/': [
    'Optimize waste management with our smart technology',
    "Revolutionize your waste collection with Rebin's technology. Optimize collection & reduce costs while promoting a greener environment.",
  ],

  '/solution/cities': [
    'Optimizing waste collection in Maarkedal',
    'Discover how we optimized waste collection in Maarkedal using smart waste sensors.',
  ],

  '/solution/collectors': [
    'Optimizing waste collection in Maarkedal',
    'Discover how we optimized waste collection in Maarkedal using smart waste sensors.',
  ],

  '/references': [
    'References',
    "Curious about how we've helped other organizations? Check it out.",
  ],

  '/about': ['About us', 'Interested in our story? Read it now.'],
  '/contact': [
    'Contact',
    'Contact Rebin to make your waste collection more efficient.',
  ],
  '/blog/maarkedal': [
    'Optimizing waste collection in Maarkedal',
    'Discover how we optimized waste collection in Maarkedal using smart waste sensors.',
  ],
  '/blog/Moorslede': [
    'Optimizing waste collection in Moorslede',
    'Discover how we optimized waste collection in Moorslede using smart waste sensors.',
  ],
};

function App() {
  const [title, setTitle] = useState('Rebin');
  const [description, setDescription] = useState(
    "Revolutionize your waste collection with Rebin's technology. Optimize collection & reduce costs while promoting a greener environment.",
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
        : "Revolutionize your waste collection with Rebin's technology. Optimize collection & reduce costs while promoting a greener environment.",
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
        <Route element={<Layout currentPath={location.pathname} />}>
          <Route index path="/" element={<Home />} />
          <Route path="/solution"> 
            <Route path="cities" element={<Cities />} />
            <Route path="collectors" element={<Collectors />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/references" element={<References />} />
          <Route path="/about" element={<About />} />
          <Route path="/references/maarkedal" element={<Maarkedal />} /> 
          <Route path="/references/moorslede" element={<Moorslede />} /> 
          <Route path="/references/rotterdam" element={<Rotterdam />} /> 
        </Route>
      </Route>
      <Route path="/case-study-maarkedal" element={<Download />} />
    </Routes>
  );
}

export default App;

