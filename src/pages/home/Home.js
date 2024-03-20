import React from "react";
import StatisticBar from "./components/StatisticBar";
import SolutionCards from "./components/SolutionCards";
import AboutVideo from "../../components/AboutVideo";
import WhyChooseUsCards from "./components/WhyChooseUsCards";
import Industries from "./components/Industries";
import Testimonial from "./components/Testimonial";
import CallToAction from "../../components/CallToAction";
import PartnersSection from "./components/PartnersSection";
import SmartCity from "../../assets/videos/smart_city.MP4";
import Button from "../../components/Button";

const Home = () => {
  return (
    <main className="space-y-20 md:mt-16 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col order-3 md:order-1 h-fit">
          <h1 className="font-bold text-4xl md:text-5xl">
            The <span className="text-gradient-horizontal">nr.1 platform </span>
            for efficient waste management
          </h1>
          <p className="text-lg max-w-xl mt-6">
            Our team of experts has years of experience in the IT industry and a
            passion for innovative technology solutions.
          </p>
          <Button text="Contact us" href="/contact" />
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
        <div className="max-w-2xl place-self-end mb-6">
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
        <div className="lg:col-start-2 lg:row-start-2 max-w-2xl">
          <p className="text-balance">
            That is why we're committed to to achieve a more cost-efficient and
            environmentally friendly way of waste collection. We aim to make
            every bin a smart bin by combining hardware and software. In this
            way, we want to make a positive contribution to improving waste
            management and enhancing sustainability.
          </p>
          <Button text="View case study" arrow={true} />
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
