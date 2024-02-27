import React from "react";
import StatisticBar from "./components/StatisticBar";
import SolutionCards from "./components/SolutionCards";
import AboutVideo from "../../components/AboutVideo";
import WhyChooseUsCards from "./components/WhyChooseUsCards";
import IndustryCards from "./components/IndustryCards";
import TestimonialCard from "./components/TestimonialCard";
import CallToAction from "../../components/CallToAction";
import Infographic from "../../assets/images/infographic.svg";
import PartnersSection from "./components/PartnersSection";

const Home = () => {
  return (
    <main className="space-y-20 lg:space-y-36">
      <div className="grid grid-cols-2">
        <div className="flex flex-col space-y-6">
          <h1 className="font-bold text-5xl">
            The nr.1 platform for efficient waste management
          </h1>
          <p>
            Our team of experts has years of experience in the IT industry and a
            passion for innovative technology solutions.{" "}
          </p>
          <button className="mt-12 mx-auto inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Contact us
          </button>
        </div>
        <img src={Infographic} alt="infographic" />
      </div>
      <StatisticBar></StatisticBar>
      <div>
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Solutions
        </h1>
        <h2 className="font-bold text-4xl mt-4">
          Check out our different offerings
        </h2>
        <SolutionCards></SolutionCards>
      </div>
      <div className="grid grid-cols-2">
        <AboutVideo></AboutVideo>
        <div>
          <h1 className="text-gradient-horizontal font-bold text-3xl">About</h1>
          <h2 className="font-bold text-4xl mt-4">
            We believe that waste management can be more efficient
          </h2>
          <p>
            That is why we're committed to to achieve a more cost-efficient and
            environmentally friendly way of waste collection. We aim to make
            every bin a smart bin by combining hardware and software. In this
            way, we want to make a positive contribution to improving waste
            management and enhancing sustainability.
          </p>
          <button>View case study</button>
        </div>
      </div>
      <PartnersSection></PartnersSection>
      <div>
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Why choose us?
        </h1>
        <h2 className="font-bold text-4xl mt-4">
          Global leader in waste management
        </h2>
        <WhyChooseUsCards></WhyChooseUsCards>
      </div>
      <div>
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Applicable industries
        </h1>
        <h2 className="font-bold text-4xl mt-4">We can help you</h2>
        <IndustryCards></IndustryCards>
      </div>
      <div>
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Testimonials
        </h1>
        <h2 className="font-bold text-4xl mt-4">What our clients say</h2>
        <TestimonialCard></TestimonialCard>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default Home;
