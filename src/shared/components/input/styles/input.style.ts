import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  labelContainer: {
    flexDirection: "row",
    gap: 2,
    marginBottom: 4,
  },
  label: {
    fontSize: 16,
    color: theme.colors.black,
  },
  inputWrapper: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.tertiary,
    borderRadius: 30,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: theme.colors.neutral,
  },
  required: {
    color: theme.colors.danger,
  },
  errorMessage: {
    color: theme.colors.danger,
    marginTop: 4,
    marginLeft: 12,
  },
});
