import React from 'react';
import { useState } from 'react';
import { Dialog, Disclosure } from '@headlessui/react';
// import { Menu } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import rebin from '../assets/images/Rebin.svg';
import LanguageDropdown from './LanguageDropdown';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Button from '../components/Button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const solutions = [
  //   {
  //     name: "Smart waste sensor",
  //     description: "Discover world's most innovative waste sensor",
  //     href: "sensor",
  //     src: "./Images/sensor_icon.png",
  //   },
  //   {
  //     name: "Software",
  //     description: "Discover world's most innovative sensor",
  //     href: "software",
  //     src: "./Images/software_icon.png",
  //   },
  //   {
  //     name: "Consulting",
  //     description: "Discover world's most innovative sensor",
  //     href: "consulting",
  //     src: "./Images/consulting_icon.png",
  //   },
  // ];

  const languages = [
    { name: 'English', href: '#', current: true },
    { name: 'Nederlands', href: '#', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 "
        aria-label="Global"
      >
        <Link
          to="/"
          className="transform transition-transform hover:scale-95 active:scale-90"
        >
          <span className="sr-only">Rebin</span>
          <img className="h-20 w-auto" src={rebin} alt="The Rebin Logo"></img>
        </Link>
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="bg-gradient relative inline-flex items-center justify-center rounded-full p-2 px-5 font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:space-x-2"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <span className="mb-0.5 hidden leading-none sm:block">Menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            className="text-gradient-hover text-sm font-medium"
            to="how-it-works"
          >
            How it works
          </Link>
          {/* <Menu className="relative" as="div">
            <Menu.Button className="flex items-center focus:outline-none gap-x-1 text-sm font-medium text-gradient-hover">
              Solution
              <ChevronDownIcon
                className="h-4 w-4 flex-none text-gray-500 text-gradient-hover"
                aria-hidden="true"
              />
            </Menu.Button>
            <Menu.Items className="absolute -left-8 top-full z-10 mt-8 w-screen max-w-md overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200">
              {solutions.map((item) => (
                <Menu.Button key={item.href} as={Fragment}>
                  <Link
                    className="relative flex items-center p-4 hover:bg-gray-50 text-gradient-hover"
                    to={item.href}>
                    <div className="flex h-11 aspect-square items-center justify-center rounded-lg bg-gray-50">
                      <img
                        className="h-6 aspect-square text-gray-600"
                        aria-hidden="true"
                        src={item.src}
                        alt=""
                      />
                    </div>
                    <p className="ml-4 min-w-40 font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-600 font-light text-sm text-right">{item.description}</p>
                  </Link>
                </Menu.Button>
              ))}
            </Menu.Items>
          </Menu> */}
          <Link
            className="text-gradient-hover text-sm font-medium"
            to="software"
          >
            Solution
          </Link>
          <Link
            className="text-gradient-hover text-sm font-medium"
            to="references"
          >
            References
          </Link>
          <Link className="text-gradient-hover text-sm font-medium" to="about">
            About us
          </Link>
          <Link
            className="text-gradient-hover text-sm font-medium"
            to="contact"
          >
            Contact
          </Link>
        </div>
        <div className="hidden items-center space-x-2 lg:flex">
          <Button
            text="Log in"
            href="https://rebin-prod.we-are.be/login"
            margin="0"
          />
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
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Rebin</span>
                <img className="h-8 w-auto" src={rebin} alt="The Rebin logo" />
              </Link>
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
                  <Link
                    to="how-it-works"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How it works
                  </Link>
                  {/* <Disclosure as="div" className="-mx-3">
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
                              as={Fragment}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <Link to={item.href}>
                                {item.name}
                              </Link>
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure> */}
                  <Link
                    to="software"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solution
                  </Link>
                  <Link
                    to="references"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    References
                  </Link>
                  <Link
                    to="about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    to="contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="https://rebin-prod.we-are.be/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 hover:bg-gray-50">
                          Language
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none',
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {languages.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              to={item.href}
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
