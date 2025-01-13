import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';


export default function FAQ() {
  const [activeButton, setActiveButton] = useState('ourService');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const questions = [
    { topic: 'general', question: 'What is the cost of your solution?', answer: 'Our solution is offered at a monthly price per smart waste asset, which covers both the use of the sensors and the software platform, along with a one-time installation/setup cost per bin/container. The exact price varies depending on project size, contact the Rebin team for more information.' },
    { topic: 'general', question: 'Is smart waste collection applicable to my organisation?', answer: 'Smart waste collection offers significant advantages to both rural municipalities with a small number of spread-out bins as well as to more densely populated cities. Private waste collectors handling various waste streams from public or industrial containers can also greatly benefit from the increased operational efficiency and improved quality of service to their clients. Beyond these two main categories, smart waste management proves valuable in many other contexts, such as large campuses, parks, and business districts. Reach out to the Rebin team to discover a tailored solution that meets your specific needs.' },
    { topic: 'general', question: 'How does the implementation work?', answer: 'The entire installation of the sensors and start-up of the system is carried out by the Rebin team in a period of 4 to 6 weeks after confirmation of purchase. After installation, an onboarding takes place in which the operation of the software platform is explained in detail.' },
    { topic: 'general', question: 'Do you provide customer support after purchase?', answer: 'Rebin guarantees optimal operation of the system throughout the whole contract duration, and therefore also troubleshoots in case of possible defects/problems.' },
    { topic: 'ourService', question: 'How does the sensor work?', answer: 'Rebin provides a battery-powered time-of-flight laser sensor that can accurately estimate the fill level based on distance measurements at multiple points, including on uneven surfaces. The sensor is no larger than a few centimetres in any dimension and can be placed in any type of bin/container.' },
    { topic: 'ourService', question: 'What is the lifespan of a sensor?', answer: 'The battery powers the sensor for a period of 4 to 8 years, depending on the desired number of fill level measurements per day. The battery in the sensor can be replaced at the end of their service life very conveniently, eliminating the need to purchase new sensors.' },
    { topic: 'ourService', question: 'To which container and bin types is fill level monitoring applicable?', answer: 'Thanks to the sensor\'s compact size and smart design, fill level monitoring with Rebin\'s smart sensor technology is applicable to any type of waste asset, ranging from small public bins to large (semi-)underground containers with a volume of 5000l or more.' },
    { topic: 'onboarding', question: 'Does the software platform have a high learning curve?', answer: 'The software platform is deliberately set up to be very user-friendly, ensuring its use is very quickly grasped by any type of user. Moreover, the software platform is patiently gone over during the onboarding process, and the Rebin team is always available to answer any questions that may arise.' },
    { topic: 'onboarding', question: 'Doesn\'t the software platform complicate the collection process?', answer: 'There is absolutely no need to move completely away from fixed collection times to enjoy the benefits of the system. Moreover, the platform allows automatic generation of collection routes at fixed times, but still based on actual fill levels. Hence, no manual action by a planner is required to create a collection route.' },
    { topic: 'onboarding', question: 'Won\'t I always be too late if I only collect full containers/bins?', answer: 'It is certainly not the intention to collect only waste assets with a fill level of 100%. The percentage threshold from which a waste asset is considered "full" can vary from container to container, depending on how fast it increases in fill level (e.g. "full" above a fill level of 60% for rapidly increasing waste assets, and 80% for slowly increasing waste assets).' },
    { topic: 'onboarding', question: 'Should I collect every full bin/container in the same route?', answer: 'When waste assets are located far away from each other, it is not always ideal to collect in the same route. By using "regions", you can divide waste assets into self-determined geographical areas, and organise collection routes by region.' },
  ];

  return (
    <div className="flex flex-col gap-y-10 w-full px-4 ite">
      <div className="flex justify-center items-center w-full">
        <div className="hidden md:block w-[30px] md:w-[80px] lg:w-[240px] h-[2px] bg-gradient-white-blue z-0"></div>

        <button
          className={`special-button z-10 py-1.5 px-3 text-xs md:text-sm rounded-md w-fit md:min-w-[150px] md:max-w-[250px] ${
            activeButton === 'general' ? 'bg-gradient text-white border-rebin-blue-color' : 'border-rebin-blue-color text-black'
          }`}
          onClick={() => handleButtonClick('general')}
        >
          General
        </button>

        <div className="block w-[10px] md:w-[20px] h-[2px] bg-rebin-blue z-0"></div>

        <button
          className={`special-button z-10 py-1.5 px-3 text-xs md:text-sm rounded-md w-fit md:min-w-[150px] md:max-w-[250px] ${
            activeButton === 'ourService' ? 'bg-gradient text-white border-rebin-blue-color' : 'border-rebin-blue-color text-black'
          }`}
          onClick={() => handleButtonClick('ourService')}
        >
          Service
        </button>

        <div className="block w-[10px] md:w-[20px] h-[2px] bg-rebin-blue z-0"></div>

        <button
          className={`special-button z-10 py-1.5 px-3 text-xs md:text-sm rounded-md w-fit md:min-w-[150px] md:max-w-[250px] ${
            activeButton === 'onboarding' ? 'bg-gradient text-white border-rebin-blue-color' : 'border-rebin-blue-color text-black'
          }`}
          onClick={() => handleButtonClick('onboarding')}
        >
          Onboarding
        </button>

        <div className="hidden md:block w-[30px] md:w-[80px] lg:w-[240px] h-[2px] bg-gradient-blue-white z-0"></div>
      </div>

      <div className="flex flex-col gap-y-3 mx-auto w-full max-w-lg">
        {questions
          .filter((item) => item.topic === activeButton)
          .map((item, index) => (
            <Disclosure as="div" key={index}>
              {({ open: isOpen }) => (
                <div
                  className={`py-2 md:py-3 px-2 border border-rebin-blue-color rounded-md ${
                    isOpen ? 'bg-rebin-light-blue' : ''
                  }`}
                >
                  <Disclosure.Button className="disclosure-button group flex w-full items-center justify-between gap-x-5">
                    <span className="text-sm/6 font-medium text-rebin-darkblue text-left">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`size-5 text-rebin-blue ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-sm/5 font-light text-rebin-darkblue text-justify">
                    {item.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
      </div>
    </div>
  );
}










