import React from 'react';
import AdvantageBar from './components/AdvantageBar';
import CallToAction from '../../components/CallToAction';
import Stats from '../../assets/images/howItWorks/stats.svg';
import FourStepsMenu from './components/FourStepsMenu';
import Button from '../../components/Button';

const HowItWorks = () => {
  return (
    <main className="px-4 sm:px-6 lg:space-y-28">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
        <div className="mb-7 space-y-6 self-center sm:mb-0">
          <h1 className="text-gradient-horizontal text-4xl font-bold">
            How it works
          </h1>
          <h2 className="w-2xl text-4xl font-bold">
            The route to asset management efficiency
          </h2>
          <p className="text-md mt-6 text-balance">
            Take control of your resources and explore how your asset management
            can be optimized.
          </p>
          <Button text="Book a demo" href="/contact" />
        </div>
        <div className="mx-auto max-w-lg place-self-center">
          <img
            src={Stats}
            alt="Infographic representing the Repoint platform"
          ></img>
        </div>
      </div>
      <AdvantageBar></AdvantageBar>
      <div className="mt-20">
        <h3 className="text-gradient-horizontal mx-auto text-4xl font-bold">
          Our approach
        </h3>
        <h4 className="w-2xl mt-4 text-center text-4xl font-bold">
          Your journey in 4 steps
        </h4>
        <FourStepsMenu></FourStepsMenu>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default HowItWorks;
