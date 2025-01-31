import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import Time from '../../../../assets/images/solution/time.svg';
import Truck from '../../../../assets/images/solution/truck.svg';
import Route from '../../../../assets/images/solution/route.svg';
import { useTranslation } from 'react-i18next';

const Benefits = () => {

  const { t } =useTranslation();

  return (
    <div className="mt-5 grid max-w-3xl gap-6 md:grid-cols-2 md:px-4">
      {/* Card 1 */}
      <Card shadow={false}>
        <CardBody className="flex gap-4 items-start w-full">
          <div className="flex items-center justify-center aspect-square w-8 h-8 rounded-md bg-rebin-light-blue p-2 border-rebin ">
            <span className='text-gradient'>1</span>
          </div>
          <div className="flex flex-col text-left -mt-1 w-full ">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
              {t("collectorpage.benefits_1_title")}
            </Typography>
            <Typography className='text-justify'>
              {t("collectorpage.benefits_1_description")}
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
              {t("collectorpage.benefits_2_title")}
            </Typography>
            <Typography className='text-justify'>
            {t("collectorpage.benefits_2_description")}
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
              {t("collectorpage.benefits_3_title")}
            </Typography>
            <Typography className='text-justify'>
              {t("collectorpage.benefits_3_description")}
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
              {t("collectorpage.benefits_4_title")}
            </Typography>
            <Typography className='text-justify '>
              {t("collectorpage.benefits_4_description")}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Benefits;