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

export default function Feature() {
  const [activeTab, setActiveTab] = React.useState(0);

  const data = [
    {
      label: 'Dashboard',
      icon: sensor,
      title: 'Dashboard',
      image: Dashboard,
      subtitle: 'Know the status of your bins',
      desc: `
        Track the fill levels of your bins with a complete overview. Quickly identify critical KPIs and make informed decisions accordingly.
      `,
    },
    {
      label: 'Routing',
      icon: map,
      title: 'Route optimisation',
      image: Routing,
      subtitle: 'Bypass unnecessary stops',
      desc: `
      Improve collection operations by overlooking empty bins, saving costs and reducing CO2 emissions along the way. Tailor routes using up-to-date fill level information to avoid unnecessary staff deployment.
      `,
      advantages: ['Reduced collection time', 'Fuel cost savings'],
      percentages: ['58', '40'],
    },
    {
      label: 'Analytics',
      icon: bar,
      title: 'Analytics',
      image: Statistics,
      subtitle: 'Take strategic decisions',
      desc: `
      Access a variety of statistics, such as collection frequencies, waste amounts, and fill level evolutions. Utilize data-driven insights to streamline resource management and reporting.
      `,
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

