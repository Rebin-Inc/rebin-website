import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import sensor from "../../../assets/images/solutions/sensor.svg";
import software from "../../../assets/images/solutions/software.svg";
import consulting from "../../../assets/images/solutions/consulting.svg";

export default function SolutionCards() {
  return (
    <div className="grid grid-cols-3 mx-auto w-fit my-10">
      <Card className="my-auto h-80 shadow-2xl -right-2">
        <CardBody>
          <img src={sensor} alt="" className="mx-auto" />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Waste sensor
          </Typography>
          <Typography className="w-64 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            animi placeat natus repellendus ducimus
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 mt-auto">
          <button className="w-36 justify-center rounded-full p-2.5 px-3 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Contact us
          </button>
        </CardFooter>
      </Card>
      <Card className="w-96 h-96 shadow-2xl  z-10">
        <CardBody>
          <img src={software} alt="" className="mx-auto" />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Software
          </Typography>
          <Typography className="w-64 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            animi placeat natus repellendus ducimus
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 mt-auto">
          <button className="w-36 justify-center rounded-full p-2.5 px-3 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Contact us
          </button>
        </CardFooter>
      </Card>
      <Card className="my-auto h-80 shadow-2xl -left-2">
        <CardBody>
          <img src={consulting} alt="" className="mx-auto" />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Consulting
          </Typography>
          <Typography className="w-64 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            animi placeat natus repellendus ducimus
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 mt-auto">
          <button className="w-36 justify-center rounded-full p-2.5 px-3 bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Contact us</span>
            Contact us
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
