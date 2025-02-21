import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { TruckIcon, ClockIcon, MapIcon  } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-5 flex flex-col sm:flex-row max-w-7xl gap-6 justify-between md:px-4">
      <div className='flex gap-x-3'>
        <div className="flex items-center justify-center rounded-full bg-rebin-light-blue border-rebin p-2 w-10 h-10">
          <MapIcon className='w-7 h-7 text-rebin-blue' />
        </div>
        <div className="flex flex-col text-left">
          <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
            {t("collectorpage.feature_1_title")}
          </Typography>
          <Typography>
            {t("collectorpage.feature_1_description")}
          </Typography>
        </div>
      </div>

      <div className='flex gap-x-3'>
        <div className="flex items-center justify-center rounded-full bg-rebin-light-blue border-rebin p-2 w-10 h-10">
          <ClockIcon className='w-7 h-7 text-rebin-blue' />
        </div>
        <div className="flex flex-col text-left">
          <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
            {t("collectorpage.feature_2_title")}
          </Typography>
          <Typography>
            {t("collectorpage.feature_2_description")}
          </Typography>
        </div>
      </div>

      <div className='flex gap-x-3'>
        <div className="flex items-center justify-center rounded-full bg-rebin-light-blue border-rebin p-2 w-10 h-10">
          <TruckIcon className='w-7 h-7 text-rebin-blue' />
        </div>
        <div className="flex flex-col text-left">
          <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
            {t("collectorpage.feature_3_title")}
          </Typography>
          <Typography>
            {t("collectorpage.feature_3_description")}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Features;


/*
<div className="mt-5 grid max-w-7xl gap-6 md:grid-cols-3 md:px-4">
<Card shadow={false}>
  <CardBody className="flex gap-4 items-start w-full">
    <div className="flex items-center justify-center aspect-square rounded-md bg-rebin-light-blue p-2 border-rebin">
      <img
        src={Route}
        alt="Icon of sensor inside a bin"
        className="aspect-square h-5 w-5"
      />
    </div>
    <div className="flex flex-col text-left -mt-1 w-full">
      <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
        {t("collectorpage.feature_1_title")}
      </Typography>
      <Typography>
        {t("collectorpage.feature_1_description")}
      </Typography>
    </div>
  </CardBody>
</Card>

<Card shadow={false}>
  <CardBody className="flex gap-4 items-start w-full">
    <div className="flex items-center justify-center aspect-square rounded-md bg-rebin-light-blue p-2 border-rebin">
      <img
        src={Time}
        alt="Icon of sensor inside a bin"
        className="aspect-square h-5 w-5"
      />
    </div>
    <div className="flex flex-col text-left -mt-1 w-full">
      <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
      {t("collectorpage.feature_2_title")}
      </Typography>
      <Typography>
        {t("collectorpage.feature_2_description")}
      </Typography>
    </div>
  </CardBody>
</Card>

<Card shadow={false}>
  <CardBody className="flex gap-4 items-start w-full">
    <div className="flex items-center justify-center aspect-square rounded-md bg-rebin-light-blue p-2 border-rebin">
      <img
        src={Truck}
        alt="Icon of sensor inside a bin"
        className="aspect-square h-5 w-5"
      />
    </div>
    <div className="flex flex-col text-left -mt-1 w-full">
      <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue">
        {t("collectorpage.feature_3_title")}
      </Typography>
      <Typography>
        {t("collectorpage.feature_3_description")}
      </Typography>
    </div>
  </CardBody>
</Card>
</div>
*/