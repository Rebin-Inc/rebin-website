import React from "react";
import Button from "../../components/Button";
import RepointOnDevices from "../../assets/images/software/repoint_on_devices.svg";
import FeatureMenu from "./components/FeatureMenu";
import BenefitBar from "./components/BenefitBar";
import CallToAction from "../../components/CallToAction";

const Software = () => {
  return (
    <main className="space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="self-center space-y-6">
          <h1 className="text-gradient-horizontal font-bold text-4xl">
            Solution
          </h1>
          <h2 className="font-bold text-4xl w-2xl">
            The all in one solution for bin monitoring
          </h2>
          <p className="text-md font-medium">
            During a leisurely stroll in the park, we came across an overflowing trash bin, surrounded by litter that clearly had a negative impact on the environment.
          </p>
          <Button text="Contact us" arrow={true} href="/contact" />
        </div>
        <div className="max-w-lg mx-auto place-self-center mt-6 float-right">
          <img src={RepointOnDevices} alt="Infographic representing the repoint platform"></img>
        </div>
      </div>
      <div>
        <h3 className="text-gradient-horizontal font-bold text-4xl text-center leading-normal mx-auto">Features</h3>
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
