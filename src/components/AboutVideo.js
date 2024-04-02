import React from "react";
import YouTube from 'react-youtube';

const AboutVideo = () => {

  const opts = {
    width: `100%`,
    playerVars: {
      autoplay: 0,
      showinfo: 0,
      quality: 'hd720',
    },
  };

  const videoStyle = {
    borderRadius: '10px', // Adjust the radius to your preference
    overflow: 'hidden',   // Ensure the video content is within the rounded corners
    maxWidth: '100%',     // Make the video container responsive
  };

  return (
    <div className="my-auto rounded-lg" style={videoStyle}>
      <YouTube videoId="eX3YBk9gxZ8" opts={opts} />
      <meta itemProp="description" content="Animation showing a network of bins where the bins which are full are indicated using a red arrow. A garbage truck then picks up only the bins which are full." />
    </div>
  );
};

export default AboutVideo;

