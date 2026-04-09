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
    marginBottom: 2,
  },
  inputWrapper: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.tertiary[200],
    borderRadius: 100,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: theme.colors.primary[300],
  },
  inputWrapperFocused: {
    borderWidth: 2,
    borderColor: theme.colors.primary[500],
  },
  inputWrapperError: {
    borderWidth: 2,
    borderColor: theme.colors.danger,
  },
  input: {
    flex: 1,
    height: "100%",
    backgroundColor: "transparent",
    color: theme.colors.primary[900],
    paddingHorizontal: 8,
    ...theme.typography["text-md"],
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
    marginTop: 4,
    marginLeft: 12,
  },
});
