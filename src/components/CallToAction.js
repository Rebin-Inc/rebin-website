import React from "react";
import Button from "../components/Button";
import LeftArrow from "../assets/images/callToAction/left.svg";
import RightArrow from "../assets/images/callToAction/right.svg";

const CallToAction = () => {
  return (
    <section className="-mt-20 h-64 sm:h-80 md:h-96 grid">
      <div className="absolute h-64 sm:h-80 md:h-96 w-full min-w-max left-0 -z-10">
        <div className="flex gap-x-12 w-full h-64 xs:h-56 sm:h-full">
          <img src={LeftArrow} alt="" className="mr-auto h-full" />
          <img src={RightArrow} alt="" className="ml-auto h-full invisible sm:visible" />
        </div>
      </div>
      <div className="space-y-6 place-self-center">
        <h2 className="text-3xl font-bold">
          Is your organization next?
        </h2>
        <h3 className="text-3xl">Start now</h3>
        <div className="mx-auto w-fit">
          <Button text="Contact us" arrow={true} href="/contact" margin="0" />
        </div>
      </div>
    </section>
  )
};

export default CallToAction;
