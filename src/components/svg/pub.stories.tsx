import type { Meta, Story } from "@storybook/react/types-6-0";

import PugIcon from "./pug";
import { PugDecoration } from "./pug";
import type { PugIconProps } from "./pug";

export default {
  title: "Components/PugIcon",
  component: PugIcon,
} as Meta;

const Template: Story<PugIconProps> = (args) => {
  const width = 500;
  const height = 500;
  return (
    <PugIcon
      {...args}
      width={width}
      height={height}
      decoration={PugDecoration.SantaHat}
    />
  );
};

export const DefaultPugIcon = Template.bind({});
DefaultPugIcon.storyName = "Default";
DefaultPugIcon.args = {
  gradient: [
    { stopColor: "#7c3aed", offset: "0" },
    { stopColor: "#6366f1", offset: "100" },
  ],
};
