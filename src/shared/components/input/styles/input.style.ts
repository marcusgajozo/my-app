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
  label: {
    color: theme.colors.primary[900],
  },
  inputWrapper: {
    height: 56,
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
    fontSize: theme.typography["text-md"].fontSize,
    fontWeight: theme.typography["text-md"].fontWeight,
    lineHeight: theme.typography["text-md"].lineHeight,
    color: theme.colors.primary[900],
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
    marginTop: 4,
    marginLeft: 12,
  },
});
