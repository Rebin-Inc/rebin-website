import React from "react";

const AboutVideo = () => {
  return (
    <div className="md:p-6 my-auto">
      <video className="rounded-lg w-full" controls>
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
