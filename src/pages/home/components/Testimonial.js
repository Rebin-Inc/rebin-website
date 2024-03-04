import React from "react";
import joris from "../../../assets/images/customers/joris.svg";
import brakel from "../../../assets/images/customers/Brakel.svg";
import brusselsAirport from "../../../assets/images/customers/Brussels-Airport.svg";
import centerParc from "../../../assets/images/customers/Center-Parcs.svg";
import arrow from "../../../assets/images/Pijl_Rechts_Blauw.svg";

const Testimonial = () => {
  let testimonial =
    "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.";

  return (
    <section className="mx-auto max-w-7xl px-6 my-10">
      <div className="flex flex-col sm:flex-row items-center rounded-md bg-rebin-grey gap-y-10 gap-x-20 p-10">
        <div className="flex flex-col gap-y-6 text-justify">
          <p className="font-light text-sm sm:text-base text-rebin-darkblue">
            {testimonial}
          </p>
          <div className="flex gap-x-5 items-center">
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
          <div className="flex flex-col gap-y-5 gap-x-10 mt-5 ">
            <div className="flex gap-x-5 items-center">
              <a href="/">
                <img src={brusselsAirport} alt="" />
              </a>
              <a href="/">
                <img src={brakel} alt="" />
              </a>
              <a href="/">
                <img src={centerParc} alt="" />
              </a>
            </div>
            <a
              className="flex items-center gap-x-2 text-rebin-blue opacity-80 text-lg lg:text-xl font-semibold hover:opacity-100"
              href="#"
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
