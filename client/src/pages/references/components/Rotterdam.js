import React from 'react';
import RotterdamImg from '../../../assets/images/references/blog/rotterdam2.jpg';
import { useTranslation } from 'react-i18next';

const RotterdamBlog = () => {

  const { t } =useTranslation();

  return (
    <main className="mb-20 mt-10 w-full space-y-10 max-w-7xl ml-auto mr-auto p-6">
      {/* Blog Tag */}
      <span className="bg-gradient rounded-md px-2 py-2 text-sm text-white">
      {t("referencespage.blogcard1_span")}
      </span>

      {/* Blog Title */}
      <h1 className="text-4xl font-semibold text-rebin-darkblue">
      {t("referencespage.rotterdam_title")}
      </h1>

      {/* Blog Meta Information */}
      <div className="flex gap-x-6">
        <span className="text-sm">4 min</span>
        <span className="text-sm">{t("referencespage.blogcard1_date")}</span>
      </div>

      {/* Blog Image */}
      <div className="my-10 h-80 w-full rounded-xl">
        <img
          src={RotterdamImg}
          alt="A newly installed bin using the Rebin Smart Waste Sensor in Maarkedal"
          className="h-80 w-full rounded-xl object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="text-justify text-lg font-light">
      {t("referencespage.rotterdam_text1")}
      </div>

      <div className="text-justify text-lg font-light">
      {t("referencespage.rotterdam_text2")}
      </div>

      {/* Quote Section */}
      <div className="flex justify-center">
        <q className="text-rebin-darkblue block text-xl font-semibold">
        {t("referencespage.rotterdam_quote")}
        </q>
      </div>

      <div className="text-justify text-lg font-light">
      {t("referencespage.rotterdam_text3")}
      </div>

      {/* Summary Section */}
      <section className="flex flex-col gap-y-2">
        <span className="text-rebin-darkblue mb-5 font-bold">{t("referencespage.references_summary")}</span>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">1.</span>
          <span className="text-justify text-lg font-light">
          {t("referencespage.rotterdam_summary1")}
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">2.</span>
          <span className="text-justify text-lg font-light">
          {t("referencespage.rotterdam_summary2")}
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">3.</span>
          <span className="text-justify text-lg font-light">
          {t("referencespage.rotterdam_summary3")}
          </span>
        </div>
      </section>

      {/* Tags Section */}
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

export default RotterdamBlog;
