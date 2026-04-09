import { theme } from "@/styles/theme";
import { ComponentProps } from "react";
import { StyleProp, Text as TextReactnative, TextStyle } from "react-native";

type TextAs = typeof theme.typography extends Record<infer K, any> ? K : never;

type TextProps = ComponentProps<typeof TextReactnative> & {
  as?: TextAs;
};

export function Text({ as = "text-md", ...props }: TextProps) {
  const textStyles: StyleProp<TextStyle> = [
    theme.typography[as],
    { color: theme.colors.primary[900] },
    props.style,
  ];
  return <TextReactnative {...props} style={textStyles} />;
}
