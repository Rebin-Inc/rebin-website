import React from "react";
import joris from "../../../assets/images/customers/joris.svg";
import brakel from "../../../assets/images/customers/Brakel.svg";
import brusselsAirport from "../../../assets/images/customers/Brussels-Airport.svg";
import centerParcs from "../../../assets/images/customers/Center-Parcs.svg";
import arrow from "../../../assets/images/Pijl_Rechts_Blauw.svg";
import binMaarkedal from "../../../assets/images/customers/bin_Maarkedal.jpg";

const Testimonial = () => {
  let testimonial =
    "By avoiding detours past empty or half-full bins, we save about 40% in the number of kilometers traveled. The smart collection routes take 50% less time, which means that employees can be deployed to other tasks. The project is a great example of how using technology results in a more efficient way of working. Besides, as mayor, I consider a clean municipality of great importance. Overflowing bins quickly lead to surrounding litter and complaints from residents. By cooperating with Rebin, we can avoid the bins being emptied too late. A smart system, with a lot of advantages and potential.";

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center rounded-xl bg-rebin-grey gap-y-10 md:gap-x-10 p-6">
      <img
        className="mx-auto h-full object-cover rounded-xl object-center-right"
        src={binMaarkedal}
        alt="Gloednieuwe vuilnisbak in Maarkedal met een sensor van Rebin"
      />
      <div className="flex flex-col lg:col-span-2 gap-y-8 text-justify">
        <p className="text-lg text-rebin-darkblue max-w-full">{testimonial}</p>
        <div className="flex gap-x-5 items-center w-fit">
          <img className="h-10 w-auto sm:h-auto" src={joris} alt="" />
          <div className="flex flex-col">
            <p className="text-rebin-blue opacity-80 text-lg sm:text-xl font-semibold">
              Joris Nachtergaele
            </p>
            <p className="text-sm sm:text-base font-light">
              Mayor of Maarkedal
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 gap-x-10 w-fit">
          <div className="grid lg:grid-cols-2 gap-5">
            <a
              className="flex items-center gap-x-2 text-rebin-blue opacity-80 text-lg lg:text-xl font-semibold hover:opacity-100"
              href="/"
            >
              <span className="sr-only">Rebin</span>
              Meet customers
              <img className="h-4 w-auto" src={arrow} alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
