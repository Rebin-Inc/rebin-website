import React, { useState } from 'react';
import WithWithoutRebin from './components/WithWithoutRebin';
import Benefits from './components/Benefits';
import Feature from './components/Feature';
import CallToAction from '../../../components/CallToAction';
import { useTranslation } from 'react-i18next';

const Cities = () => {

  const { t } =useTranslation();

  return (
    <>
      <main className="max-w-7xl ml-auto mr-auto p-6">
        <div className="mt-5 flex flex-col items-center gap-x-6 gap-y-5 text-center">
          <span className="text-rebin-blue font-extralight text-md border border-rebin-blue-color px-3 py-2 rounded-lg">
          {t("citiespage.hero_span")}
          </span>
          <h1 className="text-rebin-darkblue text-3xl font-bold md:text-5xl md:mt-2 max-w-4xl">
          {t("citiespage.hero_title")}
          </h1>
          <p className="text-rebin-darkblue font-light mt-4 max-w-xl text-lg">
          {t("citiespage.hero_description")}
          </p>
          <button onClick={() => (window.location.href = '../contact')}   className="special-button bg-gradient mt-6 w-fit px-4 py-3 text-white font-regular rounded-lg">
          {t("citiespage.hero_cta")}
          </button>
        
          <div className='mt-16'>
            <WithWithoutRebin></WithWithoutRebin>
          </div>
          
        </div>

        <div className="flex flex-col mt-24 text-left">
          <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          {t("citiespage.benefits_span")}
          </h1>
          <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue mb-6 max-w-2xl">
          {t("citiespage.benefits_title")}
          </h2>
          <Benefits></Benefits>
        </div>

        <div className="flex flex-col mt-24 text-center items-center">
        <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
        {t("citiespage.features_span")}
        </h1>
        <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue mb-10">
        {t("citiespage.features_title")}
        </h2>
        <Feature></Feature>
      </div>
      
      </main>
      <CallToAction></CallToAction>
    </>
  )
}

export default Cities