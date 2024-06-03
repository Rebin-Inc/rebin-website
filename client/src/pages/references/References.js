import React from 'react';
import Maarkedal from './components/Maarkedal';
import BlogCards from './components/BlogCards';
import CallToAction from '../../components/CallToAction';

const References = () => {
  return (
    <main className="mb-20 mt-10 w-full space-y-10">
      <div className="grid place-content-center gap-4">
        <h1 className="text-5xl font-bold mx-auto text-center">
          Embracing the <span className="text-gradient-horizontal ">Future</span> of <br>
          </br>smart
          solutions
        </h1>
        <div className="mt-6  grid place-items-center">
          <div className="blob absolute -z-10"></div>
        </div>
      </div>
      <div className="mt-20 lg:mt-28">
        <h1 className="mt-20 text-gradient-horizontal text-3xl font-bold">
          Our references
        </h1>
        <h2 className="mt-4 text-4xl font-bold">Latest succes stories</h2>
        <BlogCards></BlogCards>
      </div>
      <CallToAction></CallToAction>
    </main>
  
  );
};

export default References;
