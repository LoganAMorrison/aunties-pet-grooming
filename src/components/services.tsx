import React from "react";
import {
  faPawClaws,
  faPeach,
  faEar,
  // faScissors,
  faDog,
  // faBone,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WalkInServices = () => {
  const features = [
    {
      name: "Meet & Greet",
      description:
        "For your nervous or anxious dogs, the aunties will be happy to provide some yummy cookies, a friendly voice, and even some pets.",
      icon: faDog,
    },
    {
      name: "Nail Trim & File",
      description:
        "We offer walk-in nail trim services. We clip as well as file; if your pet prefers one or the other, we can accommodate that. This service is $15 unless the pet requires more than one groomer due to behavioral issues. In this case, there will be an extra charge, dependent on the level of difficulty.",
      icon: faPawClaws,
    },
    {
      name: "Gland Expression",
      description:
        "We offer external anal gland expression as a walk in service for $15. Nails & Gland Expression together as a walk-in is $25.",
      icon: faPeach,
    },
    {
      name: "Ear Cleaning",
      description:
        "We offer ear cleaning as a walk-in service for your dog or cat. Waxy, dirty build-up you can't seem to get rid of? Let us help! Ear cleaning as an a la carte service is $10.",
      icon: faEar,
    },
  ];
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            Walk-in services
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Need a quick touch-up? We&apos;ve got you covered.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Available Tuesday-Friday 9am-4pm and Saturday 8am-5pm
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <FontAwesomeIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      icon={feature.icon}
                    />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <section
      id="services"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl bg-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="md:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            We provide high-quality grooming services; for all breeds and sizes.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Whether your friend needs a deep clean, a good bath or the perfect
            haircut, you&apos;ve come to the right place.
          </p>
        </div>

        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
            {/* <h3 className="mt-5 font-display text-lg text-white"> */}
            {/*   Bath & Tidy-up Service */}
            {/* </h3> */}
            <p className="mt-2 text-base text-slate-400">
              An excellent choice if you&apos;re looking for a deep-clean.
            </p>

            <p className="font-display order-first text-5xl font-light tracking-tight text-white">
              Bath & Tidy-Up
            </p>

            <ul
              role="list"
              className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
            >
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">
                  Minor trimming- feet, paw pads, eye corners, face and sanitary
                  areas
                </span>
              </li>

              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Bath</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4"> Blow dry</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4"> Brushout/Full DeShed</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4"> Nails clipped & filed</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4"> Anal gland expression</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4"> Ear plucking</span>
              </li>
            </ul>
            {/* <a */}
            {/*   className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" */}
            {/*   aria-label="Get started with the Starter plan for $9" */}
            {/*   href="https://salient.tailwindui.com/register" */}
            {/* > */}
            {/*   Get started */}
            {/* </a> */}
          </section>

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}

          <section className="order-first flex flex-col rounded-3xl bg-cyan-700 px-6 py-8 sm:px-8 lg:order-none">
            {/* <h3 className="mt-5 font-display text-lg text-white"> */}
            {/*   Haircut Service */}
            {/* </h3> */}
            <p className="mt-2 text-base text-white">
              Does your buddy need a make-over? This one is for you.
            </p>
            <p className="font-display order-first text-5xl font-light tracking-tight text-white">
              Haircut Service
            </p>
            <ul
              role="list"
              className="order-last mt-10 flex flex-col gap-y-3 text-sm text-white"
            >
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-white"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Personalized, full-body haircut</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-white"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Bath</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-white"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Blow dry</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-white"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Brush out</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-white"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Nail trim & file</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-white"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Anal gland expression</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-white"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Ear plucking</span>
              </li>
            </ul>
            {/* <a */}
            {/*   className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8" */}
            {/*   aria-label="Get started with the Small business plan for $15" */}
            {/*   href="https://salient.tailwindui.com/register" */}
            {/* > */}
            {/*   Get started */}
            {/* </a> */}
          </section>

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}

          <section className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
            {/* <h3 className="mt-5 font-display text-lg text-white"> */}
            {/*   Bathing Service */}
            {/* </h3> */}
            <p className="mt-2 text-base text-slate-400">
              Just need to freshen up? Choose me!
            </p>
            <p className="font-display order-first text-5xl font-light tracking-tight text-white">
              Bathing Service
            </p>
            <ul
              role="list"
              className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
            >
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Bath</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Blow dry</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Brushout/Full DeShed</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4"> Nails clipped & filed</span>
              </li>

              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4">Anal gland expression</span>
              </li>
              <li className="flex">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                >
                  <path
                    d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                    strokeWidth="0"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="8.25"
                    fill="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
                <span className="ml-4"> Ear Plucking</span>
              </li>
            </ul>
            {/* <a */}
            {/*   className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8" */}
            {/*   aria-label="Get started with the Enterprise plan for $39" */}
            {/*   href="https://salient.tailwindui.com/register" */}
            {/* > */}
            {/*   Get started */}
            {/* </a> */}
          </section>
        </div>
      </div>
    </section>
  );
};

