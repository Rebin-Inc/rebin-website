import React from 'react';
import RotterdamImg from '../../../assets/images/references/blog/rotterdam2.jpg';

const RotterdamBlog = () => {
  return (
    <main className="mb-20 mt-10 w-full space-y-10 max-w-7xl ml-auto mr-auto p-6">
      {/* Blog Tag */}
      <span className="bg-gradient rounded-md px-2 py-2 text-sm text-white">
        Technology
      </span>

      {/* Blog Title */}
      <h1 className="text-4xl font-semibold">
        Streamlining waste management in Europe’s largest port
      </h1>

      {/* Blog Meta Information */}
      <div className="flex gap-x-6">
        <span className="text-sm">4 min</span>
        <span className="text-sm">January 13, 2025</span>
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
        As the largest port in Europe, the Port of Rotterdam spans an enormous
        area of over 12,000 hectares. Maintaining this vast expanse is a complex
        challenge, as Pieter Van Driel, project manager at Idverde—a company
        responsible for the port’s upkeep for many years—can attest.
        “Beyond maintaining greenery, emptying waste containers is one of the
        most time-consuming tasks we handle,” Pieter explains. The port area
        houses approximately 250 waste bins, distributed across its expansive
        grounds. “Although we often encountered empty bins during our collection
        routes, we absolutely want to prevent overflowing bins that could lead
        to litter,” he adds. This logistical challenge took a turn in spring
        2024, when Pieter reached out to Rebin.
      </div>

      <div className="text-justify text-lg font-light">
        Since partnering with Rebin, every waste bin in the port has been
        equipped with a sensor. These sensors provide real-time data on bin fill
        levels, allowing the team to know precisely which bins need attention
        and, equally importantly, which ones don’t. Besides insights into fill
        levels, the planning tool on Rebin's platform has brought significant
        advantages to Idverde’s operations. Pieter explains, “Of course, if only
        a few bins are full but they are scattered dozens of kilometers apart,
        it would be far from efficient to collect them all in the same
        collection route. By organizing our work by regions, we maintain a
        structured approach while saving substantial resources.” Furthermore,
        Rebin’s platform allows routes to be generated automatically—daily,
        weekly, or as needed—without requiring manual inputs. Pieter emphasizes
        the convenience this brings: “The automated route generation is very
        beneficial and saves us a lot of time and trouble.”
      </div>

      {/* Quote Section */}
      <div className="flex justify-center">
        <q className="text-rebin-darkblue block text-xl font-semibold">
          The automated route generation is very beneficial and saves us a lot of time and trouble.
        </q>
      </div>

      <div className="text-justify text-lg font-light">
        One of the aspects Pieter values most about Rebin is the interactions
        with its team. “The Rebin team is always accessible and open to
        feedback, which helps them continuously innovate. This aligns perfectly
        with our vision at Idverde.” Looking ahead, Idverde is exploring ways to
        implement Rebin’s system in additional projects, further optimizing
        their operations.
      </div>

      {/* Summary Section */}
      <section className="flex flex-col gap-y-2">
        <span className="text-rebin-darkblue mb-5 font-bold">Summary:</span>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">1.</span>
          <span className="text-justify text-lg font-light">
            Rebin equipped 250 bins in the Port of Rotterdam with sensors to monitor real-time fill levels.
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">2.</span>
          <span className="text-justify text-lg font-light">
            Rebin's platform automates waste collection routes by region, saving time and resources.
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">3.</span>
          <span className="text-justify text-lg font-light">
            The system is being explored for use in other projects of Idverde to further optimize operations.
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
