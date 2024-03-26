import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Step1 from "../../../assets/images/fourStepApproach/Step1.svg";
import Step2 from "../../../assets/images/fourStepApproach/Step2.svg";
import Step3 from "../../../assets/images/fourStepApproach/Step3.svg";
import Step4 from "../../../assets/images/fourStepApproach/Step4.svg";
import Step1Selected from "../../../assets/images/fourStepApproach/Step1_selected.svg";
import Step2Selected from "../../../assets/images/fourStepApproach/Step2_selected.svg";
import Step3Selected from "../../../assets/images/fourStepApproach/Step3_selected.svg";
import Step4Selected from "../../../assets/images/fourStepApproach/Step4_selected.svg";
import React from "react";
import Bin from "../../../assets/images/fourStepApproach/bin.png";
import Repoint from "../../../assets/images/fourStepApproach/repoint.svg";
import Cards from "../../../assets/images/fourStepApproach/cards.svg";
import Checkmark from "../../../assets/images/checkmark.svg";
import CustomerSupport from "../../../assets/images/fourStepApproach/customer_support.svg";

export default function FourStepsMenu() {
  const [activeTab, setActiveTab] = React.useState(0);
  const steps = [
    {
      thumbnail: Step1,
      thumbnailSelected: Step1Selected,
      image: Bin,
      title: "Installation",
      desc1: `We take care of the entire installation process for any type of asset, including bins, containers, and more.`,
      desc2: `In no time, your assets are up and running on the Rebin platform.`,
      advantages: [
        "Easy to install",
        "Any type of asset",
        "Easy onboarding",
        "Simple software setup",
      ],
    },
    {
      thumbnail: Step2,
      thumbnailSelected: Step2Selected,
      image: Repoint,
      title: "Repoint platform",
      desc1: `Our unified software easily maps any type of asset on a convenient dashboard.`,
      desc2: `Keep track of current fill levels and utilize optimal routes to streamline the collection process, increasing operational efficiency.`,
      advantages: [
        "Easy-to-use",
        "Fill level monitoring",
        "Route optimization",
        "Tailored requirements",
      ],
    },
    {
      thumbnail: Step3,
      thumbnailSelected: Step3Selected,
      image: Cards,
      title: "Data insights",
      desc1: `Gain valuable insights off your current assets. Identify potential pain points and make appropriate policy decisions.`,
      desc2: `Receive detailed reports on cost savings, reductions in CO2 emissions,  and more.`,
      advantages: [
        "Up-to-date statistics",
        "Get reports at any time",
        "Data-driven decisions",
        "Become legislation compliant",
      ],
    },
    {
      thumbnail: Step4,
      thumbnailSelected: Step4Selected,
      image: CustomerSupport,
      title: "Customer support",
      desc1: `Rebin provides full support from installation to troubleshooting, ensuring optimal functionality at all times.`,
      desc2: `Save time by focusing on your core business instead of configuring IoT applications.`,
      advantages: [
        "24/7 availability",
        "Proactive response",
        "1 on 1 support",
        "Regular follow-up",
      ],
    },
  ];

  return (
    <Tabs value={activeTab} orientation="vertical" className="mt-20 flex flex-col lg:flex-row">

      {/* Horizontal tabs for small screen */}
      <TabsHeader className="flex flex-row lg:hidden">
        {steps.map(({ thumbnail, thumbnailSelected, title }, index) => (
          <Tab
            key={index}
            value={index}
            onClick={() => setActiveTab(index)}
            className="my-3"
          >
            <button>
              <div className="grid grid-cols-1 gap-y-2">
                <img
                  src={activeTab === index ? thumbnailSelected : thumbnail}
                  alt={title}
                  className="w-28 aspect-square my-auto"
                />
                <h5 className="my-auto font-bold md:text-3xl">Step {index + 1}</h5>
              </div>
            </button>
          </Tab>
        ))}
      </TabsHeader>
      <div className="hidden lg:flex">
        {/* Vertical tabs for large screen */}
        <TabsHeader
          className="rounded-none border-r-8 border-blue-gray-50 bg-transparent p-0 max-w-sm py-10"
          indicatorProps={{
            className: "invisible lg:visible w-4 ml-96 bg-gradient rounded-full",
          }}
        >
          {steps.map(({ thumbnail, thumbnailSelected, title }, index) => (
            <Tab
              key={index}
              value={index}
              onClick={() => setActiveTab(index)}
              className="max-w-xl p-4 my-3"
            >
              <button>
                <div className="w-96 grid grid-cols-2">
                  <h5 className="my-auto font-bold text-3xl">Step {index + 1}</h5>
                  <img
                    src={activeTab === index ? thumbnailSelected : thumbnail}
                    alt={title}
                    className="w-28 aspect-square my-auto"
                  />
                </div>
              </button>
            </Tab>
          ))}
        </TabsHeader>



      </div>
      <TabsBody>
        {steps.map(({ title, desc1, desc2, advantages, image }, index) => (
          <TabPanel
            key={index}
            value={index}
            className="lg:px-32 grid grid-rows-3Z"
          >
            <img src={image} alt={title} className="mx-auto" />
            <div className="space-y-6 mt-8">
              <h3 className="text-rebin-darkblue text-4xl font-semibold">
                {title}
              </h3>
              <p className="text-black font-regular text-lg text-balance">
                {desc1}
                <br />
                <br />
                {desc2}
              </p>
              <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-y-4">
                {advantages.map((advantage, index) => (
                  <li key={index} className="flex space-x-2 items-center">
                    <img
                      src={Checkmark}
                      alt="Checkmark"
                      className="w-6 inline-block"
                    />
                    <p className="text-rebin-darkblue font-medium">
                      {advantage}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
