import React from "react";
import AboutVideo from "../../components/AboutVideo";
import StatisticBar from "../../components/StatisticBar";
import ValueCards from "./components/ValueCards";
import TeamCards from "./components/TeamCards";
import NewsCards from "./components/NewsCards";
import CallToAction from "../../components/CallToAction";
import Button from "../../components/Button";

const About = () => {
  return (
    <main className="space-y-20 lg:space-y-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
        <div className="order-last lg:order-first">
          <h1 className="text-gradient-horizontal font-bold text-4xl">
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
            Empowering organisations with smart asset management solutions
          </h2>
          <p className="mt-6">
            Our mission is to achieve a more cost-efficient and environmentally
            friendly way of waste collection. We want to make a positive
            contribution to improving waste management and enhancing
            sustainability.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-gradient-horizontal font-bold text-3xl mx-auto">
          Core values
        </h1>
        <h2 className="text-center font-bold text-4xl mt-4">
          What is important for us
        </h2>
        <ValueCards></ValueCards>
      </div>

      <div className="text-center">
        <h1 className="text-gradient-horizontal font-bold text-3xl mx-auto">
          Our team
        </h1>
        <h2 className="font-bold text-4xl mt-4">
          Meet the Rebineers thriving for impact
        </h2>
        <TeamCards></TeamCards>
        <Button text="Become a Rebineer" arrow={true} href="/contact" />
      </div>
      <div>
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
