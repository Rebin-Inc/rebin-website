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
import Vuilnisbak from "../../../assets/images/fourStepApproach/vuilnisbak.svg";
import Repoint from "../../../assets/images/fourStepApproach/repoint.svg";
import Cards from "../../../assets/images/fourStepApproach/cards.svg";
import Checkmark from "../../../assets/images/checkmark.svg";

export default function FourStepsMenu() {
  const [activeTab, setActiveTab] = React.useState(0);
  const steps = [
    {
      thumbnail: Step1,
      thumbnailSelected: Step1Selected,
      image: Vuilnisbak,
      title: "Installation process",
      desc1: `Our user-friendly software effortlessly maps your trash bins and ensures you stay up-to-date with the latest fill levels. `,
      desc2: `Utilize optimal routes to streamline the collection process for greater efficiency.`,
      advantages: [
        "Easy to install",
        "Water- and shockproof",
        "Universal sensor",
      ],
    },
    {
      thumbnail: Step2,
      thumbnailSelected: Step2Selected,
      image: Repoint,
      title: "Repoint platform",
      desc1: `Our user-friendly software effortlessly maps your trash bins and ensures you stay up-to-date with the latest fill levels. `,
      desc2: `Utilize optimal routes to streamline the collection process for greater efficiency.`,
      advantages: [
        "Easy to install",
        "Water- and shockproof",
        "Universal sensor",
      ],
    },
    {
      thumbnail: Step3,
      thumbnailSelected: Step3Selected,
      image: Cards,
      title: "Data insights",
      desc1: `Our user-friendly software effortlessly maps your trash bins and ensures you stay up-to-date with the latest fill levels. `,
      desc2: `Utilize optimal routes to streamline the collection process for greater efficiency.`,
      advantages: [
        "Easy to install",
        "Water- and shockproof",
        "Universal sensor",
      ],
    },
    {
      thumbnail: Step4,
      thumbnailSelected: Step4Selected,
      image: Vuilnisbak,
      title: "Customer support",
      desc1: `Our user-friendly software effortlessly maps your trash bins and ensures you stay up-to-date with the latest fill levels. `,
      desc2: `Utilize optimal routes to streamline the collection process for greater efficiency.`,
      advantages: [
        "Easy to install",
        "Water- and shockproof",
        "Universal sensor",
      ],
    },
  ];

  return (
    <Tabs value={activeTab} orientation="vertical" className="mt-20">
      <TabsHeader
        className="rounded-none border-r-8 border-blue-gray-50 bg-transparent p-0 max-w-sm py-10"
        indicatorProps={{
          className: "-mr-3 w-4 ml-auto bg-gradient rounded-full",
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
      <TabsBody>
        {steps.map(({ title, desc1, desc2, advantages, image }, index) => (
          <TabPanel
            key={index}
            value={index}
            className="px-32 space-y-2 grid grid-rows-2"
          >
            <img src={image} alt={title} className="mx-auto" />
            <div className="space-y-6 ">
              <h3 className="text-rebin-darkblue text-4xl font-semibold">
                {title}
              </h3>
              <p className="text-black font-medium text-lg text-balance">
                {desc1}
                <br />
                <br />
                {desc2}
              </p>
              <ul className="grid grid-cols-2 space-y-2">
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
