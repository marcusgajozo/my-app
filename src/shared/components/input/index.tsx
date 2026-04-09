import { theme } from "@/styles/theme";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "../icon";
import { inputStyles } from "./styles/input.style";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string;
  errorMessage?: string;
  description?: string;
  required?: boolean;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  isPassword?: boolean;
}

export function Input({
  label,
  errorMessage,
  required,
  placeholder = "Digite aqui...",
  iconName,
  description,
  isPassword = false,
  secureTextEntry,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);

  return (
    <View style={inputStyles.container}>
      {label && (
        <View style={inputStyles.labelContainer}>
          <Text style={inputStyles.label}>{label}:</Text>
          {required && <Text style={inputStyles.required}>*</Text>}
        </View>
      )}

      <View style={inputStyles.inputWrapper}>
        {iconName && (
          <Icon
            name={iconName}
            size={20}
            color={theme.colors.primary.default}
            style={inputStyles.icon}
          />
        )}

        <TextInput
          style={inputStyles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.primary[500]}
          secureTextEntry={isPasswordVisible}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            activeOpacity={0.7}
          >
            <Icon
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color={theme.colors.neutral}
            />
          </TouchableOpacity>
        )}
      </View>

      {description && (
        <Text style={inputStyles.description}>{description}</Text>
      )}

      {errorMessage && (
        <Text style={inputStyles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
}
