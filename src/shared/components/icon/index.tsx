import { FontAwesome } from "@expo/vector-icons";
import React from "react";

interface IconProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  size?: number;
  color?: string;
  style?: React.ComponentProps<typeof FontAwesome>["style"];
}

export function Icon({ name, size = 24, color = "black", style }: IconProps) {
  return <FontAwesome name={name} size={size} color={color} style={style} />;
}
