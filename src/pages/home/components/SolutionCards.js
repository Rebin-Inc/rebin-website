import { Card, CardBody } from '@material-tailwind/react';
import sensor from '../../../assets/images/home/solutions/sensor.svg';
import software from '../../../assets/images/home/solutions/software.svg';
import consulting from '../../../assets/images/home/solutions/consulting.svg';
import Button from '../../../components/Button';

export default function SolutionCards() {
  return (
    <div className="mx-auto my-10 grid grid-cols-1 md:grid-cols-3 lg:w-5/6 ">
      <Card
        shadow={false}
        className="-bottom-4 mx-5 my-auto min-h-80 rounded-3xl py-4 shadow-around md:-right-2 md:bottom-0 md:mx-0"
      >
        <CardBody className="space-y-4">
          <img
            src={sensor}
            alt="icon of Rebin Smart Sensor"
            className="mx-auto"
          />
          <h4 className="text-rebin-darkblue mb-2 text-3xl font-bold md:text-2xl">
            Hardware
          </h4>
          <p className="mx-auto text-black md:text-base">
            Rebin selects the best sensor for your application
          </p>
          {/* <Button text="Learn more" href="/sensor" /> */}
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="z-10 my-auto min-h-80 rounded-3xl py-10 shadow-around md:max-w-96"
      >
        <CardBody className="">
          <img
            src={software}
            alt="Icon of computer screen containing code"
            className="mx-auto"
          />
          <h4 className="text-rebin-darkblue mb-2 text-3xl font-bold md:text-2xl">
            Software
          </h4>
          <p className="mx-auto text-black md:text-base">
            Streamline any type of asset with our unified software solution
          </p>
          <Button text="Learn more" href="/software" margin="mt-8" />
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="m-h-80 -top-4 mx-5 rounded-3xl py-4 shadow-around md:-left-2 md:top-0 md:mx-0 md:my-8"
      >
        <CardBody className="space-y-4">
          <img src={consulting} alt="Icon of a dialog" className="mx-auto" />
          <h4 className="text-rebin-darkblue mb-2 text-3xl font-bold md:text-2xl">
            Consulting
          </h4>
          <p className="mx-auto text-black md:text-base">
            Experience customized asset policies to fit your needs
          </p>
          {/* <Button text="Learn more" href="/consulting" /> */}
        </CardBody>
      </Card>
    </div>
  );
}
