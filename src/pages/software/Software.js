import React from 'react';
import Button from '../../components/Button';
import Repoint from '../../assets/images/software/software.svg';
import FeatureMenu from './components/FeatureMenu';
import Benefits from './components/Benefits';
import CallToAction from '../../components/CallToAction';

const Software = () => {
  return (
    <main className="">
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-6 self-center">
          <h1 className="text-gradient-horizontal text-4xl font-bold">
            Solution
          </h1>
          <h2 className="w-2xl text-4xl font-bold">
            The all in-one-solution for asset monitoring
          </h2>
          <p className="text-md mt-6 text-balance">
            Rebin provides real-time monitoring, streamlines collection routes,
            and delivers actionable insights, one asset at a time.
          </p>
          <Button text="Contact us" href="/contact" />
        </div>
        <div className="float-right mx-auto mt-6 max-w-lg place-self-center">
          <img
            src={Repoint}
            alt="Infographic representing the repoint platform"
          ></img>
        </div>
      </div>
      <div className="mt-28">
        <h3 className="text-gradient-horizontal mx-auto text-center text-4xl font-bold leading-normal">
          Features
        </h3>
        <h4 className="w-2xl text-rebin-darkblue mt-2 text-center text-4xl font-bold">
          Explore the features you need
        </h4>
        <FeatureMenu></FeatureMenu>
      </div>
      <div className="mt-20">
        <h3 className="text-gradient-horizontal mx-auto text-center text-4xl font-bold leading-normal">
          Benefits
        </h3>
        <h4 className="w-2xl text-rebin-darkblue mt-2 text-center text-4xl font-bold">
          Discover the benefits for your organization
        </h4>
        <Benefits></Benefits>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default Software;
