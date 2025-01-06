import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: "atoms/Button",
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "text primary"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "text secondary"
  }
};

export const Terciary: Story = {
  args: {
    variant: "terciary",
    children: "text terciary"
  }
};