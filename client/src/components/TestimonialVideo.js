import React from 'react';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';


const TestimonialVideo = () => {
  
  const { i18n } = useTranslation();

  return (
    <div className="my-auto aspect-video overflow-hidden rounded-xl">
      <ReactPlayer
        url={i18n.language === 'en' ? "https://youtu.be/QDe44I2yLy4" : "https://youtu.be/UKuhEqqgwxQ"}
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