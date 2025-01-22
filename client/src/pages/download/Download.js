import React, { useEffect } from "react";
import background from "../../assets/images/background.png";
import Pijl from "../../assets/images/Pijl_Rechts_Wit.svg";

const AutoDownloadPage = () => {
  useEffect(() => {
    const fileUrl = "/case-study-maarkedal.pdf"; 
    const fileName = "case-study-maarkedal.pdf"; 

    // Create and trigger the download automatically on page load
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.click();
  }, []);

  // Function to manually trigger the download
  const triggerDownload = () => {
    const fileUrl = "/case-study-maarkedal.pdf"; 
    const fileName = "case-study-maarkedal.pdf"; 

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.click();
  };

  return (
    <main className="space-y-16 pb-32 max-w-7xl mx-auto px-6 text-gray-800">
      <div className="mt-12 flex flex-col text-center items-center gap-6">
        {/* Header */}
        <h1 className="text-rebin-blue bg-indigo-100 w-fit font-medium text-sm border border-indigo-200 px-4 py-1 rounded-full uppercase tracking-wide">
          Download Ready
        </h1>
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Your file is downloading!
        </h2>
        <p className="text-lg font-light max-w-lg">
          Learn how to optimize your waste collection process. Gain control over your resources with practical insights and innovative solutions.
        </p>

        {/* Illustration with adjusted size */}
        <img
          className="mx-auto mt-2 aspect-square w-full rounded-lg object-contain sm:w-4/5 md:w-[28rem]"
          src={background}
          alt="The Rebin team"
        />

        {/* Always show the Retry Download button */}
        <div className="text-sm text-gray-600">
          <p>If your download did not start, <span onClick={triggerDownload} className="text-rebin-blue cursor-pointer">click here</span></p>
        </div>

        {/* Call-to-Action Button */}
        <button
          className=" flex items-center bg-rebin-blue text-white font-semibold text-base px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          onClick={() => (window.location.href = "/contact")}
        >
          <span>Contact Us</span>
          <img src={Pijl} alt="Arrow Icon" className="ml-2 w-6 h-6" />
        </button>
      </div>
    </main>
  );
};

export default AutoDownloadPage;




