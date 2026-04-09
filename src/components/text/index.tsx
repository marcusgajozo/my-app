import { theme } from "@/styles/theme";
import { ComponentProps } from "react";
import { Text as TextReactnative } from "react-native";

type TextAs = typeof theme.typography extends Record<infer K, any> ? K : never;

type TextProps = ComponentProps<typeof TextReactnative> & {
  as?: TextAs;
};

export function Text({ as = "text-md", ...props }: TextProps) {
  const textStyles = [theme.typography[as], props.style];
  return <TextReactnative {...props} style={textStyles} />;
}
