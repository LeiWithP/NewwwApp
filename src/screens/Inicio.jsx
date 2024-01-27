import React from "react";
import Constants from "expo-constants";
import { View, Text, StyleSheet } from "react-native";
import BasicInput from "../components/BasicInput";
import SquareButton from "../components/SquareButton";

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <BasicInput label="Email" placeholder="Ingresa tu email" />
      <BasicInput label="Contraseña" placeholder="Ingresa tu contraseña" />
      <SquareButton text="Iniciar sesión" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    margin: 42,
    marginTop: Constants.statusBarHeight + 26,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 32,
    fontWeight: "500",
    marginBottom: 30,
  },
});

export default Inicio;
