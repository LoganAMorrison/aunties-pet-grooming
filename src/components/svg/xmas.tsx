import React from "react";

/**
 * Properties of a duo-tone component.
 *
 * @param primaryClassName The class name for the primary part of the icon.
 * @param secondaryClassName The class name for the secondary part of the icon.
 */
export interface DuoToneComponentProps extends React.ComponentProps<"svg"> {
  primaryClassName?: string;
  secondaryClassName?: string;
}

/**
 * Properties of a duo-tone SVG.
 *
 * @param primaryClassName The class name for the primary part of the icon.
 * @param secondaryClassName The class name for the secondary part of the icon.
 */
export interface DuoToneSvgProps extends React.ComponentProps<"use"> {
  primaryClassName?: string;
  secondaryClassName?: string;
}

function getId(prefix: string): string {
  return `${prefix}__${new Date().getTime()}`;
}

export const HangingLights: React.FC<DuoToneComponentProps> = ({
  primaryClassName,
  secondaryClassName,
  ...props
}: DuoToneComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        className={primaryClassName}
        d="M621.9 127.5c-34.56 18.52-72.57 33.46-112.7 44.92l21.94 58.97c-.002 0 .002 0 0 0c-8.287-1.066-16.17-.5488-22.8 .5879c-.0449 .0078 .0449-.0078 0 0c-3.25 .5625-6.417 1.283-8.968 1.994c-.1074 .0273 .1055-.0273 0 0c-2.469 .6992-4.77 1.449-6.377 2.047c-.6504 .2422-1.993 .7891-3.448 1.418c-.0918 .0391 .0957-.0469 0 0c-4.775 2.074-13.04 6.289-21.14 13.17L444.9 187.3c-29.1 5.398-60.89 8.734-92.43 10.15v65.54c-14.93-6.418-29.15-6.992-32.44-6.992c-6.332 0-19.26 1.16-32.43 6.855V197.5C256 196.1 225.1 192.7 195.1 187.3L172.2 251.2c-.002 0 .002 0 0 0C163.9 244 155.5 239.7 150.6 237.5c-.0215-.0078 .0215 .0078 0 0c-1.564-.6797-2.896-1.223-3.578-1.48c-1.553-.582-3.635-1.266-6-1.945C140.8 234 140.7 234 140.6 233.1C138.2 233.3 135.4 232.7 132.4 232.1c-.2227-.0391-.4219-.0781-.6445-.1172C128.6 231.5 125.3 231.1 121.7 230.9C121.5 230.9 121.4 230.9 121.2 230.9c-3.68-.1641-7.521-.082-11.5 .3828l21.07-58.83c-40.16-11.46-78.17-26.4-112.7-44.92c-17.34-9.289-23.42-31.28-12.83-47.95c9.152-14.4 27.86-19.94 42.8-11.8C123.9 109.1 219.2 131.6 320 131.6s196.1-22.45 271.1-63.81c14.94-8.145 33.65-2.605 42.8 11.8C645.4 96.23 639.3 118.2 621.9 127.5z"
      />
      <path
        className={secondaryClassName}
        d="M146.1 236c-14.66-5.499-69.17-19.1-93.77 45.55c-18.61 49.61 12.1 129.2 26.53 134.3c13.53 5.059 89.65-33.99 108.3-83.69C214.2 262.4 153.1 238.7 146.1 236zM319.1 256c-15.67 0-71.8 5.539-71.8 75.58C248.2 384.6 305.7 448 320.1 448s72.08-63.29 72.08-116.4C392.2 257 327.5 256 319.1 256zM586.8 281.6c-24.6-65.58-79.12-51.05-93.81-45.58c-6.1 2.64-67.24 26.31-41.06 96.11c18.65 49.72 94.81 88.75 108.3 83.69C573.7 410.8 605.4 331.2 586.8 281.6z"
      />
    </svg>
  );
};

