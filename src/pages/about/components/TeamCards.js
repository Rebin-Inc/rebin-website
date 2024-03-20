import React from "react";
import { Typography } from "@material-tailwind/react";

const TeamCards = () => {

  const teamMembers = [
    {
      name: "Emilio Van Der Linden",
      role: "Co-founder",
      image: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
    },
    {
      name: "Kyanu Delrue",
      role: "Co-founder",
      image: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
    },
    {
      name: "Simon De Geyter",
      role: "Co-founder",
      image: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
    },
  ];


  return (
    <div className="grid grid-cols-3 my-16 place-content-center max-w-4xl mx-auto gap-4">
      {teamMembers.map((member) => (
        <div key={member.name} className="flex flex-col">
          <img
            className="w-full max-w-52 h-auto aspect-square rounded-lg object-cover mx-auto"
            src={member.image}
            alt={member.name}
          />
          <caption
            className="mt-4 font-bold text-gradient-horizontal mx-auto"
          >
            {member.name}
          </caption>
          <h4
            as="caption"
            variant="h4"
            className="text-center font-normal"
          >
            {member.role}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
