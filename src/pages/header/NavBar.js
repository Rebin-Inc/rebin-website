import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { default as Logo } from "../../assets/images/Rebin.svg";
import { Button } from "@chakra-ui/react";
import LanguageDropdown from "./LanguageDropdown";

const navigation = [
  { name: "How it works", href: "#", current: false },
  { name: "Solution", href: "#", current: false },
  { name: "References", href: "#", current: false },
  { name: "About us", href: "#", current: false },
  { name: "Contact", href: "#", current: true },
  { name: "Log in", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-16xl px-2 sm:px-6 lg:px-8 my-6">
            <div className="relative flex h-16 items-center justify-between mx-8 ">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center space-x-2 px-5 rounded-full p-2 bg-gradient-horizontal font-bold text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  Menu
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Logo */}
              <div className="flex flex-shrink-0 items-center">
                <img className="h-16 w-auto" src={Logo} alt="Rebin" />
              </div>
              {/* Menu */}
              <div className="hidden lg:block max-w-screen-2xl">
                <div className="flex space-x-8">
                  {navigation.slice(0, 5).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "text-rebin-blue" : "text-black",
                        "rounded-md px-3 py-2 font-medium text-lg flex-shrink-0"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:block flex-shrink-0">
                <Button
                  mr="4"
                  fontWeight="normal"
                  color="white"
                  rounded="full"
                  bgGradient="linear(to-r, #0043FF, #12274F)"
                >
                  Log in
                </Button>
                <LanguageDropdown />
              </div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <LanguageDropdown />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
