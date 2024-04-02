import React from "react";
import joris from "../../../assets/images/home/testimonial/joris.png";
import arrow from "../../../assets/images/Pijl_Rechts_Blauw.svg";
import binMaarkedal from "../../../assets/images/home/testimonial/bin_maarkedal.jpg";
import { Link } from "react-router-dom";

const Testimonial = () => {
  let testimonial =
    "By avoiding detours past empty or half-full bins, we save about 40% in the number of kilometers traveled. The smart collection routes take 50% less time, which means that employees can be deployed to other tasks. The project is a great example of how using technology results in a more efficient way of working. Besides, as mayor, I consider a clean municipality of great importance. Overflowing bins quickly lead to surrounding litter and complaints from residents. By cooperating with Rebin, we can avoid the bins being emptied too late. A smart system, with a lot of advantages and potential.";

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center rounded-xl bg-rebin-grey gap-y-10 md:gap-x-6 p-6">
      <img
        className="object-cover rounded-xl object-center-right self-stretch"
        src={binMaarkedal}
        alt="A newly installed Rebin Smart Waste Sensor in Maarkedal."
      />
      <div className="flex flex-col lg:col-span-2 gap-y-8 text-justify">
        <p className="text-lg leading-snug lg:leading-normal text-rebin-darkblue max-w-full">{testimonial}</p>
        <div className="flex gap-x-5 items-center w-fit">
          <img className="h-14 aspect-square" src={joris} alt="Joris Nachtergaele, mayor of Maarkedal" />
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
            <Link
              className="flex items-center gap-x-2 text-rebin-blue opacity-80 text-lg lg:text-xl font-semibold hover:opacity-100"
              to="references"
            >
              Meet customers
              <img className="h-4 aspect-square mt-1" src={arrow} alt="A blue Rebin arrow"></img>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