export const TreeChristmasSvgPath: React.FC<DuoToneSvgProps> = ({
  primaryClassName,
  secondaryClassName,
  ...props
}) => {
  const id = props.id ?? getId("xmas_tree");
  return (
    <>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" id={id}>
        <path
          className={primaryClassName}
          d="M330.1 71.85L286.5 49.51l-22.35-44.48c-3.367-6.701-12.93-6.701-16.3 0L225.5 49.51L181 71.85c-6.701 3.367-6.701 12.93 0 16.3l44.48 22.35l22.35 44.48C249.5 158.3 252.8 160 255.1 160s6.465-1.677 8.149-5.027L286.5 110.5l44.48-22.35C337.7 84.78 337.7 75.22 330.1 71.85zM192 264C178.8 264 168 274.8 168 288s10.75 24 23.1 24c13.25 0 23.1-10.75 23.1-24S205.2 264 192 264z"
        />
        <path
          className={secondaryClassName}
          d="M471.6 455.6l-89.87-103.6h35.1c25.62 0 39.5-29.25 23.25-48.5l-155.1-190.1l-20.89 41.58C262.5 158.3 259.2 160 255.1 160S249.5 158.3 247.9 154.1L226.1 113.4L71.04 303.5c-16.25 19.25-2.375 48.5 23.25 48.5h35.1l-89.87 103.6C21.42 477.5 36.67 512 65.17 512h381.6C475.4 512 490.5 477.4 471.6 455.6zM192 312C178.8 312 168 301.3 168 288s10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24S205.2 312 192 312zM319.1 440c-13.25 0-23.1-10.75-23.1-24s10.75-24 23.1-24s23.1 10.75 23.1 24S333.2 440 319.1 440z"
        />
      </symbol>
      <use href={`#${id}`} {...props} />
    </>
  );
};

export const TreeChristmas: React.FC<DuoToneComponentProps> = ({
  primaryClassName,
  secondaryClassName,
  ...props
}: DuoToneComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
      <path
        className={primaryClassName}
        d="M330.1 71.85L286.5 49.51l-22.35-44.48c-3.367-6.701-12.93-6.701-16.3 0L225.5 49.51L181 71.85c-6.701 3.367-6.701 12.93 0 16.3l44.48 22.35l22.35 44.48C249.5 158.3 252.8 160 255.1 160s6.465-1.677 8.149-5.027L286.5 110.5l44.48-22.35C337.7 84.78 337.7 75.22 330.1 71.85zM192 264C178.8 264 168 274.8 168 288s10.75 24 23.1 24c13.25 0 23.1-10.75 23.1-24S205.2 264 192 264z"
      />
      <path
        className={secondaryClassName}
        d="M471.6 455.6l-89.87-103.6h35.1c25.62 0 39.5-29.25 23.25-48.5l-155.1-190.1l-20.89 41.58C262.5 158.3 259.2 160 255.1 160S249.5 158.3 247.9 154.1L226.1 113.4L71.04 303.5c-16.25 19.25-2.375 48.5 23.25 48.5h35.1l-89.87 103.6C21.42 477.5 36.67 512 65.17 512h381.6C475.4 512 490.5 477.4 471.6 455.6zM192 312C178.8 312 168 301.3 168 288s10.75-24 23.1-24c13.25 0 23.1 10.75 23.1 24S205.2 312 192 312zM319.1 440c-13.25 0-23.1-10.75-23.1-24s10.75-24 23.1-24s23.1 10.75 23.1 24S333.2 440 319.1 440z"
      />
    </svg>
  );
};

export const Stocking: React.FC<DuoToneComponentProps> = ({
  primaryClassName,
  secondaryClassName,
  ...props
}: DuoToneComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
      {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
      <path
        className={primaryClassName}
        d="M260 449.8l-60.97 40.67C177.3 505 152.5 512 128.2 512c-41.37 0-81.89-20-106.6-57c-39.25-58.75-23.24-138.3 35.5-177.5l39.01-26L96.01 96h255.1l-.0977 161.6C346.6 256.9 341.4 256 336 256c-61.85 0-111.1 50.14-111.1 112C224 400.4 237.1 429.4 260 449.8z"
      />
      <path
        className={secondaryClassName}
        d="M351.1 0H96.01C78.41 0 64.01 14.4 64.01 32L64.01 64c0 17.6 14.41 32 32 32h255.1C369.6 96 384 81.6 384 64V32C384 14.4 369.6 0 351.1 0zM224 368c0 32.42 13.99 61.38 36 81.83L280.8 436c44.5-29.75 71.14-79.5 71.14-133.1l-.0597-45.28C346.6 256.9 341.4 256 336 256C274.1 256 224 306.1 224 368z"
      />
    </svg>
  );
};

