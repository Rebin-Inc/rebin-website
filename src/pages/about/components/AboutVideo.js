import React from "react";

const AboutVideo = () => {
  return (
    <div className="place-self-center md:max-w-xl md:pl-6 md:py-6 my-auto">
      <video className="rounded-lg lg:w-11/12" controls>
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutVideo;
