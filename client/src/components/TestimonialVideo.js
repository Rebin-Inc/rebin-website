import React from 'react';
import ReactPlayer from 'react-player';

const TestimonialVideo = () => {
  return (
    <div className="my-auto aspect-video overflow-hidden rounded-xl">
      <ReactPlayer
        url="https://youtu.be/QDe44I2yLy4"
        controls={false}
        width="100%"
        height="100%"
      />
      <meta
        itemProp="description"
        content="A short introductory video explaining the workings and foundation of Rebin."
      />
    </div>
  );
};

export default TestimonialVideo;