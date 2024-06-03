import React from 'react';
import StatisticBar from './components/StatisticBar';
import Sensor1 from '../../assets/images/sensor/sensor.png';
import SensorMenu from './components/SensorMenu';
import SpecificationBar from './components/SpecificationBar';
import CallToAction from '../../components/CallToAction';
import Button from '../../components/Button';

const Sensor = () => {
  return (
    <main className="space-y-20">
      <div className="mx-auto mt-20 grid max-w-7xl md:grid-cols-2">
        <div className="my-auto">
          <h1 className="text-5xl font-bold">
            The <span className="text-gradient-horizontal ">Rebin</span> smart
            bin sensor
          </h1>
          <h2 className="mt-4 text-3xl">Small. Advanced. Sustainable.</h2>
          <Button text="Request sensor" href="/contact" />
        </div>
        <div className="mt-6 grid place-items-center">
          <div className="blob absolute -z-10"></div>
          <img
            src={Sensor1}
            alt="The Rebin Smart Waste Sensor"
            className="w-1/2"
          />
        </div>
      </div>
      <StatisticBar />
      <div>
        <h3 className="text-gradient-horizontal mx-auto text-center text-4xl font-bold leading-normal">
          Advantages
        </h3>
        <h4 className="w-2xl text-rebin-darkblue mt-2 text-center text-4xl font-bold">
          Where hardware meets innovation
        </h4>
        <SensorMenu></SensorMenu>
      </div>
      <div>
        <h3 className="text-gradient-horizontal text-3xl font-bold">
          Technical specifications
        </h3>
        <h4 className="mt-4 text-4xl font-bold">
          Get more insights about our sensor
        </h4>
        <SpecificationBar></SpecificationBar>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default Sensor;
