import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import rebinBlue from '../assets/images/Rebin.svg';
import rebinWhite from '../assets/images/Rebin_Wit.svg';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route location
  
  // Check if the current path is the homepage ('/')
  const isHomePage = location.pathname === '/';

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <Link
          to="/"
          className="transform transition-transform hover:scale-95 active:scale-90"
        >
          <span className="sr-only">Rebin</span>
          <img className='h-20 w-auto' src={isHomePage ? rebinWhite : rebinBlue} alt="The Rebin Logo" />
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
            className={classNames(
              isHomePage ? 'text-white' : 'text-gradient-hover',
              'text-sm font-medium'
            )}
            to="/how-it-works"
          >
            How it works
          </Link>
          <Link
            className={classNames(
              isHomePage ? 'text-white' : 'text-gradient-hover',
              'text-sm font-medium'
            )}
            to="/software"
          >
            Solution
          </Link>
          <Link
            className={classNames(
              isHomePage ? 'text-white' : 'text-gradient-hover',
              'text-sm font-medium'
            )}
            to="/references"
          >
            References
          </Link>
          <Link
            className={classNames(
              isHomePage ? 'text-white' : 'text-gradient-hover',
              'text-sm font-medium'
            )}
            to="about"
          >
            About us
          </Link>
          <Link
            className={classNames(
              isHomePage ? 'text-white' : 'text-gradient-hover',
              'text-sm font-medium'
            )}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="hidden items-center space-x-2 lg:flex">
          <button
            className='bg-rebin-blue  w-fit px-6 py-2 text-white font-regular rounded-md'
            href="https://rebin-prod.we-are.be/login"
          >
            Log in
          </button>
        </div>

        {/* Mobile menu */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Rebin</span>
                <img className="h-8 w-auto" src={isHomePage ? rebinWhite : rebinBlue} alt="The Rebin logo" />
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
                    to="/how-it-works"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How it works
                  </Link>
                  <Link
                    to="/software"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solution
                  </Link>
                  <Link
                    to="/references"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    References
                  </Link>
                  <Link
                    to="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    to="/contact"
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

