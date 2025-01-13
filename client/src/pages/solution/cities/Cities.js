import React, { useState } from 'react';
import WithWithoutRebin from './components/WithWithoutRebin';
import Benefits from './components/Benefits';
import Feature from './components/Feature';
import CallToAction from '../../../components/CallToAction';

const Cities = () => {

  return (
    <>
      <main className="max-w-7xl ml-auto mr-auto p-6">
        <div className="mt-5 flex flex-col items-center gap-x-6 gap-y-5 text-center">
          <span className="text-rebin-blue font-extralight text-md border border-rebin-blue-color px-3 py-2 rounded-lg">
            Cities and municipalities
          </span>
          <h1 className="text-rebin-darkblue text-3xl font-bold md:text-5xl md:mt-2 max-w-2xl">
            The all in-one-solution for waste collection
          </h1>
          <p className="text-rebin-darkblue font-light mt-4 max-w-xl text-lg">
            Rebin provides real-time fill level monitoring, optimizes collection routes, and delivers actionable insights, one bin at a time. 
          </p>
          <button onClick={() => (window.location.href = '../contact')}   className="special-button bg-gradient mt-6 w-fit px-4 py-3 text-white font-regular rounded-lg">
            Book a demo
          </button>
        
          <div className='mt-16'>
            <WithWithoutRebin></WithWithoutRebin>
          </div>
          
        </div>

        <div className="flex flex-col mt-24 text-left">
          <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
             Benefits
          </h1>
          <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue mb-6 max-w-2xl">
            Discover why smart waste collection can help you
          </h2>
          <Benefits></Benefits>
        </div>

        <div className="flex flex-col mt-24 text-center items-center">
        <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
             Features
        </h1>
        <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue mb-10">
            Explore the features you need
        </h2>
        <Feature></Feature>
      </div>
      
      </main>
      <CallToAction></CallToAction>
    </>
  )
}

export default Cities