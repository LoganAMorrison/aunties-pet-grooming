import * as React from "react";

interface LogoOutlineProps
  extends React.PropsWithoutRef<React.ComponentProps<"svg">> {
  backgroundColor?: string;
}

export const LogoOutline: React.FC<LogoOutlineProps> = ({
  fill,
  backgroundColor,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 594.82 598.17"
      {...props}
    >
      <path
        fill={fill}
        d="M353.11,425.78c.57,1.7,1.56,3.14,2.83,4.39,2.53,.41,3.48,2.53,4.57,4.41,.43,.73-.02,1.62-.82,2.02-1.15,.57-1.23,1.37-.66,2.35,1.73,2.94,1.49,6.17,1.3,9.35-.12,1.99-.53,3.94-.14,5.96,.19,.99-.24,1.96-1.09,2.52-1.12,.75-1.37,1.8-1.62,3.03-.92,4.46-.3,8.76,1.22,12.96,.82,2.26,.93,4.3-.67,6.31-.99,1.24-.99,2.84-1,4.37-.01,1.47-.43,2.66-2.01,3.17-.99,.33-1.43,1.23-1.88,2.08-.37,.71-.72,1.43-1.1,2.13-2.3,4.33-4.08,5.23-8.92,4.43-.79-.13-1.59-.28-2.38-.25-3.63,.15-4.3-3.51-2.74-5.8,.36-.53,.78-1.07,1.35-1.35,3.21-1.55,3.86-4.32,3.45-7.46-.47-3.56-1.82-6.78-4.38-9.39-.38-.39-.79-.93-1.41-.74-.67,.2-.55,.9-.61,1.44-.67,5.65-3.11,10.52-6.55,14.95-1.76,2.26-3.88,3.39-6.88,2.76-2.33-.5-4.78,.04-7.14-.62-1.43-.4-2.55-1.03-2.81-2.56-.28-1.64,.62-2.71,1.97-3.51,1.41-.83,3-1.07,4.53-1.51,3.35-.96,4.5-2.55,4.65-6.06,.25-5.67-1.73-10.5-5.42-14.68-1.11-1.26-2.26-2.48-3.12-3.93-.77-1.3-1.81-1.53-3.03-.75-2.47,1.59-4.95,2.9-8.04,1.7-.72-.28-1.59,.25-2.27,.62-1.73,.94-3.58,1.19-5.49,1.19-1.22,.15-2.27,.76-3.33,1.29-1.64,.82-3.19,.81-4.82,.02-.85-.41-1.71-1.16-2.65,.14-.36,.5-1.15-.24-1.74-.42-1.94-.58-2.92,.18-2.81,2.22,.08,1.45,.53,2.82,.89,4.21,.17,.64,.39,1.27-.72,1.27-.95,0-.57,.77-.54,1.25,.15,2.55,.68,5.08,.18,7.64-.07,.37,.02,.79-.37,1.1-.86-.22-.88-1.27-1.77-1.72-1.39,1.77-1.31,3.88-1.18,6.22-2.35-.37-3.43,1.13-4.45,2.71-.82,1.28-1.63,2.56-2.45,3.84-1.27,1.98-3.04,2.96-5.44,2.83-3.03-.17-6.07-.26-9.1-.42-1.81-.1-2.41-.84-2.16-2.61,.17-1.14,.69-2.11,1.5-2.93,.74-.75,1.6-1.31,2.54-1.77,3.66-1.82,5.19-4.83,4.8-8.83-.31-3.26-.57-6.53-1.33-9.72-.4-4.95-1.47-9.61-5.24-13.24-1.2-1.16-2.17-2.55-3.28-3.81-.43-.49-.69-1.25-1.7-.79-.72,.32-.86-.56-1.04-1.01-.63-1.59-.6-3.28-.7-4.96-.09-1.54-.12-1.54-1.74-1.01-.68-2.57-.63-5.22-.84-7.84-.05-.64,.21-1.59-1.08-1.28-.56,.13-.55-.42-.61-.79-.2-1.18-.38-2.36-.57-3.56-1.14-.33-1.64,.93-2.64,.95-.03-.22-.16-.48-.09-.67,1.89-4.73,1.95-10.05,4.68-14.53,.72-1.17,.41-1.79-.91-2.1-1.86-.43-3.76-.69-5.65-1.02-.94-.16-1.9-.27-2.83-.49-2.53-.6-4.21-2.18-5.05-4.64-.65-1.9-.34-3.06,1.36-4.09,1.43-.86,2.98-1.52,4.48-2.27,1.22-.6,2.46-1.14,3.65-1.79,1.34-.73,2.17-1.88,2.24-3.45,.1-2.52,1.36-4.33,3.31-5.81,1.46-1.11,2.84-2.33,4.23-3.52,.98-.84,1.89-1.76,2.2-3.06,.24-1,.9-1.4,1.82-1.64,2.19-.58,4.3-.45,6.24,.72,1.52,.91,3.12,1.63,4.81,2.11,1.48,.42,2.26,1.25,2.48,2.82,.26,1.85,.79,3.65,3.07,4.03,.1-.03,.2-.06,.3-.09,.48-.23,.95-.52,1.51-.53,.55,.02,1.09,.08,1.59,.34,1.76,.1,1.63,2.49,3.29,2.7,1.27,.34,2.11,1.26,2.92,2.2,.87,.57,1.31,1.55,2.1,2.21,.26,.41,.37,.86,.29,1.34-.98,1.13-.83,1.99,.61,2.55,1.46,1.57,2.95,3.11,4.76,4.3,.7,1.04,1.78,1.19,2.9,1.23,1.35,.66,3.22,.3,4.02,2.04,4.71,1,9.44,1.07,14.2,.41,.28-.28,.57-.33,.88-.05,3.84-.01,7.67-.01,11.51-.02,.5-.76,1.23-.91,2.08-.84,4.75,.4,9.52,.77,14.19,1.78,5.15,1.11,9.23,3.84,11.76,8.57,1.47,2.71,1.89,5.68,1.75,8.75Z"
      />
      <path
        fill={fill}
        d="M152.56,255.82c.83,.06,1.66,.08,2.43-.34,5.75-.29,11.43-1.23,17.14-1.79,2.38-.24,4.76-.56,7.15-.76,1.94-.16,2.45,.34,2.53,2.23,.03,.64,.01,1.28,.01,1.92,0,23.51,0,47.02,.01,70.53,0,1.75-.02,3.5,.33,5.25,.44,2.21,1.69,3.55,3.81,4.16,2.01,.57,4.07,.82,6.14,.97,.64,.05,1.27,.14,1.91,.16,1.12,.03,1.54,.6,1.48,1.69-.06,.96-.07,1.92,0,2.88,.09,1.29-.53,1.63-1.71,1.62-4.79-.04-9.59-.01-14.38-.01-4,0-7.99-.08-11.99,.04-1.42,.04-2.01-.53-2.34-1.72-.24-2.94-.87-5.8-1.51-8.77-1.41,.53-2.45,1.28-3.52,1.96-4.52,2.87-9.12,5.61-14.1,7.64-7.19,2.93-14.6,4.03-22.29,2.67-9.95-1.75-16.54-8.25-18.55-18.23-.6-2.99-.87-6.01-.87-9.05,0-15.59,.01-31.18,0-46.77,0-1.6,0-3.2-.17-4.79-.28-2.66-1.32-3.88-3.94-4.42-2.42-.5-4.88-.81-7.33-1.12-.95-.12-1.45-.44-1.39-1.47,.07-1.27-.3-2.74,.21-3.78,.61-1.23,2.3-.69,3.5-.84,7.84-.96,15.7-1.85,23.56-2.7,3.05-.33,3.44,.09,3.44,3.25,.01,19.43,0,38.86,.01,58.29,0,2.48,.1,4.94,.62,7.39,1.93,9.1,8.1,14.4,17.39,14.41,8.73,0,15.72-3.66,20.8-10.85,1.67-2.36,2.52-4.97,2.65-7.83,.11-2.47,.23-4.95,.23-7.43,.02-12.47,.02-24.95,.01-37.42,0-1.84-.05-3.68-.2-5.51-.23-2.79-1.29-4.04-4.03-4.6-2.27-.46-4.56-.79-6.86-1.08-1.12-.14-1.57-.64-1.46-1.71,.14-1.33-.36-2.72,.4-3.99,.28-.03,.58-.05,.88-.08Z"
      />
      <path
        fill={fill}
        d="M441.89,269.44c2.28-3.19,4.7-6.25,7.76-8.75,6.62-5.41,14.33-7.94,22.72-8.58,5.84-.45,11.66-.14,17.36,1.4,11.12,2.99,18.52,9.96,22.21,20.88,.25,.75,.32,1.57,.83,2.22-.06,.14-.03,.26,.08,.37,.39,.47,.1,1.11,.4,1.6,.04,.27,.08,.54,.12,.81,.3,.53,.14,1.15,.36,1.7,.16,2.21,.32,4.41,.47,6.62,.15,2.08-.13,4.1-.91,6.04-.89,3.27-3.49,3.89-6.33,3.98-4.39,.14-8.79,.05-13.18,.05-11.5,.01-23.01-.01-34.51,.01-3.59,.01-3.87,.26-3.85,3.79,.04,7.34,1.24,14.4,4.27,21.19,6.6,14.78,25.56,16.11,35.79,8.59,4.27-3.14,6.9-7.46,9.48-11.88,.82-1.42,1.76-2.5,3.6-2.07,2.69,.62,4.16,2.06,4.31,4.23-1.22,2.69-2.33,5.43-3.84,7.97-6.02,10.16-15.04,15.72-26.66,16.85-8.65,.84-17.24,.2-25.45-3.04-6.67-2.64-11.99-6.91-15.71-13.1-.41-.68-.91-1.3-1.36-1.95-.22-1.28-.96-2.34-1.44-3.52-1.94-4.78-3.05-9.76-3.59-14.86-1.01-9.53-.71-18.99,1.82-28.31,.99-3.64,2.61-7.01,4.11-10.44,.39-.62,.77-1.21,1.14-1.8Z"
      />
      <path
        fill={fill}
        d="M579.03,343.24c-3.68,1.3-7.36,2.56-11.28,2.99-10.15,1.12-20.05,.38-29.51-3.82-.29-.13-.61-.18-.91-.27-.38,.05-.66-.09-.83-.44l-4.92-3.39c-1.6-.96-1.33-2.69-1.44-4.09-.31-3.98-.71-7.95-.97-11.93-.07-1.03,.08-1.9,.88-2.59,.04-1.65,.12-3.3-.39-4.9-.25-.23-.29-.46,.02-.68,1.57-.43,3.17-.11,4.76-.22,1.01-.07,1.35,.45,1.58,1.35,.68,2.71,1.52,5.37,2.61,7.94,1.69,4,3.85,7.69,7.03,10.72,6.26,5.96,16.85,7.73,24.52,4.09,8.01-3.79,10.72-13.56,5.71-20.58-.18-.25-.45-.44-.67-.66-2.13-.14-3.25-1.39-3.69-3.38-2.53-2.16-5.55-3.45-8.56-4.71-3.31-1.38-6.71-2.58-10.06-3.86-3.59-1.38-7.08-2.94-10.35-4.99-7.38-4.61-11.15-11.23-11.14-19.95,0-2.08,.13-4.15,.2-6.23,.1-.22,.24-.42,.29-.65,1.8-8.71,7.15-14.39,15.13-17.85,4.07-1.76,8.36-2.69,12.75-3.01,9.28-.68,18.31,.43,26.88,4.31,.55,.42,1.06,.92,1.83,.91,.06,.55,.18,1.11,.18,1.66,.01,6.48,.02,12.96,0,19.44,0,1.8-.04,1.82-1.86,1.85-1.19,.02-2.58,.31-3.53-.18-1.06-.55-.72-2.13-.98-3.26-1.12-4.82-2.87-9.32-6.46-12.9-5.79-5.78-16.19-6.79-23.08-2.4-6.2,3.95-8.48,14.2-2.2,20.23,2.95,2.83,6.38,4.82,10.1,6.31,3.78,1.52,7.65,2.8,11.45,4.26,4.41,1.68,8.73,3.57,12.65,6.25,4.81,3.28,8.19,7.59,9.36,13.41,2.55,12.7-1.84,24.25-13.89,30.48-.41,.22-.8,.49-1.21,.74Z"
      />
      <path
        fill={fill}
        d="M367.42,341.66c-3.07,1.61-6.26,2.92-9.54,4.03-3.37,.66-6.76,1.15-10.22,.98-2.17-.11-4.29-.48-6.35-1.15-7.44-2.4-11.95-8.37-12.63-16.69-.1-1.27-.11-2.56-.11-3.84-.01-19.91-.01-39.83-.02-59.74,0-2.88,.26-2.67-2.76-2.67-2.88-.01-5.76-.05-8.63,.02-1.25,.03-1.71-.43-1.66-1.66,.06-1.68,.08-3.36-.01-5.04-.07-1.33,.56-1.6,1.72-1.58,3.36,.05,6.72-.05,10.07,.05,1.49,.05,2.27-.48,2.92-1.82,3.15-6.46,6.44-12.86,9.59-19.33,.67-1.38,1.41-2.05,3.06-1.97,4.27,.21,3.61-.56,3.64,3.74,.04,5.44,.01,10.88,.01,16.32,0,3.39-.16,3.02,2.91,3.02,5.52,.01,11.03,0,16.55,.02,1.28,0,2.55,.09,3.83,.13,0,2,.01,3.99,0,5.99-.01,2.04-.03,2.08-2.14,2.09-5.59,.03-11.18,0-16.77,.04-1.34,.01-3.03-.56-3.95,.28-1.04,.96-.4,2.73-.4,4.13-.03,16.46-.02,32.92-.01,49.37,0,3.04,.13,6.07,.77,9.05,.28,1.33,.67,2.63,1.24,3.87,2.06,4.52,5.49,6.85,10.56,6.8,3.4-.03,6.69-.47,9.83-1.74,1.06-.43,1.66-.35,1.9,.84,.08,.39,.24,.76,.36,1.14q.77,2.5-1.38,3.95c-.75,.54-1.74,.64-2.38,1.37Z"
      />
      <path
        fill={fill}
        d="M322.72,539.13c.87,1.15,1.51,2.42,2.14,3.72,6.44,13.37,12.92,26.73,19.39,40.09,.1,.21,.27,.38,.45,.64,.65-.27,.6-.86,.67-1.36,2.23-14.99,4.46-29.99,6.7-44.98,.57-3.85,1.8-4.9,5.74-4.81,2.96,.07,5.89,.03,8.72-.97,1.88-.12,3.47-1.18,5.27-1.58,.79-.27,1.59-.27,2.38,0,.61,.51,1.23,1.02,1.84,1.53,.59,.91,.34,1.88,.17,2.84-.82,1-1.91,1.39-3.17,1.4-.32,0-.64,.03-.96,.01-4.51-.32-6.02,1.98-5.49,6.26,.57,4.6,1.36,9.16,2.08,13.74,1.04,6.63,2.11,13.25,3.15,19.88,.22,1.42,.44,2.85,1.03,4.17,1.02,2.27,2.63,3.04,5.06,2.44,1.01-.25,1.98-.64,3-.82,2.03-.35,3.07,.33,3.39,2.06,.34,1.85-.44,3.13-2.27,3.61-.53,.14-1.1,.16-1.66,.19-6.48,.32-12.91,.86-19.09,3.05-.67,.24-1.41,.32-2.12,.36-1.89,.12-2.89-.58-3.18-2.16-.36-1.89,.36-2.99,2.31-3.56,1.02-.3,2.06-.19,3.09-.26,2.14-.14,3.16-.96,3.6-3.13,.43-2.14,.32-4.31,.01-6.45-1.72-11.62-3.49-23.23-5.25-34.84-.11-.7-.16-1.43-.59-2.04-.75,.18-.67,.81-.75,1.34-2.56,16.25-5.13,32.51-7.67,48.77-.59,3.74-3.3,5.67-7.03,4.95-1.01-.2-1.76-.76-2.27-1.61-.57-.96-1.1-1.95-1.6-2.95-6.99-14.01-13.97-28.03-20.98-42.03-.34-.68-.49-1.53-1.3-1.91-.62,.33-.34,.85-.28,1.25,2.16,12.68,4.34,25.35,6.52,38.02,.09,.55,.18,1.1,.33,1.64,.98,3.56,2.09,4.29,5.68,3.73,1.02-.16,2.03-.45,3.08-.35,1.47,.14,2.3,.95,2.5,2.43,.21,1.51-.32,2.55-1.66,3.09-.9,.36-1.86,.42-2.83,.44-4.15,.09-8.3,.19-12.38,1.11-1.8,.41-3.52,1.03-5.25,1.65-1.17,.42-2.34,.53-3.54,.38-1.34-.17-2.1-1.04-2.26-2.4-.18-1.49,.42-2.54,1.74-3.05,1-.39,2.05-.24,3.08-.25,3.53-.03,4.94-1.42,4.91-4.96-.02-2.89-.73-5.7-1.15-8.54-1.35-9-2.8-18-4.24-26.99-.18-1.1-.44-2.2-.83-3.24-.99-2.58-2.63-3.42-5.29-2.79-.85,.2-1.67,.54-2.53,.74-1.9,.44-2.88,.08-3.5-1.19-.75-1.55-.31-3.03,1.27-4.13,.25-.18,.58-.25,.87-.37,1.27-.56,2.66,.13,3.93-.41,.77,.17,1.54,.08,2.3-.07,.99-.48,2.1,.04,3.09-.38,.25-.03,.5-.06,.75-.1,.46-.37,1.09-.08,1.56-.4,.28-.05,.56-.1,.84-.15,.31-.13,.61-.32,.96-.34,.85,.02,1.61-.37,2.4-.6,.45-.31,1.06-.01,1.49-.38,1.35-.15,2.42,.67,3.63,1.02Z"
      />
      <path
        fill={fill}
        d="M436.06,499.63c7.92,4.65,15.84,9.3,23.76,13.94,7.17,4.2,14.34,8.39,21.52,12.57,.67,.39,1.27,.95,2.1,1.04,.31-.6-.22-.91-.45-1.25-6.88-10.2-13.78-20.4-20.69-30.59-.67-.99-1.32-2.01-2.28-2.77-1.91-1.52-3.75-1.55-5.67-.03-.75,.59-1.4,1.32-2.17,1.89-1.5,1.12-3,1.02-4.08-.17-1.19-1.31-1.07-2.88,.32-4.26,.69-.68,1.52-1.17,2.4-1.55,5.11-2.23,9.6-5.39,13.62-9.24,.76-.73,1.58-1.34,2.57-1.73,1.55-.61,2.64-.29,3.55,1.03,.86,1.25,.77,2.55-.43,3.65-.88,.8-1.94,1.41-2.87,2.15-1.75,1.4-1.97,2.3-1.11,4.38,.55,1.34,1.35,2.53,2.16,3.73,6.45,9.54,12.89,19.07,19.33,28.61,1.25,1.86,2.41,3.76,3.27,5.85,2.19,5.36-2.76,8.41-6.42,7.72-1.83-.34-3.5-1.09-5.1-2.02-12.98-7.56-25.96-15.12-38.95-22.67-1.48-.86-2.99-1.68-4.64-2.6,.05,1,.54,1.45,.88,1.95,6.75,10,13.52,20,20.28,30,.72,1.06,1.46,2.1,2.48,2.91,1.75,1.4,3.17,1.48,5.04,.22,1.06-.71,2-1.6,3.06-2.31,1.54-1.03,2.8-.84,3.79,.44,1.01,1.31,.92,2.6-.27,3.88-.72,.77-1.61,1.33-2.57,1.73-5.38,2.25-10.02,5.6-14.26,9.56-.87,.82-1.76,1.63-2.88,2.13-1.77,.79-3.24,.33-4.06-1.27-.71-1.39-.3-2.6,1.28-3.61,.81-.51,1.69-.9,2.53-1.35,2.52-1.35,3.21-3.13,2.1-5.77-.43-1.02-1.03-1.99-1.65-2.91-6.16-9.15-12.34-18.29-18.52-27.42-.63-.93-1.27-1.84-2.09-2.62-2.11-2-3.9-2.1-6.15-.29-1.06,.85-2.1,1.72-3.14,2.58-.62,.22-1.25,.18-1.88,.03-2.64-1.59-2.77-4.12-.33-5.82,1.46-1.02,3.02-1.85,4.59-2.67,2.7-1.42,4.94-3.5,7.28-5.4,.89-.73,1.87-1.12,2.85-1.61,.62-.36,1.26-.29,1.9-.06Z"
      />
      <path
        fill={fill}
        d="M120.97,505.64c3.12-4.14,5.89-8.52,8.71-12.86,.34-.53,.6-1.13,.8-1.73,.77-2.28,.21-3.87-1.83-5.11-.88-.54-1.87-.91-2.75-1.44-1.63-.97-2.1-2.36-1.36-3.82,.81-1.59,2.28-2.03,4.07-1.16,.57,.27,1.13,.62,1.6,1.04,5.45,4.88,11.77,8.47,18,12.21,2.12,1.27,4.19,2.64,6.21,4.05,1.24,.87,2.39,1.86,3.51,2.89,3.77,3.49,5.99,7.63,5.27,12.96-.28,.73-.73,1.42-.62,2.26-.12,2.42-1.18,4.26-3.35,5.4-.31,.25-.64,.47-.91,.75-2.98,3-6.61,3.7-10.6,2.94-1.4-.27-2.76-.73-4.5-1.2,.49,.75,.82,1.3,1.19,1.81,1.78,2.48,2.03,5.14,.99,7.96-.64,1.74-1.51,3.35-2.53,4.88-1.14,1.74-2.3,3.46-3.44,5.19-.62,.94-1.13,1.93-1.34,3.05-.31,1.69,.17,2.91,1.46,3.75,1.3,.84,2.58,.7,3.81-.13,1.42-.95,2.45-2.28,3.41-3.66,1.54-2.24,2.98-4.55,4.67-6.67,1.5-1.88,4.34-1.25,5.16,1,.44,1.21-.09,2.2-.73,3.13-2.03,2.96-4.09,5.91-6.18,8.84-.46,.65-1.02,1.24-1.61,1.76-2.44,2.17-5.27,2.97-8.45,2.1-3.1-.85-5.65-2.62-7.55-5.22-1.27-1.75-1.71-3.74-1.27-5.91,.32-1.6,.95-3.05,1.83-4.39,1.31-2.01,2.67-3.98,4-5.97,.85-1.26,1.62-2.56,2.26-3.95,1.22-2.64,.82-4.98-1.32-6.97-.93-.87-1.86-1.77-2.9-2.5-2.61-1.84-5.26-3.63-7.93-5.38-1.82-1.2-2.72-1.01-4.11,.66-.2,.24-.39,.51-.56,.77-2.08,3.13-4.17,6.24-6.23,9.39-.48,.73-.91,1.51-1.23,2.32-.97,2.46-.42,4.12,1.78,5.55,1,.65,2.11,1.15,3.09,1.83,1.44,1,1.66,2.08,.89,3.5-.81,1.5-2.04,2.01-3.59,1.51-.86-.28-1.57-.78-2.2-1.4-4.79-4.7-10.3-8.32-16.42-11.04-.36-.16-.73-.34-1.06-.56-2.22-1.45-2.49-3.14-.86-5.2,.2-.25,.45-.46,.67-.68,.63-.24,1.26-.21,1.89-.03,1.07,.78,2.17,1.52,3.09,2.5,.53,.57,1.18,1.03,2.02,1.04,.74,.22,1.48,.31,2.21-.02,2.02-.93,3.16-2.71,4.34-4.46,3.5-5.21,7-10.39,10.5-15.58Z"
      />
      <path
        fill={fill}
        d="M538.76,476.05c.4,2.68,.65,5.11,.06,7.58-2.21,9.32-11.79,17.21-21.34,17.53-4.82,.16-9.39-.82-13.65-3.04-7.77-4.06-13.96-9.86-18.23-17.53-3.13-5.62-4.54-11.73-2.77-18.04,2.62-9.36,8.57-15.52,18.33-17.56,.52-.11,1.15,.05,1.51-.57-.32-.78-1.16-1.03-1.7-1.58-1.21-1.23-1.36-2.35-.46-3.63,.96-1.37,2.32-1.79,3.76-1.14,1.05,.47,1.9,1.24,2.56,2.13,3.04,4.08,6.71,7.49,10.78,10.5,.63,.47,1.19,1.08,1.64,1.73,.91,1.3,.77,2.55-.28,3.71-.94,1.04-2.13,1.29-3.48,.65-1.09-.52-1.99-1.33-2.85-2.17-6.78-6.66-14.15-4.29-18.87,.48-5.23,5.29-6.54,11.35-3.79,18.24,.15,.37,.29,.75,.48,1.1,5.22,9.41,12.69,16.23,23.15,19.19,8.73,2.47,18.24-3.53,20.01-12.2,.42-2.04,.16-3.98-.53-5.88-1.23-3.43-3.55-6.05-6.44-8.16-1.94-1.42-3.4-1.24-5.12,.48-.84,.85-1.54,1.83-2.32,2.75-.67,.79-1.34,1.6-2.29,2.09-1.29,.67-2.46,.45-3.48-.6-.9-.93-1.07-2.09-.43-3.3,.53-1.01,1.41-1.73,2.23-2.49,1.64-1.52,3.33-2.99,4.96-4.52,2.63-2.49,4.79-5.36,6.76-8.38,.66-1.01,1.34-2,2.24-2.8,1.32-1.18,2.73-1.26,3.88-.25,1.09,.96,1.34,2.61,.48,3.92-.53,.79-1.22,1.48-1.87,2.18-1.05,1.14-1.17,2.4-.54,3.77,.68,1.48,1.71,2.7,2.9,3.79,3.24,2.97,6.41,6.02,9.93,8.67,.7,.53,1.4,1.08,1.98,1.73,1.31,1.44,1.27,2.88-.03,4.25-1.3,1.36-2.7,1.4-4.22,.1-.93-.85-1.59-2-2.95-2.73Z"
      />
      <path
        fill={fill}
        d="M52.43,463.26c3.66-6.82,8.88-12.19,15.29-16.46,3.69-2.46,7.74-4.03,12.01-5.13,.27-.29,.56-.34,.89-.09,3.03-.11,6.05-.34,9.06,.39,9.99,2.43,17.22,10.97,17.91,21.21,.03,.44-.17,.95,.35,1.43,.78-.38,1.2-1.2,1.86-1.72,1.31-1.04,2.51-1.05,3.66-.01,1.27,1.16,1.52,2.49,.65,3.86-.65,1.03-1.56,1.84-2.6,2.44-4.21,2.41-7.74,5.64-11.04,9.14-.6,.64-1.24,1.25-2.03,1.67-1.51,.79-2.81,.55-3.86-.7-.94-1.11-.97-2.42-.03-3.73,.37-.51,.84-.96,1.3-1.4,.8-.78,1.66-1.5,2.45-2.3,3.78-3.79,4.66-8.53,2.53-13.45-2.9-6.69-9.22-10.84-16.02-10.46-3.33,.18-6.42,1.25-9.31,2.87-6.02,3.39-11,7.97-14.84,13.7-2.73,4.08-4.4,8.58-3.59,13.59,.98,6.07,4.51,10.31,10.03,12.84,2.24,1.03,4.68,1,7.05,.35,3.33-.91,6.09-2.79,8.39-5.33,1.81-2,1.79-3.38,.03-5.5-.72-.86-1.55-1.61-2.3-2.44-.54-.59-1.1-1.18-1.51-1.85-.95-1.52-.75-2.84,.46-3.85,1.27-1.07,2.51-1.04,3.88,.11,1.05,.89,1.81,2.03,2.55,3.17,3.43,5.29,7.72,9.76,12.73,13.56h-.01c2.27,1.35,2.68,2.48,1.62,4.39-1.12,2-1.93,2.27-3.99,1.32-1.14-.63-1.93-1.65-2.8-2.58-1.52-1.61-2.65-1.82-4.7-.91-1.55,.69-2.87,1.73-4.12,2.84-3.16,2.81-6.38,5.56-9.26,8.67-.43,.47-.89,.92-1.4,1.3-1.63,1.23-3.16,1.05-4.41-.48-1.15-1.42-.99-2.85,.48-4.2,.86-.8,2-1.28,2.8-2.44-.68-.3-1.3-.2-1.89-.15-3.41,.24-6.53-.72-9.27-2.64-7.39-5.16-11.84-11.97-11.41-21.35,.01-.32-.03-.64-.04-.95,.23-2.91,.51-5.8,2.29-8.28,.03-.15,.09-.3,.16-.45Z"
      />
      <path
        fill={fill}
        d="M477.81,72.97c.73,.74,1.48,1.43,2.41,1.92,1.16-.03,2.06,.44,2.99,1.16,1.96,1.51,3.6,3.37,5.6,4.82,1.07,.77,1.74,1.84,1.93,3.18,.03,.29,.19,.44,.49,.45,2.19,.33,3.62,1.81,5.08,3.29,5.31,5.4,10.74,10.69,15.83,16.31,1.08,1.19,1.31,2.71,2.1,3.98,.85,1.18,1.57,2.48,2.81,3.33,8.56,10.37,16.55,21.13,23.72,32.52,13.13,20.88,23.43,43.06,30.93,66.56,.17,.53,.37,1.06,.5,1.6,.3,1.29-.04,2.13-.98,2.34-1.07,.24-1.65-.35-1.97-1.29-.13-.38-.24-.76-.36-1.14-11.31-35.63-28.86-67.87-52.7-96.64-20.22-24.4-43.86-44.9-70.84-61.5-8.72-5.36-17.71-10.23-26.95-14.63-.65-.31-1.3-.63-1.89-1.02-.6-.4-.74-1.06-.47-1.71,.31-.74,.93-1.14,1.73-.91,.68,.2,1.33,.52,1.98,.83,7.03,3.27,13.82,7,20.6,10.75,.38,.48,.91,.7,1.48,.85,4.62,.41,7.71,3.83,11.49,5.88,1.62,.88,3.13,1.94,3.83,3.78,.76,.55,1.36,1.35,2.37,1.51,2.26-.42,3.57,1.23,4.86,2.53,.97,.98,2.08,1.55,3.16,2.28,3.76,2.57,8.09,4.57,10.27,8.97Z"
      />
      <path
        fill={fill}
        d="M152.57,46.14c.3-.01,.42-.21,.48-.47,5.06-2.51,9.92-5.4,15.04-7.79,1.22-.57,2.28-.82,3.52-.39,.58,.77,.54,1.55,.01,2.33-13.99,6.7-27.34,14.51-40.03,23.43-6.97,4.9-13.68,10.11-20.24,15.54-8.86,7.35-17.06,15.4-24.99,23.72-2.84,2.99-5.78,5.92-8.19,9.3-.37,.48-.52,1.13-1.13,1.41-.37,.23-.69,.5-.8,.96-.59,1.16-.77,2.68-2.45,2.91-3.33,3.63-6.19,7.64-9.12,11.59-7.59,10.2-14.36,20.93-20.5,32.05-2.91,5.27-5.45,10.76-8.15,16.15-.1,.2-.07,.47-.09,.71,.05,.84-.49,1.36-1,1.91-3.32,6.65-5.93,13.6-8.52,20.55-1.57,4.21-2.92,8.5-4.34,12.76-.23,.69-.52,1.32-.99,1.87-.47,.17-.94,.19-1.41-.02-1.23-.97-.73-2.14-.37-3.28,3.09-9.75,6.65-19.33,10.74-28.71,14.63-33.58,34.93-63.29,60.76-89.22,17.46-17.52,36.86-32.56,58.2-45.09,.41-.24,.77-.55,1.15-.83,.25-1.44,1.17-1.69,2.42-1.39Z"
      />
      <path
        fill={fill}
        d="M78.11,129.43c-3.48,4.06-6.44,8.51-9.44,12.92-6.7,9.83-12.66,20.1-17.99,30.74-.18,.35-.31,.73-.46,1.1-.55,.93-1.21,1.8-1.34,2.92,.01,1.61-.81,2.8-1.94,3.83-.58,.32-.39,.94-.54,1.42,.28,3-1.03,5.31-3.17,7.25-1.63,2.64-2.49,5.61-3.56,8.48-1.77,4.74-3.39,9.54-5.05,14.32-.13,.36-.09,.79-.12,1.18,.35,2.43-1.19,2.28-2.79,2.03-.19-.2-.38-.39-.57-.59-.23-.64-.3-1.28,.05-1.9,1.01-3.94,2.35-7.79,3.86-11.56,.54-1.36,.6-2.89,1.5-4.1,.32-1.07,.44-2.18,.56-3.29,.21-1.9,.89-3.55,2.63-4.58,.09-1.04,.83-1.83,1.11-2.8,.11-.74,.44-1.39,.88-1.99,.86-1.91,1.71-3.81,2.57-5.72-.12-3.62,1.63-6.33,4.15-8.69,1.29-2.44,2.58-4.89,3.87-7.33,.5-.9,.6-2.02,1.44-2.74,.18-.26,.37-.52,.55-.77,.24-.81,.53-1.59,1.25-2.11,.36-.67,.72-1.35,1.07-2.02,.53-1.15,1.01-2.32,1.9-3.25,1.76-2.77,3.51-5.53,5.27-8.3,.96-2.52,1.79-5.13,4.36-6.58,.63-.85,1.27-1.7,1.9-2.56,.91-1.69,1.58-3.55,3.32-4.65,.82-1.1,1.63-2.21,2.45-3.31,.58-.86,1.08-1.79,1.92-2.45,2.55-3.08,5.11-6.16,7.66-9.24,.54-.84,.93-1.81,1.91-2.28,.8-.85,1.6-1.71,2.4-2.56,.33-1,1.01-1.7,1.89-2.24,1.61-1.65,3.21-3.31,4.82-4.96,1.39-1.64,2.43-3.63,4.54-4.56,4.67-4.99,9.76-9.54,14.96-13.93,6.5-5.48,13.23-10.69,20.2-15.6,9.67-6.82,19.73-12.97,30.17-18.51,2.91-1.54,5.75-3.21,8.83-4.42,.46-.26,.93-.21,1.41-.06,1.15,1.57,1.14,1.77-.15,2.89-.3,.26-.61,.47-1.01,.61-2.91,1.02-5.49,2.74-8.2,4.16-12.96,6.78-25.25,14.61-36.84,23.53-3.64,2.8-7.24,5.66-10.82,8.52-.74,.59-1.35,1.34-2.02,2.02-.06,.84-.9,.76-1.36,1.12-1.83,1.08-3.18,2.74-4.77,4.09-3,2.55-5.78,5.37-8.62,8.1-.38,.37-.89,.67-1,1.27-2.06,1.96-2.8,5.19-5.89,6.17-.9,.68-1.72,1.43-2.29,2.42-.69,1.38-1,3.1-2.96,3.35-.42,.2-.76,.49-.88,.97-.59,1.15-.99,2.45-2.43,2.88h.01c-2.33,2.36-4.4,4.95-6.34,7.64,.08,2.05-.78,3.35-2.86,3.72Z"
      />
      <path
        fill={fill}
        d="M514.82,131.51c-1.5-2.14-2.9-4.36-4.87-6.12-2.42-2.91-4.83-5.82-7.25-8.73-.9-.52-1.85-1.01-1.89-2.25-.95-1.01-1.89-2.02-2.84-3.03-1.32-.17-1.36-1.44-1.94-2.25-4.97-4.97-9.83-10.07-14.98-14.86-2-1.86-4.09-3.68-6.17-5.48-2.5-2.17-5.09-4.23-7.59-6.4-2.23-1.94-4.56-3.79-6.95-5.53-6.52-4.74-13.1-9.41-19.95-13.65-4.59-2.84-9.29-5.51-14.03-8.12-4.66-2.57-9.56-4.67-14.11-7.45-.27-.17-.57-.28-.85-.44-.72-.43-.97-1.08-.66-1.84,.37-.9,1.13-1.08,1.99-.76,.67,.25,1.32,.57,1.97,.88,24.26,11.58,46.4,26.35,66.31,44.42,37.05,33.63,63.28,74.26,78.58,121.94,.22,.68,.48,1.37,.6,2.07,.11,.7-.26,1.27-.91,1.53-.76,.3-1.46,.07-1.83-.67-.32-.64-.52-1.34-.73-2.02-9.08-28.6-22.55-54.96-40.23-79.18-.54-.73-1.12-1.38-1.67-2.06Z"
      />
      <path
        fill={fill}
        d="M348.23,27.39c.04-.26,.08-.51,.12-.77,.25-.51,.04-1.13,.35-1.63,.04-.27,.08-.54,.12-.81,.28-.5,.05-1.1,.35-1.59,.04-.28,.08-.55,.12-.83,.3-.48,.05-1.09,.35-1.57,.04-.28,.08-.57,.12-.85,.31-.47,.06-1.07,.36-1.55,.04-.29,.08-.58,.12-.86,.33-.46,.06-1.07,.36-1.54,.04-.29,.07-.59,.11-.88,.33-.86,.3-1.73,.01-2.6-.59-1.31-1.48-2.31-2.88-2.79-.42-.39-1.04-.06-1.48-.4-.28-.04-.56-.07-.83-.11-1.38-.32-2.76-.27-4.15,0-1.39,.45-2.3,1.27-2.26,2.85-.34,.46-.05,1.06-.37,1.52-.03,.29-.07,.58-.1,.88-.51,1.11,.09,2.33-.38,3.44-.64,1.87-.64,4.05-2.48,5.37-.63,.23-1.26,.23-1.9,0-.97-.05-1.35-.7-1.56-1.53-.18-.96-.28-1.92,.07-2.86,.1-.13,.12-.27,.06-.43,.38-.43,.04-1.06,.41-1.49,.1-.12,.13-.26,.08-.41,.37-.44,.03-1.07,.41-1.51,.1-.12,.13-.25,.07-.4,.36-.45,.03-1.08,.41-1.52,.1-.12,.13-.26,.07-.41,.45-.6-.04-1.39,.41-1.99,.51-1.45,.46-2.99,.71-4.48,.5-2.93,1.38-3.59,4.23-2.86,8.19,2.1,16.47,3.78,24.81,5.14,2.04,.33,4.06,.85,6.15,.8,.62,.39,1.39,0,2.02,.36,.9,.38,1.8,.75,2.7,1.13,.72,1.2,.72,2.46,.26,3.75,1.07,1.12,.1,2.25,0,3.37-.08,.95-.36,1.87-.47,2.82-.13,.72-.07,1.46-.23,2.18-.17,.6-.23,1.23-.33,1.84-.08,.99-.8,1.59-1.37,2.28-.32,1.04-.81,1.99-1.56,2.79-.58,.79-1.42,.8-2.27,.81-.28,0-.54-.06-.79-.18-1.29-.64-1.71-1.74-1.79-3.13-.13-2.21,.51-4.26,1.1-6.33,1.46-5.08-.78-7.83-6.15-7.55-2.05,.11-2.8,1.59-3.3,3.28-1.17,3.99-1.83,8.09-2.61,12.16-.95,4.93-2.01,9.85-2.93,14.79-.75,4.04-.16,4.89,3.87,5.77,2.38,.52,3.52,1.76,3.32,3.6s-1.62,2.85-4.01,2.87c-.88,.01-1.74-.1-2.59-.39-2.95-.99-5.89-2.01-8.99-2.46-.82-.12-1.49-.53-2.09-1.08-.27-.01-.54-.03-.81-.04-1.29-.5-2.69,.12-3.98-.38-.95-.26-2.13-.44-2.24-1.59-.12-1.24-.28-2.68,1.29-3.36,.64-.2,1.27-.25,1.9,.04,.52,.49,1.14,.64,1.83,.58,1.85,.7,3-.65,4.33-1.48,.2-.46,.39-.92,.59-1.37,.38-.43,.06-1.05,.39-1.49,.04-.28,.08-.56,.12-.83,.3-.48,.05-1.09,.36-1.57,.04-.29,.08-.57,.12-.86,.32-.47,.06-1.07,.36-1.54,.04-.29,.08-.58,.12-.87,.33-.46,.07-1.06,.35-1.53,.04-.3,.08-.59,.12-.89,.35-.45,.08-1.04,.35-1.51,.04-.3,.08-.61,.12-.91,.47-.59-.04-1.38,.42-1.98,.09-.14,.11-.29,.05-.44,.5-.61,0-1.4,.43-1.98Z"
      />
      <path
        fill={fill}
        d="M408.72,514.5c.45,.45,.99,.84,1.32,1.36,1.08,1.74,.47,3.53-1.46,4.25-.97,.36-2.02,.5-3,.83-2.45,.84-3.43,2.45-2.98,5,.18,1.01,.52,2.01,.92,2.97,4.24,10.35,8.5,20.69,12.75,31.04,.49,1.19,1.01,2.36,1.83,3.35,1.47,1.78,3.01,2.15,5.1,1.18,1.01-.47,1.94-1.12,2.95-1.58,1.73-.8,2.91-.47,3.7,.95,.85,1.53,.56,2.98-.81,4.03-.92,.69-2,1.04-3.09,1.25-6.14,1.14-11.74,3.59-16.95,6.98-.81,.53-1.68,.95-2.61,1.18-1.79,.44-3.2-.37-3.74-2.09-.53-1.67,.05-2.73,2-3.44,.9-.33,1.84-.51,2.76-.79,2.56-.79,3.64-2.48,3.14-5.1-.21-1.09-.6-2.16-1.03-3.19-4.21-10.28-8.44-20.54-12.66-30.82-.49-1.19-1.01-2.36-1.84-3.34-1.38-1.63-2.95-2.03-4.93-1.19-.73,.31-1.41,.75-2.08,1.18-1.29,.82-2.61,1.19-4.06,.42-1.8-.59-1.4-1.97-1.19-3.29,.05-.16,.09-.32,.14-.47-.12-1.31,.67-1.99,1.69-2.58,1.6-.93,3.39-1.33,5.16-1.61,2.06-.33,4.15-.48,6.18-1.05,2.45-.75,4.52-2.27,6.72-3.49,1.37-.76,2.74-1.42,4.2-1.94,.61-.22,1.24-.24,1.87,0Z"
      />
      <path
        fill={fill}
        d="M546.4,432.96c2.97-4.64,5.31-9.62,7.71-14.56,6.02-12.35,11.02-25.11,15.19-38.2,.19-.61,.35-1.23,.61-1.81,.37-.84,1.05-1.23,1.94-.9,.76,.28,1.11,.92,.94,1.73-.16,.78-.39,1.54-.64,2.3-3.23,10.11-6.95,20.04-11.28,29.73-.22,.5-.36,1.04-.54,1.57-2.71,5.43-5.39,10.87-8.13,16.29-1.01,2-2.11,3.95-3.2,5.9-.27,.48-.57,.97-.97,1.35-.43,.4-1,.48-1.56,.16-.61-.35-1.02-.87-.86-1.56,.18-.69,.53-1.33,.79-2Z"
      />
      <path
        fill={fill}
        d="M27.93,396.98c2.47,7.08,5.59,13.89,8.83,20.64,2.58,5.39,5.2,10.76,8.35,15.85,.01,.08,.01,.16,.04,.24,.62,1.76,.53,2.48-.46,2.85-1.33,.49-1.86-.49-2.38-1.41-2.74-4.87-5.32-9.82-7.77-14.84-6.19-12.72-11.39-25.84-15.69-39.31-.14-.45-.16-.95-.54-1.31,.02-.39-.01-.81,.09-1.18,.19-.67,.67-1.07,1.38-1.11,.72-.04,1.23,.32,1.5,.96,.28,.66,.47,1.35,.7,2.02,1.26,3.67,2.24,7.44,3.88,10.97,2.17,1.32,2.25,3.43,2.07,5.63Z"
      />
      <path
        fill={fill}
        d="M543.62,410.57c2.48-4.47,4.28-9.25,6.21-13.96,2.63-6.42,4.91-12.98,7.03-19.59,.19-.6,.36-1.24,.68-1.77,.35-.57,.94-.86,1.65-.58,.66,.27,1.03,.79,.99,1.49-.03,.47-.21,.93-.36,1.38-5.67,18.1-13.11,35.45-22.37,52.01-.97,1.73-1,1.71-3,1.43-.59-1.05-.17-1.94,.34-2.89,1.97-3.62,3.89-7.27,5.8-10.92,.4-.77,.69-1.59,1.03-2.39,.86-1.18,1.45-2.49,1.86-3.88-.12-.18-.08-.29,.14-.33Z"
      />
      <path
        fill={fill}
        d="M315.68,42.74c-.29,4.52-.7,4.84-5.38,4.76-3.81-.06-7.62,.01-11.43,.02-5.75-.26-11.49-.06-17.23,.28-1.67,.1-3.35,.22-5.02,.28-1.24,.04-2.17-.48-2.54-1.75-.47-1.62,.39-2.88,2.07-3.03,.88-.08,1.74,.13,2.61,.24,2.1,.27,3.29-.58,3.95-2.61,.28-.86,.3-1.73,.29-2.61-.15-9.43-.3-18.86-.46-28.28-.01-.56-.03-1.12-.13-1.67-.52-2.66-1.92-3.64-4.6-3.27-.63,.09-1.26,.22-1.9,.23-1.66,.03-2.46-.68-2.54-2.18-.08-1.48,.65-2.37,2.22-2.56,.71-.09,1.44-.08,2.15,0,7.9,.77,15.8,.37,23.69-.09,2.63-.15,5.26-.36,7.89-.47,3.84-.16,4.67,.64,4.77,4.44,.01,.24,.05,.47,.08,.71-.32,2.98-.3,5.97-.01,8.95,.04,.42,.07,.84,.11,1.25,.28,1.12,.34,2.24-.03,3.35-.55,.62-.97,1.41-1.94,1.48-.47,.31-.95,.3-1.43,.02-.72-.49-1.27-1.12-1.51-1.98-.49-2.09,.17-4.24-.37-6.32,.14-.62,.06-1.23-.1-1.84-.33-.45-.02-1.06-.39-1.5-.42-1.66-1.65-2.44-3.18-2.88-2.44-.53-4.95,.24-7.39-.38-.64-.14-1.29-.13-1.93,0-1.57,.54-3.26-.18-4.83,.42-1.39,.17-2.18,.95-2.4,2.32-.34,3.29-.31,6.58-.02,9.87-.08,.78,.07,1.45,.87,1.8,2.17,.29,4.33,.31,6.5-.01,2-.97,2.39-1.65,2.25-3.89-.35-1.75-.3-3.51-.03-5.27,.3-.63,.8-.99,1.51-1.04,.64-.15,1.3-.44,1.88,.18,.77,.6,1.3,1.36,1.54,2.31,.24,.64,.28,1.28-.03,1.91-.03,.44-.06,.89-.08,1.33-.53,1.28,.14,2.68-.4,3.95-.24,1.76-.26,3.52,0,5.29,.55,1.26-.14,2.66,.41,3.92,.03,.3,.07,.59,.1,.89,.35,.66,.01,1.44,.35,2.1-.02,.72-.05,1.44-.07,2.16,.17,1.85-1.02,2.36-2.51,2.44-1.86,.11-3.08-.86-3.53-2.6-.34-1.32-.15-2.69-.02-4.05,.21-2.22-.55-3.06-2.79-3.23-.88-.07-1.76-.05-2.63,.02-1.33,.11-2.05,.84-2.08,2.16-.08,3.43-.2,6.87,.07,10.3,.12,1.53,.76,2.87,2.58,2.92,4.21,.13,8.44-.09,12.59,.94,.44,.11,.96,.1,1.39-.18h-.02c3.22-2.09,3.17-5.54,3.55-8.78,.18-1.56-.18-3.14,.18-4.7,.26-.74,.54-1.46,1.52-1.47,.47-.33,.95-.27,1.43-.05,.71,.39,1.34,.89,1.83,1.53,.72,2.39,.16,4.83,.33,7.24,.11,1.65-.2,3.31,.18,4.95-.18,.61-.1,1.17,.06,1.73Z"
      />
      <path
        fill={fill}
        d="M408.4,292.71c0,11.76-.01,23.52,.01,35.27,0,1.6,.13,3.19,.29,4.78,.22,2.24,1.48,3.64,3.64,4.25,1.78,.5,3.59,.75,5.43,.9,.96,.08,1.91,.18,2.87,.22,1.07,.04,1.53,.47,1.5,1.63-.15,5.52,.78,4.51-4.26,4.54-12.63,.06-25.26,.02-37.89,.02-.48,0-.96,.01-1.44,0-1.75-.06-1.83-.06-1.8-1.72,.08-4.88-.92-4.26,4.17-4.67,1.91-.15,3.81-.4,5.66-.94,2.04-.6,3.25-1.91,3.55-4.06,.15-1.11,.3-2.22,.3-3.34,0-19.52,0-39.03,.01-58.55,0-1.28-.12-2.55-.35-3.82-.36-2.04-1.49-3.35-3.54-3.71-2.2-.39-4.42-.67-6.63-1-2.2-.32-2.26-.32-2.22-2.5,.07-3.34-.75-3.06,3.08-3.67,8.2-1.31,16.4-2.62,24.61-3.91,2.44-.38,3.01,.12,3.01,2.6,0,12.56,0,25.12,0,37.68Z"
      />
      <path
        fill={fill}
        d="M410.6,225.84c.03,6.89-4.49,11.49-11.29,11.52-6.87,.03-11.64-4.58-11.63-11.22,.01-6.92,4.85-11.86,11.66-11.9,6.62-.04,11.23,4.71,11.26,11.6Z"
      />
      <path
        fill={fill}
        d="M223.72,253.55c.27-.05,.54-.1,.8-.15,1.85-1.12,3.81-1.87,5.99-1.96,2.44-.1,3.15,.38,3.73,2.71,.6,2.4,.9,4.86,1.42,7.28,.35,1.65,1.1,1.96,2.51,1.06,4.72-2.99,9.39-6.06,14.52-8.32,9.08-3.99,18.4-4.7,27.71-1.2,6.71,2.53,11.65,7.11,13.56,14.37,.33,1.24,1.4,2.14,1.61,3.44,.44,2.34,.64,4.7,.66,7.08v48.68c0,1.6-.05,3.2,.28,4.77,.09,.39,.18,.78,.23,1.17,.16,1.04,.65,2.02,.55,3.11,1.03,1.31,2.56,1.57,4.04,1.81,2.05,.32,4.12,.51,6.19,.7,1.05,.09,1.55,.46,1.52,1.63-.14,5.64,.76,4.53-4.23,4.55-12.55,.06-25.1,.02-37.66,.01-.56,0-1.12-.05-1.68,0-1.3,.12-1.63-.53-1.59-1.71,.18-4.91-.95-4.24,4.18-4.66,1.83-.15,3.65-.38,5.44-.85,2.27-.59,3.57-2.03,3.82-4.37,.14-1.27,.28-2.55,.28-3.83,.02-14.8,.03-29.6-.02-44.4-.01-3.12-.33-6.22-1.18-9.25-2.12-7.57-6.77-11.6-14.57-12.56-9.66-1.19-19.19,3.6-24.11,12.05-1.36,2.34-2.14,4.82-2.16,7.51-.05,6.08-.07,12.16-.07,18.24-.01,9.2-.01,18.4,.01,27.6,0,1.75-.03,3.51,.38,5.25,.45,1.91,1.57,3.08,3.41,3.64,2.24,.68,4.54,.88,6.86,1.03,2.82,.18,2.84,.2,2.82,3.05-.03,3.56,.5,3.24-3.14,3.25-13.03,.01-26.06,.01-39.1,0-3.25,0-2.87,.23-2.89-2.77-.02-3.34-.01-3.34,3.29-3.55,2.08-.13,4.13-.4,6.15-.91,2.52-.62,3.79-2.27,3.99-4.76,.14-1.67,.17-3.36,.17-5.03,.01-18.32,.01-36.64,0-54.96,0-1.36-.02-2.72-.14-4.08-.28-3.06-1.32-4.26-4.33-4.87-1.96-.39-3.95-.6-5.92-.92-1.77-.29-1.84-.31-1.8-2.12,.08-4.02-.78-3.38,3.39-4.09,4.8-.81,9.61-1.62,14.41-2.44,.24,.01,.45-.13,.67-.23Z"
      />
      <path
        fill={fill}
        d="M32.75,374.85c.43-.01,.88,.3,1.12,.85,.25,.58,.43,1.2,.62,1.81,5.47,17.25,12.58,33.8,21.34,49.64,.39,.7,.81,1.38,1.13,2.11,.37,.82,.25,1.61-.6,2.06-.87,.47-1.53,.03-2.03-.69-.23-.33-.4-.69-.6-1.04-9.11-16.38-16.54-33.48-22.15-51.36-.21-.68-.53-1.35-.46-2.09,.09-.83,.57-1.28,1.63-1.29Z"
      />
      <g>
        <path
          fill={fill}
          d="M79.15,344.63c-2.57,.51-5.08,1.34-7.69,1.7-2.38,.34-4.77,.46-7.16,.27-3.13-.24-5.58-1.75-7.38-4.31-1.3-1.84-2.12-3.91-2.88-6.04-.96-.18-1.49,.52-2.12,.93-3.87,2.54-7.82,4.94-12.11,6.73-7.56,3.16-15.25,3.76-23.12,1.24-2.38-.76-4.48-2.06-6.63-3.27-1.27-1.21-2.62-2.35-3.8-3.65-6.55-7.25-8.19-19.59-3.81-28.32,2.9-5.77,7.71-9.3,13.68-11.29,5.68-1.89,11.44-3.54,17.16-5.31,4.58-1.42,9.12-2.92,13.53-4.81,2.13-.92,4.22-1.92,6.09-3.31,.65-.48,1.21-.99,1.2-1.93-.04-4.23,.2-8.47-.84-12.64-1.79-7.2-6.62-11.08-14.01-11.51-6.75-.39-11.72,2.36-15.21,8.05-1.73,2.81-3.04,5.82-3.9,8.99-1.42,5.25-4.48,6.94-10.54,4.94-.75-.25-1.45-.67-2.13-1.08-3.4-2.03-4.78-5.33-3.91-9.22,.61-2.73,1.97-5.05,3.87-7.06,1.15-1.22,2.39-2.34,3.59-3.51,.33-.97,1.08-1.34,2.03-1.42,.28-.21,.56-.41,.83-.62,1.5-2.81,4.1-3.25,6.91-3.21,.53,.09,.85-.29,1.25-.53,1.78-.04,3.39-.83,5.11-1.18,9.31-1.89,18.58-1.95,27.74,.7,6.95,2.01,12.28,6.04,14.85,13.1,1.27,3.51,1.62,7.16,1.62,10.85,.01,14.23,.01,28.46,0,42.7,0,2.56,.1,5.11,.63,7.63,1.24,5.92,4.39,8.25,10.41,7.7,2.32-.21,2.37-.22,2.68,2.07,.54,3.94,.92,3.37-2.77,5.17-.28,.14-.54,.33-.81,.5-.55,.84-1.24,1.45-2.36,.95Z"
        />
        <path
          fill={backgroundColor}
          d="M54.14,292.77c0,6.26,.04,12.41-.01,18.56-.03,3.43,.19,6.86-.23,10.3-1.08,8.86-7.34,13.99-15.91,14.81-2.07,.2-4.14,.1-6.19-.38-4.64-1.08-8.12-3.68-10.21-7.97-2.29-4.7-2.63-9.67-1.64-14.74,.66-3.36,2.57-5.98,5.27-8.03,2.37-1.81,5.03-3.1,7.79-4.17,6.85-2.65,13.79-5.06,20.37-8.37,.11-.07,.29-.01,.76-.01Z"
        />
      </g>
      <path
        fill={backgroundColor}
        d="M472.53,289.03c-5.43,0-10.85,.01-16.28-.01-1.94-.01-2-.04-1.89-2.02,.35-6.03,1.57-11.87,4.38-17.27,2.56-4.93,6.21-8.71,11.77-10.18,8.12-2.15,17.8,.09,21.8,10.96,1.54,4.18,2.18,8.5,2.13,12.92-.04,3.84-1.75,5.53-5.62,5.58-5.43,.07-10.86,.01-16.29,.02h0Z"
      />
      <path
        fill={backgroundColor}
        d="M147.47,519.13c-2.84-.03-4.88-.72-6.82-1.7-4.08-2.05-7.73-4.8-11.47-7.37-1.37-.94-1.43-1.43-.54-2.8,2.36-3.61,4.73-7.21,7.21-10.74,1.36-1.94,3.04-2.46,5.25-1.58,4.79,1.91,9.15,4.59,12.62,8.46,2.53,2.82,3.42,6.13,1.61,9.74-1.74,3.5-4.29,5.93-7.86,5.99Z"
      />
      <g>
        <path
          fill={fill}
          d="M196.69,520.28c4-.16,7.91,.16,11.73,1.51,5.03,1.77,9.12,4.74,12.28,9.02,1.58,3.06,2.89,6.2,3.4,9.66,.66,4.45,.17,8.78-.98,13.05-2.07,7.67-5.29,14.75-11.14,20.35-3.79,3.63-8.22,5.96-13.5,6.69-12.8,1.76-25.15-8.02-26.29-20.91-.56-6.33,.45-12.44,2.69-18.37,1.23-3.25,2.74-6.34,4.6-9.27,.61-1.84,1.56-3.41,3.39-4.28,1.19-.62,1.68-1.97,2.78-2.69,.39-.84,1.2-1.06,1.98-1.31,.46-.34,.92-.68,1.38-1.03,.81-1.24,2.22-1.03,3.39-1.38,.72,.12,1.24-.46,1.89-.56,.46-.33,1.07-.04,1.53-.38,.3-.03,.58-.07,.87-.1Z"
        />
        <path
          fill={fill}
          d="M237.71,568.54c.21-6.91,1.15-13.27,3.95-19.25,1.16-2.48,2.6-4.77,4.45-6.79,5.66-6.2,12.8-8.21,20.87-7.05,11.56,1.67,18.86,9.19,20.44,20.85,1.21,8.94-.09,17.56-3.99,25.68-3.29,6.87-8.38,11.99-16.08,13.56-11.16,2.28-25.21-1.89-28.89-19.05-.59-2.76-.69-5.55-.75-7.95Z"
        />
        <path
          fill={backgroundColor}
          d="M216.89,545.35c-.86,7.97-3.61,16.83-10.53,23.92-2.62,2.69-5.79,4.53-9.62,4.89-9.12,.86-16.81-5.51-17.25-14.67-.48-10.05,2.76-19.07,9.09-26.82,3.69-4.52,8.56-6.92,14.61-5.79,9,1.68,13.79,7.61,13.7,18.47Z"
        />
        <path
          fill={backgroundColor}
          d="M280.21,561.92c-.08,5.14-.79,10.19-2.58,15.03-1.2,3.26-2.98,6.14-5.43,8.65-6.86,7.02-19.56,4.97-24.05-3.49-1.84-3.47-2.69-7.18-2.84-11.04-.24-6.2,.6-12.27,2.83-18.09,.92-2.4,2.29-4.54,3.95-6.53,6.76-8.14,22.07-6.3,26.23,4.44,1.38,3.57,1.95,7.24,1.89,11.03Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M227.45,21.46c-.04-.27-.08-.54-.12-.81-.31-.49-.09-1.11-.36-1.61-.04-.26-.07-.53-.11-.79-.35-.46-.05-1.08-.39-1.53-.22-.48-.43-.97-.67-1.45-.88-1.76-2.29-2.16-4.65-1.34-.88-.08-1.62,.52-2.53,.46-1.17-.08-2.03-.64-2.18-1.62-.24-1.58,.28-2.79,1.47-3.08,1.22-.29,2.48-.42,3.72-.62,1.14-.47,2.39,.09,3.53-.37,2.35,.05,4.55-.72,6.77-1.33,4.38-1.2,8.74-2.41,13.29-2.84,2.25-.21,4.46-.15,6.63,.49,4.84,1.44,8.18,5.95,8.62,11.51,.42,5.29-1.65,9.25-6.21,11.98-1.98,1.18-4.11,1.94-6.24,2.73-2.22,1.7-4.89,2.08-7.53,2.58-2.65,.5-2.9,.94-2.48,3.53,.41,2.52,.97,5.01,1.65,7.47,.73,2.64,1.5,3.05,4.17,2.32,1.58-.43,3.15-.98,4.14,.98-.07,.57,.34,.91,.62,1.32,.21,.47,.21,.95,0,1.42-.19,.31-.38,.62-.58,.93-.6,1.55-1.78,2.1-3.39,2.08-5.02-.05-9.79,1.15-14.47,2.87-1.49,.55-2.95,.77-4.2-.54-1.63-1.48-1.78-2.83-.48-4.46,.67-.99,1.6-1.37,2.79-1.54,2.58-.36,3.41-1.5,2.94-4.13-.81-4.61-1.65-9.23-2.61-13.81-.58-2.79-.96-5.57-.67-8.41-.04-.28-.08-.56-.12-.83-.3-.45-.06-1.06-.35-1.56Z"
        />
        <path
          fill={backgroundColor}
          d="M245.07,9.23c6.62,0,10.54,4.87,9.31,10.92-.39,1.92-1.44,3.33-3,4.44-1.12,.8-2.4,1.28-3.68,1.72-3.18,1.1-6.49,1.7-9.79,2.26-1.89,.32-2.86-.28-3.21-2-.76-3.76-1.5-7.52-2.11-11.3-.41-2.49-.11-2.92,2.19-3.79,3.46-1.3,7.07-1.98,10.29-2.25Z"
        />
      </g>
      <g>
        <path
          fill={fill}
          d="M317.52,170.39c-1.07,1.58-1.28,3.46-1.35,5.24-.09,2.32-.24,4.58-1.01,6.78,.07,1.76,.76,3.52,.11,5.29,.07,.9,.62,1.63,.88,2.46,.44,1.4,1.22,2.35,2.79,2.59,1.56,.24,2.44,1.48,3.2,2.7,.8,1.28,.34,2.09-1.14,2.25-2.9,.31-5.8,.56-8.72,.5-2.22-.04-2.83-.68-2.9-2.87-.03-.97-.02-1.91-.61-2.75-.18-.25-.37-.6-.34-.88,.22-2.07-.44-3.74-2.03-5.1-.45-.39-.29-1.05-.28-1.6,.07-2.8-.05-5.58-.47-8.36-.22-1.47,.04-2.97,.24-4.48,.39-2.98,.64-6.05-.37-9.01-.05-.15-.18-.3-.17-.44,.13-4.22-3.31-4.32-6.03-5.25-.51,.46-1.13,.32-1.72,.28-1.25,.01-2.38-.43-3.53-.83-3.96,.04-7.69-1.32-11.53-1.96-2.95-.49-3.8,.08-3.65,3.01,.27,5.3-1.58,10.03-3.43,14.81-1.64,4.24-1.17,8.63-.37,12.97,.26,1.39,1.24,2.32,2.59,2.94,1.53,.71,2.84,1.73,3.75,3.24,1.42,2.38,.7,4.02-2,3.96-2.4-.05-4.79,.16-7.18,.1-3.59-.09-5.36-1.87-5.58-5.47-.28-4.46-.81-8.91-2.32-13.15-.71-1.99-.68-3.94-.11-5.88,1.1-3.72-.27-6.92-1.95-10.06-.57-1.07-1.51-1.84-2.51-2.53-1.33-.93-2.35-.74-3.15,.7-3.15,5.65-7.63,10.2-12.13,14.76-3.12,3.16-5.38,6.92-6.62,11.23-.67,2.35-.59,4.57,1.29,6.46,.91,.92,1.15,2.1,.59,3.33-.54,1.17-1.58,1.55-2.77,1.52-2.09-.05-4.13,.49-6.2,.49-3.31,0-4.7-1.88-3.58-5,.97-2.71,2.15-5.39,2.55-8.23,.46-3.25,1.34-6.39,2.07-9.57,.57-2.42,1.77-4.48,3.22-6.52,1.3-1.83,1.72-4.21,1.52-6.43-.33-3.54,.38-6.83,1.62-10.06,.7-1.82,1.02-3.63,.69-5.62-.95-5.66,1.24-10.7,3.49-15.65,1.03-2.27,1.55-4.39,.93-6.91-.73-3.02-.11-6.1,.89-8.97,1.73-4.95,4.06-9.57,8.66-12.57,6.86-4.48,16.97-.8,19.23,7.04,.44,1.53,1.25,1.76,2.65,1.58,5.06-.64,10.08-1.65,15.22-1.65,1.64,0,3.18,.2,4.59,1.08,1.12,.18,2.24,.2,3.36,.02,.71-.93,1.72-1.07,2.79-1.07,2.6,.01,5.05-.54,7.34-1.84,1.19-.67,2.51-1.05,3.9-1.03,3.6,.06,6.08-2.12,8.58-4.25,.87-.74,.93-1.78,.84-2.86-.22-2.78-.74-5.54-.53-8.35,.22-2.93,1.53-4.65,4.41-4.59,5.76,.12,11.61-.38,17.09,2.2,2.15,1.01,4.64,1.19,6.74,2.41,.21,.12,.46,.17,.69,.17,6.5,.05,10.46,4.65,14.77,8.47,1.66,1.48,1.48,3.32-.21,5.4-1.95,2.4-4.15,4.61-6.59,6.53-.7,.55-1.06,1.12-1.25,1.92-.54,2.3-1.5,4.36-3.39,5.91-.62,.51-1.18,1.19-1.19,2.02-.04,5.01-2.77,9.1-4.57,13.5-.91,2.22-1.81,4.43-2.34,6.78-.78,3.51-1.87,6.88-3.33,10.2-1.72,3.9-2.16,8.1-1.22,12.41,.41,1.87,.93,3.97-.84,5.62-.59,3.02-.7,6.06-.46,9.12,1.07,1.85,1.13,3.78,.45,5.77-.3,2.03,.53,3.85,1.17,5.68,.42,1.19,1.45,1.79,2.71,1.93,.17-.12,.32-.09,.44,.09,.6,.49,1.38,.36,2.05,.57,1.14,.36,1.93,1.04,2.22,2.27,.44,1.94,.03,2.51-1.94,2.39-.81-.05-1.56,.05-2.34,.27-1.9,.51-3.81,.15-5.7-.18-1.06-.18-1.7-1.02-1.87-1.98-.36-1.99-1.75-3.6-1.96-5.64-.09-.82-.73-1.19-1.45-1.42-.54,.03-1.01-.22-1.15-.68-1.3-4.36-3.32-8.61-2.22-13.38,.13-.64,.15-1.32-.18-1.85-1.5-2.39-1.57-5.07-1.75-7.75-.04-.55-.04-1.11-.38-1.58-1.7-.53-1.84-1.99-2.07-3.42-.32-2.02-.64-2.15-2.48-1.33-1.64,.73-2.46,1.98-2.54,3.72-.1,2.09-.68,4.08-1.03,6.12-.17,1.03-.68,1.74-1.59,2.2Z"
        />
        <path
          fill={backgroundColor}
          d="M257.36,114.14c.99-1.32,2.28-1.87,3.04-3.01,.48-.72,1.54-.67,2.43-.35,.69,.25,1,.75,1.07,1.43,.04,.4,.01,.96-.43,.97-1.96,.07-3.69,1.55-6.11,.96Z"
        />
      </g>
    </svg>
  );
};

export const APGDefaultLogo = () => {
  return <LogoOutline fill="#059595" backgroundColor="#0f172a" />;
};
