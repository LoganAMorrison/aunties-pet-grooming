import type { Meta, Story } from "@storybook/react/types-6-0";

import HomeHero from "./home-hero";

export default {
  title: "Components/HomeHero",
  component: HomeHero,
} as Meta;

interface HomeHeroProps extends React.FC<"div"> {
  blah?: string;
}

const Template: Story<HomeHeroProps> = (args) => {
  return <HomeHero />;
};

export const DefaultHomeHero = Template.bind({});
DefaultHomeHero.storyName = "Default";
DefaultHomeHero.args = {};
