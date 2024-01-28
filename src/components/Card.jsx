import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ registro }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Paciente: {registro.paciente}</Text>
        <Text style={styles.text}>Malestar: {registro.malestar}</Text>
        <Text style={styles.text}>Doctor: {registro.doctor}</Text>
        <Text style={styles.text}>Tel: {registro.telefono}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "stretch",
    paddingTop: 2,
    paddingBottom: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 1,
    opacity: 0.8,
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 5,
    borderRadius: 10,
  },
  textContainer: {
    paddingLeft: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Card;
