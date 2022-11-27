import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true, link: true },
  { name: "Services", href: "/#services", current: false, link: false },
  { name: "About", href: "/#about", current: false, link: false },
  { name: "Testimonials", href: "/#testimonials", current: false, link: false },
  { name: "Contact", href: "/#info-footer", current: false, link: false },
  { name: "Gallery", href: "/gallery", current: false, link: true },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const NavBar = () => {
  return (
    <div className="grid w-full grid-cols-1 bg-white pb-3 md:grid-cols-2 ">
      <div className="col-span-1 md:col-span-2">
        <Disclosure as="nav" className="w-full bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-fit min-h-[64px] items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                          aria-label="Mobile navigation menu close button icon"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                          aria-label="Mobile navigation menu open button icon"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden flex-1 items-center justify-center md:flex md:items-stretch md:justify-start">
                    {/* <div className="flex flex-shrink-0 items-center py-3"> */}
                    {/*   <APGLink /> */}
                    {/* </div> */}
                    <div className="my-auto hidden md:ml-6 md:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => {
                          if (item.link) {
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "rounded-md px-3 py-2 text-sm font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </Link>
                            );
                          } else {
                            return (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                  "rounded-md px-3 py-2 text-sm font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                              </a>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-0 pr-3 sm:pr-8 md:pr-8 lg:space-x-3">
                    <button
                      id="navbar-facebook-button"
                      aria-label="Navigation bar Facebook button"
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <a
                        href="https://www.facebook.com/profile.php?id=100085919312258"
                        aria-label="Visit the Aunties Pet Grooming Facebook page"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="fill-gray-300 hover:fill-white"
                          width={25}
                          aria-label="Fontawesome Facebook icon"
                        >
                          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                      </a>
                    </button>

                    <button
                      id="navbar-instagram-button"
                      aria-label="Navigation bar Instagram button"
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <a
                        href="https://www.instagram.com/auntiespetgrooming/"
                        aria-label="Visit the Aunties Pet Grooming Instagram page"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="fill-gray-300 hover:fill-white"
                          width={25}
                          aria-label="Fontawesome Instagram icon"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </button>
                    <button
                      id="navbar-phone-button"
                      aria-label="Navigation bar phone button"
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <a
                        href="tel:831-200-3510"
                        aria-label="Aunties Pet Grooming telephone number"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width={25}
                          className="fill-gray-300 hover:fill-white"
                          aria-label="Fontawesome phone icon"
                        >
                          <path
                            className="text-white"
                            d="M507.1 404.7l4.086-17.7c3.405-14.69-4.207-29.69-18.12-35.79L384.6 304.7c-12.78-5.436-27.69-1.774-36.47 8.975l-16.98 20.62L507.1 404.7zM0 54.5c-.0014 252.2 205.2 457.5 457.5 457.5c14.65 0 27.21-9.969 30.46-24.22l9.378-40.66l-193.3-79.63C234.8 333.5 178.5 277.2 144.5 207.1L64.88 14.67L24.22 24.05C9.967 27.32-.0014 39.83 0 54.5zM198.3 163.9c10.78-8.687 14.51-23.67 8.98-36.45L160.8 18.92C154.8 5.017 139.6-2.568 124.1 .8048L107.3 4.884L177.6 180.8L198.3 163.9z"
                          />
                          <path
                            className="text-white"
                            d="M497.3 447.1l9.786-42.41l-175.1-70.4l-27.1 33.18L497.3 447.1zM144.5 207.1L177.6 180.8L107.3 4.884L64.88 14.67L144.5 207.1z"
                          />
                        </svg>
                      </a>
                    </button>
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
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
      </div>
    </div>
  );
};

export default NavBar;
