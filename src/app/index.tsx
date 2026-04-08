import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello, world!</Text>
      <Link href="/storybook">Go to Storybook</Link>
    </SafeAreaView>
  );
}
