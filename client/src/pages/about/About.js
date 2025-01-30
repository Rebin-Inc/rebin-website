import React from 'react';
import AboutVideo from '../../components/AboutVideo';
import StatisticBar from '../../components/StatisticBar';
import ValueCards from './components/ValueCards';
import TeamCards from './components/TeamCards';
import NewsCards from './components/NewsCards';
import CallToAction from '../../components/CallToAction';
import Pijl from '../../assets/images/Pijl_Rechts_Wit.svg';
import Team from '../../assets/images/about/team.png';
import { useTranslation } from 'react-i18next';

const About = () => {

 const { t } =useTranslation();

  return (
    <main className="max-w-7xl ml-auto mr-auto p-6">
      <div className="mt-10 grid grid-cols-1 items-center gap-x-6 gap-y-12 lg:grid-cols-2 lg:gap-24">
        <div className="order-last lg:order-first">
          <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          {t("aboutpage.hero_span")}
          </h1>
          <h2 className="w-2xl mt-4 text-5xl font-bold text-rebin-darkblue">{t("aboutpage.hero_title")}</h2>
          <p className="text-md font-regular mt-6 text-balance">
          {t("aboutpage.hero_description")}
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
            {t("aboutpage.mission_span")}
            </h1>
            <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue sm:text-left">
            {t("aboutpage.mission_title")}
            </h2>
            <p className="mt-6 sm:text-left">
            {t("aboutpage.mission_description")}
            </p>
          </div>
        </div>
      </div>
      {/*

      <div className="mt-20 lg:mt-28 flex flex-col text-center items-center">
        <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          Core values
        </h1>
        <h2 className="mt-4 text-center text-4xl font-bold">
          What is important for us
        </h2>
        <ValueCards></ValueCards>
      </div>
       */}


      <div className="mt-20 lg:mt-36 flex flex-col text-center items-center">
        <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
        {t("aboutpage.team_span")}
        </h1>
        <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue">
        {t("aboutpage.team_title")}
        </h2>
        <TeamCards></TeamCards>
        <button
            className="special-button flex items-center bg-gradient mt-2 w-fit px-4 py-3 text-white font-semibold rounded-lg"
            onClick={() => (window.location.href = 'contact')} // Use onClick for navigation if not using React Router
          >
            {t("aboutpage.team_cta")}
            <img src={Pijl} alt="Arrow Icon" className="w-8 h-8" />
      </button>
      </div>
      <div className="mt-20 lg:mt-28">
        <h1 className="mt-20 text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
        {t("aboutpage.articles_span")}
        </h1>
        <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue">{t("aboutpage.articles_title")}</h2>
        <NewsCards></NewsCards>
      </div>
      <CallToAction></CallToAction>
    </main>
  );
};

export default About;
