import React from "react";
import classNames from "classnames";

interface BubbleProps
  extends React.PropsWithRef<Omit<React.ComponentProps<"svg">, "color">> {
  color?: string;
}

const Bubble: React.FC<BubbleProps> = ({ color, ...props }) => {
  // const outer = classNames("stroke-purple-800", "stroke-2", "fill-transparent");
  const inner_upper = classNames(
    "stroke-purple-800",
    "stroke-2",
    "fill-transparent",
    color ?? ""
  );
  const inner_lower = classNames(
    "stroke-purple-500",
    "stroke-1",
    "fill-transparent",
    color ?? ""
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
      <path
        className="stroke-2"
        d="M200,3c26.6,0,52.4,5.21,76.68,15.48,23.46,9.92,44.53,24.13,62.62,42.22,18.09,18.09,32.3,39.16,42.22,62.62,10.27,24.29,15.48,50.08,15.48,76.68s-5.21,52.4-15.48,76.68c-9.92,23.46-24.13,44.53-42.22,62.62-18.09,18.09-39.16,32.3-62.62,42.22-24.29,10.27-50.08,15.48-76.68,15.48s-52.4-5.21-76.68-15.48c-23.46-9.92-44.53-24.13-62.62-42.22-18.09-18.09-32.3-39.16-42.22-62.62-10.27-24.29-15.48-50.08-15.48-76.68s5.21-52.4,15.48-76.68c9.92-23.46,24.13-44.53,42.22-62.62,18.09-18.09,39.16-32.3,62.62-42.22,24.29-10.27,50.08-15.48,76.68-15.48m0-3C89.54,0,0,89.54,0,200s89.54,200,200,200,200-89.54,200-200S310.46,0,200,0h0Z"
      />
      <path
        className={inner_upper}
        d="M332.65,200c0,73.26-59.39,132.65-132.65,132.65"
      />
      <path
        className={inner_lower}
        d="M67.35,200c0-73.26,59.39-132.65,132.65-132.65,22.89,0,44.43,5.8,63.23,16.01"
      />
    </svg>
  );
};

export default Bubble;
