import React, { useRef, useState, useEffect } from 'react';
import VideoNl from '../../../../assets/videos/Website video municipalities nederlands.mp4';
import VideoEn from '../../../../assets/videos/Website video with Rebin cities & municipalities.mp4';
import { useTranslation } from 'react-i18next';


const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;
};

export default function App() {
  const { i18n } = useTranslation();
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);

  const withRebin = i18n.language === 'en' ? VideoEn : VideoNl


  useEffect(() => {
    if (isSafari() && videoParentRef.current) {
      const player = videoParentRef.current.children[0];
      if (player) {
        player.controls = false;
        player.playsInline = true;
        player.muted = true;
        player.setAttribute('muted', '');
        player.autoplay = true;
        player.disablePictureInPicture = true; // Disable Picture-in-Picture
        player.setAttribute('controlsList', 'nodownload nofullscreen noremoteplayback noplaybackrate'); // Restrict all controls

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
        <img src={withRebin} alt="Animation smart waste collection" />
      ) : (
        <div ref={videoParentRef} className="relative">
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            controls={false} // Completely disable controls
            disablePictureInPicture // Ensure PiP is disabled
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate" // Block speed control
            className="pointer-events-none select-none" // Prevents interactions
          >
            <source src={withRebin} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
}