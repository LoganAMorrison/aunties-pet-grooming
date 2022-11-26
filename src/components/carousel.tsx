import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

type ClickEvent = React.MouseEventHandler<HTMLButtonElement>;

// ===========================================================================
// ---- Embla Carousel -------------------------------------------------------
// ===========================================================================

// ---- Embla Slide ----------------------------------------------------------

type EmblaCarouselSlideProps = Omit<
  React.PropsWithChildren<React.ComponentProps<"div">>,
  "className"
>;

export const EmblaCarouselSlide: React.FC<EmblaCarouselSlideProps> = ({
  key,
  ...props
}) => {
  return (
    <div className="relative min-w-[50%] pl-3" key={key}>
      <div className="relative h-96 overflow-hidden">
        <div className="absolute top-2/4 left-2/4 block min-h-full w-auto min-w-full max-w-none -translate-x-2/4 -translate-y-2/4">
          {props.children}
        </div>
      </div>
    </div>
  );
};

// ---- Embla Button ---------------------------------------------------------

export const PrevButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: ClickEvent;
}) => (
  <button
    className="absolute top-2/4 left-7 z-10 h-8 w-8 -translate-y-2/4 cursor-pointer touch-manipulation items-center justify-center 
      border-0 bg-transparent fill-sky-400 p-0 outline-0 disabled:cursor-default disabled:opacity-30"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="h-full w-full" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

export const NextButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick: ClickEvent;
}) => (
  <button
    className="absolute top-2/4 right-7 z-10 h-8 w-8 -translate-y-2/4 cursor-pointer touch-manipulation items-center justify-center 
      border-0 bg-transparent fill-sky-400 p-0 outline-0 disabled:cursor-default disabled:opacity-30"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="h-full w-full" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

// ---- Embla Dots -----------------------------------------------------------

interface EmblaCarouselDotButtonProps {
  selected: boolean;
  onClick: ClickEvent;
}

export const EmblaCarouselDotButton: React.FC<EmblaCarouselDotButtonProps> = ({
  selected,
  onClick,
}) => {
  const bg = selected ? "after:bg-white" : "after:bg-sky-400";

  return (
    <button
      className={`relative mx-2 flex h-8 w-8 cursor-pointer 
        items-center border-0 bg-transparent p-0 outline-0 
        ${bg} content-none after:h-1 after:w-full
        after:rounded-sm 
        `}
      type="button"
      onClick={onClick}
    />
  );
};

// ---- Embla Carousel -------------------------------------------------------

interface EmblaCarouselProps {
  slides: React.ReactNode[];
}

export const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState(Array<number>());

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="relative mx-auto max-w-3xl bg-white px-5 py-5">
        {/* Viewport */}
        <div className="w-full overflow-hidden" ref={viewportRef}>
          {/* Container */}
          <div className="-ml-3 flex select-none">
            {slides.map((slide, key) => (
              <EmblaCarouselSlide key={key}>{slide}</EmblaCarouselSlide>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="flex list-none justify-center pt-3">
        {scrollSnaps.map((_, index) => (
          <EmblaCarouselDotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};
