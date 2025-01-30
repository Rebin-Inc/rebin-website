import React, { useState } from 'react';
import CallToAction from '../../../components/CallToAction';
import SmartCityVideo from './components/SmartCityVideo';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Mockup1 from '../../../assets/images/solution/collector1Mockup.png'
import Mockup2 from '../../../assets/images/solution/collector2Mockup.png'
import Mockup3 from '../../../assets/images/solution/collector3Mockup.png'
import { useTranslation } from 'react-i18next';

const Collectors = () => {

  const { t } =useTranslation();
  

  return (
    <>
      <main className="max-w-7xl ml-auto mr-auto p-6">
      <div className="grid grid-cols-1 items-center gap-x-6 gap-y-10 md:grid-cols-2">
        <div className="order-1 flex h-fit flex-col gap-y-5">
          <span className="w-fit text-rebin-blue font-extralight text-md border border-rebin-blue-color px-3 py-2 rounded-lg">
            {t("collectorpage.hero_span")}
          </span>
          <h1 className="text-rebin-darkblue text-3xl font-bold md:text-5xl md:mt-2 ">
          {t("collectorpage.hero_title")}
          </h1>
          <p className="mt-2 font-light max-w-xl text-lg">
          {t("collectorpage.hero_description")}
          </p>
          <button onClick={() => (window.location.href = '../contact')}  className="special-button bg-gradient mt-2 w-fit px-4 py-3 text-white font-regular rounded-lg">
          {t("collectorpage.hero_cta_button")}
          </button>
        </div>
        <div className="order-2 self-center overflow-hidden">
          <SmartCityVideo></SmartCityVideo>
        </div>
      </div>

      <div className="flex flex-col mt-16 text-center items-center">
        <Features></Features>
      </div>

      <div className="mt-24">
  {/* Title Section */}
  <div className="flex flex-col text-center items-center">
    <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
      {t("collectorpage.solution_span")}
    </h1>
    <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue mb-10 max-w-xl">
      {t("collectorpage.solution_title")}
    </h2>
  </div>

  {/* First Section: Monitor, Optimize and Navigate */}
  <div className="mt-10 grid gap-x-4 gap-y-12 md:grid-cols-2 lg:mt-16">
    <div className="flex items-center order-2 md:order-1">
      <div>
        <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue sm:text-left">
        {t("collectorpage.solution_1_title")}
        </h2>
        <p className="mt-6 mb-16 sm:text-left font-light">
        {t("collectorpage.solution_1_description")}
        </p>
      </div>
    </div>
    <div className="grid place-items-center order-1 md:order-2">
      <div className="blob absolute -z-10"></div>
      <img
        className="mx-auto my-auto aspect-square w-full rounded-lg object-contain sm:w-3/5 md:w-96"
        src={Mockup2}
        alt="The Rebin team"
      />
    </div>
  </div>

{/* Second Section: Ensure Timely Waste Collection */}
<div className="grid gap-x-4 gap-y-12 md:grid-cols-2 lg:mt-10 items-center">
  <div className="flex items-center order-2">
    <div>
      <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue sm:text-left">
        {t("collectorpage.solution_2_title")}
      </h2>
      <p className="mt-6 sm:text-left font-light">
        {t("collectorpage.solution_2_description")} 
      </p>
    </div>
  </div>
  <div className="grid place-items-center order-1">
      <div className="blob absolute -z-10"></div>
      <img
        className="mx-auto my-auto aspect-square w-full rounded-lg object-contain sm:w-3/5 md:w-96"
        src={Mockup1}
        alt="The Rebin team"
      />
  </div> 
</div>



  {/* Third Section: Empowering Organizations */}
  <div className="grid gap-x-4 gap-y-12 md:grid-cols-2 lg:mt-10 items-center">
    <div className="flex items-center order-2 md:order-1">
      <div>
        <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue sm:text-left">
          {t("collectorpage.solution_3_title")}
        </h2>
        <p className="mt-6 sm:text-left font-light">
          {t("collectorpage.solution_3_description")}
        </p>
      </div>
    </div>
    <div className="grid place-items-center order-1 md:order-2">
      <div className="blob absolute -z-10"></div>
      <img
        className="mx-auto my-auto aspect-square w-full rounded-lg object-contain sm:w-3/5 md:w-96"
        src={Mockup3}
        alt="The Rebin team"
      />
    </div>
  </div>
</div>

<div className="flex flex-col md:flex-row mt-24 ">
  <div className='flex flex-col text-left w-fit'>
    <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
      {t("collectorpage.benefits_span")}
    </h1>
    <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue mb-6">
      {t("collectorpage.benefits_title")}
    </h2>
  </div>
  <Benefits></Benefits>
</div>
</main>



      <CallToAction></CallToAction>

    </>
  )
}

export default Collectors