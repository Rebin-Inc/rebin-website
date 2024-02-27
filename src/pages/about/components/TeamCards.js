import React from "react";
import { Typography } from "@material-tailwind/react";

const TeamCards = () => {
  return (
    <div className="grid grid-cols-3 my-16 place-content-center max-w-4xl mx-auto gap-4">
      <div>
        <img
          className="w-full max-w-52 h-auto aspect-square rounded-lg object-cover mx-auto"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature"
        />
        <Typography
          as="caption"
          className="mt-4 text-center font-bold text-gradient-horizontal"
        >
          Emilio Van Der Linden
        </Typography>
        <Typography
          as="caption"
          variant="h4"
          className="text-center font-normal"
        >
          Co-founder
        </Typography>
      </div>
      <div>
        <img
          className="w-full max-w-52 h-auto aspect-square rounded-lg object-cover mx-auto"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature"
        />
        <Typography
          as="caption"
          className="mt-4 text-center font-bold text-gradient-horizontal"
        >
          Kyanu Delrue
        </Typography>
        <Typography
          as="caption"
          variant="h4"
          className="text-center font-normal"
        >
          Co-founder
        </Typography>
      </div>
      <div>
        <img
          className="w-full max-w-52 h-auto aspect-square rounded-lg object-cover mx-auto"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature"
        />
        <Typography
          as="caption"
          className="mt-4 text-center font-bold text-gradient-horizontal"
        >
          Simon De Geyter
        </Typography>
        <Typography
          as="caption"
          variant="h4"
          className="text-center font-normal"
        >
          Co-founder
        </Typography>
      </div>
    </div>
  );
};

export default TeamCards;
