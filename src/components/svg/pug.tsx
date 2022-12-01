import React from "react";

import { HatSantaSvgPath } from "./xmas";

export const enum PugDecoration {
  SantaHat,
}

export interface PugIconSvgProps
  extends React.PropsWithoutRef<Omit<React.ComponentProps<"use">, "viewBox">> {
  gradient?: { stopColor: string; offset: string }[];
}

export interface PugIconProps
  extends React.PropsWithoutRef<Omit<React.ComponentProps<"svg">, "viewBox">> {
  gradient?: { stopColor: string; offset: string }[];
  decoration?: PugDecoration;
}

const PugIcon: React.FC<PugIconProps> = ({
  gradient,
  decoration,
  ...props
}) => {
  let aussie = <PugSvgPath gradient={gradient} />;
  let decor;
  if (decoration == PugDecoration.SantaHat) {
    const id1 = `santa_hat_pug_${props.id ?? new Date().getTime()}`;
    const id2 = `pug_${props.id ?? new Date().getTime()}`;
    aussie = (
      <PugSvgPath
        id={id1}
        gradient={gradient}
        transform="scale(0.7) translate(100,150)"
      />
    );
    decor = (
      <HatSantaSvgPath
        id={id2}
        transform="scale(0.26) translate(1350,120) rotate(18)"
        primaryClassName="fill-rose-700"
        secondaryClassName="fill-emerald-700"
      />
    );
  }
  return (
    <svg {...props} viewBox="0 0 500 500">
      <svg width={500} height={500}>
        {aussie}
        {decor}
      </svg>
    </svg>
  );
};

export default PugIcon;

/**
 * The `path` element for an Pug SVG.
 */
