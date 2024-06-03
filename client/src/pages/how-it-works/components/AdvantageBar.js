import React from 'react';

const AdvantageBar = () => {
  const advantages = [
    {
      title: 'Fill level monitoring',
      description:
        'Monitor asset fill levels in real-time and collect only when necessary.',
    },
    {
      title: 'Optimal collection routes',
      description:
        'Optimize collection routes to reduce time, costs, and emissions.',
    },
    {
      title: 'Actionable data insights',
      description:
        'Gain practical data insights for strategic asset decision-making.',
    },
  ];

  return (
    <div className="bg-rebin-grey mt-20 rounded-xl py-4">
      <div className="grid grid-cols-1 divide-y-0 sm:divide-y-0 md:grid-cols-3 ">
        {advantages.map((advantage, index) => (
          <div key={index} className="flex flex-col space-y-4 p-4 px-12">
            <h3 className="text-gradient-horizontal text-5xl font-bold ">
              0{index + 1}.
            </h3>
            <h4 className="text-rebin-darkblue text-xl font-bold">
              {advantage.title}
            </h4>
            <p className="font-regular max-w-52 text-sm">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantageBar;
