import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import sensor from "../../../assets/images/solutions/sensor.svg";
import software from "../../../assets/images/solutions/software.svg";
import consulting from "../../../assets/images/solutions/consulting.svg";

export default function SolutionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-5/6 my-10 ">
      <Card shadow={false} className="my-auto min-h-96 py-4 shadow-around -bottom-4 md:bottom-0 md:-right-2 mx-5 md:mx-0 rounded-3xl">
        <CardBody className="space-y-4">
          <img src={sensor} alt="" className="mx-auto" />
          <h4 className="mb-2 text-rebin-darkblue text-3xl md:text-2xl font-bold">
            Hardware
          </h4>
          <p className="text-black mx-auto text-2xl md:text-base">
            That is why we're committed to to achieve a more
          </p>
        </CardBody>
        <CardFooter className="pt-0 mt-auto">
          <button className="w-36 justify-center rounded-full p-2.5 px-3 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Learn more
          </button>
        </CardFooter>
      </Card>
      <Card shadow={false} className="md:max-w-96 min-h-96 shadow-around z-10 rounded-3xl py-10">
        <CardBody className="space-y-4">
          <img src={software} alt="" className="mx-auto" />
          <h4 className="mb-2 text-rebin-darkblue text-3xl md:text-2xl font-bold">
            Software
          </h4>
          <p className="text-black mx-auto text-2xl md:text-base">
            That is why we're committed to to achieve a more
          </p>
        </CardBody>
        <CardFooter className="pt-0 mt-auto">
          <button className="w-36 justify-center rounded-full p-2.5 px-3 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Learn more
          </button>
        </CardFooter>
      </Card>
      <Card shadow={false} className="md:my-8 min-h-96 py-4 shadow-around -top-4 md:top-0 md:-left-2 mx-5 md:mx-0 rounded-3xl">
        <CardBody className="space-y-4">
          <img src={consulting} alt="" className="mx-auto" />
          <h4 className="mb-2 text-rebin-darkblue text-3xl md:text-2xl font-bold">
            Consulting
          </h4>
          <p className="text-black mx-auto text-2xl md:text-base">
            That is why we're committed to to achieve a more
          </p>
        </CardBody>
        <CardFooter className="pt-0 mt-auto">
          <button className="w-36 justify-center rounded-full p-2.5 px-3 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Learn more
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