export const PugSvgPath: React.FC<PugIconSvgProps> = ({
  gradient,
  ...props
}) => {
  const id = `pug_${props.id ?? new Date().getTime()}`;
  const gid = `pug_grad_${props.id ?? new Date().getTime()}`;

  let grad;
  if (gradient != undefined) {
    grad = (
      <linearGradient id={gid}>
        {gradient.map((gr, key) => (
          <stop stopColor={gr.stopColor} offset={gr.offset} key={key} />
        ))}
      </linearGradient>
    );
    props.fill = `url(#${gid})`;
  } else {
    grad = <></>;
  }

  return (
    <>
      <symbol viewBox="0 0 38.95 31.66" id={id}>
        <path d="M12.18,8.17c.93-3.71-2.5-3.95-2.5-3.95l-.3-.04c-.35-.05-.72-.04-1.08,0-.23,.02-.47,.08-.67,.19-.28,.15-.53,.36-.78,.56-.41,.32-.75,.7-.98,1.18-.11,.22-.23,.43-.35,.64-.14,.25-.29,.5-.39,.77-.13,.34-.23,.7-.31,1.06-.08,.35-.15,.71-.15,1.07,0,.42,.09,.84,.14,1.25,0,.02,0,.04,.01,.05,.33,.34-.08,.61-.08,.92,0,.11-.09,.22-.13,.33-.09,.2-.18,.39-.27,.59-.07,.16-.12,.33-.18,.49-.09,.21-.2,.41-.28,.63-.08,.2-.12,.41-.19,.61-.09,.27-.23,.54-.27,.82-.05,.36-.04,.74-.02,1.1,.02,.26,.11,.52,.14,.78,.07,.52-.13,1-.32,1.46-.14,.34-.28,.67-.29,1.04,0,.13-.07,.26-.09,.39-.05,.36-.12,.73,.04,1.09,.05,.12,0,.29-.01,.43,0,.05-.06,.11-.06,.16-.02,.45-.16,.87-.31,1.3-.1,.28-.23,.5-.43,.7-.18,.18-.4,.36-.48,.59-.12,.31-.13,.66-.18,.99-.02,.14,.03,.31-.04,.4-.34,.51-.35,1.1-.44,1.67-.02,.14,0,.29-.04,.43-.08,.31-.17,.61-.27,.92-.11,.34-.2,.69-.35,1.01-.13,.26-.29,.5-.27,.81,.02,.4,.17,.6,.58,.58,.3-.01,.61-.12,.91-.14,.45-.02,.91,0,1.36,0,.21,0,.47-.37,.38-.56-.1-.19-.21-.4-.37-.53-.29-.23-.42-.54-.5-.86-.04-.15,.09-.33,.1-.5,.01-.48,.13-.92,.31-1.37,.14-.36,.4-.62,.57-.95,.11-.21,.25-.42,.37-.62,.13-.21,.24-.44,.41-.62,.26-.28,.57-.51,.85-.78,.25-.24,.49-.5,.72-.76,.28-.31,.56-.62,.82-.94,.27-.33,.52-.67,.77-1.01,.15-.2,.32-.39,.45-.61,.18-.32,.33-.65,.5-.98,.09-.17,.4-.26,.54-.15,.32,.24,.64,.47,.93,.74,.2,.18,.37,.41,.5,.64,.15,.27,.24,.58,.36,.87,.09,.22,.21,.44,.26,.67,.13,.6-.14,1.16-.17,1.75,0,.02,0,.03-.02,.05-.27,.39,.05,.74,.1,1.11,.03,.25,.18,.47,.25,.72,.1,.36-.06,.73,.13,1.11,.15,.31,.14,.7,.2,1.06,.01,.06,.02,.12,.04,.17,.12,.23,.11,.45,0,.68-.03,.07-.03,.17,0,.24,.07,.2,.17,.39,.24,.58,.14,.39,.33,.55,.75,.53,.45-.02,.91,.09,1.36-.12,.16-.08,.39-.02,.61,.07,.29,.11,.65,.03,1,.03-.02-.18,.07-.33-.14-.48-.2-.14-.31-.39-.49-.55-.27-.24-.54-.49-.94-.5-.05,0-.09-.05-.14-.08-.16-.12-.26-.27-.34-.46-.13-.32-.27-.62-.27-.97,0-.74-.02-1.48,0-2.21,0-.33-.08-.67,.14-1,.16-.23,.24-.53,.35-.79,.1-.23,.2-.47,.28-.71,.07-.23,.12-.46,.18-.69,.1-.37,.25-.73,.27-1.1,.05-.63,.02-1.27,.02-1.9,0-.15,.02-.26,.21-.27,.68-.06,1.33,.1,2,.18,.02,0,.03,0,.05,.01,.3,.15,.61,.22,.93,.31,.47,.12,.94,.1,1.42,.13,.04,0,.08,.01,.12,.03,.29,.09,.59,.18,.88,.27,.23,.07,.47,.11,.7,.18,.16,.05,.32,.12,.47,.19,.16,.07,.31,.19,.48,.23,.42,.09,.47,.15,.48,.57,0,.19,0,.37,.1,.58,.14,.25,.16,.57,.18,.86,.03,.51,0,1.01,0,1.52,0,.09,.02,.2-.03,.25-.2,.23-.13,.5-.14,.75,0,.44,.08,.88,.14,1.32,.08,.57,.02,1.16,.03,1.75,0,.1,.01,.24,.08,.29,.34,.28,.65,.57,.55,1.07-.02,.1,0,.21,0,.31,0,.05,.02,.12,.05,.16,.14,.2,.28,.4,.24,.67-.02,.14,0,.29,0,.44,.01,.33,.26,.58,.59,.59,.34,.01,.69,.02,1.03,.01,.09,0,.19-.09,.28-.1,.13-.01,.27,0,.41,.01,.14,.02,.34,.12,.41,.07,.24-.2,.5-.12,.75-.12,.19,0,.24-.08,.26-.26,.03-.28-.16-.44-.3-.63-.21-.26-.43-.51-.8-.53-.27-.01-.53-.21-.61-.46-.05-.15-.12-.3-.18-.45-.09-.23-.23-.46-.25-.71-.04-.42-.02-.84-.02-1.26,0-.06,.03-.13,.05-.19,.08-.21,.22-.41,.24-.63,.08-.58-.06-1.17,.15-1.75,.07-.2,.03-.43,.14-.65,.17-.35,.24-.76,.33-1.15,.06-.25,.11-.5,.15-.75,.07-.44,.12-.88,.18-1.32,.04-.28,.19-.46,.44-.58,.27-.13,.52-.29,.79-.42,.18-.09,.38-.14,.53-.2,.31,.36,.22,.75,.24,1.12,0,.09,0,.19,.04,.27,.08,.21,.22,.4,.26,.61,.08,.52,.11,1.04,.16,1.56,0,.08,0,.16,.01,.23,.06,.19,.12,.37,.2,.55,.07,.17,.21,.32,.24,.5,.08,.52,.11,1.05,.17,1.57,.04,.32,.1,.63,.18,.95,.03,.13,.08,.28,.17,.37,.21,.21,.3,.45,.28,.73,0,.16-.04,.33,0,.49,.03,.12,.13,.3,.23,.33,.28,.07,.34,.25,.38,.5,.04,.24,.09,.5,.22,.68,.15,.21,.22,.4,.25,.65,.02,.18,.13,.36,.24,.51,.2,.25,.53,.24,.79,.26,.45,.02,.92,.17,1.38-.1,.16-.09,.44,.04,.67,.05,.1,0,.22-.02,.28-.08,.07-.06,.11-.18,.11-.28,0-.12-.07-.24-.08-.36-.02-.28-.21-.46-.41-.55-.26-.12-.58-.12-.87-.2-.2-.06-.41-.14-.58-.26-.32-.23-.3-.64-.45-.96-.1-.24-.13-.52-.16-.78-.06-.68-.13-1.36-.15-2.03-.02-.62,.05-1.23,.1-1.84,.07-.9,.12-1.82-.09-2.73-.17-.74,.09-1.48,.15-2.23,.02-.19,.09-.38,.17-.56,.08-.19,.19-.37,.28-.56,.07-.16,.12-.33,.19-.49,.08-.17,.2-.33,.25-.51,.08-.31,.13-.63,.18-.95,0-.03,0-.05,0-.08,.09-.34,.19-.68,.28-1.02,.06-.21,.11-.42,.19-.63,.05-.14,.13-.28,.19-.41,.08-.17,.17-.34,.24-.51,.07-.17,.11-.36,.19-.53,.14-.31,.29-.61,.43-.91,.12-.27,.24-.54,.33-.82,.1-.29,.2-.58,.26-.88,.04-.18,0-.38,0-.56,0-.25-.01-.46,.28-.66,.37-.25,.73-.56,.86-1.08,.09-.39,.27-.76,.27-1.17,0-.12,.01-.24,0-.36,0-.19,.08-.27,.25-.24,.09,.21,.17,.41,.27,.65,.09-.12,.22-.21,.22-.3-.02-.37,.27-.48,.49-.67,.26-.22,.53-.44,.74-.7,.23-.28,.41-.62,.63-.97-.19-.24-.39-.5-.61-.74-.17-.19-.37-.35-.58-.51-.2-.15-.42-.27-.64-.4-.29-.18-.59-.36-.87-.55-.18-.13-.43-.17-.54-.41-.09-.2-.45-.3-.62-.16-.11,.09-.65,.17-.74,.08-.35-.34-.83-.44-1.26-.55-.37-.1-.72-.21-1.06-.35-.18-.08-.34-.2-.53-.27-.21-.08-.42-.16-.64-.18-.21-.02-.42,.01-.65,.11-.21,.09-.48,.03-.75-.07-.37-.14-.8-.13-1.2-.18,0,0-.02,0-.03,0-.28,.04-.56,.09-.84,.13-.32,.04-.67,.32-.64,.67,.04,.66-.11,1.32,.13,1.97,.09,.24,.02,.53,.05,.79,0,.1,.08,.19,.1,.3,.02,.09,.04,.22-.01,.28-.16,.17-.35,.32-.54,.48-.17,.14-.34,.28-.52,.4-.34,.23-.66,.49-1.03,.64-.31,.13-.67,.13-1.01,.18-.17,.02-.35-.01-.51,.02-.18,.04-.4,.08-.5,.2-.19,.25-.48,.3-.72,.37-.43,.13-.89,.15-1.35,.18-1.72,.1-3.45-.14-5.17,.15-.49,.08-.98,.12-1.47,.18-.03,0-.06,0-.07,.02l-3.55,.58c-.09,0-.19,0-.28,0-.43-.02-.82,.11-1.22,.28-.2,.08-.46,.01-.7,.01-.01-.02-.02-.05-.04-.07,.14-.12,.27-.27,.44-.34,.19-.09,.3-.2,.36-.39,.07-.2,.54-.32,.74-.22,0,0,.85-.11,.14,1.91-.02,.05,2.17-.55,2.17-.55Z" />
      </symbol>
      {grad}
      <use href={`#${id}`} {...props} />
    </>
  );
};
