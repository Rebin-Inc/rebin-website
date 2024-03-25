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
import Dashboard from "../../../assets/images/software/dashboard.svg";
import CreateRoute from "../../../assets/images/software/create_route.svg";


export default function FeatureMenu() {
    const [activeTab, setActiveTab] = React.useState(0);

    const data = [
        {
            label: "Dashboard",
            icon: Sensor,
            title: "Dashboard",
            image: Repoint,
            subtitle: "Know the status of your assets",
            desc: `
                Track the fill levels of your assets with a complete overview. Quickly identify critical KPIs and make informed decisions accordingly.
            `,
            advantages: [
                "Detailed asset inventory",
                "Real-time asset monitoring",
                "Relevant KPIs",
                "Alerts and notifications"
            ],
        },
        {
            label: "Route optimalisation",
            icon: Route,
            title: "Route optimalisation",
            image: CreateRoute,
            subtitle: "Bypass unnecessary assets",
            desc: `
            Improve collection operations by overlooking redundant assets, saving costs and reducing CO2 emissions along the way. Tailor routes using up-to-date fill level information to avoid unnecessary staff deployment.
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
            title: "Statistics",
            image: Dashboard,
            subtitle: "Take strategic decisions",
            desc: `
            Access a variety of statistics, such as collection frequencies, waste amounts, and fill rates. Utilize data-driven decisions to streamline resource management and reporting.
            `,
            advantages: [
                "Understand your assets",
                "Automated reports",
                "Detect zombie assets",
                "Be legislation compliant"
            ],
        },
    ];

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="mt-20 p-0 grid grid-cols-3"
                indicatorProps={{
                    className: "h-2 w-full bg-gradient rounded-full -mb-3",
                }}>
                {data.map(({ label, icon }, index) => (
                    <Tab key={index} value={index} className="flex items-end" onClick={() => setActiveTab(index)}>
                        <button className="min-h-16">
                            <div className="flex flex-col md:flex-row space-x-4">
                                <img src={icon} alt={label} className="h-12" />
                                <span className="font-bold text-xl text-rebin-darkblue hidden sm:block">{label}</span>
                            </div>
                        </button>
                    </Tab>
                ))}
                <div className="h-2 bg-rebin-grey w-full col-span-3 rounded-full"></div>
            </TabsHeader>
            <TabsBody>
                {data.map(({ title, subtitle, desc, advantages, percentages, image }, index) => (
                    <TabPanel
                        key={index}
                        value={index}
                        className="mt-10 grid md:grid-cols-2 place-items-center gap-14"
                    >
                        <img src={image} alt="The Repoint waste management platform" className="mx-auto" />
                        <div className="space-y-4">
                            <h3 className="text-gradient-horizontal font-bold text-3xl">{title}</h3>
                            <h4 className="text-rebin-darkblue text-4xl font-semibold">
                                {subtitle}
                            </h4>
                            <p className="text-black font-regular text-lg text-balance">
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