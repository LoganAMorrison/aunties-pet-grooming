import type { Meta, Story } from "@storybook/react/types-6-0";

import CatIcon from "./cat";
import { CatDecoration } from "./cat";
import type { CatIconProps } from "./cat";

export default {
  title: "Components/Cat",
  component: CatIcon,
} as Meta;

const Template: Story<CatIconProps> = (args) => {
  return (
    <CatIcon
      {...args}
      width={args.width}
      height={args.height}
      decoration={args.decoration}
    />
  );
};

export const DefaultCatIcon = Template.bind({});
DefaultCatIcon.storyName = "Default";
DefaultCatIcon.args = {
  gradient: [
    { stopColor: "#7c3aed", offset: "0" },
    { stopColor: "#6366f1", offset: "100" },
  ],
  width: 500,
  height: 500,
  decoration: CatDecoration.SantaHat,
};
