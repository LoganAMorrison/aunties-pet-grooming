import * as React from "react";
import type { NextPage } from "next";
import { Inter } from "@next/font/google";

import HomeHero from "../components/home-hero";
import { Footer, InfoFooter } from "../components/footer";
import { Team } from "../components/team";
import { Services, WalkInServices } from "../components/services";
import AboutBlurb from "../components/about-blurb";
import NavBar from "../components/navbar";
import SiteHeader from "../components/head";
import Testimonials from "../components/testimonials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <SiteHeader>
        <link rel="icon" href="/favicon.ico" />
      </SiteHeader>
      <main className={`${inter.variable} font-sans`}>
        <NavBar />
        <HomeHero />
        <Services />
        <WalkInServices />
        <Team />
        <AboutBlurb />
        <Testimonials />
        <InfoFooter />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
