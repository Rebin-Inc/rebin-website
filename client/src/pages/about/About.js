import React from 'react';
import AboutVideo from '../../components/AboutVideo';
import StatisticBar from '../../components/StatisticBar';
import ValueCards from './components/ValueCards';
import TeamCards from './components/TeamCards';
import NewsCards from './components/NewsCards';
import CallToAction from '../../components/CallToAction';
import Pijl from '../../assets/images/Pijl_Rechts_Wit.svg';
import Team from '../../assets/images/about/team.png';

const About = () => {
  return (
    <main className="max-w-7xl ml-auto mr-auto p-6">
      <div className="mt-10 grid grid-cols-1 items-center gap-x-6 gap-y-12 lg:grid-cols-2 lg:gap-24">
        <div className="order-last lg:order-first">
          <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
            Our story
          </h1>
          <h2 className="w-2xl mt-4 text-5xl font-bold">How we started</h2>
          <p className="text-md font-regular mt-6 text-balance">
            Spotting an overflowing bin in the park, we decided to act.
            Recognizing inefficiencies in waste collection, we resolved to
            enhance the system, tackling overflowing bins and other asset
            challenges to benefit the environment and community.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl place-self-center">
          <AboutVideo></AboutVideo>
        </div>
      </div>
      <StatisticBar></StatisticBar>
      <div className="mt-20 grid gap-x-4 gap-y-12 md:grid-cols-2 lg:mt-28">
        <img
          className="mx-auto my-auto aspect-square w-full rounded-lg object-contain sm:w-3/5 md:w-96"
          src={Team}
          alt="The Rebin team"
        />
        <div className="flex items-center">
          <div>
            <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg sm:mx-0">
              Our mission
            </h1>
            <h2 className="mt-4 text-4xl font-bold  sm:text-left">
              Empowering organisations with smart waste management solutions
            </h2>
            <p className="mt-6 sm:text-left">
              Rebin enables businesses and governments to revolutionize waste management. With our innovative software, we provide real-time monitoring, streamline collection routes, and deliver actionable insights, one asset at a time.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 lg:mt-28 flex flex-col text-center items-center">
        <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          Core values
        </h1>
        <h2 className="mt-4 text-center text-4xl font-bold">
          What is important for us
        </h2>
        <ValueCards></ValueCards>
      </div>

      <div className="mt-20 lg:mt-36 flex flex-col text-center items-center">
        <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          Our team
        </h1>
        <h2 className="mt-4 text-4xl font-bold">
          Meet the Rebineers thriving for impact
        </h2>
        <TeamCards></TeamCards>
        <button
            className="special-button flex items-center bg-gradient mt-2 w-fit px-4 py-3 text-white font-semibold rounded-lg"
            onClick={() => (window.location.href = 'contact')} // Use onClick for navigation if not using React Router
          >
            Become a Rebineer
            <img src={Pijl} alt="Arrow Icon" className="w-8 h-8" />
      </button>
      </div>
      <div className="mt-20 lg:mt-28">
        <h1 className="mt-20 text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          Articles
        </h1>
        <h2 className="mt-4 text-4xl font-bold">Rebin in the news</h2>
        <NewsCards></NewsCards>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default About;
