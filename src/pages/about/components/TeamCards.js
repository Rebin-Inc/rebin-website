import React from "react";
import Emilio from "../../../assets/images/Team/Emilio1.jpg";
import Kyanu from "../../../assets/images/Team/Kyanu1.jpg";
import Simon from "../../../assets/images/Team/Simon1.jpg";

const TeamCards = () => {

  const teamMembers = [
    {
      name: "Emilio Van Der Linden",
      role: "Co-founder",
      image: Emilio
    },
    {
      name: "Kyanu Delrue",
      role: "Co-founder",
      image: Kyanu
    },
    {
      name: "Simon De Geyter",
      role: "Co-founder",
      image: Simon
    },
  ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 my-16 place-content-center max-w-4xl mx-auto gap-4">
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
