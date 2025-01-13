import { Card, CardBody } from '@material-tailwind/react';
import sensor from '../../../assets/images/home/solutions/sensor.svg';
import map from '../../../assets/images/home/solutions/map.svg';
import bar from '../../../assets/images/home/solutions/bar.svg';
import fillLevelMonitoring from '../../../assets/images/home/solutions/fill-level-monitoring.svg';
import dataInsights from '../../../assets/images/home/solutions/data-insights.svg';
import routeOptimization from '../../../assets/images/home/solutions/route-optimization.svg';


export default function SolutionCards() {
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
            Fill level monitoring
          </h4>
          <p className="text-left text-rebin-darkblue md:text-base">
            Monitor container and bin fill levels in real-time and collect only when necessary.
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
            Route optimisation
          </h4>
          <p className="text-left text-rebin-darkblue md:text-base">
            Optimize collection routes and reduce time, costs, and emissions.
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
            Data insights
          </h4>
          <p className="text-left text-rebin-darkblue md:text-base">
            Gain actionable data insights for strategic decision-making.
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

