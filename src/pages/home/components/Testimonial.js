import React from 'react';
import joris from '../../../assets/images/home/testimonial/joris.png';
import arrow from '../../../assets/images/Pijl_Rechts_Blauw.svg';
import binMaarkedal from '../../../assets/images/home/testimonial/bin_maarkedal.jpg';
import { Link } from 'react-router-dom';

const Testimonial = () => {
  let testimonial =
    'By avoiding detours past empty or half-full bins, we save about 40% in the number of kilometers traveled. The smart collection routes take 50% less time, which means that employees can be deployed to other tasks. The project is a great example of how using technology results in a more efficient way of working. Besides, as mayor, I consider a clean municipality of great importance. Overflowing bins quickly lead to surrounding litter and complaints from residents. By cooperating with Rebin, we can avoid the bins being emptied too late. A smart system, with a lot of advantages and potential.';

  return (
    <section className="bg-rebin-grey mt-10 grid grid-cols-1 items-center gap-y-10 rounded-xl p-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
      <img
        className="self-stretch rounded-xl object-cover object-center-right"
        src={binMaarkedal}
        alt="A newly installed Rebin Smart Waste Sensor in Maarkedal."
      />
      <div className="flex flex-col gap-y-8 text-justify lg:col-span-2">
        <p className="text-rebin-darkblue max-w-full text-lg leading-snug lg:leading-normal">
          {testimonial}
        </p>
        <div className="flex w-fit items-center gap-x-5">
          <img
            className="aspect-square h-14"
            src={joris}
            alt="Joris Nachtergaele, mayor of Maarkedal"
          />
          <div className="flex flex-col">
            <p className="text-rebin-blue text-lg font-semibold opacity-80 sm:text-xl">
              Joris Nachtergaele
            </p>
            <p className="text-sm font-light sm:text-base">
              Mayor of Maarkedal
            </p>
          </div>
        </div>
        <div className="flex w-fit flex-col gap-x-10 gap-y-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <Link
              className="text-rebin-blue flex items-center gap-x-2 text-lg font-semibold opacity-80 hover:opacity-100 lg:text-xl"
              to="references"
            >
              Meet customers
              <img
                className="mt-1 aspect-square h-4"
                src={arrow}
                alt="A blue Rebin arrow"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
