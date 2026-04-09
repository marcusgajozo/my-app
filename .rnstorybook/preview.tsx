import type { Preview } from "@storybook/react-native";
import { View } from "react-native";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#1A1A1A" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Story />
      </View>
    ),
  ],
};

export default preview;
