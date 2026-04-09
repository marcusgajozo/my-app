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
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.tertiary[200],
    borderRadius: 100,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  input: {
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    fontSize: 16,
    color: theme.colors.neutral,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 10,
  },
  required: {
    color: theme.colors.danger,
  },
  errorMessage: {
    color: theme.colors.danger,
    marginTop: 4,
    marginLeft: 12,
  },
  description: {
    color: theme.colors.neutral,
    fontSize: 13,
    marginTop: 4,
    marginLeft: 12,
  },
});
