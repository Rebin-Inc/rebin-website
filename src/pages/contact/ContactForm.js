import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const ContactForm = () => {
  return (
    <div className="relative flex items-top justify-center bg-white sm:items-center sm:pt-0">
      <div className="max-w-4xl mx-auto px-2 border-1 rounded-xl shadow-2xl p-3">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 space-x-2">
            {/* Blue banner */}
            <div className="p-8 mr-2 bg-gradient rounded-lg col-span-2">
              <h1 className="text-normal text-lg sm:text-xl font-semibold text-white mt-2 my-12">
                Contact information
              </h1>
              <div className="flex items-center mt-2 text-white">
                <EnvelopeIcon className="size-10"></EnvelopeIcon>
                <div className="ml-4 ">
                  <label htmlFor="">Email</label>
                  <div className="text-md tracking-wide font-medium w-40">
                    info@rebin.be
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-8 text-white">
                <MapPinIcon className="size-10"></MapPinIcon>
                <div className="ml-4 ">
                  <label htmlFor="">Address</label>
                  <div className="text-md tracking-wide font-medium w-45">
                    Sassevaartstraat 46, <br />
                    9000 Gent
                  </div>
                </div>
              </div>
            </div>
            {/* Contact form */}
            <form className="p-8 flex flex-col justify-center col-span-3">
              <h1 className="text-normal text-sm text-xl font-semibold text-black mt-2 my-12">
                Get in touch
              </h1>
              <div className="flex flex-row space-x-3">
                <div className="flex flex-col">
                  <label for="name">Full name *</label>
                  <input
                    required
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Your full name"
                    className="w-56 mt-2 py-1 px-3 rounded-md bg-white  border border-gray-400 text-gray-800  focus:outline-none"
                  ></input>
                </div>

                <div className="flex flex-col">
                  <label for="tel">Phone *</label>
                  <input
                    required
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Your phone number"
                    className="w-56 mt-2 py-1 px-3 rounded-md bg-white  border border-gray-400 text-gray-800 focus:outline-none"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <label for="email">Email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-100 mt-2 py-1 px-3 rounded-md bg-white border border-gray-400  text-gray-800  focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col mt-2">
                <label for="message">Message</label>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  placeholder="Please include all relevant information"
                  className="w-100 mt-2 py-1 px-3 rounded-md bg-white border border-gray-400  text-gray-800  focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="ml-auto md:w-46 bg-gradient-horizontal text-white font-bold py-4 px-6 rounded-full mt-6 transition ease-in-out duration-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
