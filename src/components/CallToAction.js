import React from "react";
import Button from "../components/Button";

const CallToAction = () => {
  return (
    <section className="text-center h-80">
      <div className="bg-rebin-grey absolute h-80 w-full min-w-max left-0 -z-10">
      </div>
      <div className="text-center space-y-6 pt-24">
        <h2 className="text-3xl font-bold">
          Is your organisation next?
        </h2>
        <Button text="Contact us" arrow={true} href="/contact" />
      </div>
    </section>
  )
};

export default CallToAction;
