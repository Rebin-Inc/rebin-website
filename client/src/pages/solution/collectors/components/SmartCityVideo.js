import React, { useRef, useState, useEffect } from 'react';
import Video from '../../../../assets/videos/home/smart_city.mp4';

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;
};

export default function App() {
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    if (isSafari() && videoParentRef.current) {
      const player = videoParentRef.current.children[0];
      if (player) {
        player.controls = false;
        player.playsInline = true;
        player.muted = true;
        player.setAttribute('muted', '');
        player.autoplay = true;

        setTimeout(() => {
          const promise = player.play();
          if (promise?.catch) {
            promise.catch(() => {
              videoParentRef.current.style.display = 'none';
              setShouldUseImage(true);
            });
          }
        }, 0);
      }
    }
  }, []);

  return (
    <>
      {shouldUseImage ? (
        <img src={Video} alt="Animation of a smart city" />
      ) : (
        <div ref={videoParentRef}>
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            controls={false}
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      )}
      {/* Structured data for video */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Smart waste collection Animation",
          description:
            "An engaging animation of a smart city showcasing modern waste collection.",
          thumbnailUrl: "/path-to-thumbnail.jpg", // Provide a valid thumbnail URL
          uploadDate: "2025-01-10", // Adjust to your video upload date
          contentUrl: "https://yourwebsite.com/path-to-video.mp4", // Fully qualified URL
          embedUrl: "https://yourwebsite.com/path-to-page", // Fully qualified URL of the page where video is embedded
        })}
      </script>
    </>
  );
}

