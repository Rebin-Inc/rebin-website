import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Dialog,
  Disclosure,
  Popover,
} from '@headlessui/react';
import {
  Bars3Icon,
  BuildingLibraryIcon,
  TruckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import rebinBlue from '../assets/images/Rebin.svg';
import rebinWhite from '../assets/images/Rebin_Wit.svg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';


export default function Example() {

  const { t } =useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const products = [
    {
      name: t("header.solution_1_title"),
      description:  t("header.solution_1_description"),
      href: '/solution/cities',
      icon: BuildingLibraryIcon,
    },
    {
      name: t("header.solution_2_title"),
      description:  t("header.solution_2_description"),
      href: '/solution/collectors',
      icon: TruckIcon,
    },
  ];
  
  const callsToAction = [
    { name: t("header.testimonial"), href: 'https://youtu.be/QDe44I2yLy4', icon: PlayCircleIcon },
    { name: t("header.sales"), href: '/contact', icon: PhoneIcon },
  ];

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="transform transition-transform hover:scale-95 active:scale-90"
          >
            <span className="sr-only">Rebin</span>
            <img
              className="h-20 w-auto"
              src={isHomePage ? rebinWhite : rebinBlue}
              alt="The Rebin Logo"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`relative inline-flex items-center justify-center bg-rebin-blue rounded-md p-3 font-bold text-white  ${isHomePage ? "" : "bg-gradient"}`}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className={`h-6 w-6`} aria-hidden="true" />
            ) : (
              <Bars3Icon className={`h-6 w-6`} aria-hidden="true" />
            )}
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
          <Popover.Button
  className={classNames(
    isHomePage ? 'text-white' : 'text-gradient-hover',
    'text-sm font-medium flex items-center gap-x-1 focus:outline-none'
  )}
>
{t("header.solution")}
  <ChevronDownIcon
    aria-hidden="true"
    className={`size-5 flex-none text-black ${isHomePage ? 'text-white' : 'text-black text-gradient-hover'}`}
  />
</Popover.Button>


            <Popover.Panel
              transition
              className="absolute -left-8 top-full z-30 mt-5 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-[#0043ff]"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link to={item.href}className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                    target={item.name === "Testimonial" ? "_blank" : ""}
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Popover>
          <Link
            className={classNames(
              isHomePage ? 'text-white' : 'text-gradient-hover',
              'text-sm font-medium'
            )}
            to="/references"
          >
            {t("header.references")}
          </Link>
          <Link
            className={classNames(
              isHomePage ? 'text-white' : 'text-gradient-hover',
              'text-sm font-medium'
            )}
            to="about"
          >
            {t("header.about")}
          </Link>
          <Link
            className={classNames(
              isHomePage ? 'text-white' : 'text-gradient-hover',
              'text-sm font-medium'
            )}
            to="/contact"
          >
            {t("header.contact")}
          </Link>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
          <a
              className={`special-button bg-rebin-blue  w-fit px-6 py-2 text-white font-regular rounded-md ${isHomePage ? "" : "bg-gradient"}`}
              href="https://www.platform.rebin.be/"
            >
            {t("header.login")}
          </a>
          <LanguageSelector></LanguageSelector>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Rebin</span>
              <img
              className="h-20 w-auto"
              src={rebinBlue}
              alt="The Rebin Logo"
            />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {t("header.solution")}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </Disclosure>

                <Link
                    
                    to="/references"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    
                    {t("header.references")}
                  </Link>
                 
                  <Link
                    
                    to="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("header.about")}
                  </Link>
                  
                  <Link
                    
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("header.contact")}
                  </Link>
            
              </div>
              <div className="py-6">
                <a
                  href="https://www.platform.rebin.be/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {t("header.login")}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

