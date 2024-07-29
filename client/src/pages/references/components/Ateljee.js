import React from 'react';
import AteljeeImg from '../../../assets/images/references/blog/ateljee.jpeg';

const Ateljee = () => {
  return (
    <main className="mb-20 mt-10 w-full space-y-10">
      <span className="bg-gradient rounded-md px-2 py-2 text-sm text-white">
        Technology
      </span>
      <h1 className="text-4xl font-semibold">
        Using smart sensors to optimize textile collection: 
        how Kringwinkel Ateljee enhances efficiency and sustainability
      </h1>
      <div className="flex gap-x-6">
        <span className="text-sm">2 min</span>
        <span className="text-sm">Jul 25, 2024</span>
      </div>
      <div className="my-10 h-80 w-full rounded-xl">
        <img
          src={AteljeeImg}
          alt="A newly installed bin using the Rebin Smart Waste Sensor in Maarkedal"
          className="h-80 w-full rounded-xl object-cover"
        />
      </div>
      <div className="text-justify text-lg font-light">
        Ateljee, a division of De Kringwinkel, specializes in collecting, donating, pre-sorting, and wholesaling second-hand textiles. With textile containers scattered nationwide, managing this collection process can be both challenging and expensive. Delays in collecting full containers can lead to overflow and lost revenue, while collecting empty ones depletes resources. To address these issues and enhance both resource efficiency and environmental responsibility, Ateljee is embracing technology to transform its textile collection practices.
      </div>
      <div className="text-justify text-lg font-light">
      Integrating sensors into textile containers has revolutionized the collection process at Ateljee. With the support of Rebin's cutting-edge asset management software, the organization has optimized its collection routes and harnessed valuable data to streamline operations. The benefits were evident right from the start.
      </div>
      <div className="flex justify-center ">
        <q className="text-rebin-darkblue block text-xl font-semibold text-center">
          With Rebin, we’re not only saving time and ensuring timely pickups but also advancing our mission for a more sustainable world.
        </q>
      </div>
      <div className="text-justify text-lg font-light">
        This technological integration not only streamlines employee workflows but also drives cost savings and reduces transportation emissions. Additionally, the smart system facilitates proactive management with capacity alerts, preventing container overflow and ensuring timely collections.
      </div>
      <section className="flex flex-col gap-y-2">
        <span className="text-rebin-darkblue mb-5 font-bold">Summary:</span>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">1.</span>
          <span className="text-justify text-lg font-light">
          Managing widespread textile containers can be costly and inefficient, causing overflow and wasted resources
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">2.</span>
          <span className="text-justify text-lg font-light">
          Ateljee implemented sensors and advanced software to optimize collection routes and data management
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="text-gradient font-bold">3.</span>
          <span className="text-justify text-lg font-light">
          This approach saves time, reduces emissions, and ensures timely pickups, enhancing sustainability
          </span>
        </div>
      </section>
      <section className="border-y-2 border-slate-100 p-10">
        <div className="mx-auto flex max-w-md flex-col justify-center gap-y-5 sm:flex-row sm:gap-x-5">
          <span className="bg-gradient rounded-md px-2 py-2 text-center text-sm text-white">
            Textile collection
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

export default Ateljee;