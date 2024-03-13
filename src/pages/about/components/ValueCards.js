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
              alt="Customer"
              className="w-10 h-10 p-2 mb-5 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Customer satisfaction
          </Typography>
          <Typography>
            Customer satisfaction is our utmost priority. Should any issues
            arise, we are always available to assist.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="shadow-around border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <img
              src={Reliability}
              alt="Reliability"
              className="w-10 h-10 p-2 mb-5 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Reliability
          </Typography>
          <Typography>
            We keep our promises, deliver consistent results, and remain
            reliable, regardless of the circumstances.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="shadow-around border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <img
              src={Sustainability}
              alt="Sustainability"
              className="w-10 h-10 p-2 mb-5 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Sustainability
          </Typography>
          <Typography>
            With our solution, we contribute to a more sustainable living
            environment.
          </Typography>
        </CardBody>
      </Card>
      <Card shadow={false} className="shadow-around border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <img
              src={Innovation}
              alt="Innovation"
              className="w-10 h-10 p-2 mb-5 text-white"
            />
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Innovation
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus iure
            cum harum in voluptatibus, nisi necessitatibus molestias amet.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default ValueCards;
