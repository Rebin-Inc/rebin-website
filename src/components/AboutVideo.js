import React from 'react';
import ReactPlayer from 'react-player';
import Maarkedal from '../assets/images/references/blog/maarkedal.png';

const AboutVideo = () => {
  return (
    <div className="my-auto aspect-video overflow-hidden rounded-xl">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=eX3YBk9gxZ8"
        controls={false}
        light={Maarkedal}
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

export default AboutVideo;
