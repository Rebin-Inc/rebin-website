import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { default as Logo } from "../../assets/images/Rebin.svg";
import { Button } from "@chakra-ui/react";
import LanguageDropdown from "./LanguageDropdown";

const navigation = [
  { name: "How it works", href: "#", current: true },
  { name: "Solution", href: "#", current: false },
  { name: "References", href: "#", current: false },
  { name: "About us", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-16xl px-2 sm:px-6 lg:px-8 my-8">
            <div className="relative flex h-16 items-center justify-between mx-16 ">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                Mobile menu button
              </div>
              {/* Logo */}
              <div className="flex flex-shrink-0 items-center">
                <img className="h-24 w-auto" src={Logo} alt="Rebin" />
              </div>
              {/* Menu */}
              <div className="hidden sm:ml-6 sm:block max-w-screen-2xl">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "text-rebin-blue" : "text-black",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
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
          <Disclosure.Panel className="sm:hidden">
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
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