// import * as React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faShower,
//   faScissors,
//   faWind,
//   faPawClaws,
//   faPeach,
//   faCircleCheck,
//   faBrush,
// } from "@fortawesome/pro-duotone-svg-icons";
// import type { IconDefinition } from "@fortawesome/pro-duotone-svg-icons";

// import {
//   faEar,
//   faFaceRaisedEyebrow,
//   faFaceSpiralEyes,
//   faFaceSmileUpsideDown,
//   faFaceWoozy,
// } from "@fortawesome/pro-light-svg-icons";

// // const PRIMARY = "#059595";
// // const SECONDARY = "#0495A8";
// const ACCENT = "#7e22ce";

// const Services = () => {
//   return (
//     <div className="mx-16 my-16 grid h-[400px] w-full grid-cols-3">
//       <div className="grid-row-3 grid h-full w-3/4 justify-between text-3xl text-white">
//         <div className="row-span-1 h-1/3">
//           <h1 className="text-primary w-full self-start text-5xl">
//             Full Grooms
//           </h1>
//           <div className="container flex space-x-2 pl-3">
//             <FontAwesomeIcon
//               icon={faScissors}
//               color={ACCENT}
//               className="text-4xl"
//             />
//             <FontAwesomeIcon
//               icon={faShower}
//               color={ACCENT}
//               className="text-4xl"
//             />
//             <FontAwesomeIcon
//               icon={faWind}
//               color={ACCENT}
//               className="text-4xl"
//             />
//           </div>
//         </div>

//         <div className="row-span-1 h-1/3 text-2xl font-normal text-fuchsia-700">
//           <h2>
//             <FontAwesomeIcon icon={faFaceWoozy} /> Does your friend need a
//             makeover?
//           </h2>
//         </div>

//         <div className="row-span-1 h-1/3 text-2xl text-purple-700">
//           <h2 className="break-after-all">
//             We&apos;ve got you covered. Our full grooms include the works
//           </h2>
//           <div className="grid grid-cols-2">
//             <div className="col-span-1">
//               <FontAwesomeIcon icon={faCircleCheck} /> Bath
//             </div>
//             <div className="col-span-1">
//               <FontAwesomeIcon icon={faCircleCheck} /> Blow-out
//             </div>
//             <div className="col-span-1">
//               <FontAwesomeIcon icon={faCircleCheck} /> Hair cut
//             </div>
//             <div className="col-span-1">
//               <FontAwesomeIcon icon={faCircleCheck} /> Nails
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="grid-row-3 grid h-full w-3/4 justify-between text-3xl text-white">
//         <div className="text-primary w-full text-5xl">
//           <h1 className="pb-3">Bath & Blowout</h1>
//           <div className="container flex space-x-2 pl-3">
//             <FontAwesomeIcon
//               icon={faShower}
//               color={ACCENT}
//               className="text-4xl"
//             />
//             <FontAwesomeIcon
//               icon={faWind}
//               color={ACCENT}
//               className="text-4xl"
//             />
//           </div>
//         </div>

//         <div className="text-2xl font-normal">
//           <h2 className="text-fuchsia-700">
//             <FontAwesomeIcon icon={faFaceSmileUpsideDown} />
//             Just need to freshen up?
//           </h2>
//         </div>

//         <div className="text-2xl font-normal text-purple-700">
//           <h2>
//             <FontAwesomeIcon icon={faCircleCheck} /> We&apos;ll trim and file
//             those nails.
//           </h2>
//           <h2>
//             <FontAwesomeIcon icon={faCircleCheck} /> We&apos;ll express their
//             glads
//           </h2>
//         </div>
//       </div>

