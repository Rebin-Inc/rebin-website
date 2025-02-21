import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: "nl", lang: "Nederlands" },
  { code: "en", lang: "English" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LanguageDropdown( {color} ) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={`w-30 inline-flex w-full justify-center py-2 text-sm font-medium ${color === 'black' ? "text-black" : "text-white"}`}>
          {languages.map((lng) => (lng.code === i18n.language ? lng.code : ''))}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-30 absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages
              .filter((lng) => lng.code !== i18n.language)
              .map((lng) => (
                <Menu.Item key={lng.code}>
                  {({ active }) => (
                    <button
                      onClick={() => changeLanguage(lng.code)}
                      className={classNames(
                        active ? ' text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {lng.code}
                    </button>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

