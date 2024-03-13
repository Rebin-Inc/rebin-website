import React from "react";

const AdvantageBar = () => {
  const advantages = [
    {
      title: "Easy to use",
      description:
        "Utilize our user-friendly software application and gain insights to optimize collection.",
    },
    {
      title: "Enhance and minimize",
      description:
        "Make your waste management more efficient and reduce costs and CO2 emissions.",
    },
    {
      title: "Customer service",
      description:
        "Receive excellent customer service on your journey towards efficient waste management.",
    },
  ];

  return (
    <div className="bg-rebin-grey py-4 rounded-xl">
      <div className="grid divide-y-0 grid-cols-2 sm:divide-y-0 md:grid-cols-3 ">
        {advantages.map((advantage, index) => (
          <div key={index} className="flex flex-col space-y-4 p-4 px-12">
            <h3 className="font-bold text-5xl text-gradient-horizontal ">
              0{index + 1}.
            </h3>
            <h4 className="font-bold text-xl text-rebin-darkblue">
              {advantage.title}
            </h4>
            <p className="text-sm font-medium max-w-52">
              {advantage.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantageBar;
