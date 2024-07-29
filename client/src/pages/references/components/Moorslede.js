import React from 'react';
import MoorsledeImg from '../../../assets/images/references/blog/Iepersestraat.jpg';

const MoorsledeBlog = () => {
  return (
    <main className="mb-20 mt-10 w-full space-y-10">
      <span className="bg-gradient rounded-md px-2 py-2 text-sm text-white">
        Technology
      </span>
      <h1 className="text-4xl font-semibold">
        Real-time fill-level data helps Moorslede stay compliant with waste management legislation
      </h1>
      <div className="flex gap-x-6">
        <span className="text-sm">2 min</span>
        <span className="text-sm">Jul 29, 2024</span>
      </div>
      <div className="my-10 h-80 w-full rounded-xl">
        <img
          src={MoorsledeImg}
          alt="A newly installed bin using the Rebin Smart Waste Sensor in Maarkedal"
          className="h-80 w-full rounded-xl object-cover"
        />
      </div>
      <div className="text-justify text-lg font-light">
        Managing public waste is a significant challenge for nearly every local government, and Moorslede in Belgium, is no exception. Ensuring there are enough bins and that they are emptied or replaced on time is a complex task, further complicated by regional regulations. In Flanders, every local government must develop a comprehensive waste bin management plan by 2030. This plan requires creating an inventory of waste bins, monitoring fill levels, and implementing necessary reporting, analysis, and adjustments.
      </div>
      <div className="text-justify text-lg font-light">
        To address these challenges, Moorslede has embraced an innovative solution by partnering with Rebin. Rebin has installed 58 sensors across the municipality to enhance waste management efficiency. These sensors monitor the fill levels and usage of waste bins, providing real-time data that allows for timely and precise interventions.
      </div>
      <div className="flex justify-center">
        <q className="text-rebin-darkblue block text-xl font-semibold">
          This solution saves us valuable time, automates everything, and ensures we remain compliant with all regulations.
        </q>
      </div>
      <div className="text-justify text-lg font-light">
        With real-time monitoring of public bins, collections become more efficient, and local governments can identify exactly where bins are needed or where there are too many. This ensures they always have an up-to-date waste management plan, continuously comply with legislation, and can focus on addressing problem areas.
      </div>
      <section className="flex flex-col gap-y-2">
        <span className="text-rebin-darkblue mb-5 font-bold">Summary:</span>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">1.</span>
          <span className="text-justify text-lg font-light">
            Moorslede struggles with managing waste bins and meeting Flanders' 2030 regulations
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">2.</span>
          <span className="text-justify text-lg font-light">
            Rebin’s 58 sensors provide real-time data to optimize bin usage and collections
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">3.</span>
          <span className="text-justify text-lg font-light">
            Efficient collections, accurate bin management, and compliance with regulations
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
