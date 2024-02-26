import React from "react";
import StatisticBar from "./components/StatisticBar";
import ArrowRightWhite from "../../assets/images/Pijl_Rechts_Wit.svg";

const Sensor = () => {
  return (
    <main>
      <div className="grid grid-cols-2 max-w-7xl mx-auto my-24">
        <div>
          <h1 className="font-bold text-4xl">The Rebin smart bin sensor</h1>
          <h2 className="text-gradient-horizontal font-bold text-3xl">
            Small. Advanced. Sustainable
          </h2>
          <button className="relative inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Request sensor</span>
            Request sensor
            <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
          </button>
        </div>
        <div className="grid place-content-center">
          <div className="blob"></div>
          <img src="" alt="Sensor" />
        </div>
      </div>
      <StatisticBar />
    </main>
  );
};

export default Sensor;
