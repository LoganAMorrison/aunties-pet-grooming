import * as React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// import Facebook from "../components/svg/facebook";
// import Instagram from "../components/svg/instagram";
// import Phone from "../components/svg/phone";

const navigation = [
  { name: "Home", href: "/", current: true, link: true },
  { name: "Services", href: "/#services", current: false, link: false },
  { name: "About", href: "/#about", current: false, link: false },
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
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
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
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <a href="https://www.facebook.com/profile.php?id=100085919312258">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="fill-gray-300 hover:fill-white"
                          width={25}
                        >
                          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                      </a>
                    </button>

                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <a href="https://www.instagram.com/auntiespetgrooming/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="fill-gray-300 hover:fill-white"
                          width={25}
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </button>
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <a href="tel:831-200-3510">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width={25}
                          className="fill-gray-300 hover:fill-white"
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

// import { LogoOutline } from "../components/logos/outline";

// const APGLink = () => {
//   return (
//     <Link to="/" className="w-24  flex items-center">
//       <LogoOutline fill="#059595" backgroundColor="#0f172a" />
//     </Link>
//   );
// };

// export const NavBar = () => {
//   const menuItem = (text: string, href: string) => {
//     return (
//       <li>
//         <a
//           href={href}
//           className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//         >
//           {text}
//         </a>
//       </li>
//     );
//   };
//   const menuItemLink = (text: string, href: string) => {
//     return (
//       <li>
//         <Link
//           to={href}
//           className="block py-2 pr-4 pl-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//         >
//           {text}
//         </Link>
//       </li>
//     );
//   };

//   return (
//     <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//       <div className="container flex flex-wrap justify-between items-center mx-auto">
//         <APGLink />
//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-6 h-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             {menuItemLink("Home", "/")}
//             {menuItem("Services", "#services")}
//             {menuItem("About", "#about")}
//             {menuItem("Contact", "#info-footer")}
//             {menuItemLink("Gallery", "/gallery")}

//             <li>
//               <a href="https://www.facebook.com/profile.php?id=100085919312258">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                   className="fill-primary hover:fill-purple-600"
//                   width={25}
//                 >
//                   <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
//                 </svg>
//               </a>
//             </li>

//             <li>
//               <a href="https://www.instagram.com/auntiespetgrooming/">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512"
//                   className="fill-primary hover:fill-purple-600"
//                   width={25}
//                 >
//                   <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a href="tel:831-200-3510">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 512 512"
//                   width={25}
//                   className="fill-primary hover:fill-purple-600"
//                 >
//                   <path
//                     className="text-white"
//                     d="M507.1 404.7l4.086-17.7c3.405-14.69-4.207-29.69-18.12-35.79L384.6 304.7c-12.78-5.436-27.69-1.774-36.47 8.975l-16.98 20.62L507.1 404.7zM0 54.5c-.0014 252.2 205.2 457.5 457.5 457.5c14.65 0 27.21-9.969 30.46-24.22l9.378-40.66l-193.3-79.63C234.8 333.5 178.5 277.2 144.5 207.1L64.88 14.67L24.22 24.05C9.967 27.32-.0014 39.83 0 54.5zM198.3 163.9c10.78-8.687 14.51-23.67 8.98-36.45L160.8 18.92C154.8 5.017 139.6-2.568 124.1 .8048L107.3 4.884L177.6 180.8L198.3 163.9z"
//                   />
//                   <path
//                     className="text-white"
//                     d="M497.3 447.1l9.786-42.41l-175.1-70.4l-27.1 33.18L497.3 447.1zM144.5 207.1L177.6 180.8L107.3 4.884L64.88 14.67L144.5 207.1z"
//                   />
//                 </svg>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// const navigation = [
//   { name: "Home", href: "/", current: true, link: true },
//   { name: "Services", href: "/#services", current: false, link: false },
//   { name: "About", href: "/#about", current: false, link: false },
//   { name: "Contact", href: "/#info-footer", current: false, link: false },
//   { name: "Gallery", href: "/gallery", current: false, link: true },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export const NavBar2 = () => {
//   return (
//     <Disclosure as="nav" className="bg-gray-800 w-full">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-fit min-h-[64px] items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="hidden md:flex flex-1 items-center justify-center md:items-stretch md:justify-start">
//                 <div className="flex flex-shrink-0 items-center py-3">
//                   <APGLink />
//                 </div>
//                 <div className="hidden md:ml-6 md:block my-auto">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => {
//                       if (item.link) {
//                         return (
//                           <Link
//                             key={item.name}
//                             to={item.href}
//                             className={classNames(
//                               item.current
//                                 ? "bg-gray-900 text-white"
//                                 : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                               "px-3 py-2 rounded-md text-sm font-medium"
//                             )}
//                             aria-current={item.current ? "page" : undefined}
//                           >
//                             {item.name}
//                           </Link>
//                         );
//                       } else {
//                         return (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className={classNames(
//                               item.current
//                                 ? "bg-gray-900 text-white"
//                                 : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                               "px-3 py-2 rounded-md text-sm font-medium"
//                             )}
//                             aria-current={item.current ? "page" : undefined}
//                           >
//                             {item.name}
//                           </a>
//                         );
//                       }
//                     })}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute right-0 pr-3 sm:pr-8 md:pr-8 lg:space-x-3">
//                 <button
//                   type="button"
//                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <a href="https://www.facebook.com/profile.php?id=100085919312258">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 512 512"
//                       className="fill-gray-300 hover:fill-white"
//                       width={25}
//                     >
//                       <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
//                     </svg>
//                   </a>
//                 </button>

//                 <button
//                   type="button"
//                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <a href="https://www.instagram.com/auntiespetgrooming/">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 448 512"
//                       className="fill-gray-300 hover:fill-white"
//                       width={25}
//                     >
//                       <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
//                     </svg>
//                   </a>
//                 </button>
//                 <button
//                   type="button"
//                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <a href="tel:831-200-3510">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 512 512"
//                       width={25}
//                       className="fill-gray-300 hover:fill-white"
//                     >
//                       <path
//                         className="text-white"
//                         d="M507.1 404.7l4.086-17.7c3.405-14.69-4.207-29.69-18.12-35.79L384.6 304.7c-12.78-5.436-27.69-1.774-36.47 8.975l-16.98 20.62L507.1 404.7zM0 54.5c-.0014 252.2 205.2 457.5 457.5 457.5c14.65 0 27.21-9.969 30.46-24.22l9.378-40.66l-193.3-79.63C234.8 333.5 178.5 277.2 144.5 207.1L64.88 14.67L24.22 24.05C9.967 27.32-.0014 39.83 0 54.5zM198.3 163.9c10.78-8.687 14.51-23.67 8.98-36.45L160.8 18.92C154.8 5.017 139.6-2.568 124.1 .8048L107.3 4.884L177.6 180.8L198.3 163.9z"
//                       />
//                       <path
//                         className="text-white"
//                         d="M497.3 447.1l9.786-42.41l-175.1-70.4l-27.1 33.18L497.3 447.1zM144.5 207.1L177.6 180.8L107.3 4.884L64.88 14.67L144.5 207.1z"
//                       />
//                     </svg>
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block px-3 py-2 rounded-md text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// };

// export const Header = () => {
//   const sty = className(
//     "absolute",
//     "w-[300px]",
//     "h-[300px]",
//     "mx-auto",
//     //"-translate-y-44",
//     //"opacity-50",
//     // "md:w-[400px] ",
//     // "md:translate-y-[18px]",
//     // "md:translate-x-48",
//     "overflow-hidden"
//   );
//   const aussie = (
//     <AussieIcon
//       className={sty}
//       gradient={[
//         { stopColor: "#7c3aed", offset: "0" },
//         { stopColor: "#6366f1", offset: "100" },
//       ]}
//     />
//   );
//   const pug = (
//     <PugIcon
//       className={sty}
//       gradient={[
//         { stopColor: "#6366f1", offset: "0" },
//         { stopColor: "#7c3aed", offset: "100" },
//       ]}
//     />
//   );
//   const cat = (
//     <CatIcon
//       className={sty}
//       gradient={[
//         { stopColor: "#6366f1", offset: "0" },
//         { stopColor: "#7c3aed", offset: "100" },
//       ]}
//     />
//   );

//   const [toggle, set] = React.useState(false);
//   const transitions = useTransition(toggle, {
//     from: { opacity: 0 },
//     enter: (_) => async (next, _) => {
//       await next({ opacity: 1.0 });
//     },
//     leave: (_) => async (next, _) => {
//       await next({ opacity: 0.0 });
//     },
//     reverse: toggle,
//     delay: 0,
//     config: { duration: 10000, easing: easings.linear },
//     onRest: () => set(!toggle),
//   });

//   const f = (v: number, a: number, b: number, c: number) => {
//     const y1 = 1.0 / (Math.exp((v - a) / c) + 1);
//     const y2 = 1.0 / (Math.exp((v - b) / c) + 1);
//     return y2 - y1;
//   };

//   const x0 = -1 / 6;
//   const del = 1 / 3;

//   const g = (v: number, i: number) => {
//     return f(v, x0 + i * del, x0 + (i + 1) * del, 0.01);
//   };

//   return (
//     <>
//       <div className="w-full h-[600px] pb-3 bg-white grid grid-cols-1 md:grid-cols-2 ">
//         <div className="col-span-1 md:col-span-2">
//           <NavBar2 />
//         </div>

//         <div className="col-span-1 text-white text-4xl md:text-5xl lg:text-7xl lg:pb-32 flex justify-center md:my-auto">
//           <div className="flex flex-col">
//             <div className="text-primary font-extralight">Professional</div>
//             <div className="indent-16 font-extralight text-primary">
//               Pet Grooming
//             </div>
//             <div className="py-3 text-2xl text-black">
//               <div>Specialized haircuts. Head-to-tail bathing.</div>
//               <div>Nail, ears and everything between.</div>
//             </div>
//           </div>
//         </div>
//         {transitions(({ opacity }, item) =>
//           item ? (
//             <></>
//           ) : (
//             <div className="h-[300px] w-[300px] mx-auto">
//               <animated.div
//                 style={{
//                   opacity: opacity.to((v) => g(v, 1)),
//                 }}
//               >
//                 {aussie}
//               </animated.div>
//               <animated.div
//                 style={{
//                   opacity: opacity.to((v) => g(v, 0)),
//                 }}
//               >
//                 {pug}
//               </animated.div>
//               <animated.div
//                 style={{
//                   opacity: opacity.to((v) => g(v, 2)),
//                 }}
//               >
//                 {cat}
//               </animated.div>
//             </div>
//           )
//         )}
//       </div>
//     </>
//   );
// };
