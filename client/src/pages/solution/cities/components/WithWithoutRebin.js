import React, { useState } from 'react';
import withoutRebin from '../../../../assets/images/withoutRebin.png';
import withRebin from '../../../../assets/images/withRebin.png';

const WithWithoutRebin = () => {
  const [activeButton, setActiveButton] = useState('WithoutRebin'); // Default active button
  const [isFading, setIsFading] = useState(false); // State to control fade effect

  const handleButtonClick = (button) => {
    if (activeButton !== button) {
      setIsFading(true); // Trigger fade-out
      setTimeout(() => {
        setActiveButton(button); // Switch the image after fade-out
        setIsFading(false); // Trigger fade-in
      }, 300); // Match CSS transition duration
    }
  };

  return (
    <div className="flex flex-col gap-y-6 w-full px-4 max-w-screen-lg mx-auto">
      {/* Header section with buttons */}
      <div className="flex items-center mx-auto">
        <div className="w-[30px] md:w-[240px] h-[2px] bg-gradient-white-blue z-0"></div>

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

        <div className="w-[20px] h-[2px] bg-rebin-blue z-0"></div>

        <button
          className={`z-10 px-2 py-1 text-sm rounded-md transition-all duration-300 ${
            activeButton === 'WithRebin'
              ? 'bg-gradient text-white'
              : 'border-rebin-blue-color text-black'
          }`}
          onClick={() => handleButtonClick('WithRebin')}
        >
          With Rebin
        </button>

        <div className="w-[30px] md:w-[240px] h-[2px] bg-gradient-blue-white z-0"></div>
      </div>

      {/* Image display with fade effect */}
      <div className="relative mt-6 min-w-[300px]">
        <img
          key={activeButton} // Force re-render when the activeButton changes
          className={`rounded-lg w-full h-auto transition-opacity duration-300 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
          src={activeButton === 'WithRebin' ? withRebin : withoutRebin}
          alt="The Rebin team"
        />
      </div>
    </div>
  );
};

export default WithWithoutRebin;





