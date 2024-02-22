import React from "react";
import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import rebin from "../assets/images/Rebin.svg";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    {
      name: "Smart waste sensor",
      description: "Discover world's most innovative waste sensor",
      href: "#",
      src: "./Images/sensor_icon.png",
    },
    {
      name: "Software",
      description: "Discover world's most innovative sensor",
      href: "#",
      src: "./Images/software_icon.png",
    },
    {
      name: "Consulting",
      description: "Discover world's most innovative sensor",
      href: "#",
      src: "./Images/consulting_icon.png",
    },
  ];

  const languages = [
    { name: "English", href: "#", current: true },
    { name: "Nederlands", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header>
      <nav
        className="flex mx-auto max-w-7xl items-center justify-between p-6 "
        aria-label="Global"
      >
        <a href="#">
          <span className="sr-only">Rebin</span>
          <img className="h-16 w-auto" src={rebin} alt=""></img>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a className="text-sm font-medium text-gradient-hover" href="">
            How it works
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center focus:outline-none gap-x-1 text-sm font-medium leading-6 text-gradient-hover">
              Solution
              <ChevronDownIcon
                className="h-4 w-4 flex-none text-gray-500 text-gradient-hover"
                aria-hidden="true"
              />
            </Popover.Button>
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-8 w-screen max-w-md overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200">
              <div className="p-4">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img
                        className="h-6 w-6 text-gray-600"
                        aria-hidden="true"
                        src={item.src}
                        alt=""
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900 text-gradient-hover"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Popover>
          <a className="text-sm font-medium text-gradient-hover" href="">
            References
          </a>
          <a className="text-sm font-medium text-gradient-hover" href="">
            About us
          </a>
          <a
            className="text-sm font-medium text-gradient-hover"
            href="text-gradient"
          >
            Contact
          </a>
        </Popover.Group>
        <div className="hidden lg:flex space-x-2">
          <a
            href="#"
            className="rounded-full bg-gradient text-white px-6 py-2.5 text-sm font-semibold shadow-sm bg-gradient-hover"
          >
            Log in
          </a>
          <LanguageDropdown></LanguageDropdown>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Rebin</span>
                <img className="h-8 w-auto" src={rebin} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                  >
                    How it works
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 hover:bg-gray-50">
                          Solution
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {solutions.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                  >
                    References
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 hover:bg-gray-50">
                          Language
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {languages.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </header>
  );
};

export default Header;
