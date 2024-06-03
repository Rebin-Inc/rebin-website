import React from 'react';
import Button from './Button';
import LeftArrow from '../assets/images/callToAction/left.svg';
import RightArrow from '../assets/images/callToAction/right.svg';

const CallToAction = () => {
  return (
    <section className="mt-20 grid h-80 sm:h-80 md:h-96">
      <div className="sm:h-70 absolute left-0 -z-10 h-80 w-full min-w-max md:h-96">
        <div className="xs:h-56 flex h-80 w-full gap-x-6 md:h-full">
          <img
            src={LeftArrow}
            alt="background with rebin arrow pointing right"
            className="mr-auto h-full"
          />
          <img
            src={RightArrow}
            alt="background with rebin arrow pointing left"
            className="ml-auto hidden h-full md:block"
          />
        </div>
      </div>
      <div className="space-y-6 place-self-center">
        <h2 className="text-3xl font-bold">Is your organization next?</h2>
        <h3 className="text-3xl">Start now</h3>
        <div className="mx-auto w-fit">
          <Button text="Contact us" arrow={true} href="/contact" margin="0" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
