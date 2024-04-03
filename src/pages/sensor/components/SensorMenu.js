import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import React from 'react';
import Sensor from '../../../assets/images/sensor/sensorMenu/sensor.png';
import parse from 'html-react-parser';

export default function SensorMenu() {
  const [activeTab, setActiveTab] = React.useState(0);

  const data = [
    {
      label: 'Small',
      title: 'The smallest sensor',
      desc: `
            With its minimal volume (<b>the smallest sensor</b> on the European market!) and its <b>unique design</b>, 
            the Rebin smart bin sensor is compatible in every type of bin and container. 
            Furthermore, the sensor can be <b>placed at any possible angle</b>.
            <br />
            <br />
            All this ensures that the sensor can be <b>installed in less than a minute</b>, 
            such that in no time you can experience all the benefits the Repoint platform has to offer. 
            `,
    },
    {
      label: 'Advanced',
      title: 'Advanced features',
      desc: `
            Thanks to its <b>accurate laser sensor</b>, precise measurements are guaranteed for any type of content, 
            ranging from containers with heights of a dozen centimeters to several meters.
            <br />
            <br />
            Through <b>open API access</b>, there is an added possibility 
            to integrate the sensor in no time with your own personal software package.
            `,
    },
    {
      label: 'Sustainable',
      title: 'Sustainable design',
      desc: `
            By choosing for the <b>highest quality, recyclable</b> components and 
            manufacturing entirely <b>in Belgium</b>, 
            we guarantee a sensor that is completely <b>shock and water resistant</b>. 
            In addition, the sensor can withstand a wide range of temperatures.
            <br />
            <br />
            The premium battery guarantees a lifespan of at least <b>5 years</b> and is replaceable. 
            In this way, unnecessary future costs for sensor purchases are avoided.
            `,
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="overflow-hidden p-0"
        indicatorProps={{
          className: '',
        }}
      >
        <div className="mx-auto mt-20 grid w-full grid-cols-3 divide-x rounded-2xl border-b-4 border-r-4 p-0 md:h-24 md:w-5/6 lg:h-36">
          {data.map(({ label }, index) => (
            <button
              className={
                activeTab === index
                  ? 'border-t-rebin-blue -mb-3 ml-2 w-full rounded-xl border-t-8 bg-white pb-3'
                  : 'ml-2 mt-2 w-full'
              }
            >
              <Tab
                key={index}
                value={index}
                className=""
                onClick={() => setActiveTab(index)}
              >
                <div
                  className={
                    activeTab === index
                      ? 'bg-gradient mx-auto flex aspect-square w-8 place-content-center rounded-full text-xl font-bold text-white'
                      : 'bg-rebin-grey mx-auto flex aspect-square w-8 place-content-center rounded-full text-xl font-bold'
                  }
                >
                  <div
                    className={
                      activeTab === index
                        ? 'h-min text-white'
                        : 'text-gradient-horizontal h-min'
                    }
                  >
                    {index + 1}
                  </div>
                </div>
                <p className="text-rebin-darkblue mt-1 font-bold md:text-xl">
                  {label}
                </p>
              </Tab>
            </button>
          ))}
        </div>
      </TabsHeader>
      <TabsBody>
        {data.map(({ title, desc }, index) => (
          <TabPanel
            key={index}
            value={index}
            className="mt-8 grid gap-8 md:grid-cols-2"
          >
            <img
              className="mx-auto"
              src={Sensor}
              alt="The worlds smallest waste sensor"
            />
            <div className="space-y-4">
              <h3 className="text-gradient-horizontal text-xl font-bold">
                {title}
              </h3>
              <p className="font-medium text-black drop-shadow-xl">
                {parse(desc)}
              </p>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
