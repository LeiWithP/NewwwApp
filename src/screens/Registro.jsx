import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { View, Text, Image, StyleSheet } from "react-native";
import BasicInput from "../components/BasicInput";
import SquareButton from "../components/SquareButton";

const Registro = ({ navigation }) => {
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    fecha: "",
    paciente: "",
    doctor: "",
    telefono: "",
    malestar: "",
    imagen: "https://reactnative.dev/img/tiny_logo.png",
  });

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleCaptura = () => {
    //navigation.navigate("Listado");
    console.log(formData);
  };
  const handleGuardar = () => {
    navigation.navigate("Listado", {
      newData: formData,
    });
  };

  useEffect(() => {
    const formFilled = Object.values(formData).every((value) => value !== "");
    if (formFilled) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [formData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <BasicInput
        label="Fecha"
        placeholder="Ingresa la fecha"
        textKey="fecha"
        onChangeText={updateFormData}
      />
      <BasicInput
        label="Paciente"
        placeholder="Nombre del paciente"
        textKey="paciente"
        onChangeText={updateFormData}
        maxLegth={150}
        regex={/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/}
      />
      <BasicInput
        label="Doctor"
        placeholder="Nombre del Doctor"
        textKey="doctor"
        onChangeText={updateFormData}
        maxLegth={150}
        regex={/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]+$/}
      />
      <BasicInput
        label="Telefono"
        placeholder="Telefono del doctor"
        textKey="telefono"
        onChangeText={updateFormData}
        maxLegth={10}
        regex={/^-?\d+$/}
      />
      <BasicInput
        label="Malestar/Sintomas"
        textKey="malestar"
        onChangeText={updateFormData}
        placeholder="Describe el malestar presentado"
        maxLegth={1024}
      />
      <SquareButton text="Capturar Receta" onPress={handleCaptura} />
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <SquareButton
        text="Guardar"
        onPress={handleGuardar}
        isDisable={!validForm}
      />
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
