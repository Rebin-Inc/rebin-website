import { Card, CardBody } from '@material-tailwind/react';
import sensor from '../../../assets/images/home/solutions/sensor.svg';
import map from '../../../assets/images/home/solutions/map.svg';
import bar from '../../../assets/images/home/solutions/bar.svg';
import fillLevelMonitoring from '../../../assets/images/home/solutions/fill-level-monitoring.png';
import dataInsights from '../../../assets/images/home/solutions/data-insights.png';
import routeOptimization from '../../../assets/images/home/solutions/route-optimization.png';
import { useTranslation } from 'react-i18next';


export default function SolutionCards() {

  const { t } =useTranslation();

  return (
    <div className="mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:w-5/6">
      <Card
        shadow={false}
        className="min-h-80 flex flex-col items-center justify-between rounded-3xl border-rebin shadow-sm hover:shadow-lg"
      >
        <CardBody className="flex flex-col items-start space-y-4">
          <div className='flex items-center justify-center rounded-full bg-rebin-light-blue p-2 shadow-md'>
            <img
              src={sensor}
              alt="Icon of sensor inside a bin"
              className="aspect-square h-5 w-5"
            />
          </div>
          <h4 className="text-left text-rebin-darkblue text-xl font-bold md:text-2xl">
          {t("homepage.solution_1_title")}
          </h4>
          <p className="text-left text-rebin-darkblue md:text-base">
          {t("homepage.solution_1_subtitle")}
          </p>
          <img
              src={fillLevelMonitoring}
              alt="Icon of sensor inside a bin"
          />
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="min-h-80 flex flex-col items-center justify-between rounded-3xl border-rebin shadow-sm hover:shadow-lg"
      >
        <CardBody className="flex flex-col items-start space-y-4">
          <div className='flex items-center justify-center rounded-full bg-rebin-light-blue p-2 shadow-md'>
            <img
              src={map}
              alt="Icon of sensor inside a bin"
              className="aspect-square h-5 w-5"
            />
          </div>
          <h4 className="text-left text-rebin-darkblue text-xl font-bold md:text-2xl">
            {t("homepage.solution_2_title")}
          </h4>
          <p className="text-left text-rebin-darkblue md:text-base">
            {t("homepage.solution_2_subtitle")}
          </p>
          <img
            src={routeOptimization}
            alt="Icon of sensor inside a bin"
          />
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="min-h-80 flex flex-col items-center justify-between rounded-3xl  border-rebin shadow-sm hover:shadow-lg"
      >
        <CardBody className="flex flex-col items-start space-y-4">
          <div className='flex items-center justify-center rounded-full bg-rebin-light-blue p-2 shadow-md'>
            <img
              src={bar}
              alt="Icon of sensor inside a bin"
              className="aspect-square h-5 w-5"
            />
          </div>
          <h4 className="text-left text-rebin-darkblue text-xl font-bold md:text-2xl">
            {t("homepage.solution_3_title")}
          </h4>
          <p className="text-left text-rebin-darkblue md:text-base">
            {t("homepage.solution_3_subtitle")}
          </p>
          <img
            src={dataInsights}
            alt="Icon of sensor inside a bin"
          />
        </CardBody>
      </Card>
    </div>
  );
}

