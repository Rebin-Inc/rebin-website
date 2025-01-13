import React from 'react';
import Button from './Button';
import LeftArrow from '../assets/images/callToAction/left.svg';
import RightArrow from '../assets/images/callToAction/right.svg';
import Pijl from '../assets/images/Pijl_Rechts_Wit.svg';

const CallToAction = () => {
  return (
    <section className="mt-10 grid h-80 sm:h-80 md:h-96">
      <div className="sm:h-70 absolute left-0 z-10 h-80 w-full min-w-max md:h-96">
        <div className="xs:h-56 flex h-80 w-full gap-x-6 md:h-full">
          <img
            src={LeftArrow}
            alt="background with rebin arrow pointing right"
            className="mr-auto hidden h-full sm:block"
          />
          <img
            src={RightArrow}
            alt="background with rebin arrow pointing left"
            className=" ml-auto hidden h-full lg:block"
          />
        </div>
      </div>
      <div className="p-6 sm:p-0 z-20 space-y-6 place-self-center">
        <h2 className="text-3xl font-bold">Is your organization next?</h2>
        <h3 className="text-3xl">Start now</h3>
        <div className="mx-auto w-fit">
          <button
            className="special-button flex items-center bg-gradient mt-2 w-fit px-4 py-3 text-white font-semibold rounded-lg"
            onClick={() => (window.location.href = 'contact')} // Use onClick for navigation if not using React Router
          >
            Contact us
            <img src={Pijl} alt="Arrow Icon" className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

