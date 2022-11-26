import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { galleryImages } from "../utils/images";

const BlurbImage = (key: number) => {
  const image = galleryImages[key];
  if (image) {
    return (
      <Image
        src={image.image}
        alt={image.alt}
        width={500 * image.aspectRatio}
        height={500}
        placeholder="blur"
      />
    );
  }
  return <></>;
};

const AboutBlurb = () => {
  return (
    <div className="w-full">
      <div className="">
        <div className="relative overflow-hidden bg-white">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="font font-md font-['Inter'] text-4xl tracking-tight text-gray-900 sm:text-6xl">
                  Why &lsquo;Aunties&rsquo;?
                </h1>
                <h2 className="mt-4 text-3xl text-gray-500">
                  Because we treat your pet like family.
                </h2>
                <h2 className="text-3xl text-gray-500">
                  Our salon will feel like{" "}
                  <span className="italic text-purple-700">home</span>.
                </h2>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-1 lg:gap-y-2">
                          {/* Column 1 */}
                          <div className="h-48 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            {BlurbImage(0)}
                          </div>
                          <div className="h-48 w-44 overflow-hidden rounded-lg">
                            {BlurbImage(1)}
                          </div>
                        </div>
                        {/* Column 2 */}
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-3 lg:gap-y-3">
                          <div className="h-48 w-44 overflow-hidden rounded-lg">
                            {BlurbImage(2)}
                          </div>
                          <div className="h-48 w-44 overflow-hidden rounded-lg">
                            {BlurbImage(3)}
                          </div>
                          <div className="h-48 w-44 overflow-hidden rounded-lg">
                            {BlurbImage(4)}
                          </div>
                        </div>
                        {/* Column 3 */}
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-0 lg:gap-y-0">
                          <div className="h-48 w-44 overflow-hidden rounded-lg">
                            {BlurbImage(5)}
                          </div>
                          <div className="h-48 w-44 overflow-hidden rounded-lg">
                            {BlurbImage(6)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/gallery"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlurb;
