import React from 'react';
import { Link } from 'react-router-dom';
import MaarkedalImg from '../../../assets/images/references/blog/maarkedal.png';
import MoorsledeImg from '../../../assets/images/references/blog/moorslede.jpg';
import RotterdamImg from '../../../assets/images/references/blog/rotterdam.jpg';
import { useTranslation } from 'react-i18next';

const BlogCards = () => {

  const { t } =useTranslation();

  const news = [
    {
      id: 3,
      span: t("referencespage.blogcard3_span"),
      title: t("referencespage.blogcard3_title"),
      duration: '4 min',
      date: t("referencespage.blogcard3_date"),
      image: RotterdamImg,
      href: '/references/rotterdam',
      image_description: 'aerial view of the port of Rotterdam',
    },
    {
      id: 2,
      span: t("referencespage.blogcard2_span"),
      title: t("referencespage.blogcard2_title"),
      duration: '3 min',
      date: t("referencespage.blogcard2_date"),
      image: MoorsledeImg,
      href: '/references/moorslede',
      image_description: 'Image of the city centre of Moorslede',
    },
    {
      id: 1,
      span: t("referencespage.blogcard1_span"),
      title: t("referencespage.blogcard1_title"),
      duration: '4 min',
      date: t("referencespage.blogcard1_date"),
      image: MaarkedalImg,
      href: '/references/maarkedal',
      image_description: 'Image of the Rebin Smart Waste Sensor installed inside a bin in Maarkedal.',
    },
  ];

  return (
    <div className="my-16 grid place-content-center gap-10 md:grid-cols-3">
      {news.map((article) => (
        <button key={article.id} className="special-button flex max-w-96 content-stretch">
          <Link to={article.href} className="h-full">
            <div className="flex h-full flex-col rounded-xl border bg-white bg-clip-border p-4 pb-8 text-gray-700 shadow-around">
              <div className="overflow-hidden rounded-xl h-64 w-full">
                <img
                  src={article.image}
                  alt={article.image_description}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-rebin-grey mb-6 mt-10 w-28 rounded-lg">
                <h5 className="text-gradient-horizontal mx-auto font-bold">
                {article.span}
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

export default BlogCards;

