import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import Customer from '../../../assets/images/about/valueCards/customer.svg';
import Reliability from '../../../assets/images/about/valueCards/reliability.svg';
import Sustainability from '../../../assets/images/about/valueCards/sustainability.svg';
import Innovation from '../../../assets/images/about/valueCards/innovation.svg';

const ValueCards = () => {
  return (
    <div className="mx-auto mt-12 grid max-w-7xl place-content-center gap-4 md:grid-cols-2 md:px-20">
      <Card shadow={false} className="border shadow-around">
        <CardBody>
          <div className="bg-gradient w-10 rounded-md">
            <img
              src={Customer}
              alt="icon of a customer with a heart"
              className="mb-5 h-10 w-10 p-2 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Customer satisfaction
          </Typography>
          <Typography>
            At Rebin, customer satisfaction is one of our guiding principals. We
            value your feedback to continuously improve and exceed expectations.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="border shadow-around">
        <CardBody>
          <div className="bg-gradient w-10 rounded-md">
            <img
              src={Reliability}
              alt="Icon of a handshake"
              className="mb-5 h-10 w-10 p-2 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Entrepreunerial
          </Typography>
          <Typography>
            We challenge industry norms with an entrepreneurial mindset.
            Embracing a move-fast approach, we are always evolving to lead the
            industry.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="border shadow-around">
        <CardBody>
          <div className="bg-gradient w-10 rounded-md">
            <img
              src={Sustainability}
              alt="Icon of a leaf in a lightbulb"
              className="mb-5 h-10 w-10 p-2 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Sustainability
          </Typography>
          <Typography>
            We prioritize sustainability in all decisions, from partnerships to
            product development. We firmly believe our solution advances society
            towards a smarter future.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="border shadow-around">
        <CardBody>
          <div className="bg-gradient w-10 rounded-md">
            <img
              src={Innovation}
              alt="Icon of a lightbulb symbolizing an idea"
              className="mb-5 h-10 w-10 p-2 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Innovation
          </Typography>
          <Typography>
            Rebin is dedicated to continuous innovation, leveraging the latest
            technologies to ensure state-of-the-art solutions.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default ValueCards;
