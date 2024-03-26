import React from "react";
import Button from "../../components/Button";
import Repoint from "../../assets/images/software/software.svg";
import FeatureMenu from "./components/FeatureMenu";
import BenefitBar from "./components/BenefitBar";
import CallToAction from "../../components/CallToAction";

const Software = () => {
  return (
    <main className="">
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="self-center space-y-6">
          <h1 className="text-gradient-horizontal font-bold text-4xl">
            Solution
          </h1>
          <h2 className="font-bold text-4xl w-2xl">
            The all in-one-solution for asset monitoring
          </h2>
          <p className="text-md mt-6 text-balance">
            Rebin provides real-time monitoring, streamlines collection routes, and delivers actionable insights, one asset at a time.
          </p>
          <Button text="Contact us" href="/contact" />
        </div>
        <div className="max-w-lg mx-auto place-self-center mt-6 float-right">
          <img src={Repoint} alt="Infographic representing the repoint platform"></img>
        </div>
      </div>
      <div className="mt-28">
        <h3 className="text-gradient-horizontal font-bold text-4xl text-center leading-normal mx-auto">Features</h3>
        <h4 className="font-bold text-4xl mt-2 w-2xl text-center text-rebin-darkblue">Explore the features you need</h4>
        <FeatureMenu></FeatureMenu>
      </div>
      <div className="mt-20">
        <h3 className="text-gradient-horizontal font-bold text-4xl text-center leading-normal mx-auto">Benefits</h3>
        <h4 className="font-bold text-4xl mt-2 w-2xl text-center text-rebin-darkblue">Discover the benefits for your organisation</h4>
        <BenefitBar></BenefitBar>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default Software;
