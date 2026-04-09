import { Meta, StoryObj } from "@storybook/react-native";
import { Text } from "..";

const meta = {
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextLg: Story = {
  name: "Text lg",
  args: {
    as: "text-lg",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const TextMd: Story = {
  name: "Text md",
  args: {
    as: "text-md",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const TextSm: Story = {
  name: "Text sm",
  args: {
    as: "text-sm",
    children: "Lorem ipsum dolor sit amet",
  },
};

export const TextXs: Story = {
  name: "Text xs",
  args: {
    as: "text-xs",
    children: "Lorem ipsum dolor sit amet",
  },
};
