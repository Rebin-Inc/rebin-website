import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

const Benefits = () => {

  const { t } =useTranslation();

  return (
    <div className="mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3 md:px-4">
      {/* Card 1 */}
      <Card shadow={false} className="border-rebin hover:shadow-md">
        <CardBody className="flex gap-4 items-start">
          <div className="bg-gradient aspect-square w-8 h-8 rounded-md text-white flex items-center justify-center text-lg font-semibold">
            1
          </div>
          <div className="flex flex-col text-left -mt-1">
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue font-sans">
            {t("citiespage.benefit1_title")}
            </Typography>
            <Typography className='font-sans'>
            {t("citiespage.benefit1_description")}
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
            <Typography variant="h5"  className="mb-2 leading-tight text-rebin-darkblue font-sans">
            {t("citiespage.benefit2_title")}
            </Typography>
            <Typography className='font-sans'>
            {t("citiespage.benefit2_description")}
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
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue font-sans">
            {t("citiespage.benefit3_title")}
            </Typography>
            <Typography className='font-sans'>
            {t("citiespage.benefit3_description")}
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
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue font-sans">
            {t("citiespage.benefit4_title")}
            </Typography>
            <Typography className='font-sans'>
            {t("citiespage.benefit4_description")}
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
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue font-sans">
            {t("citiespage.benefit5_title")}
            </Typography>
            <Typography className='font-sans'>
            {t("citiespage.benefit5_description")}
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
            <Typography variant="h5" className="mb-2 leading-tight text-rebin-darkblue font-sans">
            {t("citiespage.benefit6_title")}
            </Typography>
            <Typography className='font-sans'>
            {t("citiespage.benefit6_description")}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Benefits;





