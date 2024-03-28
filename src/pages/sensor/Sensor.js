import React from "react";
import StatisticBar from "./components/StatisticBar";
import Sensor1 from "../../assets/images/sensor/sensor.png";
import SensorMenu from "./components/SensorMenu";
import SpecificationBar from "./components/SpecificationBar";
import CallToAction from "../../components/CallToAction";
import Button from "../../components/Button";

const Sensor = () => {
  return (
    <main className="space-y-20">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto mt-20">
        <div className="my-auto">
          <h1 className="font-bold text-5xl">The <span className="text-gradient-horizontal ">Rebin</span> smart bin sensor</h1>
          <h2 className="mt-4 text-3xl">
            Small. Advanced. Sustainable.
          </h2>
          <Button text="Request sensor" href="/contact" />
        </div>
        <div className="grid place-items-center mt-6">
          <div className="blob absolute -z-10"></div>
          <img src={Sensor1} alt="The Rebin Smart Waste Sensor" className="w-1/2" />
        </div>
      </div>
      <StatisticBar />
      <div>
        <h3 className="text-gradient-horizontal font-bold text-4xl text-center leading-normal mx-auto">Advantages</h3>
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
