import * as React from "react";
import { useTransition, animated, easings } from "react-spring";
import className from "classnames";
import Link from "next/link";

import { LogoOutline } from "../components/logos/outline";
import PugIcon, { PugDecoration } from "../components/svg/pug";
import AussieIcon, { AussieDecoration } from "../components/svg/aussie";
import CatIcon, { CatDecoration } from "../components/svg/cat";

const HomeHero = () => {
  const sty = className(
    "absolute",
    "w-[300px]",
    "h-[300px]",
    "mx-auto",
    "overflow-hidden"
  );
  const aussie = (
    <>
      <AussieIcon
        id="aussie-icon-animate"
        className={sty}
        gradient={[
          { stopColor: "#7c3aed", offset: "0" },
          { stopColor: "#6366f1", offset: "100" },
        ]}
        decoration={AussieDecoration.SantaHat}
      />
    </>
  );
  const pug = (
    <>
      <PugIcon
        id="pug-icon-animate"
        className={sty}
        gradient={[
          { stopColor: "#6366f1", offset: "0" },
          { stopColor: "#7c3aed", offset: "100" },
        ]}
        decoration={PugDecoration.SantaHat}
      />
    </>
  );
  const cat = (
    <>
      <CatIcon
        id="cat-icon-animate"
        className={`${sty}`}
        gradient={[
          { stopColor: "#6366f1", offset: "0" },
          { stopColor: "#7c3aed", offset: "100" },
        ]}
        decoration={CatDecoration.ChristmasTree}
      />
    </>
  );

  const [toggle, set] = React.useState(false);
  const transitions = useTransition(toggle, {
    from: { opacity: 0 },
    enter: () => async (next) => {
      await next({ opacity: 1.0 });
    },
    leave: () => async (next) => {
      await next({ opacity: 0.0 });
    },
    reverse: toggle,
    delay: 0,
    config: { duration: 10000, easing: easings.linear },
    onRest: () => set(!toggle),
  });

  const f = (v: number, a: number, b: number, c: number) => {
    const y1 = 1.0 / (Math.exp((v - a) / c) + 1);
    const y2 = 1.0 / (Math.exp((v - b) / c) + 1);
    return y2 - y1;
  };

  const x0 = -1 / 6;
  const del = 1 / 3;

  const g = (v: number, i: number) => {
    return f(v, x0 + i * del, x0 + (i + 1) * del, 0.01);
  };

  return (
    <>
      <div className="grid h-fit w-full grid-cols-1 bg-white pb-3 md:grid-cols-2 ">
        <div className="col-span-1 flex justify-center text-4xl text-white md:my-auto md:text-5xl lg:pb-32 lg:text-7xl">
          <div className="flex flex-col">
            {/* ===== */}
            <div className="wx-auto flex justify-center py-8">
              <Link href="/" aria-label="Navigate to Aunties Pet Grooming home">
                <LogoOutline
                  fill="#059595"
                  backgroundColor="#fff"
                  className="w-52"
                  aria-label="Aunties Pet Grooming LLC Logo"
                />
              </Link>
            </div>
            {/* ===== */}
            <div className="text-center">
              <div className="font-base text-5xl text-brand">
                Professional Pet Grooming
              </div>
              {/* ===== */}
              <div className="py-3 text-xl text-black">
                Specialized haircuts. Head-to-tail bathing. Nails, ears and
                everything between.
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-auto h-[300px] w-[300px] py-3">
          {transitions(({ opacity }, item) =>
            item ? (
              <></>
            ) : (
              <>
                <animated.div
                  id="animated-aussie"
                  style={{
                    opacity: opacity.to((v) => g(v, 1)),
                  }}
                >
                  {aussie}
                </animated.div>
                <animated.div
                  id="animated-pug"
                  style={{
                    opacity: opacity.to((v) => g(v, 0)),
                  }}
                >
                  {pug}
                </animated.div>
                <animated.div
                  id="animated-cat"
                  style={{
                    opacity: opacity.to((v) => g(v, 2)),
                  }}
                >
                  {cat}
                </animated.div>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default HomeHero;
