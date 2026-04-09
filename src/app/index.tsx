import { Screen } from "@/shared/components/screen";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function App() {
  return (
    <Screen.Root>
      <Screen.Content>
        <Screen.Header title="Tela inicial" />
        <Text>Hello, world!</Text>
        <Link href="/storybook">Go to Storybook</Link>
      </Screen.Content>
    </Screen.Root>
  );
}
