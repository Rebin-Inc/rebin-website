import React from "react";
import Swoosh from "../assets/images/swoosh.svg";
import ArrowRightWhite from "../assets/images/Pijl_Rechts_Wit.svg";

const CallToAction = () => {
  return (
    <div className="grid place-content-center">
      <img
        src={Swoosh}
        alt="swoosh"
        className="absolute w-full min-w-max place-self-center"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-5xl">Is your organisation next?</h1>
        <h2 className="mt-6 text-5xl">start now</h2>
        <button className="mt-12 mx-auto inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="sr-only">Contact us</span>
          Contact us
          <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
