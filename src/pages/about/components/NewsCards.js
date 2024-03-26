import React from "react";
import { Link } from "react-router-dom";
import Article1 from "../../../assets/images/about/Artikel1.jpg";
import Article2 from "../../../assets/images/about/Artikel2.jpg";
import Article3 from "../../../assets/images/about/Artikel3.jpg";


const NewsCards = () => {
  const news = [
    {
      id: 1,
      title:
        "Maarkedal zet slimme vuilnisbakken in om te besparen op tijd en brandstof van vuilniswagens",
      duration: "1 min",
      date: "August 20, 2024",
      image: Article1,
      href: "https://www.vrt.be/vrtnws/nl/2023/10/22/maarkedal-zet-slimme-vuilbakken-in-om-tijd-en-brandstof-van-vuil/",
      image_description: "Close-up of the Rebin Smart Waste Sensor installed inside a bin in Maarkedal."
    },
    {
      id: 2,
      title:
        "Rebin (Maarkedal) en Straal (Gent) halen 50.000 euro binnen via Unizo Oost-Vlaanderen",
      duration: "3 min",
      date: "August 20, 2024",
      image: Article2,
      href: "https://www.unizo.be/berichten/pers/rebin-maarkedal-en-straal-gent-halen-50000-euro-binnen-unizo-oost-vlaanderen",
      image_description: "Group photo of the Rebin team around a newly installed Rebin Smart Waste Sensor."
    },
    {
      id: 3,
      title:
        "Slimme vuilnisbakken vangen tekort aan gemeentepersoneel op in Brakel",
      duration: "2 min",
      date: "August 20,2024",
      image: Article3,
      href: "https://www.nieuwsblad.be/cnt/dmf20231102_95819056",
      image_description: "Local authority of the municipality of Brakel overseeing the installation of the Rebin Smart Waste Sensors."
    },
  ];

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid md:grid-cols-3 my-16 place-content-center gap-10">
      {news.map((article) => (
        <button className="max-w-96 flex content-stretch">
          <Link onClick={() => openInNewTab(article.href)} className="h-full" >
            <div className="border p-4 pb-8 flex flex-col text-gray-700 bg-white shadow-around bg-clip-border rounded-xl h-full">
              <div className="overflow-hidden rounded-xl">
                <img src={article.image} alt={article.image_description} className="w-full" />
              </div>
              <div className="mb-6 mt-10 bg-rebin-grey w-28 rounded-lg">
                <h5 className="text-gradient-horizontal font-bold mx-auto">
                  News article
                </h5>
              </div>
              <h5 className="text-left block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {article.title}
              </h5>
              <p className="mt-auto text-left text-sm font-sans text-blue-gray-500">
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
