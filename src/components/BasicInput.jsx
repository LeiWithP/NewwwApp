import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const BasicInput = ({
  label,
  placeholder,
  maxLegth,
  isPassword,
  textKey,
  onChangeText,
  regex,
  errorMessage,
}) => {
  const [isValid, setIsValid] = useState(true);
  const validateText = (text) => {
    if (!checkInput(text)) {
      text = "";
    }
    if (textKey) {
      onChangeText(textKey, text);
    } else {
      onChangeText(text);
    }
  };
  const checkInput = (text) => {
    if (regex) {
      const testInput = regex.test(text);
      setIsValid(testInput);
      return testInput;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        maxLength={maxLegth ? maxLegth : 100}
        secureTextEntry={isPassword ? isPassword : false}
        onChangeText={(text) =>
          onChangeText ? validateText(text) : checkInput(text)
        }
      />
      {isValid ? undefined : (
        <Text style={styles.error}>
          {errorMessage ? errorMessage : `Ingrese un valor válido`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  label: {
    fontSize: 18,
    color: "blue",
    fontWeight: "500",
  },
  input: {
    alignSelf: "stretch",
    borderBottomWidth: 1.2,
    opacity: 0.3,
    height: 30,
    fontSize: 16,
  },
  error: {
    alignSelf: "flex-start",
    fontSize: 12,
    fontWeight: "500",
    color: "red",
  },
});

export default BasicInput;
