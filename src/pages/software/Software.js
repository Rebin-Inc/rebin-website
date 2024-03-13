import React from "react";
import ArrowRightWhite from "../../assets/images/Pijl_Rechts_Wit.svg";

import RepointOnDevices from "../../assets/images/software/repoint_on_devices.svg";
import FeatureMenu from "./components/FeatureMenu";
import BenefitBar from "./components/BenefitBar";
import CallToAction from "../../components/CallToAction";

const Software = () => {
  return (
    <main className="space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="self-center">
          <h1 className="text-gradient-horizontal font-bold text-4xl">
            Solution
          </h1>
          <h2 className="font-bold text-4xl mt-4 w-2xl">
            The all in one solution for bin monitoring
          </h2>
          <p className="text-md font-medium mt-6">
            During a leisurely stroll in the park, we came across an overflowing trash bin, surrounded by litter that clearly had a negative impact on the environment.
          </p>
          <button className="mt-12 mx-auto inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Contact us
            <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
          </button>
        </div>
        <div className="max-w-lg mx-auto place-self-center mt-6 float-right">
          <img src={RepointOnDevices} alt="Infographic representing the repoint platform"></img>
        </div>
      </div>
      <div>
        <h3 className="text-gradient-horizontal font-bold text-4xl text-center leading-normal">Features</h3>
        <h4 className="font-bold text-4xl mt-2 w-2xl text-center text-rebin-darkblue">Explore the features you need</h4>
        <FeatureMenu></FeatureMenu>
      </div>
      <div>
        <h3 className="text-gradient-horizontal font-bold text-4xl text-center leading-normal">Benefits</h3>
        <h4 className="font-bold text-4xl mt-2 w-2xl text-center text-rebin-darkblue">Discover the benefits for your organisation</h4>
        <BenefitBar></BenefitBar>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default Software;
