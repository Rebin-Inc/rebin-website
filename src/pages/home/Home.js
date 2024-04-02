import React from "react";
import StatisticBar from "../../components/StatisticBar";
import SolutionCards from "./components/SolutionCards";
import AboutVideo from "../../components/AboutVideo";
import WhyChooseUsCards from "./components/WhyChooseUsCards";
import Industries from "./components/Industries";
import Testimonial from "./components/Testimonial";
import CallToAction from "../../components/CallToAction";
import PartnersSection from "./components/PartnersSection";
import SmartCity from "../../assets/videos/home/smart_city.mp4";
import Button from "../../components/Button";

const Home = () => {
  return (
    <main className="md:mt-16 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 items-center gap-y-10">
        <div className="flex flex-col order-1 h-fit">
          <h1 className="font-bold text-4xl md:text-5xl">
            The <span className="text-gradient-horizontal">nr.1 platform </span>
            for efficient asset management
          </h1>
          <p className="text-lg max-w-xl mt-6">
            Access fill level monitoring, optimize collection routes, and obtain key data insights.
          </p>
          <Button text="Contact us" href="/contact" />
        </div>
        <div className="order-2 self-center overflow-hidden">
          <video className="place-self-center" autoPlay loop muted>
            <source src={SmartCity} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <StatisticBar></StatisticBar>
      <div className="text-center mt-20">
        <h1 className="text-gradient-horizontal font-bold text-3xl mx-auto">
          Solutions
        </h1>
        <h2 className="font-bold text-4xl mt-4">
          Discover our comprehensive offering
        </h2>
        <SolutionCards></SolutionCards>
      </div>
      <div className="mt-20 grid grid-cols lg:grid-cols-2 lg:grid-rows-2 gap-x-12 gap-y-16 lg:gap-y-0 place-items-center lg:place-items-start">
        <div className="max-w-2xl mb-6 lg:ml-16">
          <h1 className="text-gradient-horizontal font-semibold text-3xl">
            About
          </h1>
          <h2 className="font-semibold text-4xl mt-4">
            We believe that asset monitoring can be more efficient
          </h2>
        </div>
        <div className="lg:row-start-1 lg:col-start-1 lg:row-span-2 w-full place-self-center max-w-2xl">
          <AboutVideo></AboutVideo>
        </div>
        <div className="lg:col-start-2 lg:ml-16 lg:row-start-2 max-w-2xl">
          <p className="text-balance">
            Our goal is to enhance asset management within organizations.
            Leveraging our solution, you save time, cut costs, and reduce environmental impact.
          </p>
          <Button text="View case study" arrow={true} href="references" />
        </div>
      </div>
      <PartnersSection></PartnersSection>
      <div>
        <h1 className="mt-28 text-center text-gradient-horizontal font-bold text-3xl mx-auto">
          Why choose us?
        </h1>
        <h2 className="text-center font-bold text-4xl mt-4">
          Global leader in waste management
        </h2>
        <WhyChooseUsCards></WhyChooseUsCards>
      </div>
      <div className="mt-20">
        <h1 className="text-gradient-horizontal font-bold text-3xl mx-auto">
          Applications
        </h1>
        <h2 className="font-bold text-4xl mt-4 text-center">We can help you</h2>
        <Industries></Industries>
      </div>
      <div className="mt-20">
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
