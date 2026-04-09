import { type Preview } from "@storybook/react-native";
import { View } from "react-native";
import { theme } from "../src/styles/theme";

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
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.tertiary[50],
          padding: 16,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default preview;
