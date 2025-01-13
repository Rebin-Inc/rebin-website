import React from 'react';
import Maarkedal from './components/Maarkedal';
import BlogCards from './components/BlogCards';
import CallToAction from '../../components/CallToAction';

const References = () => {
  return (
    <>
    <main className="mb-20 mt-10 w-full space-y-10 p-6 max-w-7xl ml-auto mr-auto">
      <div className="grid place-content-center gap-4 ">
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
        <h1 className="mt-20 text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          Our references
        </h1>
        <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue">Latest succes stories</h2>
        <BlogCards></BlogCards>
      </div>
    </main>
    <CallToAction></CallToAction>
    </>
  
  );
};

export default References;
