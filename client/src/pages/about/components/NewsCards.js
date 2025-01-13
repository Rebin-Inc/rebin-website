import React from 'react';
import { Link } from 'react-router-dom';
import Article1 from '../../../assets/images/about/newsCards/Artikel1.jpg';
import Article2 from '../../../assets/images/about/newsCards/Artikel2.jpg';
import Article3 from '../../../assets/images/about/newsCards/Artikel3.jpg';
import Article4 from '../../../assets/images/about/newsCards/Artikel4.jpg';

const NewsCards = () => {
  const news = [
    {
      id: 1,
      title:
        'Maarkedal zet slimme vuilnisbakken in om te besparen op tijd en brandstof van vuilniswagens',
      duration: '1 min',
      date: 'October 22, 2023',
      image: Article1,
      href: 'https://www.vrt.be/vrtnws/nl/2023/10/22/maarkedal-zet-slimme-vuilbakken-in-om-tijd-en-brandstof-van-vuil/',
      image_description:
        'Close-up of the Rebin Smart Waste Sensor installed inside a bin in Maarkedal.',
    },
    {
      id: 2,
      title:
        'De slimme vuilnisbak: van studentenproject naar de haven van Rotterdam (en de rest van de wereld?)',
      duration: '3 min',
      date: 'October 22, 2024',
      image: Article2,
      href: 'https://www.durfdenken.be/nl/ugenters/de-slimme-vuilnisbak-van-studentenproject-naar-de-haven-van-rotterdam-en-de-rest-van-de',
      image_description:
        'Group photo of the Rebin team around a newly installed Rebin Smart Waste Sensor.',
    },
    {
      id: 3,
      title:
        'Asse plaatst als vierde gemeente in Vlaanderen vulgraadsensoren in publieke vuilnisbakken',
      duration: '2 min',
      date: 'October 9, 2024',
      image: Article4,
      href: 'https://www.hln.be/asse/asse-plaatst-als-vierde-gemeente-in-vlaanderen-vulgraadsensoren-in-publieke-vuilnisbakken~ad21dd83/',
      image_description: '',
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
                  News article
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
