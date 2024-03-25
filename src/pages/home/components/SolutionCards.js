import { Card, CardBody } from "@material-tailwind/react";
import sensor from "../../../assets/images/solutions/sensor.svg";
import software from "../../../assets/images/solutions/software.svg";
import consulting from "../../../assets/images/solutions/consulting.svg";
import Button from "../../../components/Button";

export default function SolutionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto lg:w-5/6 my-10 ">
      <Card shadow={false} className="my-auto min-h-80 py-4 shadow-around -bottom-4 md:bottom-0 md:-right-2 mx-5 md:mx-0 rounded-3xl">
        <CardBody className="space-y-4">
          <img src={sensor} alt="" className="mx-auto" />
          <h4 className="mb-2 text-rebin-darkblue text-3xl md:text-2xl font-bold">
            Hardware
          </h4>
          <p className="text-black mx-auto md:text-base">
            Rebin selects the best sensor for your application
          </p>
          <Button text="Learn more" href="/sensor" />
        </CardBody>
      </Card>
      <Card shadow={false} className="md:max-w-96 min-h-80 my-auto shadow-around z-10 rounded-3xl py-10">
        <CardBody className="space-y-4">
          <img src={software} alt="" className="mx-auto" />
          <h4 className="mb-2 text-rebin-darkblue text-3xl md:text-2xl font-bold">
            Software
          </h4>
          <p className="text-black mx-auto md:text-base">
            Streamline any type of asset with our unified software solution
          </p>
          <Button text="Learn more" href="/software" />
        </CardBody>
      </Card>
      <Card shadow={false} className="md:my-8 m-h-80 py-4 shadow-around -top-4 md:top-0 md:-left-2 mx-5 md:mx-0 rounded-3xl">
        <CardBody className="space-y-4">
          <img src={consulting} alt="" className="mx-auto" />
          <h4 className="mb-2 text-rebin-darkblue text-3xl md:text-2xl font-bold">
            Consulting
          </h4>
          <p className="text-black mx-auto md:text-base">
            Experience customized asset policies to fit your needs
          </p>
          <Button text="Learn more" href="/consulting" />
        </CardBody>
      </Card>
    </div>
  );
}
