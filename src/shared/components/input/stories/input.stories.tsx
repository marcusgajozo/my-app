import { Meta, StoryObj } from "@storybook/react-native";
import { Input } from "..";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "First Name",
    placeholder: "John",
  },
};
