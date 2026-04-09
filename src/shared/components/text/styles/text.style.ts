import { theme } from "@/styles/theme";
import { StyleSheet, TextStyle } from "react-native";

type TextAs = typeof theme.typography extends Record<infer K, any> ? K : never;

export const textStyle = StyleSheet.create<Record<TextAs, TextStyle>>({
  "text-lg": {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
  },
  "text-md": {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  "text-sm": {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  "text-xs": {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 16,
  },
});
