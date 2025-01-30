import React from 'react';
import ContactForm from './components/ContactForm';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } =useTranslation();

  return (
    <main className="space-y-16 pb-32 max-w-7xl ml-auto mr-auto p-6">
      <div className="mt-5 flex flex-col text-center items-center gap-4">
        <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          {t("contactpage.hero_span")}
        </h1>
        <h2 className="text-center  max-w-2xl text-4xl font-bold text-rebin-darkblue">
          {t("contactpage.hero_title")}
        </h2>
      </div>
      <ContactForm></ContactForm>
    </main>
  );
};

export default Contact;
