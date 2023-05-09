import type { Meta, StoryObj } from "@storybook/react";
import Alert from "../components/Alert";

const meta: Meta<typeof Alert> = {
  title: "ui/Alert",
  component: Alert,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Alert>;

//exporting primary varient of button
export const Success: Story = {
  args: {
    varient: "success",
    children: "Success message",
  },
  argTypes: {},
};

export const Error: Story = {
  args: {
    varient: "error",
    children: "Error message",
  },
  argTypes: {},
};