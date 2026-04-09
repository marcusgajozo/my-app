import { Meta, StoryObj } from "@storybook/react-native";
import { Button } from "..";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Press me",
    isLoading: false,
    iconName: "anchor",
  },
};