export const HatSantaSvgPath: React.FC<DuoToneSvgProps> = ({
  primaryClassName,
  secondaryClassName,
  ...props
}) => {
  const id = props.id ?? getId("santa_hat");
  return (
    <>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" id={id}>
        <path
          className={primaryClassName}
          d="M448 384H63.1C28.65 384 0 412.7 0 447.1C0 465.7 14.33 480 32 480h448c17.67 0 32-14.33 32-32C512 412.7 483.3 384 448 384zM640 240c0-12.12-8.25-21.88-19.25-25.25c5.5-10 4.5-22.75-4.125-31.38C608 174.8 595.3 173.8 585.3 179.2C581.9 168.2 572.1 160 560 160s-21.88 8.25-25.25 19.25C524.8 173.8 512 174.8 503.4 183.4c-8.625 8.625-9.625 21.38-4.125 31.38C488.2 218.1 480 227.9 480 240s8.25 21.88 19.25 25.25c-5.5 10-4.453 22.75 4.172 31.38c5.25 5.125 11.95 7.747 18.83 7.747c4.5 0 8.625-1.5 12.5-3.625C538.1 311.8 547.9 320 560 320s21.88-8.25 25.25-19.25c4 2.125 8.125 3.625 12.5 3.625c6.75 0 13.5-2.625 18.88-7.75C625.3 288 626.3 275.2 620.8 265.2C631.8 261.9 640 252.1 640 240z"
        />
        <path
          className={secondaryClassName}
          d="M503.4 183.4c-8.625 8.625-9.625 21.38-4.125 31.38c-8.117 2.492-14.68 8.484-17.6 16.31L384 192l64 192H63.1l84.38-247.5C174.8 73.25 236.6 32 305.3 32c50 0 97.38 22 129.8 60.13l73.88 87.35C506.1 180.6 505 181.7 503.4 183.4z"
        />
      </symbol>
      <use href={`#${id}`} {...props} />
    </>
  );
};

export const HatSanta: React.FC<DuoToneComponentProps> = ({
  primaryClassName,
  secondaryClassName,
  ...props
}: DuoToneComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs> */}
      <path
        className={primaryClassName}
        d="M448 384H63.1C28.65 384 0 412.7 0 447.1C0 465.7 14.33 480 32 480h448c17.67 0 32-14.33 32-32C512 412.7 483.3 384 448 384zM640 240c0-12.12-8.25-21.88-19.25-25.25c5.5-10 4.5-22.75-4.125-31.38C608 174.8 595.3 173.8 585.3 179.2C581.9 168.2 572.1 160 560 160s-21.88 8.25-25.25 19.25C524.8 173.8 512 174.8 503.4 183.4c-8.625 8.625-9.625 21.38-4.125 31.38C488.2 218.1 480 227.9 480 240s8.25 21.88 19.25 25.25c-5.5 10-4.453 22.75 4.172 31.38c5.25 5.125 11.95 7.747 18.83 7.747c4.5 0 8.625-1.5 12.5-3.625C538.1 311.8 547.9 320 560 320s21.88-8.25 25.25-19.25c4 2.125 8.125 3.625 12.5 3.625c6.75 0 13.5-2.625 18.88-7.75C625.3 288 626.3 275.2 620.8 265.2C631.8 261.9 640 252.1 640 240z"
      />
      <path
        className={secondaryClassName}
        d="M503.4 183.4c-8.625 8.625-9.625 21.38-4.125 31.38c-8.117 2.492-14.68 8.484-17.6 16.31L384 192l64 192H63.1l84.38-247.5C174.8 73.25 236.6 32 305.3 32c50 0 97.38 22 129.8 60.13l73.88 87.35C506.1 180.6 505 181.7 503.4 183.4z"
      />
    </svg>
  );
};

