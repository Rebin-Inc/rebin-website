import React from "react";
import StatisticBar from "./components/StatisticBar";
import SolutionCards from "./components/SolutionCards";
import AboutVideo from "../../components/AboutVideo";
import WhyChooseUsCards from "./components/WhyChooseUsCards";
import Industries from "./components/Industries";
import Testimonial from "./components/Testimonial";
import CallToAction from "../../components/CallToAction";
import PartnersSection from "./components/PartnersSection";
import ArrowRightWhite from "../../assets/images/Pijl_Rechts_Wit.svg";
import SmartCity from "../../assets/videos/smart_city.MP4";

const Home = () => {
  return (
    <main className="space-y-20 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col order-3 md:order-1 space-y-6">
          <h1 className="mt-8 font-bold text-4xl md:text-5xl">
            The <span className="text-gradient-horizontal">nr.1 platform </span>
            for efficient waste management
          </h1>
          <p className="text-lg max-w-xl">
            Our team of experts has years of experience in the IT industry and a
            passion for innovative technology solutions.{" "}
          </p>
          <button className="md:mt-12 w-36 justify-center rounded-full p-2.5 px-3 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Contact us
          </button>
        </div>
        <div className="order-2 self-center overflow-hidden">
          <video
            className="place-self-center rotate-6"
            autoplay="autoplay"
            loop
          >
            <source src={SmartCity} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <StatisticBar></StatisticBar>
      <div className="text-center">
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Solutions
        </h1>
        <h2 className="font-bold text-4xl mt-4">
          Check out our different offerings
        </h2>
        <SolutionCards></SolutionCards>
      </div>
      <div className="grid grid-cols lg:grid-cols-2 lg:grid-rows-2 gap-x-20 gap-y-16 lg:gap-y-0 place-items-center lg:place-items-start">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-gradient-horizontal font-semibold text-3xl">
            About
          </h1>
          <h2 className="font-semibold text-4xl mt-4">
            We believe that waste management can be more efficient
          </h2>
        </div>
        <div className="lg:row-start-1 lg:col-start-1 lg:row-span-2 w-fit place-self-center max-w-3xl">
          <AboutVideo></AboutVideo>
        </div>
        <div className="lg:col-start-2 lg:row-start-2 space-y-6 max-w-2xl">
          <p className="text-balance">
            That is why we're committed to to achieve a more cost-efficient and
            environmentally friendly way of waste collection. We aim to make
            every bin a smart bin by combining hardware and software. In this
            way, we want to make a positive contribution to improving waste
            management and enhancing sustainability.
          </p>
          <button className="relative inline-flex items-center justify-center space-x-2 px-8 rounded-full p-2 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">View case study</span>
            View case study
            <img src={ArrowRightWhite} alt="Rebin Arrow" className="w-8" />
          </button>
        </div>
      </div>
      <PartnersSection></PartnersSection>
      <div>
        <h1 className="text-center text-gradient-horizontal font-bold text-3xl">
          Why choose us?
        </h1>
        <h2 className="text-center font-bold text-4xl mt-4">
          Global leader in waste management
        </h2>
        <WhyChooseUsCards></WhyChooseUsCards>
      </div>
      <div>
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Applicable industries
        </h1>
        <h2 className="font-bold text-4xl mt-4">We can help you</h2>
        <Industries></Industries>
      </div>
      <div>
        <h1 className="text-gradient-horizontal font-bold text-3xl">
          Testimonials
        </h1>
        <h2 className="font-bold text-4xl mt-4">What our clients say</h2>
        <Testimonial></Testimonial>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default Home;
