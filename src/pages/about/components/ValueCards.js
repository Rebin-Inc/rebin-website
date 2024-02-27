import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaUserCheck, FaHandshake, FaLightbulb } from "react-icons/fa6";
import { MdEnergySavingsLeaf } from "react-icons/md";

const ValueCards = () => {
  return (
    <div className="grid grid-cols-2 place-content-center mx-auto max-w-7xl gap-4 p-12 px-20">
      <Card className="shadow-2xl border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <FaUserCheck className="w-10 h-10 p-2 mb-5 text-white"></FaUserCheck>
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
      <Card className="shadow-2xl border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <FaHandshake className="w-10 h-10 p-2 mb-5 text-white"></FaHandshake>
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
      <Card className="shadow-2xl border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <MdEnergySavingsLeaf className="w-10 h-10 p-2 mb-5 text-white"></MdEnergySavingsLeaf>
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
      <Card className="shadow-2xl border">
        <CardBody>
          <div className="bg-gradient rounded-md w-10">
            <FaLightbulb className="w-10 h-10 p-2 mb-5 text-white"></FaLightbulb>
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
