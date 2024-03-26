import React from "react";
import AdvantageBar from "./components/AdvantageBar";
import CallToAction from "../../components/CallToAction";
import Stats from "../../assets/images/Stats.svg";
import FourStepsMenu from "./components/FourStepsMenu";
import Button from "../../components/Button";

const HowItWorks = () => {
  return (
    <main className="px-4 sm:px-6 lg:space-y-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="self-center space-y-6">
          <h1 className="text-gradient-horizontal font-bold text-4xl">
            How it works
          </h1>
          <h2 className="font-bold text-4xl w-2xl">
            The route to asset management efficiency
          </h2>
          <p className="text-md mt-6 text-balance">
            Take control of your resources and explore how your asset management can be optimized.
          </p>
          <Button text="Book a demo" href="/contact" />
        </div>
        <div className="max-w-lg mx-auto place-self-center">
          <img src={Stats} alt="Infographic representing the Repoint platform"></img>
        </div>
      </div>
      <AdvantageBar></AdvantageBar>
      <div className="mt-20 -mb-10">
        <h3 className="text-gradient-horizontal font-bold text-4xl mx-auto">
          Our approach
        </h3>
        <h4 className="font-bold text-4xl mt-4 w-2xl text-center">
          Your journey in 4 steps
        </h4>
        <FourStepsMenu></FourStepsMenu>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default HowItWorks;
