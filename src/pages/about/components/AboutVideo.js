import React from "react";

const AboutVideo = () => {
  return (
    <div className="mx-auto my-auto">
      <video className="h-56 rounded-lg" controls>
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
