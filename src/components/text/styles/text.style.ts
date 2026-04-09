import { theme } from "@/styles/theme";
import { StyleSheet, TextStyle } from "react-native";

type TextAs = typeof theme.typography extends Record<infer K, any> ? K : never;

export const textStyle = StyleSheet.create<Record<TextAs, TextStyle>>({
  "text-lg": {
    fontSize: theme.typography["text-lg"].fontSize,
    fontWeight: theme.typography["text-lg"].fontWeight,
    lineHeight: theme.typography["text-lg"].lineHeight,
  },
  "text-md": {
    fontSize: theme.typography["text-md"].fontSize,
    fontWeight: theme.typography["text-md"].fontWeight,
    lineHeight: theme.typography["text-md"].lineHeight,
  },
  "text-sm": {
    fontSize: theme.typography["text-sm"].fontSize,
    fontWeight: theme.typography["text-sm"].fontWeight,
    lineHeight: theme.typography["text-sm"].lineHeight,
  },
  "text-xs": {
    fontSize: theme.typography["text-xs"].fontSize,
    fontWeight: theme.typography["text-xs"].fontWeight,
    lineHeight: theme.typography["text-xs"].lineHeight,
  },
});
