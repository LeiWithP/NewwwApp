import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SquareButton = ({ onPress, text, isDisable }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isDisable && styles.disabledButton]}
      onPress={onPress}
      disabled={isDisable}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 50,
    marginVertical: 10,
  },
  disabledButton: {
    backgroundColor: "#bdc3c7", // Grey color when disabled
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default SquareButton;
