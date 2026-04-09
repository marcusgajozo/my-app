import { ComponentProps } from "react";
import { Pressable, PressableStateCallbackType } from "react-native";
import { Icon } from "../icon";
import { Text } from "../text";

type ButtonProps = ComponentProps<typeof Pressable> & {
  iconName?: ComponentProps<typeof Icon>["name"];
  isLoading?: boolean;
};

export function Button({
  iconName,
  children,
  isLoading,
  ...props
}: ButtonProps) {
  const resolvedChildren =
    typeof children === "function" ? (
      (state: PressableStateCallbackType) => (
        <Text>
          {iconName && <Icon name={iconName} />}
          {children(state)}
        </Text>
      )
    ) : (
      <Text>
        {iconName && <Icon name={iconName} />}
        {children}
      </Text>
    );

  return <Pressable {...props}>{resolvedChildren}</Pressable>;
}
