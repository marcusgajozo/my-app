import { Meta, StoryObj } from "@storybook/react-native";
import { Input } from "..";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Search",
    placeholder: "Digite algo aqui...",
    required: false,
    errorMessage: "",
    description: "Input description",
    isPassword: false,
  },
};

export const WithError: Story = {
  name: "Input with error",
  args: {
    label: "Search",
    placeholder: "Digite algo aqui...",
    required: false,
    errorMessage: "This field is required",
    description: "",
    isPassword: false,
  },
};

export const InputPassword: Story = {
  name: "Input password",
  args: {
    label: "Search",
    placeholder: "",
    required: false,
    errorMessage: "",
    description: "",
    isPassword: true,
  },
};
