import React from "react";
import StatisticBar from "./components/StatisticBar";
import ArrowRightWhite from "../../assets/images/Pijl_Rechts_Wit.svg";
import Sensor1 from "../../assets/images/sensor/sensor1.png";
import SensorMenu from "./components/SensorMenu";
import SpecificationBar from "./components/SpecificationBar";
import CallToAction from "../../components/CallToAction";

const Sensor = () => {
  return (
    <main className="space-y-20">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto mt-20">
        <div className="my-auto">
          <h1 className="font-bold text-5xl">The <span className="text-gradient-horizontal ">Rebin</span> smart bin sensor</h1>
          <h2 className="mt-4 text-3xl">
            Small. Advanced. Sustainable.
          </h2>
          <button className="mt-8 relative inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Request sensor</span>
            Request sensor
            <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
          </button>
        </div>
        <div className="grid place-items-center mt-6">
          <div className="blob absolute -z-10"></div>
          <img src={Sensor1} alt="Sensor" className="w-1/2" />
        </div>
      </div>
      <StatisticBar />
      <div>
        <h3 className="text-gradient-horizontal font-bold text-4xl text-center leading-normal">Advantages</h3>
        <h4 className="font-bold text-4xl mt-2 w-2xl text-center text-rebin-darkblue">Where hardware meets innovation</h4>
        <SensorMenu></SensorMenu>
      </div>
      <div>
        <h3 className="text-gradient-horizontal font-bold text-3xl">
          Technical specifications
        </h3>
        <h4 className="font-bold text-4xl mt-4">Get more insights about our sensor</h4>
        <SpecificationBar></SpecificationBar>
      </div>
      <CallToAction></CallToAction>
    </main >
  );
};

export default Sensor;
