import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";

import logonoir from "../assets/logonoir.webp";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navigation = [
  { name: "Accueil", href: "/", current: true },
  { name: "A propos", href: "/Apropos", current: false },
  { name: "Les dangers de la lumière", href: "/Dangersdelalumiere", current: false },
  { name: "Inoubliable symphonie", href: "/Inoubliablesymphonie", current: false },
  { name: "Les vents de l'existence", href: "/Ventsdelexistence", current: false },
  { name: "La fleur de l'âge", href: "/Fleurdelage", current: false },
  { name: "Contact", href: "/Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Example() {
  return (
    <Disclosure as="nav" className="bg-bg sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="font-josefin mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CloseIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src={logonoir}
                    alt="Wendy Baqué, auteure de romans"
                  />
                  <img
                    className="hidden h-16 w-auto lg:block"
                    src={logonoir}
                    alt="Wendy Baqué, auteure de romans"
                  />
                </div>
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-secondary hover:bg-secondary bg-bg hover:text-primary"
                            : "text-md text-black hover:bg-secondary hover:text-primary",
                          "px-3 py-2 rounded-md text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-bg text-secondary"
                      : "hover:bg-secondary hover:text-primary",
                    "block px-3 py-2 rounded-md text-base font-medium"
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
