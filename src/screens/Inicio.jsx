import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import BasicInput from "../components/BasicInput";
import SquareButton from "../components/SquareButton";

const accessKey = {
  email: "jhon@mail.com",
  password: "77@1$",
};

const Inicio = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const handleButton = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (email === accessKey.email && password === accessKey.password) {
        navigation.navigate("Listado", { email: email });
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (email && password) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [email, password]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <BasicInput
        label="Email"
        placeholder="Ingresa tu email"
        onChangeText={setEmail}
        regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
        errorMessage="Ingrese un email válido"
      />
      <BasicInput
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        isPassword={true}
        onChangeText={setPassword}
      />
      {isLoading ? (
        <ActivityIndicator animating={true} />
      ) : (
        <SquareButton
          text="Iniciar sesión"
          onPress={async () => handleButton()}
          isDisable={!validForm}
        />
      )}
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
    marginBottom: 40,
  },
});

export default Inicio;
