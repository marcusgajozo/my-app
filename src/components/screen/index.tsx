import { ComponentProps, PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = PropsWithChildren<ComponentProps<typeof SafeAreaView>>;

function ScreenRoot({ children, ...props }: ScreenProps) {
  return <SafeAreaView {...props}>{children}</SafeAreaView>;
}

type ScreenContentProps = PropsWithChildren<ComponentProps<typeof View>>;

function ScreenContent({ children, ...props }: ScreenContentProps) {
  return <View {...props}>{children}</View>;
}

type ScreenHeaderProps = Omit<ComponentProps<typeof Text>, "children"> & {
  title?: string;
};

function ScreenHeader({ title, ...props }: ScreenHeaderProps) {
  return <Text {...props}>{title}</Text>;
}

export const Screen = {
  Root: ScreenRoot,
  Content: ScreenContent,
  Header: ScreenHeader,
};
