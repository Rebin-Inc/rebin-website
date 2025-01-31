import React from 'react';
import MoorsledeImg from '../../../assets/images/references/blog/moorslede.jpg';
import {Helmet} from 'react-helmet';
import { useTranslation } from 'react-i18next';

const MoorsledeBlog = () => {

  const { t } =useTranslation();

  return (

    <main className="mb-20 mt-10 w-full space-y-10 p-6 max-w-7xl ml-auto mr-auto">
      <Helmet>
        <meta name="description" content="Case-study Moorslede"/>
        <meta name="language" content="eng"/>
        <meta property="og:title" content="Real-time fill-level data helps Moorslede stay compliant with waste management legislation" />
        <meta property="og:description" content="Discover how smart sensors can optimize public waste collection" />
        <meta property='og:image' content="https://www.rebin.be/Iepersestraat.jpg" />
        <meta property="og:url" content="https://www.rebin.be/references/moorslede"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:site_name" content="rebin.be"/>
        <meta property="article:published_time" content="2024-07-29T13:38:24+02:00"></meta>
        <meta property="article:author" content="Rebin"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>

        {/* Add more meta tags as needed */}
      </Helmet>
      <span className="bg-gradient rounded-md px-2 py-2 text-sm text-white">
      {t("referencespage.blogcard2_span")}
      </span>
      <h1 className="text-4xl font-semibold text-rebin-darkblue">
      {t("referencespage.moorslede_title")}
      </h1>
      <div className="flex gap-x-6">
        <span className="text-sm">3 min</span>
        <span className="text-sm">{t("referencespage.blogcard2_date")}</span>
      </div>
      <div className="my-10 h-80 w-full rounded-xl">
        <img
          src={MoorsledeImg}
          alt="A newly installed bin using the Rebin Smart Waste Sensor in Maarkedal"
          className="h-80 w-full rounded-xl object-cover"
        />
      </div>
      <div className="text-justify text-lg font-light">
      {t("referencespage.moorslede_text1")}
      </div>
      <div className="text-justify text-lg font-light">
      {t("referencespage.moorslede_text2")}
      </div>
      <div className="flex justify-center">
        <q className="text-rebin-darkblue block text-xl font-semibold">
        {t("referencespage.moorslede_quote")}
        </q>
      </div>
      <div className="text-justify text-lg font-light">
      {t("referencespage.moorslede_text3")}
      </div>
      <section className="flex flex-col gap-y-2">
        <span className="text-rebin-darkblue mb-5 font-bold">{t("referencespage.references_summary")}</span>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">1.</span>
          <span className="text-justify text-lg font-light">
          {t("referencespage.moorslede_summary1")}
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">2.</span>
          <span className="text-justify text-lg font-light">
          {t("referencespage.moorslede_summary2")}
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">3.</span>
          <span className="text-justify text-lg font-light">
          {t("referencespage.moorslede_summary3")}
          </span>
        </div>
      </section>
      <section className="border-y-2 border-slate-100 p-10">
        <div className="mx-auto flex max-w-sm flex-col justify-center gap-y-5 sm:flex-row sm:gap-x-5">
          <span className="bg-gradient rounded-md px-2 py-2 text-center text-sm text-white">
            Smart city
          </span>
          <span className="bg-gradient rounded-md px-2 py-2 text-center text-sm text-white">
            Waste management
          </span>
          <span className="bg-gradient rounded-md px-2 py-2 text-center text-sm text-white">
            Sensors
          </span>
        </div>
      </section>
    </main>
  );
};

export default MoorsledeBlog;
