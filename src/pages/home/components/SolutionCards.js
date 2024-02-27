import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function SolutionCards() {
  return (
    <div className="grid grid-cols-3">
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Waste sensor
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            animi placeat natus repellendus ducimus recusandae harum error eos
            cupiditate inventore et quae facere amet, quibusdam voluptatibus
            voluptatum quam minima minus?
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Software
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            impedit et nemo tempore nobis, iste minima qui, doloribus vitae
            laudantium delectus reprehenderit eligendi ab consequatur totam
            repellendus, veritatis error unde.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Consulting
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ex sint non fugiat quisquam. Dolorum dolore fugit similique
            voluptates ipsa doloribus exercitationem nemo minus, atque quisquam
            voluptatem, in reiciendis earum.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
