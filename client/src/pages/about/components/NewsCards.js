import React from 'react';
import { Link } from 'react-router-dom';
import Article1 from '../../../assets/images/about/newsCards/Artikel1.jpg';
import Article2 from '../../../assets/images/about/newsCards/Artikel2.jpg';
import Article3 from '../../../assets/images/about/newsCards/Artikel3.jpg';
import Article4 from '../../../assets/images/about/newsCards/Artikel4.jpg';
import { useTranslation } from 'react-i18next';

const NewsCards = () => {

  const { t } =useTranslation();

  const news = [
    {
      id: 1,
      title:
      t("aboutpage.article1_title"),
      duration: '1 min',
      date: t("aboutpage.article1_date"),
      image: Article1,
      href: 'https://www.vrt.be/vrtnws/nl/2023/10/22/maarkedal-zet-slimme-vuilbakken-in-om-tijd-en-brandstof-van-vuil/',
      image_description:
        'Close-up of the Rebin Smart Waste Sensor installed inside a bin in Maarkedal.',
    },
    {
      id: 2,
      title:
      t("aboutpage.article2_title"),
      duration: '3 min',
      date: t("aboutpage.article2_date"),
      image: Article2,
      href: 'https://www.durfdenken.be/nl/ugenters/de-slimme-vuilnisbak-van-studentenproject-naar-de-haven-van-rotterdam-en-de-rest-van-de',
      image_description:
        'Group photo of the Rebin team around a newly installed Rebin Smart Waste Sensor.',
    },
    {
      id: 3,
      title:
      t("aboutpage.article3_title"),
      duration: '2 min',
      date: t("aboutpage.article3_date"),
      image: Article4,
      href: 'https://www.hln.be/asse/asse-plaatst-als-vierde-gemeente-in-vlaanderen-vulgraadsensoren-in-publieke-vuilnisbakken~ad21dd83/',
      image_description: 'Group photo of the Rebin team and the local government of Asse around a newly installed Rebin Smart Waste Sensor.',
    },
  ];

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="my-16 grid place-content-center gap-10 md:grid-cols-3">
      {news.map((article) => (
        <button className="flex max-w-96 content-stretch">
          <Link onClick={() => openInNewTab(article.href)} className="h-full">
            <div className="flex h-full flex-col rounded-xl border bg-white bg-clip-border p-4 pb-8 text-gray-700 shadow-around">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={article.image}
                  alt={article.image_description}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="bg-rebin-grey mb-6 mt-10 w-32 rounded-lg px-1">
                <h5 className="text-gradient-horizontal mx-auto font-bold">
                {t("aboutpage.news_article_span")}
                </h5>
              </div>
              <h5 className="text-blue-gray-900 mb-2 block text-left font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                {article.title}
              </h5>
              <p className="text-blue-gray-500 mt-auto text-left font-sans text-sm">
                {article.duration} &emsp;
                {article.date}
              </p>
            </div>
          </Link>
        </button>
      ))}
    </div>
  );
};

export default NewsCards;
