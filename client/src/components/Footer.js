import React from 'react';
import rebin from '../assets/images/rebin-white.png';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CookiePolicy from '../assets/documents/Cookieverklaring_Rebin.pdf';
import TermsAndConditions from '../assets/documents/AlgemeneVoorwaarden_Rebin.pdf';
import PrivacyPolicy from '../assets/documents/Privacyverklaring_Rebin.pdf';

const Footer = () => {
  return (
    <footer className="bg-gradient-footer pt-20 text-white">
      <div
        className="mx-auto flex max-w-7xl flex-col px-6 pb-5 lg:flex-row"
        aria-label="Global"
      >
        <div className="space-y-6 pb-10">
          <Link className="mt-8" to="/">
            <span className="sr-only">Rebin</span>
            <img className="h-8 w-auto" src={rebin} alt="The Rebin Logo"></img>
          </Link>
          <p className="text-sm font-light opacity-80">
            Copyright &copy; 2025 for Rebin.<br></br>
            All rights reserved.
          </p>
          <Link
            to="https://linkedin.com/company/rebin-be"
            className="mr-2 inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-4 w-4" aria-hidden="true"></FaLinkedin>
          </Link>
          <Link
            to="https://www.youtube.com/@Rebin_inc."
            className="m-1 inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="h-4 w-4" aria-hidden="true"></FaYoutube>
          </Link>
        </div>
        <div className="lg mb-8 grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:flex lg:w-full lg:flex-row lg:justify-around">
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-semibold">Explore</p>
            {/* <Link
              to="how-it-works"
              className="inline text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              How it works
            </Link> */}
            <Link
              to="references"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              References
            </Link>
            <Link
              to="about"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              About us
            </Link>
            <Link
              to="contact"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-semibold">Solution</p>
            {/* <Link
              to="sensor"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              Smart waste sensor
            </Link> */}
            <Link
              to="solution/cities"
              className="inline text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              Cities & municipalities
            </Link>
            <Link
              to="solution/collectors"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              Waste collectors
            </Link>
            {/* <Link
              to="consulting"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              Consulting
            </Link> */}
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-semibold">Contact</p>
            <p className="text-sm font-light opacity-80">info@rebin.be</p>
            <p className="text-sm font-light opacity-80">
              Lammerstraat 13
              <br /> 9000 Gent, België
            </p>
            <p className="text-sm font-light opacity-80">BE 0799.727.089</p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-semibold">Stay up to date</p>
            <div className="flex max-w-md flex-col space-y-4">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="focus:border-1 max-w-36 rounded-md border-0 bg-white/10 px-3.5 py-1  text-xs text-white focus:border-blue-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="text-rebin-darkblue max-w-14 flex-none rounded-md bg-white px-1 py-1 text-xs font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mx-auto flex max-w-7xl gap-x-6 px-6 pb-10 sm:gap-x-8"
        aria-label="Global"
      >
        <a
          href={CookiePolicy}
          className="text-xs font-light opacity-80 hover:font-normal hover:opacity-100"
        >
          Cookie policy
        </a>
        <a
          href={TermsAndConditions}
          className="text-xs font-light opacity-80 hover:font-normal hover:opacity-100"
        >
          Terms & conditions
        </a>
        <a
          href={PrivacyPolicy}
          className="text-xs font-light opacity-80 hover:font-normal hover:opacity-100"
        >
          Privacy policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
