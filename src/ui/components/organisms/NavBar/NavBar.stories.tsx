import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./NavBar";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Organisms/Navbar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Playground: Story = {
  args: {
    buttonVariant: "primary",
    buttonText: "Conecta conmigo",
    onButtonClick: () => alert("Botón de conectar presionado"),
  },
};
