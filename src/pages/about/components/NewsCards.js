import React from "react";

const NewsCards = () => {
  const news = [
    {
      id: 1,
      title:
        "Maarkedal zet slimme vuilnisbakken in om te besparen op tijd en brandstof van vuilniswagens",
      duration: "1 min",
      date: "August 20, 2024",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
    },
    {
      id: 2,
      title:
        "Rebin (Maarkedal) en Straal (Gent) halen 50.000 euro binnen via Unizo Oost-Vlaanderen",
      duration: "3 min",
      date: "August 20, 2024",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
    },
    {
      id: 3,
      title:
        "Slimme vuilnisbakken vangen tekort aan gemeentepersoneel op in Brakel",
      duration: "2 min",
      date: "August 20,2024",
      image:
        "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
    },
  ];

  return (
    <div className="grid grid-cols-3">
      {news.map((article) => (
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={article.image} alt="News article" />
          </div>
          <div class="p-6">
            <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {article.title}
            </h5>
            <p class="mb-4 text-sm font-sans text-blue-gray-500">
              {article.duration} &emsp;
              {article.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCards;