export const CandyCane: React.FC<DuoToneComponentProps> = ({
  primaryClassName,
  secondaryClassName,
  ...props
}: DuoToneComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs> */}
      <path
        className={primaryClassName}
        d="M383.7 152.7c2.614 11.17-1.032 22.63-9.579 30.51l124.4 37.27c4.228-9.877 7.503-20.02 9.745-30.46L383.7 152.7zM453.8 35.93l-93.14 93.05c8.011 1.988 15.27 7.023 19.85 14.64c1.503 2.525 2.058 5.275 2.799 7.982l93.02-92.94C469.5 50.29 462 42.58 453.8 35.93zM286.9 14.46l41.08 123.1l8.357-5.16c5.129-3.125 10.95-4.439 16.58-4.439c1.941 0 3.988 .3867 5.888 .7383l-41.52-124.5C306.9 6.621 296.8 9.953 286.9 14.46zM163.8 309.6l118.1 78.68l30.52-18.13L194.3 291.5L163.8 309.6zM265.4 249.3l118.1 78.67l30.52-18.13l-118.1-78.67L265.4 249.3zM61.44 370.4l106.9 85.41l29.43-17.48l-106.8-85.4L61.44 370.4z"
      />
      <path
        className={secondaryClassName}
        d="M15.6 397.6c-15.26 9.125-20.14 28.62-11 43.87l32.76 54.87c8.529 14.2 27.57 20.66 43.88 11.12l87.06-51.68L61.44 370.4L15.6 397.6zM194.3 291.5l118.1 78.68l71.06-42.21l-118.1-78.67L194.3 291.5zM369.5 187.5l-73.62 43.71l118.1 78.67l14.95-8.879c31.96-19.11 55.64-47.95 69.56-80.48l-124.4-37.27C372.6 184.7 371.4 186.4 369.5 187.5zM90.88 352.9l106.8 85.4l84.19-50L163.8 309.6L90.88 352.9zM497.9 91.1c-5.859-12.36-13.29-23.31-21.53-33.33l-93.02 92.94c.1056 .3808 .3049 .7441 .3949 1.127l124.5 37.32C515.2 157.7 512.9 123.6 497.9 91.1zM360.7 128.1l93.14-93.05C425.1 12.61 388.9 0 352.4 0c-11.82 0-23.46 1.603-35.19 4.273l41.52 124.5C359.4 128.9 360.1 128.8 360.7 128.1zM264.9 137.7c8.529 14.2 27.57 20.6 43.88 11.06l19.15-11.21l-41.08-123.1c-5.415 2.465-10.98 5.031-16.2 8.162L243.1 38.1C227.9 48.12 223 67.75 232.1 82.87L264.9 137.7z"
      />
    </svg>
  );
};

export const GiftsSvgPath: React.FC<DuoToneSvgProps> = ({
  primaryClassName,
  secondaryClassName,
  ...props
}) => {
  const id = props.id ?? getId("xmas_gifts");
  return (
    <>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" id={id}>
        <path
          className={primaryClassName}
          d="M240 95.1C256.9 95.1 271.7 104.7 280.3 117.9C257.3 135.7 241.9 162.1 240.2 193.1C212.5 201 192 226.1 192 255.1V479.1C192 491.7 195.1 502.6 200.6 511.1H48C21.49 511.1 0 490.5 0 463.1V143.1C0 117.5 21.49 95.1 48 95.1L240 95.1zM272 200C272 160.1 304.5 128 344.2 128C366.6 128 387.8 138.4 401.5 156.2L432 195.8L462.5 156.2C476.2 138.4 497.4 128 519.8 128C559.5 128 592 160.1 592 200C592 239.8 559.8 272 520 272H448V352H640V384H448V512H416V384H224V352H416V272H344C304.2 272 272 239.8 272 200H272zM363.5 185.5C358.9 179.5 351.7 176 344.2 176C330.8 176 320 186.9 320 200C320 213.3 330.7 224 344 224H393.1L363.5 185.5zM519.8 176C512.3 176 505.1 179.5 500.5 185.5L470.9 224H520C533.3 224 544 213.3 544 200C544 186.9 533.2 176 519.8 176H519.8z"
        />
        <path
          className={secondaryClassName}
          d="M191.3 58.27L216.8 37.42C227.1 29.03 242.2 30.54 250.6 40.8C258.1 51.06 257.5 66.18 247.2 74.57L221 96H66.99L40.8 74.57C30.54 66.18 29.03 51.06 37.43 40.8C45.82 30.54 60.94 29.03 71.2 37.42L98.67 59.9L89.23 31.59C85.04 19.01 91.84 5.422 104.4 1.231C116.1-2.961 130.6 3.835 134.8 16.41L144.7 46.17L155.4 15.99C159.8 3.492 173.5-3.049 186 1.376C198.5 5.801 205 19.52 200.6 32.01L191.3 58.27zM640 272V352H448V272H520C551.4 272 578 251.1 587.9 224H592C618.5 224 640 245.5 640 272zM448 384H640V464C640 490.5 618.5 512 592 512H448V384zM416 384V512H272C245.5 512 224 490.5 224 464V384H416zM416 352H224V272C224 245.5 245.5 224 272 224H276.1C285.1 251.1 312.7 272 344 272H416V352z"
        />
      </symbol>
      <use href={`#${id}`} {...props} />
    </>
  );
};

