import { theme } from "@/styles/theme";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "../icon";
import { Text } from "../text";
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
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputStyles.container}>
      {label && (
        <View style={inputStyles.labelContainer}>
          <Text>{label}:</Text>
          {required && <Text style={inputStyles.required}>*</Text>}
        </View>
      )}

      <View
        style={[
          inputStyles.inputWrapper,
          isFocused && inputStyles.inputWrapperFocused,
          !!errorMessage && inputStyles.inputWrapperError,
        ]}
      >
        {iconName && (
          <Icon
            name={iconName}
            size={20}
            color={theme.colors.primary[400]}
            style={inputStyles.icon}
          />
        )}

        <TextInput
          style={inputStyles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.primary[400]}
          secureTextEntry={isPasswordVisible}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            activeOpacity={0.7}
          >
            <Icon
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color={theme.colors.neutral}
            />
          </TouchableOpacity>
        )}
      </View>

      {description && (
        <Text as="text-xs" style={inputStyles.description}>
          {description}
        </Text>
      )}

      {errorMessage && (
        <Text as="text-xs" style={inputStyles.errorMessage}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}
