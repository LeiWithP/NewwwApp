import React, { useState } from "react";
import Constants from "expo-constants";
import { View, Text, Image, StyleSheet } from "react-native";
import BasicInput from "../components/BasicInput";
import SquareButton from "../components/SquareButton";

const Registro = ({ navigation }) => {
  const handleCaptura = () => {
    navigation.navigate("Listado");
  };
  const handleGuardar = () => {
    navigation.navigate("Listado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <BasicInput label="Fecha" placeholder="Ingresa la fecha" />
      <BasicInput label="Paciente" placeholder="Nombre del paciente" />
      <BasicInput label="Doctor" placeholder="Nombre del Doctor" />
      <BasicInput label="Telefono" placeholder="Telefono del doctor" />
      <BasicInput
        label="Malestar/Sintomas"
        placeholder="Describe el malestar presentado"
      />
      <SquareButton text="Capturar Receta" onPress={handleCaptura} />
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <SquareButton text="Guardar" onPress={handleGuardar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    margin: 30,
    marginTop: Constants.statusBarHeight + 20,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    marginTop: 5,
    borderRadius: 10,
  },
});

export default Registro;
