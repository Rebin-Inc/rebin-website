import React from "react";
import AboutVideo from "./components/AboutVideo";
import StatisticBar from "./components/StatisticBar";
import ValueCards from "./components/ValueCards";
import TeamCards from "./components/TeamCards";
import NewsCards from "./components/NewsCards";
import ArrowRightWhite from "../../assets/images/Pijl_Rechts_Wit.svg";
import Swoosh from "../../assets/images/swoosh.svg";

const About = () => {
  return (
    <main className="space-y-20 lg:space-y-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="order-last lg:order-first">
          <h1 className="text-gradient-horizontal font-bold text-4xl">
            Our story
          </h1>
          <h2 className="font-bold text-5xl mt-4 w-2xl">How we started</h2>
          <p className="text-md mt-6 text-balance">
            During a leisurely stroll in the park, we came across an overflowing
            trash bin, surrounded by litter that clearly had a negative impact
            on the environment. Instead of ignoring it, we decided to take
            action. Soon, we realized that the inefficiency in the collection
            process was the root cause. Driven by our concern for the
            environment and the community, we set out to improve the collection
            system, aiming to reduce the nuisance of overflowing trash bins.
          </p>
        </div>
        <AboutVideo></AboutVideo>
      </div>
      <StatisticBar></StatisticBar>
      <div className="grid md:grid-cols-2 px-10 gap-4">
        <img
          className="w-full sm:w-3/5 md:w-72 aspect-square rounded-lg object-fill mx-auto my-auto"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature"
        />
        <div>
          <h1 className="text-gradient-horizontal font-bold text-3xl">
            Our mission
          </h1>
          <h2 className="font-bold text-4xl mt-4">
            Empowering organizations with smart waste management solutions
          </h2>
          <p>
            Our mission is to achieve a more cost-efficient and environmentally
            friendly way of waste collection. We want to make a positive
            contribution to improving waste management and enhancing
            sustainability.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-gradient-horizontal font-bold text-3xl">
          Core values
        </h1>
        <h2 className="text-center font-bold text-4xl mt-4">
          What is important for us
        </h2>
        <ValueCards></ValueCards>
      </div>

      <div className="text-center">
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Our team
        </h1>
        <h2 className="font-bold text-4xl mt-4">
          Meet the Rebineers thriving for impact
        </h2>
        <TeamCards></TeamCards>
        <button className="relative inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="sr-only">Become a Rebineer</span>
          Become a Rebineer
          <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
        </button>
      </div>
      <div>
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Articles
        </h1>
        <h2 className="font-bold text-4xl mt-4">Rebin in the news</h2>
        <NewsCards></NewsCards>
      </div>
      <div className="grid place-content-center">
        <img
          src={Swoosh}
          alt="swoosh"
          className="absolute w-max min-w-max place-self-center"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-5xl">Is your organisation next?</h1>
          <h2 className="mt-6 text-5xl">start now</h2>
          <button className="mt-12 mx-auto inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Contact us
            <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
