import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const Benefits = () => {
  return (
    <div className="mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3 md:px-4">
      {/* Card 1 */}
      <Card shadow={false} className="border-rebin hover:shadow-md">
        <CardBody className="flex gap-4 items-start">
          <div className="bg-gradient aspect-square w-8 h-8 rounded-md text-white flex items-center justify-center text-lg font-semibold">
            1
          </div>
          <div className="flex flex-col text-left -mt-1">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Detailed bin inventory
            </Typography>
            <Typography>
              Map bins digitally and access an up-to-date inventory.
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 2 */}
      <Card shadow={false} className="border-rebin hover:shadow-md">
        <CardBody className="flex gap-4 items-start">
          <div className="bg-gradient aspect-square w-8 h-8 rounded-md text-white flex items-center justify-center text-lg font-semibold">
            2
          </div>
          <div className="flex flex-col text-left -mt-1">
            <Typography variant="h5"  className="mb-2 leading-tight text-rebin-darkblue">
              Cost savings
            </Typography>
            <Typography>
              Reduce collection costs by eliminating unnecessary pick-ups. 
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 3 */}
      <Card shadow={false} className="border-rebin hover:shadow-md">
        <CardBody className="flex gap-4 items-start">
          <div className="bg-gradient aspect-square w-8 h-8 rounded-md text-white flex items-center justify-center text-lg font-semibold">
            3
          </div>
          <div className="flex flex-col text-left -mt-1">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Clean environment
            </Typography>
            <Typography>
              Prevent overflowing bins and litter with real-time fill level insights.
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 4 */}
      <Card shadow={false} className="border-rebin hover:shadow-md">
        <CardBody className="flex gap-4 items-start">
          <div className="bg-gradient aspect-square w-8 h-8 rounded-md text-white flex items-center justify-center text-lg font-semibold">
            4
          </div>
          <div className="flex flex-col text-left -mt-1">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Automated scheduling
            </Typography>
            <Typography>
              Avoid scheduling difficulties with a adaptive planning tool. 
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 5 */}
      <Card shadow={false} className="border-rebin hover:shadow-md">
        <CardBody className="flex gap-4 items-start">
          <div className="bg-gradient aspect-square w-8 h-8 rounded-md text-white flex items-center justify-center text-lg font-semibold">
            5
          </div>
          <div className="flex flex-col text-left -mt-1">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Optimal bin placement
            </Typography>
            <Typography>
              Use insights to identify redundant bins and optimize placement.
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card 6 */}
      <Card shadow={false} className="border-rebin hover:shadow-md">
        <CardBody className="flex gap-4 items-start">
          <div className="bg-gradient aspect-square w-8 h-8 rounded-md text-white flex items-center justify-center text-lg font-semibold">
            6
          </div>
          <div className="flex flex-col text-left -mt-1">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              Legislation compliant
            </Typography>
            <Typography>
            Meet the latest regulations through accessible data from our platform.
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Benefits;





