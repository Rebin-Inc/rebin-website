import React from "react";
import ArrowRightWhite from "../assets/images/Pijl_Rechts_Wit.svg";
import Repoint from "../assets/images/fourStepApproach/repoint.svg"

const CallToAction = () => {
  return (
    <div className="">
      <div className="mx-auto py-24 sm:py-32">
        <div className="bg-white relative isolate overflow-hidden  px-6 pt-16 shadow-around sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Is your organisation next?
            </h2>
            <p className="mt-6 text-3xl leading-8 ">
              Start now.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button className="relative inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Contact us</span>
                Contact us
                <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
              </button>
              <a href="#" className="text-sm font-semibold leading-6 text-black">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={Repoint}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default CallToAction;
