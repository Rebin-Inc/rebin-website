import React from "react";
import rebin from "../assets/images/rebin-white.png";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import CookiePolicy from "../assets/documents/Cookieverklaring_Rebin.pdf";
import TermsAndConditions from "../assets/documents/AlgemeneVoorwaarden_Rebin.pdf";
import PrivacyPolicy from "../assets/documents/Privacyverklaring_Rebin.pdf";

const Footer = () => {
  return (
    <footer className="bg-gradient-footer text-white pt-20">
      <div
        className="flex flex-col lg:flex-row mx-auto max-w-7xl pb-5 px-6"
        aria-label="Global"
      >
        <div className="space-y-6 pb-10">
          <Link className="mt-8" to="/">
            <span className="sr-only">Rebin</span>
            <img className="h-8 w-auto" src={rebin} alt=""></img>
          </Link>
          <p className="text-sm font-light opacity-80">
            Copyright &copy; 2024 for Rebin.<br></br>
            All rights reserved.
          </p>
          <Link
            to="https://linkedin.com/company/rebin-be"
            className="mr-2 inline-flex items-center justify-center rounded-full p-2 bg-white/10 hover:bg-white/30"
          >
            <FaLinkedin className="h-4 w-4" aria-hidden="true"></FaLinkedin>
          </Link>
          <Link
            to="https://www.youtube.com/"
            className="m-1 inline-flex items-center justify-center rounded-full p-2 bg-white/10 hover:bg-white/30"
          >
            <FaYoutube className="h-4 w-4" aria-hidden="true"></FaYoutube>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-y-10 mb-8 sm:grid-cols-4 lg:flex lg:flex-row lg:justify-around lg lg:w-full">
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-semibold">Explore</p>
            <Link
              to="how-it-works"
              className="inline text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              How it works
            </Link>
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
            <Link
              to="sensor"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              Smart waste sensor
            </Link>
            <Link
              to="software"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              Software
            </Link>
            <Link
              to="consulting"
              className="text-sm font-light opacity-80 hover:font-normal hover:opacity-100"
            >
              Consulting
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-semibold">Contact</p>
            <p className="text-sm font-light opacity-80">info@rebin.be</p>
            <p className="text-sm font-light opacity-80">9000 Gent</p>
            <p className="text-sm font-light opacity-80">BE 0799.727.089</p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-sm font-semibold">Stay up to date</p>
            <div class="flex flex-col space-y-4 max-w-md">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="rounded-md max-w-36 text-xs border-0 bg-white/10 px-3.5 py-1  text-white focus:border-1 focus:border-blue-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none max-w-14 text-xs rounded-md bg-white px-1 py-1 font-semibold text-rebin-darkblue shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex gap-x-6 sm:gap-x-8 mx-auto max-w-7xl pb-10 px-6"
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
