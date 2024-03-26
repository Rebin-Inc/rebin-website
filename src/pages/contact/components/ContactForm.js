import React from "react";
import { MdLocationPin, MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="relative flex items-top justify-center bg-white sm:items-center sm:pt-0">
      <div className="max-w-5xl mx-auto px-2 border-1 rounded-xl shadow-around p-3">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 space-x-2">
            {/* Blue banner */}
            <div className="p-8 bg-gradient-reverse rounded-lg col-span-2 space-y-10">
              <h1 className="text-normal text-lg sm:text-xl font-semibold text-white my-5 mb-16">
                Contact information
              </h1>
              <div className="flex items-center text-white">
                <MdEmail className="size-10"></MdEmail>
                <div className="ml-4 ">
                  <label htmlFor="">Email</label>
                  <div className="text-md tracking-wide font-medium w-40">
                    info@rebin.be
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-8 text-white">
                <MdLocationPin className="size-10"></MdLocationPin>
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
            <form className="p-8 flex flex-col justify-center col-span-3 space-y-8">
              <h1 className="text-normal text-xl font-semibold text-black my-5">
                Get in touch
              </h1>
              <div className="grid grid-cols-1 space-y-5 sm:grid-cols-2 sm:space-y-0">
                <div className="flex flex-col space-y-2 sm:mr-3">
                  <label for="name" className="font-medium">
                    Full name
                  </label>
                  <input
                    required
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Your full name"
                    className="block w-full rounded-md py-2 pl-5 pr-20 mb-4 text-sm font-light border-rebin"
                  ></input>
                </div>

                <div className="flex flex-col space-y-2">
                  <label for="tel" className="font-medium">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Your phone number"
                    className="block w-full rounded-md py-2 pl-5 pr-20 mb-4 text-sm font-light border-rebin"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col mt-2 space-y-2">
                <label for="email" className="font-medium">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="block w-full rounded-md py-2 pl-5 pr-20 mb-4 text-sm font-light border-rebin"
                ></input>
              </div>
              <div className="flex flex-col mt-2 space-y-2">
                <label for="message" className="font-medium">
                  Message
                </label>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  placeholder="Please include all relevant information"
                  className="block w-full rounded-md py-2 pl-5 pr-20 mb-4 text-sm font-light border-rebin"
                ></textarea>
              </div>

              <button className="mx-auto sm:mr-0 w-fit p-3 flex justify-center items-center rounded-lg bg-gradient font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Send message</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
