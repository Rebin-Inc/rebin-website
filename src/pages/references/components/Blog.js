import React from 'react';
import Maarkedal from '../../../assets/images/refferenceMaarkedal.png';

const Blog = () => {
  return (
    <main className="space-y-10 w-full mt-10 mb-20">
      <span className='bg-gradient text-sm text-white rounded-md py-2 px-2'>
        Technology
      </span>
      <h1 className='font-semibold text-4xl'>
        Optimizing waste collection in municipality Maarkedal 
        with smart waste sensors.
      </h1>
      <div className='flex gap-x-6'>
        <span className='text-sm'>5 min</span>
        <span className='text-sm'>March 25, 2024</span>
      </div>
      <div className='rounded-xl w-full h-80 my-10'>
        <img src={Maarkedal} className='rounded-xl w-full h-80 object-cover' />
      </div>
      <div className='font-light text-lg text-justify'>Maarkedal, a rural municipality nestled in the heart of the Flemish Ardennes, experiences significant variation in the utilization of public bins across different locations. While tourist activity surges during the summer months, attracting hiking and cycling enthusiasts, winters tend to bring a quieter atmosphere. This seasonal fluctuation, alongside differing usage patterns among various areas, poses a challenge for efficient waste management within Maarkedal. Unfortunately, the lack of comprehensive data hinders an effective response from Maarkedal's authorities.</div>
      <div className='font-light text-lg text-justify'>Frank Maes, head of the municipality's technical department, finds himself grappling with this issue. "Every week, my team is tasked with emptying the bins, totaling 73 across the municipality. However, due to the lack of prior knowledge regarding which bins require attention, we must inspect each one during our collection routes. This results in unnecessary expenditure of work hours, further compounded by our existing shortage of manpower." Mayor Joris Nachtergaele is well aware of this challenge and sought assistance from Rebin.</div>
      <div className="flex justify-center ">
        <q className='block text-rebin-darkblue font-semibold text-xl'>A smart system, with a lot of advantages and potential.</q>
      </div>
      <div className='font-light text-lg text-justify'>Rebin installed sensors in each bin, capable of measuring fill levels, and provided access to their software platform. After a few months of implementation, the benefits were already apparent. "By strategically avoiding unnecessary stops at nearly empty or partially filled bins, we have achieved a 40% reduction in kilometers traveled and up to 50% less time spent on collection routes," noted Joris. "Moreover, our previous approach often led to overflowing bins, resulting in litter accumulation and resident complaints. By collaborating with Rebin, we can preemptively address bin overflow issues. In summary, this smart system offers numerous advantages and potential."</div>
      <section className='flex flex-col gap-y-2'>
        <span className='text-rebin-darkblue font-bold mb-5'>Summary:</span>
        <div className='flex items-center gap-x-5'>
          <span className='text-gradient font-bold'>1.</span>
          <span className='font-light text-lg text-justify'>Maarkedal faces waste management challenges due to varying bin usage</span>
        </div>
        <div className='flex items-center gap-x-5'>
          <span className='text-gradient font-bold'>2.</span>
          <span className='font-light text-lg text-justify'>Rebin monitors fill levels and optimizes collection routes</span>
        </div>
        <div className='flex items-center gap-x-5'>
          <span className='text-gradient font-bold'>3.</span>
          <span className='font-light text-lg text-justify'>Significant time and cost savings, and no more overflowing bins</span>
        </div>
      </section>
      <section className='p-10 border-y-2 border-slate-100'>
        <div className='flex justify-between max-w-sm mx-auto'>
          <span className='bg-gradient text-sm text-white rounded-md py-2 px-2'>Smart city</span>
          <span className='bg-gradient text-sm text-white rounded-md py-2 px-2'>Waste management</span>
          <span className='bg-gradient text-sm text-white rounded-md py-2 px-2'>Sensors</span>
        </div>
      </section>
    </main>
  );
};

export default Blog;
