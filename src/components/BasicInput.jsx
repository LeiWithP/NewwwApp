import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const BasicInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
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
});

export default BasicInput;
