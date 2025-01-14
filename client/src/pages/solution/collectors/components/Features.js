import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import Time from '../../../../assets/images/solution/time.svg';
import Truck from '../../../../assets/images/solution/truck.svg';
import Route from '../../../../assets/images/solution/route.svg';

const Features = () => {
  return (
    <div className="mt-5 grid max-w-7xl gap-6 md:grid-cols-3 md:px-4">
      {/* Card 1 */}
      <Card shadow={false}>
        <CardBody className="flex gap-4 items-start w-full">
          <div className="flex items-center justify-center rounded-full bg-rebin-light-blue p-2 border-rebin">
            <img
              src={Route}
              alt="Icon of sensor inside a bin"
              className="aspect-square h-5 w-5"
            />
          </div>
          <div className="flex flex-col text-left -mt-1 w-full">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Route optimisation
            </Typography>
            <Typography>
              Enhance profitability by avoiding empty pick-ups.
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 2 */}
      <Card shadow={false}>
        <CardBody className="flex gap-4 items-start w-full">
          <div className="flex items-center justify-center rounded-full bg-rebin-light-blue p-2 border-rebin">
            <img
              src={Time}
              alt="Icon of sensor inside a bin"
              className="aspect-square h-5 w-5"
            />
          </div>
          <div className="flex flex-col text-left -mt-1 w-full">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Timely waste collection
            </Typography>
            <Typography>
              Guarantee timely collection and put an end to overflowing assets.
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 3 */}
      <Card shadow={false}>
        <CardBody className="flex gap-4 items-start w-full">
          <div className="flex items-center justify-center rounded-full bg-rebin-light-blue p-2 border-rebin">
           <img
              src={Truck}
              alt="Icon of sensor inside a bin"
              className="aspect-square h-5 w-5"
            />
          </div>
          <div className="flex flex-col text-left -mt-1 w-full">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Collection efficiency
            </Typography>
            <Typography>
              Increase material collection with the same resources.
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Features;