import type { Meta, Story } from "@storybook/react/types-6-0";

import AussieIcon from "./aussie";
import { AussieDecoration } from "./aussie";
import type { AussieIconProps } from "./aussie";

export default {
  title: "Components/AussieIcon",
  component: AussieIcon,
} as Meta;

const Template: Story<AussieIconProps> = (args) => {
  return (
    <AussieIcon
      {...args}
      width={args.width}
      height={args.height}
      decoration={AussieDecoration.SantaHat}
    />
  );
};

export const DefaultAussieIcon = Template.bind({});
DefaultAussieIcon.storyName = "Default";
DefaultAussieIcon.args = {
  gradient: [
    { stopColor: "#7c3aed", offset: "0" },
    { stopColor: "#6366f1", offset: "100" },
  ],
  width: 500,
  height: 500,
};
