import React from 'react';
import Emilio from '../../../assets/images/about/team/emilio.jpg';
import Kyanu from '../../../assets/images/about/team/kyanu.jpg';
import Simon from '../../../assets/images/about/team/simon.jpg';

const TeamCards = () => {
  const teamMembers = [
    {
      name: 'Emilio Van Der Linden',
      role: 'Co-founder',
      image: Emilio,
    },
    {
      name: 'Kyanu Delrue',
      role: 'Co-founder',
      image: Kyanu,
    },
    {
      name: 'Simon De Geyter',
      role: 'Co-founder',
      image: Simon,
    },
  ];

  return (
    <div className="mx-auto my-16 grid max-w-4xl grid-cols-1 place-content-center gap-4 sm:grid-cols-3">
      {teamMembers.map((member) => (
        <div key={member.name} className="flex flex-col">
          <img
            className="mx-auto aspect-square h-auto w-full max-w-52 rounded-lg object-cover"
            src={member.image}
            alt={member.name}
          />
          <caption className="text-gradient-horizontal mx-auto mt-4 font-bold">
            {member.name}
          </caption>
          <h4 as="caption" variant="h4" className="text-center font-normal">
            {member.role}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
