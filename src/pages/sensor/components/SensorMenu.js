import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import React from "react";
import Sensor2 from "../../../assets/images/sensor/sensor2.png";
import parse from "html-react-parser";

export default function SensorMenu() {
    const [activeTab, setActiveTab] = React.useState(0);

    const data = [
        {
            label: "Small",
            title: "The smallest sensor",
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
            label: "Advanced",
            title: "Advanced features",
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
            label: "Sustainable",
            title: "Sustainable design",
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
                    className: "",
                }}>
                <div className="flex mt-20 h-36 divide-x p-0 rounded-2xl w-5/6 mx-auto border-b-2 border-r-2">
                    {data.map(({ label }, index) => (
                        <button className={activeTab === index ? "w-full border-t-8 rounded-xl border-t-rebin-blue -mb-3 bg-white -mr-0.5" : "w-full mt-2 ml-0.5"}>
                            <Tab key={index} value={index} className="" onClick={() => setActiveTab(index)}>
                                <div className=
                                    {activeTab === index ? "mx-auto bg-gradient w-8 aspect-square rounded-full text-white font-bold text-xl flex place-content-center"
                                        : "mx-auto bg-rebin-grey w-8 aspect-square rounded-full font-bold text-xl flex place-content-center"}>
                                    <div className={activeTab === index ? "h-min text-white" : "h-min text-gradient-horizontal"}>
                                        {index + 1}
                                    </div>
                                </div>
                                <p className="font-bold text-xl text-rebin-darkblue mt-1">
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
                        className="grid md:grid-cols-2 gap-8 mt-8"
                    >
                        <img className="mx-auto" src={Sensor2} alt="The worlds smallest waste sensor" />
                        <div className="space-y-4">
                            <h3 className="text-gradient-horizontal font-bold text-xl">{title}</h3>
                            <p className="text-black font-medium drop-shadow-xl">{parse(desc)}</p>
                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs >
    );
}