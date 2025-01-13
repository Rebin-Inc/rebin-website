import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import Time from '../../../../assets/images/solution/time.svg';
import Truck from '../../../../assets/images/solution/truck.svg';
import Route from '../../../../assets/images/solution/route.svg';

const Benefits = () => {
  return (
    <div className="mt-5 grid max-w-3xl gap-6 md:grid-cols-2 md:px-4">
      {/* Card 1 */}
      <Card shadow={false}>
        <CardBody className="flex gap-4 items-start w-full">
          <div className="flex items-center justify-center aspect-square w-8 h-8 rounded-md bg-rebin-light-blue p-2 border-rebin ">
            <span className='text-gradient'>1</span>
          </div>
          <div className="flex flex-col text-left -mt-1 w-full">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Optimized fleet planning
            </Typography>
            <Typography>
              Align your collection process with fleet availability and load capacity, and avoid interrupted collection routes due to fully loaded trucks.
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 2 */}
      <Card shadow={false}>
        <CardBody className="flex gap-4 items-start w-full">
          <div className="flex items-center justify-center aspect-square w-8 h-8 rounded-md  bg-rebin-light-blue p-2 border-rebin ">
            <span className='text-gradient'>2</span>
          </div>
          <div className="flex flex-col text-left -mt-1 w-full">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Operational efficiency
            </Typography>
            <Typography>
              Cut collection costs by eliminating unnecessary pick-ups, ensuring cost-effective operations.
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 3 */}
      <Card shadow={false}>
        <CardBody className="flex gap-4 items-start w-full">
          <div className="flex items-center justify-center aspect-square w-8 h-8 rounded-md bg-rebin-light-blue p-2 border-rebin ">
            <span className='text-gradient'>3</span>
          </div>
          <div className="flex flex-col text-left -mt-1 w-full">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Improved customer service
            </Typography>
            <Typography>
              Fully relieve your customers with a hassle-free logistics process. Remove the need for customers informing you of full containers and avoid overflow.
            </Typography>
          </div>
        </CardBody>
      </Card>

            {/* Card 4 */}
      <Card shadow={false} >
        <CardBody className="flex gap-4 items-start w-full">
          <div className="flex items-center justify-center aspect-square w-8 h-8 rounded-md bg-rebin-light-blue p-2 border-rebin ">
            <span className='text-gradient'>4</span>
          </div>
          <div className="flex flex-col text-left -mt-1 w-full">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Maximized volumes
            </Typography>
            <Typography>
              Increase volumes and revenues through timely collection of containers with valuable waste streams such as glass and textile.
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Benefits;