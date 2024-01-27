import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const SquareButton = ({ text }) => {
  return (
    <TouchableHighlight style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
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
    marginVertical: 30,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default SquareButton;
