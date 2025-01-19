import { Meta, StoryObj } from "@storybook/react";
import { GridContainer } from "./GridContainer";

const meta: Meta<typeof GridContainer> = {
  title: "atoms/GridContainer",
  component: GridContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GridContainer>;

export const Primary: Story = {
  args: {
    children: <p>Content</p>,
    rows: 3,
    columns: 3,
  },
};
