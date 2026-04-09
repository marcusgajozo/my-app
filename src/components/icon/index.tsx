import { Feather } from "@expo/vector-icons";
import React from "react";

interface IconProps {
  name: React.ComponentProps<typeof Feather>["name"];
  size?: number;
  color?: string;
  style?: React.ComponentProps<typeof Feather>["style"];
}

export function Icon({ name, size = 24, color = "black", style }: IconProps) {
  return <Feather name={name} size={size} color={color} style={style} />;
}
