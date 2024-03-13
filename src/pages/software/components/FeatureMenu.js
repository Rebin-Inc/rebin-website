import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import React from "react";
import parse from "html-react-parser";
import Route from "../../../assets/images/software/route.svg";
import Sensor from "../../../assets/images/software/sensor.svg";
import Analytics from "../../../assets/images/software/analytics.svg";
import Repoint from "../../../assets/images/software/repoint.svg";
import Checkmark from "../../../assets/images/checkmark.svg";


export default function FeatureMenu() {
    const [activeTab, setActiveTab] = React.useState(0);

    const data = [
        {
            label: "Dashboard",
            icon: Sensor,
            title: "Dashboard",
            subtitle: "Get to know which bins are full",
            desc: `
            Our mission is to achieve a more cost-efficient and environmentally friendly way of waste collection. We want to make a positive contribution to improving waste management and enhancing sustainability.
            `,
            advantages: [
                "Accurate measurements",
                "Water- and shockproof",
                "universal sensor"
            ],
        },
        {
            label: "Route optimalisation",
            icon: Route,
            title: "Route optimalisation",
            subtitle: "Get to know which bins are full",
            desc: `
            Our mission is to achieve a more cost-efficient and environmentally friendly way of waste collection. We want to make a positive contribution to improving waste management and enhancing sustainability.
            `,
            advantages: [
                "Reduced collection time",
                "Fuel cost savings",
            ],
            percentages: [
                "58", "40"
            ],
        },
        {
            label: "Statistics",
            icon: Analytics,
            title: "The smallest sensor",
            subtitle: "Get to know which bins are full",
            desc: `
            Our mission is to achieve a more cost-efficient and environmentally friendly way of waste collection. We want to make a positive contribution to improving waste management and enhancing sustainability.
            `,
            advantages: [
                "Accurate measurements",
                "Water- and shockproof",
                "universal sensor"
            ],
        },
    ];

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="mt-20 rounded-none border-b-8 border-rebin-grey p-0"
                indicatorProps={{
                    className: "h-2 -mb-2 w-full mt-auto bg-gradient rounded-full",
                }}>
                {data.map(({ label, icon }, index) => (
                    <Tab key={index} value={index} className="" onClick={() => setActiveTab(index)}>
                        <button>
                            <div className="flex items-center justify-center space-x-4">
                                <img src={icon} alt={label} className="w-12" />
                                <span className="font-bold text-xl text-rebin-darkblue">{label}</span>
                            </div>
                        </button>
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ title, subtitle, desc, advantages, percentages }, index) => (
                    <TabPanel
                        key={index}
                        value={index}
                        className="mt-10 grid grid-cols-2 place-items-center gap-14"
                    >
                        <img src={Repoint} alt="The Repoint waste management platform" className="mx-auto" />
                        <div className="space-y-4">
                            <h3 className="text-gradient-horizontal font-bold text-3xl">{title}</h3>
                            <h4 className="text-rebin-darkblue text-4xl font-semibold">
                                {subtitle}
                            </h4>
                            <p className="text-black font-medium text-lg text-balance">
                                {parse(desc)}
                            </p>
                            <ul className="grid grid-rows-2 grid-cols-2 grid-flow-col">
                                {advantages.map((advantage, index) => (
                                    <li key={index} className="flex space-x-2 items-center p-2">
                                        {percentages && (
                                            <span className="text-gradient font-bold text-2xl">{percentages[index]}&#37;</span>
                                        )}
                                        {
                                            !percentages && (
                                                <img
                                                    src={Checkmark}
                                                    alt="Checkmark"
                                                    className="w-6 inline-block"
                                                />
                                            )
                                        }

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
        </Tabs >
    );
}