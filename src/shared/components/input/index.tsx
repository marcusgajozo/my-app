import { theme } from "@/styles/theme";
import { Text, TextInput, View } from "react-native";
import { Icon } from "../icon";
import { inputStyles } from "./styles/input.style";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string;
  errorMessage?: string;
  required?: boolean;
  showIcon?: boolean;
}

export function Input({
  label,
  errorMessage,
  required,
  placeholder = "Search",
  showIcon = true,
  ...props
}: InputProps) {
  return (
    <View style={inputStyles.container}>
      {label && (
        <View style={inputStyles.labelContainer}>
          <Text style={inputStyles.label}>{label}:</Text>
          {required && <Text style={inputStyles.required}>*</Text>}
        </View>
      )}

      <View style={inputStyles.inputWrapper}>
        {showIcon && (
          <Icon
            name="search"
            size={20}
            color={theme.colors.neutral}
            style={inputStyles.icon}
          />
        )}
        <TextInput
          style={inputStyles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.neutral}
          {...props}
        />
      </View>

      {errorMessage && (
        <Text style={inputStyles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
}
