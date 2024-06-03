import React from 'react';
import StatisticBar from '../../components/StatisticBar';
import SolutionCards from './components/SolutionCards';
import AboutVideo from '../../components/AboutVideo';
import WhyChooseUsCards from './components/WhyChooseUsCards';
import Industries from './components/Industries';
import Testimonial from './components/Testimonial';
import CallToAction from '../../components/CallToAction';
import PartnersSection from './components/PartnersSection';
import Button from '../../components/Button';
import SmartCityVideo from './components/SmartCityVideo';

const Home = () => {
  return (
    <main className="pb-0 md:mt-16">
      <div className="grid grid-cols-1 items-center gap-x-6 gap-y-10 md:grid-cols-2">
        <div className="order-1 flex h-fit flex-col">
          <h1 className="text-4xl font-bold md:text-5xl">
            The <span className="text-gradient-horizontal">nr.1 platform </span>
            for efficient asset management
          </h1>
          <p className="mt-6 max-w-xl text-lg">
            Access fill level monitoring, optimize collection routes, and obtain
            key data insights.
          </p>
          <Button text="Contact us" href="/contact" />
        </div>
        <div className="order-2 self-center overflow-hidden">
          <SmartCityVideo />
        </div>
      </div>
      <StatisticBar></StatisticBar>
      <div className="mt-20 text-center">
        <h1 className="text-gradient-horizontal mx-auto text-3xl font-bold">
          Solutions
        </h1>
        <h2 className="mt-4 text-4xl font-bold">
          Discover our comprehensive offering
        </h2>
        <SolutionCards></SolutionCards>
      </div>
      <div className="grid-cols mt-20 grid place-items-center gap-x-12 gap-y-16 lg:grid-cols-2 lg:grid-rows-2 lg:place-items-start lg:gap-y-0">
        <div className="mb-6 max-w-2xl lg:ml-16">
          <h1 className="text-gradient-horizontal text-3xl font-semibold">
            About
          </h1>
          <h2 className="mt-4 text-4xl font-semibold">
            We believe that asset monitoring can be more efficient
          </h2>
        </div>
        <div className="w-full max-w-2xl place-self-center lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <AboutVideo></AboutVideo>
        </div>
        <div className="max-w-xl lg:col-start-2 lg:row-start-2 lg:ml-16">
          <p className="text-balance">
            Our goal is to enhance asset management within organizations.
            Leveraging our solution, you save time, cut costs, and reduce
            environmental impact.
          </p>
          <Button text="View case study" arrow={true} href="references" />
        </div>
      </div>
      <PartnersSection></PartnersSection>
      <div>
        <h1 className="text-gradient-horizontal mx-auto mt-28 text-center text-3xl font-bold">
          Why choose us?
        </h1>
        <h2 className="mt-4 text-center text-4xl font-bold">
          Global leader in asset management
        </h2>
        <WhyChooseUsCards></WhyChooseUsCards>
      </div>
      <div className="mt-20">
        <h1 className="text-gradient-horizontal mx-auto text-3xl font-bold">
          Applications
        </h1>
        <h2 className="mt-4 text-center text-4xl font-bold">We can help you</h2>
        <Industries></Industries>
      </div>
      <div className="mt-20">
        <h1 className="text-gradient-horizontal text-3xl font-bold">
          Testimonials
        </h1>
        <h2 className="mt-4 text-4xl font-bold">What our clients say</h2>
        <Testimonial></Testimonial>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default Home;
