import React from "react";
import AdvantageBar from "./components/AdvantageBar";
import CallToAction from "../../components/CallToAction";
import Stats from "../../assets/images/Stats.svg";
import ArrowRightWhite from "../../assets/images/Pijl_Rechts_Wit.svg";
import FourStepsMenu from "./components/FourStepsMenu";

const HowItWorks = () => {
  return (
    <main className="space-y-20 lg:space-y-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="order-last lg:order-first self-center">
          <h1 className="text-gradient-horizontal font-bold text-4xl">
            How it works
          </h1>
          <h2 className="font-bold text-4xl mt-4 w-2xl">
            The route to waste management efficiency
          </h2>
          <p className="text-md font-medium mt-6">
            Take control of your waste and explore with us how we can optimize
            your waste management.
          </p>
          <button className="mt-12 mx-auto inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Book a demo
            <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
          </button>
        </div>
        <div className="max-w-lg mx-auto place-self-center">
          <img src={Stats}></img>
        </div>
      </div>
      <AdvantageBar></AdvantageBar>
      <div>
        <h3 className="text-gradient-horizontal font-bold text-4xl text-center">
          4 step approach
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
