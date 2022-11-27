import React from "react";
import Facebook from "./svg/facebook";
import Instagram from "./svg/instagram";
import Link from "next/link";
import { siteMetadata } from "../utils/metadata";
//import { useSiteMetadata } from "../hooks/use-site-metadata";

export const BottomFooter = () => {
  return (
    <footer className="bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <Link href="/" className="hover:underline">
          Aunties Pet Grooming LLC
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export const InfoFooter = () => {
  //const metadata = useSiteMetadata();

  return (
    <div className="mt-8 bg-slate-900 py-3 px-3" id="info-footer">
      <div className="mx-auto grid grid-flow-row-dense grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        {/* Name, social */}
        <div className="my-auto py-3 text-center text-3xl text-slate-100">
          <h1>Aunties Pet Grooming</h1>
          <div className="flex flex-row justify-center space-x-2">
            <a
              href={siteMetadata.facebookUrl}
              aria-label="Visit the Aunties Pet Grooming Facebook page"
            >
              <Facebook width="30" className="fill-cyan-600" />
            </a>
            <a
              href={siteMetadata.instagramUrl}
              aria-label="Visit the Aunties Pet Grooming Instagram page"
            >
              <Instagram width="30" className="fill-cyan-600" />
            </a>
          </div>
        </div>
        {/* Hours */}
        <div className="py-3 pl-8 text-slate-100">
          <h1 className="pb-3 font-serif text-3xl">Hours</h1>
          <ul className="text-slate-300">
            <li>Monday: Closed</li>
            <li>Tuesday: 9:00 AM - 4:00 PM</li>
            <li>Wednesday: 9:00 AM - 4:00 PM</li>
            <li>Thursday: 9:00 AM - 4:00 PM</li>
            <li>Friday: 9:00 AM - 4:00 PM</li>
            <li>Saturday: 8:00 AM - 5:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        {/* Contact: email, phone, address */}
        <div className="my-auto py-3 pl-8 text-slate-100">
          <h1 className="font-serif text-3xl">Phone</h1>
          <p className="text-slate-300">{siteMetadata.businessPhone}</p>
        </div>
        {/*  */}
        <div className="my-auto py-3 pl-8 text-slate-100">
          <h1 className="py-3 font-serif text-3xl">Salon Location</h1>
          <p className="">{siteMetadata.businessAddress}</p>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022 <Link href="/">Aunties Pet Grooming LLC</Link>. All Rights
        Reserved.
      </span>
      <ul className="mt-3 flex flex-wrap items-center rounded-none text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};