export const Gifts = ({
  primaryClassName,
  secondaryClassName,
  ...props
}: DuoToneComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs> */}
      <path
        className={primaryClassName}
        d="M240 95.1C256.9 95.1 271.7 104.7 280.3 117.9C257.3 135.7 241.9 162.1 240.2 193.1C212.5 201 192 226.1 192 255.1V479.1C192 491.7 195.1 502.6 200.6 511.1H48C21.49 511.1 0 490.5 0 463.1V143.1C0 117.5 21.49 95.1 48 95.1L240 95.1zM272 200C272 160.1 304.5 128 344.2 128C366.6 128 387.8 138.4 401.5 156.2L432 195.8L462.5 156.2C476.2 138.4 497.4 128 519.8 128C559.5 128 592 160.1 592 200C592 239.8 559.8 272 520 272H448V352H640V384H448V512H416V384H224V352H416V272H344C304.2 272 272 239.8 272 200H272zM363.5 185.5C358.9 179.5 351.7 176 344.2 176C330.8 176 320 186.9 320 200C320 213.3 330.7 224 344 224H393.1L363.5 185.5zM519.8 176C512.3 176 505.1 179.5 500.5 185.5L470.9 224H520C533.3 224 544 213.3 544 200C544 186.9 533.2 176 519.8 176H519.8z"
      />
      <path
        className={secondaryClassName}
        d="M191.3 58.27L216.8 37.42C227.1 29.03 242.2 30.54 250.6 40.8C258.1 51.06 257.5 66.18 247.2 74.57L221 96H66.99L40.8 74.57C30.54 66.18 29.03 51.06 37.43 40.8C45.82 30.54 60.94 29.03 71.2 37.42L98.67 59.9L89.23 31.59C85.04 19.01 91.84 5.422 104.4 1.231C116.1-2.961 130.6 3.835 134.8 16.41L144.7 46.17L155.4 15.99C159.8 3.492 173.5-3.049 186 1.376C198.5 5.801 205 19.52 200.6 32.01L191.3 58.27zM640 272V352H448V272H520C551.4 272 578 251.1 587.9 224H592C618.5 224 640 245.5 640 272zM448 384H640V464C640 490.5 618.5 512 592 512H448V384zM416 384V512H272C245.5 512 224 490.5 224 464V384H416zM416 352H224V272C224 245.5 245.5 224 272 224H276.1C285.1 251.1 312.7 272 344 272H416V352z"
      />
    </svg>
  );
};

