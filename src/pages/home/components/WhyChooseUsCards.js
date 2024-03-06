import React from "react";
import RebinRBlue from "../../../assets/images/Rebin_R_Blauw.svg";
import { Card, CardBody } from "@material-tailwind/react";

const WhyChooseUsCards = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-5 bg-dotted-circle bg-center bg-no-repeat bg-contain p-16 mt-16">
      <Card className="row-start-1 col-start-1 col-span-3 row-span-2 border h-64">
        <CardBody className="flex h-full">
          <div className="p-4 pl-0 text-balance space-y-2 w-full">
            <h4 className="mb-1 text-2xl font-bold">24/7 support</h4>
            <p className="text-lg text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
              animi placeat natus repellendus ducimus
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
            alt=""
            className="h-full object-cover rounded-xl w-36"
          />
        </CardBody>
      </Card>
      <Card className="row-start-1 col-start-5 col-span-3 row-span-2 border">
        <CardBody className="flex h-full">
          <img
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
            alt=""
            className="h-full object-cover rounded-xl w-36"
          />
          <div className="p-4 pr-0 text-balance space-y-2 w-full">
            <h4 className="mb-1 text-2xl font-bold">World's best sensor</h4>
            <p className="text-lg text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
              animi placeat natus repellendus ducimus
            </p>
          </div>
        </CardBody>
      </Card>
      <Card className="row-start-4 col-start-1 col-span-3 row-span-2 border">
        <CardBody className="flex h-full">
          <div className="p-4 pl-0 text-balance space-y-2 w-full">
            <h4 className="mb-1 text-2xl font-bold">User-friendly</h4>
            <p className="text-lg text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
              animi placeat natus repellendus ducimus
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
            alt=""
            className="h-full object-cover rounded-xl w-36"
          />
        </CardBody>
      </Card>
      <Card className="row-start-4 col-start-5 col-span-3 row-span-2 border">
        <CardBody className="flex h-full">
          <img
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
            alt=""
            className="h-full object-cover rounded-xl w-36"
          />
          <div className="p-4 pr-0 text-balance space-y-2 w-full">
            <h4 className="mb-1 text-2xl font-bold">100% Belgium made</h4>
            <p className="text-lg text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
              animi placeat natus repellendus ducimus
            </p>
          </div>
        </CardBody>
      </Card>
      <Card className="row-start-3 col-start-4 w-fit h-fit m-auto">
        <img src={RebinRBlue} alt="" className="w-24 aspect-square" />
      </Card>
    </div>
  );
};

export default WhyChooseUsCards;
