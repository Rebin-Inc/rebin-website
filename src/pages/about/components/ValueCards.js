import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Customer from "../../../assets/images/customer.svg";
import Reliability from "../../../assets/images/reliability.svg";
import Sustainability from "../../../assets/images/sustainability.svg";
import Innovation from "../../../assets/images/innovation.svg";

const ValueCards = () => {
  return (
    <div className="grid md:grid-cols-2 place-content-center mx-auto max-w-7xl gap-4 mt-12 md:px-20">
      <Card shadow={false} className="shadow-around border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <img
              src={Customer}
              alt="icon of a customer with a heart"
              className="w-10 h-10 p-2 mb-5 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Customer satisfaction
          </Typography>
          <Typography>
            At Rebin, customer satisfaction is one of our guiding principals.
            We value your feedback to continuously improve and exceed expectations.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="shadow-around border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <img
              src={Reliability}
              alt="Icon of a handshake"
              className="w-10 h-10 p-2 mb-5 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Entrepreunerial
          </Typography>
          <Typography>
            We challenge industry norms with an entrepreneurial mindset.
            Embracing a move-fast approach, we are always evolving to lead the industry.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="shadow-around border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <img
              src={Sustainability}
              alt="Icon of a leaf in a lightbulb"
              className="w-10 h-10 p-2 mb-5 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Sustainability
          </Typography>
          <Typography>
            We prioritize sustainability in all decisions, from partnerships to product development.
            We firmly believe our solution advances society towards a smarter future.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="shadow-around border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <img
              src={Innovation}
              alt="Icon of a lightbulb symbolizing an idea"
              className="w-10 h-10 p-2 mb-5 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Innovation
          </Typography>
          <Typography>
            Rebin is dedicated to continuous innovation,
            leveraging the latest technologies to ensure state-of-the-art solutions.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default ValueCards;
