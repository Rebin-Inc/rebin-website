import React from 'react';
import { Link } from 'react-router-dom';
import Maarkedal from '../../../assets/images/references/blog/maarkedal.png';
import Article1 from '../../../assets/images/about/newsCards/Artikel1.jpg';
import Article2 from '../../../assets/images/about/newsCards/Artikel2.jpg';
import Article3 from '../../../assets/images/about/newsCards/Artikel3.jpg';

const BlogCards = () => {
  const news = [
    {
      id: 1,
      title:
        'Optimizing waste collection in Maarkedal',
      duration: '3 min',
      date: 'October 22, 2023',
      image: Maarkedal,
      href: 'https://www.vrt.be/vrtnws/nl/2023/10/22/maarkedal-zet-slimme-vuilbakken-in-om-tijd-en-brandstof-van-vuil/',
      image_description:
        'Close-up of the Rebin Smart Waste Sensor installed inside a bin in Maarkedal.',
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
                  className="w-full"
                />
              </div>
              <div className="bg-rebin-grey mb-6 mt-10 w-28 rounded-lg">
                <h5 className="text-gradient-horizontal mx-auto font-bold">
                  Technology
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