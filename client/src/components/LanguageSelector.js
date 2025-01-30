import React from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSelector = () => {

const languages = [
  {code: "nl", lang: "Nederlands"},
  {code: "en", lang: "English"},
]

  const {i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div className='flex gap-x-2 text-white'>
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "" : "opacity-20"}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.code}
          </button>
        );
      })}
    </div>
  );
  };
  


export default LanguageSelector;