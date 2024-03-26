import React from "react";
import AboutVideo from "../../components/AboutVideo";
import StatisticBar from "../../components/StatisticBar";
import ValueCards from "./components/ValueCards";
import TeamCards from "./components/TeamCards";
import NewsCards from "./components/NewsCards";
import CallToAction from "../../components/CallToAction";
import Button from "../../components/Button";
import Team from "../../assets/images/about/team.png";

const About = () => {
  return (
    <main className="">
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12 lg:gap-24 items-center">
        <div className="order-last lg:order-first">
          <h1 className="text-gradient-horizontal font-bold text-4xl ">
            Our story
          </h1>
          <h2 className="font-bold text-5xl mt-4 w-2xl">How we started</h2>
          <p className="text-md font-regular mt-6 text-balance">
            Spotting an overflowing bin in the park, we decided to act.
            Recognizing inefficiencies in waste collection, we resolved to enhance the system,
            tackling overflowing bins and other asset challenges to benefit the environment and community.
          </p>
        </div>
        <div className="max-w-lg mx-auto place-self-center">
          <AboutVideo></AboutVideo>
        </div>
      </div>
      <StatisticBar></StatisticBar>
      <div className="mt-20 lg:mt-28 grid md:grid-cols-2 gap-x-4 gap-y-12">
        <img
          className="w-full sm:w-3/5 md:w-96 aspect-square rounded-lg object-contain mx-auto my-auto"
          src={Team}
          alt="The Rebin team"
        />
        <div className="flex items-center">
          <div>
            <h1 className="text-gradient-horizontal font-bold text-3xl sm:mx-0">
              Our mission
            </h1>
            <h2 className="font-bold text-4xl mt-4  sm:text-left">
              Empowering organisations with smart asset management solutions
            </h2>
            <p className="mt-6 sm:text-left">
              Our mission is to achieve a more cost-efficient and environmentally
              friendly way of waste collection. We want to make a positive
              contribution to improving waste management and enhancing
              sustainability.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 lg:mt-28">
        <h1 className="text-center text-gradient-horizontal font-bold text-3xl mx-auto">
          Core values
        </h1>
        <h2 className="text-center font-bold text-4xl mt-4">
          What is important for us
        </h2>
        <ValueCards></ValueCards>
      </div>

      <div className="text-center mt-20 lg:mt-36">
        <h1 className="text-gradient-horizontal font-bold text-3xl mx-auto">
          Our team
        </h1>
        <h2 className="font-bold text-4xl mt-4">
          Meet the Rebineers thriving for impact
        </h2>
        <TeamCards></TeamCards>
        <Button text="Become a Rebineer" arrow={true} href="/contact" />
      </div>
      <div className="mt-20 lg:mt-28">
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Articles
        </h1>
        <h2 className="font-bold text-4xl mt-4">Rebin in the news</h2>
        <NewsCards></NewsCards>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default About;
