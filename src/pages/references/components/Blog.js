import React from 'react';
import Maarkedal from '../../../assets/images/references/blog/maarkedal.png';

const Blog = () => {
  return (
    <main className="mb-20 mt-10 w-full space-y-10">
      <span className="bg-gradient rounded-md px-2 py-2 text-sm text-white">
        Technology
      </span>
      <h1 className="text-4xl font-semibold">
        Optimizing waste collection in municipality Maarkedal with smart waste
        sensors
      </h1>
      <div className="flex gap-x-6">
        <span className="text-sm">5 min</span>
        <span className="text-sm">March 25, 2024</span>
      </div>
      <div className="my-10 h-80 w-full rounded-xl">
        <img
          src={Maarkedal}
          alt="A newly installed bin using the Rebin Smart Waste Sensor in Maarkedal"
          className="h-80 w-full rounded-xl object-cover"
        />
      </div>
      <div className="text-justify text-lg font-light">
        Maarkedal, a rural municipality nestled in the heart of the Flemish
        Ardennes, experiences significant variation in the utilization of public
        bins across different locations. While tourist activity surges during
        the summer months, attracting hiking and cycling enthusiasts, winters
        tend to bring a quieter atmosphere. This seasonal fluctuation, alongside
        differing usage patterns among various areas, poses a challenge for
        efficient waste management within Maarkedal. Unfortunately, the lack of
        comprehensive data hinders an effective response from Maarkedal's
        authorities.
      </div>
      <div className="text-justify text-lg font-light">
        Frank Maes, head of the municipality's technical department, finds
        himself grappling with this issue. "Every week, my team is tasked with
        emptying the bins, totaling 73 across the municipality. However, due to
        the lack of prior knowledge regarding which bins require attention, we
        must inspect each one during our collection routes. This results in
        unnecessary expenditure of work hours, further compounded by our
        existing shortage of manpower." Mayor Joris Nachtergaele is well aware
        of this challenge and sought assistance from Rebin.
      </div>
      <div className="flex justify-center ">
        <q className="text-rebin-darkblue block text-xl font-semibold">
          A smart system, with a lot of advantages and potential.
        </q>
      </div>
      <div className="text-justify text-lg font-light">
        Rebin installed sensors in each bin, capable of measuring fill levels,
        and provided access to their software platform. After a few months of
        implementation, the benefits were already apparent. "By strategically
        avoiding unnecessary stops at nearly empty or partially filled bins, we
        have achieved a 40% reduction in kilometers traveled and up to 50% less
        time spent on collection routes," noted Joris. "Moreover, our previous
        approach often led to overflowing bins, resulting in litter accumulation
        and resident complaints. By collaborating with Rebin, we can
        preemptively address bin overflow issues. In summary, this smart system
        offers numerous advantages and potential."
      </div>
      <section className="flex flex-col gap-y-2">
        <span className="text-rebin-darkblue mb-5 font-bold">Summary:</span>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">1.</span>
          <span className="text-justify text-lg font-light">
            Maarkedal faces waste management challenges due to varying bin usage
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">2.</span>
          <span className="text-justify text-lg font-light">
            Rebin monitors fill levels and optimizes collection routes
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">3.</span>
          <span className="text-justify text-lg font-light">
            Significant time and cost savings, and no more overflowing bins
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

export default Blog;
