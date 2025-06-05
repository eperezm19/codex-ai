import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "medium",
  },
};

export const GShop: Story = {
  args: {
    children: "Button",
    variant: "gshop",
    size: "medium",
  },
};

export const Dark: Story = {
  render: (args) => (
    <div className="dark p-4">
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Button",
  },
};

export const BrandA: Story = {
  render: (args) => (
    <div className="brand-a p-4">
      <Button {...args} />
    </div>
  ),
  args: {
    children: "Button",
  },
};
