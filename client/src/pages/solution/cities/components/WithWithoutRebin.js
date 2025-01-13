import React, { useState } from 'react';
import withoutRebin from '../../../../assets/images/withoutRebin.svg';
import withRebin from '../../../../assets/images/withRebin.svg';

const WithWithoutRebin = () => {
  const [activeButton, setActiveButton] = useState('WithoutRebin'); // Default active button
  const [fade, setFade] = useState(true); // State for fade effect

  // Function to handle button click and update active button
  const handleButtonClick = (button) => {
    if (activeButton !== button) {
      setFade(false); // Trigger fade-out
      setTimeout(() => {
        setActiveButton(button); // Switch image after fade-out
        setFade(true); // Trigger fade-in
      }, 300); // Timeout matches the fade-out duration
    }
  };

  return (
    <div className="flex flex-col gap-y-6 w-full px-4 max-w-screen-lg mx-auto">
      {/* Header section with buttons */}
      <div className="flex items-center mx-auto">
        {/* Left gradient line */}
        <div className="w-[30px] md:w-[240px] h-[2px] bg-gradient-white-blue z-0"></div>

        {/* Without Rebin button */}
        <button
          className={`z-10 px-2 py-1 text-sm rounded-md transition-all duration-300 ${
            activeButton === 'WithoutRebin'
              ? 'bg-gradient text-white'
              : 'border-rebin-blue-color text-black'
          }`}
          onClick={() => handleButtonClick('WithoutRebin')}
        >
          Without Rebin
        </button>

        {/* Spacer between buttons */}
        <div className="w-[20px] h-[2px] bg-rebin-blue z-0"></div>

        {/* With Rebin button */}
        <button
          className={`z-10 px-2 py-1 text-sm rounded-md transition-all duration-600 ${
            activeButton === 'WithRebin'
              ? 'bg-gradient text-white'
              : 'border-rebin-blue-color text-black'
          }`}
          onClick={() => handleButtonClick('WithRebin')}
        >
          With Rebin
        </button>

        {/* Right gradient line */}
        <div className="w-[30px] md:w-[240px] h-[2px] bg-gradient-blue-white z-0"></div>
      </div>

      {/* Image display based on active button with fade effect */}
        <img
          className={`rounded-lg transition-opacity duration-300 mt-6 min-w-[300px] ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
          src={activeButton === 'WithRebin' ? withRebin : withoutRebin}
          alt="The Rebin team"
        />
    </div>
  );
};

export default WithWithoutRebin;