//       <div className="grid-row-3 grid h-full w-3/4 text-3xl text-white">
//         <div className="text-primary w-full text-5xl">
//           <h1 className="pb-3">Walk-in Service</h1>
//           <div className="container flex space-x-2 pl-3">
//             <FontAwesomeIcon
//               icon={faPawClaws}
//               color={ACCENT}
//               className="text-4xl"
//             />
//             <FontAwesomeIcon
//               icon={faPeach}
//               color={ACCENT}
//               className="text-4xl"
//             />
//           </div>
//         </div>

//         <div className="text-secondary text-2xl font-normal">
//           <h2 className="text-fuchsia-700">
//             <FontAwesomeIcon icon={faFaceRaisedEyebrow} /> Does your buddy sound
//             like a tap dancer?
//           </h2>
//           <h2 className="text-fuchsia-700">
//             <FontAwesomeIcon icon={faFaceSpiralEyes} /> Are they scoot&apos;n
//             across the carpet?
//           </h2>
//         </div>

//         <div className="text-2xl font-normal text-purple-700">
//           <h2>
//             <FontAwesomeIcon icon={faCircleCheck} /> We&apos;ll trim and file
//             those nails.
//           </h2>
//           <h2>
//             <FontAwesomeIcon icon={faCircleCheck} /> We&apos;ll express their
//             glads
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface GroupedServiceType {
//   name: string;
//   short: string;
//   included: { name: string; icon: IconDefinition }[];
//   main: boolean;
// }

// const GroupedService: React.FC<GroupedServiceType> = (props) => {
//   return (
//     <div className="grid-row-3 grid divide-y">
//       <div className="row-span-1">
//         <h1 className="py-3 text-3xl text-purple-100">{props.name}</h1>
//         <p className="py-3 text-purple-200">{props.short}</p>
//       </div>
//       <div className="row-span-2 py-4">
//         <h2 className="py-3 font-bold text-purple-200">What&apos;s included</h2>
//         <ul>
//           {props.included.map((include, key) => (
//             <li className="text-lg text-purple-300" key={key}>
//               <FontAwesomeIcon
//                 icon={include.icon}
//                 className="text-purple-100"
//               />{" "}
//               {include.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// interface ServiceType {
//   service: string;
//   icon: IconDefinition;
//   description: string;
// }

// const Services2 = () => {
//   // Hair-cut
//   // Bath
//   // Blow-out
//   // Nails
//   // Glads
//   // Ears

//   const grouped: GroupedServiceType[] = [
//     {
//       name: "Bath & Tidy Up Service",
//       main: false,
//       short:
//         "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
//       included: [
//         { name: "Bath", icon: faShower },
//         { name: "Blow dry", icon: faWind },
//         { name: "Brushout/Full Deshed", icon: faShower },
//         { name: "Nails clipped & filed", icon: faPawClaws },
//         { name: "Anal gland expression", icon: faPeach },
//         { name: "Ear plucking", icon: faEar },
//         {
//           name: "Minor trimming- feet, paw pads, eye corners, face and sanitary areas",
//           icon: faScissors,
//         },
//       ],
//     },
//     {
//       name: "Haircut Service",
//       main: true,
//       short:
//         "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
//       included: [
//         { name: "Personalized, full-body haircut", icon: faScissors },
//         { name: "Bath", icon: faShower },
//         { name: "Blow dry", icon: faWind },
//         { name: "Brush out", icon: faShower },
//         { name: "Nails clipped & filed", icon: faPawClaws },
//         { name: "Anal glands expression", icon: faPeach },
//         { name: "Ear plucking", icon: faEar },
//       ],
//     },
//     {
//       name: "Bathing Service",
//       main: false,
//       short:
//         "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
//       included: [
//         { name: "Bath", icon: faShower },
//         { name: "Blow dry", icon: faWind },
//         { name: "Brushout/Full Deshed", icon: faShower },
//         { name: "Nails clipped & filed", icon: faPawClaws },
//         { name: "Anal gland expression", icon: faPeach },
//         { name: "Ear Plucking", icon: faEar },
//       ],
//     },
//   ];

//   const services: ServiceType[] = [
//     {
//       service: "Hair Cut",
//       icon: faScissors,
//       description:
//         "Bath, blowdry, brush out, and full haircut. Also includes nail clipping and filing, ear cleaning as well as ear hair plucking and anal gland expression. Dematting fees apply to pets with excessive matting. Dogs who have behavioral issues are welcomed but subject to special handling fees. Call for pricing and scheduling.",
//     },
//     {
//       service: "Bath",
//       icon: faShower,
//       description:
//         "Bath, blowout, brush out. Plus nail clipping and filing, ear cleaning, anal gland expression and ear plucking if needed. Deshedding service included with bathing service. Minor trimming (feet, face, sanitary trim) available with this service as well. Call for pricing and scheduling.",
//     },
//     {
//       service: "Brush-out",
//       icon: faWind,
//       description:
//         "We offer between groom brush out services for dogs and cats to help maintain their coat. This service usually takes anywhere from 15-45 minutes. We do a thorough brush and comb out as long as the pet does not have excessive matting. Call for pricing and scheduling.",
//     },
//     {
//       service: "Nail Trim & File",
//       icon: faPawClaws,
//       description:
//         "We offer walk-in nail trim services. We clip as well as file or if your pet has a preference of one or the other we can accommodate that. Walk-in nail trims are available Tuesday-Friday 9am-4pm and Saturday 8am-5pm. This service is $15 unless the pet requires more than one groomer due to behavioral issues there will be an extra $5-10 charge dependent on the level of difficulty. ",
//     },
//     {
//       service: "Gland Expression",
//       icon: faPeach,
//       description:
//         "We offer external anal gland expression as a walk in service. Tuesday-Friday 9am-4pm and Saturday 8am-5pm. Nails & Gland Expression together as a walk-in is $25.",
//     },
//     {
//       service: "Ear Cleaning",
//       icon: faEar,
//       description:
//         "We offer ear cleaning as a walk in service for your dog or cat. Waxy, dirty build up you can't seem to get rid of? Let us help! Ear cleaning as an a la carte service is $10. Availiable Tuesday-Friday 9am-4pm and Saturday 8am-5pm. ",
//     },
//   ];

//   const bgcolor = (main: boolean) => {
//     if (main) {
//       return "border-primary";
//     }
//     return "border-purple-200";
//   };

//   return (
//     <div className="h-fit bg-white ">
//       <div className="text-secondary flex justify-center py-3 font-['Inter'] text-4xl md:text-5xl lg:text-6xl">
//         Services
//       </div>
//       <div className="mx-auto flex max-w-md justify-center pt-4 pb-8 font-['Inter'] text-xl text-purple-800 md:max-w-[700px] md:text-2xl lg:max-w-[1000px] lg:text-2xl">
//         Looking for the whole package? You came to the right place.
//       </div>
//       <div className="mx-auto max-w-5xl">
//         <div className="mx-auto grid grid-cols-3 justify-center space-x-4">
//           {grouped.map((ps, key) => (
//             <div
//               className="bg-primary col-span-1 rounded-md shadow-lg shadow-slate-800"
//               key={key}
//             >
//               <div className="py-3 px-3">
//                 <div className="grid-row-3 grid divide-y-2 divide-purple-800">
//                   <div className="row-span-1">
//                     <h1
//                       className={`flex justify-center py-3 text-2xl text-white`}
//                     >
//                       {ps.name}
//                     </h1>
//                     <p className="py-3 text-slate-200">{ps.short}</p>
//                   </div>
//                   <div className="row-span-2 py-4">
//                     <h2 className="py-3 font-bold text-white">
//                       What&apos;s included
//                     </h2>
//                     <ul className="space-y-1">
//                       {ps.included.map((include, key) => (
//                         <li className="text-base text-slate-200" key={key}>
//                           <FontAwesomeIcon
//                             icon={include.icon}
//                             className="text-purple-800"
//                           />{" "}
//                           {include.name}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mx-16 grid grid-cols-1 grid-rows-6 gap-5 py-16 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
//         {services.map((service, key) => {
//           return (
//             <div className="py-2 px-2" key={key}>
//               <h1 className="w-fit rounded-lg bg-purple-100 bg-opacity-5 px-4 py-4 text-4xl text-purple-50">
//                 <FontAwesomeIcon icon={service.icon} />{" "}
//               </h1>
//               <h2 className="py-3 text-2xl text-purple-50">
//                 {service.service}
//               </h2>
//               <h2 className="text-base text-purple-100">
//                 {service.description}
//               </h2>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Services2;
