import React from "react";
import ArrowRightWhite from "../assets/images/Pijl_Rechts_Wit.svg";
import Repoint from "../assets/images/fourStepApproach/repoint.svg"

const CallToAction = () => {
  return (
    <section className="text-center h-80">
      <div className="bg-rebin-grey absolute h-80 w-full min-w-max left-0 -z-10">
      </div>
      <div className="text-center space-y-6 pt-24">
        <h2 className="text-3xl font-bold">
          Is your organisation next?
        </h2>
        <button className="relative inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="sr-only">Contact us</span>
          Contact us
          <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
        </button>
      </div>
    </section>
  )
};

export default CallToAction;
