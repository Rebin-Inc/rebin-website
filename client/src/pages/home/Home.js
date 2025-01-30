import React from 'react';
import SolutionCards from './components/SolutionCards';
import TestimonialVideo from '../../components/TestimonialVideo';
import CallToAction from '../../components/CallToAction';
import PartnersSection from './components/PartnersSection';
import Pijl from '../../assets/images/Pijl_Rechts_Wit.svg';
import RebinR from '../../assets/images/Rebin_R_Gradient.svg';
import platform from '../../assets/images/home/platform.png';
import mockup from '../../assets/images/home/mockup.png';
import FAQ from './components/FAQ';
import { useTranslation } from 'react-i18next';

const Home = () => {


  const { t } =useTranslation();

  return (
    <>
      <div className="relative flex flex-col items-center gap-x-6 gap-y-5 text-center max-w-7xl ml-auto mr-auto p-6">
        <span className="z-20 mt-5 text-white font-extralight text-md border border-rebin-blue-color px-3 py-2 rounded-lg">
        {t("homepage.hero_span")}
        </span>
        <div className="grid place-items-center">
        <div class="absolute z-10 h-[300px] w-[300px] bg-[#0043ff] blur-[80px] sm:h-[300px] sm:w-[500px]"></div>
          <div className='z-10 flex flex-col items-center gap-x-6 gap-y-5 text-center max-w-7xl ml-auto mr-auto'>
            <h1 className="text-white text-4xl font-bold md:text-6xl md:mt-2 max-w-4xl text-center">
            {t("homepage.hero_title")}
            </h1>
            <p className="text-white font-thin mt-2 max-w-xl text-lg text-center">
            {t("homepage.hero_subtitle")}
            </p>
            <button onClick={() => (window.location.href = 'contact')}  className="special-button bg-rebin-dark-blue mt-2 w-fit px-4 py-3 text-white font-regular rounded-lg text-center">
            {t("homepage.hero_cta_button")}
            </button>
          </div>
        </div>
        {/* Positioning the image */}
        <div className="z-20 relative w-full h-48 -mt-[40px] md:mt-[120px] lg:mt-[300px] xl:mt-[320px]">
          <img
            className="absolute bottom-[-40%] md:bottom-[-50%] lg:bottom-[-60%] left-1/2 transform -translate-x-1/2 w-[95%] md:w-[80%] lg:w-[70%]"
            src={platform}
            alt="The Rebin Logo"
          />
        </div>
      </div>

      <div className="bg-white pt-10 md:pt-10">
        <div className="md:mt-10 p-6">
          <PartnersSection />
        </div>

        <div className="flex flex-col mt-10 md:mt-24 text-center items-center p-6">
          <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          {t("homepage.solution_span")}
          </h1>
          <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue mb-10">
          {t("homepage.solution_title")}
          </h2>
          <SolutionCards />
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-10 md:mt-16 grid gap-x-4 items-center gap-y-12 md:grid-cols-2 max-w-7xl ml-auto mr-auto p-6">
          {/* Content Container */}
          <div className="flex flex-col items-start md:order-2">
            <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
            {t("homepage.why_choose_us_span")}
            </h1>
            <h2 className="text-left mt-4 text-4xl font-bold text-rebin-darkblue">
            {t("homepage.why_choose_us_title")}
            </h2>
            <p className="text-left mt-6">
            {t("homepage.why_choose_us_description")}
            </p>
          </div>

          {/* Image Container */}
          <div className="-mt-10 sm:mt-0 flex justify-center order-2 md:order-1">
            <img
              className="mx-auto my-auto aspect-square w-full rounded-lg object-contain sm:w-4/5 md:w-[28rem]"
              src={mockup}
              alt="The Rebin team"
            />
          </div>
        </div>

        {/* Full-width Background Section */}
        <div className="bg-rebin-dark-blue w-screen mt-24 text-white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center max-w-7xl mx-auto px-10 py-12">
            {/* Text Section */}
            <div className="grid place-items-center">
              <div className="blob absolute z-20"></div>
              <div className="space-y-8 lg:pr-12 z-20">
                <h1 className="w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
                {t("homepage.testimonial_span")}
                </h1>
                <h2 className="text-4xl font-semibold">
                {t("homepage.testimonial_title")}
                </h2>
                <button
                  className="special-button flex items-center bg-rebin-blue mt-2 w-fit px-4 py-3 text-white font-regular rounded-lg"
                  onClick={() => (window.location.href = 'references')} // Use onClick for navigation if not using React Router
                >
                  {t("homepage.testimonial_cta_button")}
                  <img src={Pijl} alt="Arrow Icon" className="w-8 h-8" />
                </button>
              </div>
            </div>

            {/* Video Section */}
            <div className="w-full max-w-2xl">
              <TestimonialVideo />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-24 text-center items-center">
          <h1 className="text-rebin-blue w-fit font-light text-md border border-rebin-blue-color px-4 py-1 rounded-lg">
          {t("homepage.FAQ_span")}
          </h1>
          <h2 className="mt-4 text-4xl font-bold text-rebin-darkblue mb-10">
          {t("homepage.FAQ_title")}
          </h2>
          <FAQ />
        </div>
         <CallToAction />
         
      </div>
    </>
  );
};

export default Home;








