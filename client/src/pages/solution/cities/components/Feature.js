import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React from 'react';
import parse from 'html-react-parser';
import Checkmark from '../../../../assets/images/checkmark.png';
import Dashboard from '../../../../assets/images/solution/Dashboardmockup.png';
import Routing from '../../../../assets/images/solution/Routingmockup.png';
import Statistics from '../../../../assets/images/solution/Statisticsmockup.png';
import sensor from '../../../../assets/images/home/solutions/sensor.svg';
import map from '../../../../assets/images/home/solutions/map.svg';
import bar from '../../../../assets/images/home/solutions/bar.svg';
import { useTranslation } from 'react-i18next';

export default function Feature() {
  const [activeTab, setActiveTab] = React.useState(0);

  const { t } =useTranslation();

  const data = [
    {
      label: t("citiespage.feature1_label"),
      icon: sensor,
      title: t("citiespage.feature1_title"),
      image: Dashboard,
      subtitle: t("citiespage.feature1_subtitle"),
      desc: t("citiespage.feature1_description"),
    },
    {
      label: t("citiespage.feature2_label"),
      icon: map,
      title: t("citiespage.feature2_title"),
      image: Routing,
      subtitle: t("citiespage.feature2_subtitle"),
      desc: t("citiespage.feature2_description"),
      advantages: [t("citiespage.feature2_stat1"), t("citiespage.feature2_stat2")],
      percentages: ['58', '40'],
    },
    {
      label: t("citiespage.feature3_label"),
      icon: bar,
      title: t("citiespage.feature3_title"),
      image: Statistics,
      subtitle: t("citiespage.feature3_subtitle"),
      desc: t("citiespage.feature3_description"),
    },
  ];

  return (
    <Tabs value={activeTab}>
      {/* TabsHeader with underline indicator */}
      <TabsHeader
        className="rounded-none border-b border-gray-300 bg-transparent p-0 "
        indicatorProps={{
          className:
            'bg-transparent border-b-2 border-rebin-darkblue shadow-none rounded-none ',
        }}
      >
        {data.map(({ label, icon }, index) => (
          <Tab
            key={index}
            value={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center justify-center px-4 py-2 cursor-pointer ${
              activeTab === index ? 'text-rebin-darkblue font-bold' : 'text-gray-500'
            }`}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center rounded-full bg-rebin-light-blue p-2 shadow-md">
                <img
                  src={icon}
                  alt="Icon of sensor inside a bin"
                  className="aspect-square h-5 w-5"
                  />
              </div>
              <span className="text-rebin-darkblue hidden text-xl font-bold sm:block">{label}</span>
            </div>
          </Tab>
        ))}
      </TabsHeader>

      {/* TabsBody */}
      <TabsBody>
        {data.map(
          (
            { title, subtitle, desc, advantages, percentages, image },
            index
          ) => (
            <TabPanel
              key={index}
              value={index}
              className="mt-10 grid place-items-center gap-14 md:grid-cols-2"
            >
              <img
                src={image}
                alt="The Repoint waste management platform"
                className="mx-auto"
              />
              <div className="space-y-4 text-left">
                <h3 className="text-gradient text-3xl font-bold ">
                  {title}
                </h3>
                <h4 className="text-rebin-darkblue text-4xl font-semibold">
                  {subtitle}
                </h4>
                <p className="font-regular text-balance text-lg text-black">
                  {parse(desc)}
                </p>
                {advantages && advantages.length > 0 && (
                  <ul className="grid grid-cols-1 md:grid-cols-2">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-center space-x-2 p-2">
                        {percentages && (
                          <span className="text-gradient text-2xl font-bold">
                            {percentages[index]}&#37;
                          </span>
                        )}
                        {!percentages && (
                          <img
                            src={Checkmark}
                            alt="Checkmark"
                            className="inline-block w-6"
                          />
                        )}
                        <p className="text-rebin-darkblue font-medium">
                          {advantage}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </TabPanel>
          )
        )}
      </TabsBody>
    </Tabs>
  );
}

