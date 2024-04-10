import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React from 'react';
import parse from 'html-react-parser';
import Route from '../../../assets/images/software/featureMenu/route.png';
import Sensor from '../../../assets/images/software/featureMenu/sensor.png';
import Analytics from '../../../assets/images/software/featureMenu/analytics.png';
import Repoint from '../../../assets/images/software/featureMenu/repoint.png';
import Checkmark from '../../../assets/images/checkmark.svg';
import Dashboard from '../../../assets/images/software/featureMenu/dashboard.png';
import CreateRoute from '../../../assets/images/software/featureMenu/create_route.png';

export default function FeatureMenu() {
  const [activeTab, setActiveTab] = React.useState(0);

  const data = [
    {
      label: 'Dashboard',
      icon: Sensor,
      title: 'Dashboard',
      image: Repoint,
      subtitle: 'Know the status of your assets',
      desc: `
                Track the fill levels of your assets with a complete overview. Quickly identify critical KPIs and make informed decisions accordingly.
            `,
      advantages: [
        'Detailed asset inventory',
        'Real-time asset monitoring',
        'Relevant KPIs',
        'Alerts and notifications',
      ],
    },
    {
      label: 'Route optimisation',
      icon: Route,
      title: 'Route optimisation',
      image: CreateRoute,
      subtitle: 'Bypass unnecessary assets',
      desc: `
            Improve collection operations by overlooking redundant assets, saving costs and reducing CO2 emissions along the way. Tailor routes using up-to-date fill level information to avoid unnecessary staff deployment.
            `,
      advantages: ['Reduced collection time', 'Fuel cost savings'],
      percentages: ['58', '40'],
    },
    {
      label: 'Statistics',
      icon: Analytics,
      title: 'Statistics',
      image: Dashboard,
      subtitle: 'Take strategic decisions',
      desc: `
            Access a variety of statistics, such as collection frequencies, waste amounts, and fill rates. Utilize data-driven decisions to streamline resource management and reporting.
            `,
      advantages: [
        'Understand your assets',
        'Automated reports',
        'Detect zombie assets',
        'Be legislation compliant',
      ],
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="mt-20 grid grid-cols-3 p-0"
        indicatorProps={{
          className: 'h-2 w-full bg-gradient rounded-full -mb-3',
        }}
      >
        {data.map(({ label, icon }, index) => (
          <Tab
            key={index}
            value={index}
            className="flex items-end"
            onClick={() => setActiveTab(index)}
          >
            <button className="min-h-16">
              <div className="flex flex-col space-x-4 md:flex-row">
                <img
                  src={icon}
                  alt={label}
                  className="aspect-square h-12 w-12"
                />
                <span className="text-rebin-darkblue hidden text-xl font-bold sm:block">
                  {label}
                </span>
              </div>
            </button>
          </Tab>
        ))}
        <div className="bg-rebin-grey col-span-3 h-2 w-full rounded-full"></div>
      </TabsHeader>
      <TabsBody>
        {data.map(
          (
            { title, subtitle, desc, advantages, percentages, image },
            index,
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
              <div className="space-y-4">
                <h3 className="text-gradient-horizontal text-3xl font-bold">
                  {title}
                </h3>
                <h4 className="text-rebin-darkblue text-4xl font-semibold">
                  {subtitle}
                </h4>
                <p className="font-regular text-balance text-lg text-black">
                  {parse(desc)}
                </p>
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
              </div>
            </TabPanel>
          ),
        )}
      </TabsBody>
    </Tabs>
  );
}