export const Wreath = ({
  primaryClassName,
  secondaryClassName,
  ...props
}: DuoToneComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs> */}
      <path
        className={primaryClassName}
        d="M298.9 384.7l-74.87 31.25L149.1 384.7c-10.38-3.5-21.12 4.374-21.12 15.25l-.003 95.98c0 10.87 10.75 18.62 21.12 15.24l74.87-31.24l74.87 31.24c10.38 3.5 21.12-4.373 21.12-15.24l.0074-95.98C319.1 389.1 309.2 381.3 298.9 384.7z"
      />
      <path
        className={secondaryClassName}
        d="M447.1 224c0-16.88-8.749-31.66-21.87-40.29c8.875-12.88 11.22-29.88 4.72-45.5c-6.625-15.88-20.59-26.11-36.34-28.86c3.25-15.37-.3079-31.87-12.18-43.74s-28.44-15.38-43.69-12.13c-2.75-15.75-13.02-29.87-28.89-36.37c-15.5-6.496-32.48-3.998-45.48 4.748c-8.625-13.12-23.39-21.87-40.27-21.87s-31.61 8.749-40.23 21.87c-13-8.871-30.02-11.28-45.52-4.779C122.5 23.72 112.1 37.74 109.5 53.49C94.13 50.24 77.6 53.71 65.72 65.58c-12 11.87-15.47 28.41-12.1 43.78c-15.88 2.75-29.93 12.99-36.43 28.86C10.69 153.7 13.25 170.7 21.1 183.7c-13.25 8.621-21.1 23.39-21.1 40.26c0 .0137 0-.0137 0 0s0-.0137 0 0c0 16.88 8.749 31.64 21.87 40.26C13 277.1 10.63 294.1 17.13 309.7c6.625 15.88 20.62 26.17 36.37 28.92c-3.25 15.37 .3275 31.78 12.2 43.65c11.88 11.87 28.42 15.46 43.67 12.21C111.5 406.5 117.1 417.5 128 424.1l-.0089-25.07c0-10.88 10.75-18.75 21.12-15.25l74.87 31.25l74.87-31.25c10.38-3.375 21.12 4.374 21.12 15.25L320 424.9c9.951-7.479 16.5-18.41 18.5-30.41c15.38 3.25 31.88-.2884 43.76-12.16c12-11.87 15.49-28.33 12.12-43.7c15.88-2.75 29.94-13.03 36.44-28.91c6.5-15.5 3.935-32.45-4.815-45.45C439.3 255.7 447.1 240.9 447.1 224C447.1 223.1 447.1 224 447.1 224S447.1 224 447.1 224zM311.1 223.1c0 9.5-7.749 17.63-10.5 26.25c-2.75 8.871-1.125 20.12-6.25 27.5c-5.25 7.5-16.12 9.375-23.38 14.87c-7.125 5.375-12.12 15.62-20.62 18.5C243 313.9 233.1 308.7 224 308.7S205 313.9 196.8 311.1c-8.5-2.875-13.5-13.12-20.62-18.5C168.9 287.2 157.1 285.2 152.8 277.7C147.6 270.4 149.3 259.1 146.5 250.2C143.8 241.6 136 233.5 136 223.1c0-.0137 0 .0137 0 0s0 .0137 0 0c0-9.5 7.749-17.66 10.5-26.28c2.75-8.871 1.146-20.22 6.271-27.6c5.25-7.5 16.1-9.274 23.35-14.77c7.125-5.375 12.12-15.62 20.62-18.5C205 134.1 214.9 139.2 224 139.2s19-5.125 27.25-2.375c8.5 2.875 13.5 13.12 20.62 18.5c7.25 5.371 18.12 7.371 23.38 14.87c5.125 7.375 3.5 18.63 6.25 27.5C304.3 206.3 311.1 214.5 311.1 223.1C311.1 224 311.1 223.1 311.1 223.1S311.1 223.1 311.1 223.1z"
      />
    </svg>
  );
};

export const Ornament = ({
  primaryClassName,
  secondaryClassName,
  ...props
}: DuoToneComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
      {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><defs><style>.fa-secondary{opacity:.4}</style></defs> */}
      <path
        className={primaryClassName}
        d="M287.1 153.9L287.1 112c0-8.836-7.168-16-16.01-16H111.1c-8.836 0-15.1 7.164-15.1 16l.0016 41.94C56.84 176.6 26.76 212.8 11.39 256h361.2C357.2 212.8 327.1 176.6 287.1 153.9zM11.19 384c26.38 74.52 97.24 128 180.8 128s154.4-53.48 180.8-128H11.19z"
      />
      <path
        className={secondaryClassName}
        d="M372.6 256H11.39C4.255 276.1 0 297.5 0 320c0 22.48 4.091 43.96 11.19 64h361.6C379.9 363.1 384 342.5 384 320C384 297.5 379.7 276.1 372.6 256zM191.9 96C174.4 96 159.9 81.5 159.9 64s14.51-32 32.01-32s31.97 14.5 31.97 32S209.4 96 191.9 96h55.13c5.498-9.375 8.887-20.25 8.887-32c0-35.25-28.75-64-63.98-64S127.1 28.75 127.1 64c0 11.75 3.368 22.62 8.866 32H191.9z"
      />
    </svg>
  );
};
