import React from "react";

interface BubbleProps
  extends React.PropsWithRef<
    Omit<React.ComponentProps<"svg">, "color" | "roation" | "width" | "height">
  > {
  classNamePrimary?: string;
  classNameSecondary?: string;
  rotation?: number;
  width?: number;
  height?: number;
}

const Bubble: React.FC<BubbleProps> = ({
  classNamePrimary,
  classNameSecondary,
  rotation,
  width,
  height,
}) => {
  classNamePrimary = classNamePrimary ?? "fill-sky-800";
  classNameSecondary = classNameSecondary ?? "fill-sky-600";
  const cx = 179;
  const cy = 179;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 358 358"
      width={width ?? 100}
      height={height ?? 100}
    >
      <g
        className={`${classNamePrimary}`}
        transform={`rotate(${rotation ?? 0},${cx},${cy})`}
      >
        <circle cx={cx} cy={cy} r="178.5" />
        <path d="M179,1c24.03,0,47.34,4.71,69.29,13.99,21.2,8.97,40.23,21.8,56.58,38.15,16.35,16.35,29.18,35.38,38.15,56.58,9.28,21.94,13.99,45.26,13.99,69.29s-4.71,47.34-13.99,69.29c-8.97,21.2-21.8,40.23-38.15,56.58-16.35,16.35-35.38,29.18-56.58,38.15-21.94,9.28-45.26,13.99-69.29,13.99s-47.34-4.71-69.29-13.99c-21.2-8.97-40.23-21.8-56.58-38.15-16.35-16.35-29.18-35.38-38.15-56.58C5.71,226.34,1,203.03,1,179s4.71-47.34,13.99-69.29c8.97-21.2,21.8-40.23,38.15-56.58,16.35-16.35,35.38-29.18,56.58-38.15C131.66,5.71,154.97,1,179,1m0-1C80.14,0,0,80.14,0,179s80.14,179,179,179,179-80.14,179-179S277.86,0,179,0h0Z" />
      </g>
      <path
        className={`${classNameSecondary}`}
        transform={`rotate(${rotation ?? 0},${cx},${cx})`}
        d="M116,41.94C269.27,.78,351.69,93.26,322,226l-.5-.5c0-101.15-91.69-183-205-183"
      />
      <path
        className={`${classNameSecondary}`}
        transform={`rotate(${rotation ?? 0},${cx},${cx})`}
        d="M144.47,330.14c4.02-11.83,7.27-24.2,10.38-36.52-51.34-10.3-96.17-40.37-121.31-87.07l-.68-.2c19.25,68.53,60.3,112.77,111.61,123.8Z"
      />
    </svg>
  );
};

export default Bubble;
