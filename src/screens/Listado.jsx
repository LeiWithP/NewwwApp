import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Searchbar, IconButton } from "react-native-paper";
import Card from "../components/Card";

const initialRegiters = [
  {
    fecha: "10/10/2023",
    paciente: "Pedro",
    malestar: "Lorem ipsum dolor",
    doctor: "Juan",
    telefono: "(123) 4560 789",
    imagen: "",
  },
  {
    fecha: "10/10/2023",
    paciente: "Mario",
    malestar: "Lorem ipsum dolor",
    doctor: "Juan",
    telefono: "(123) 4560 789",
    imagen: "",
  },
  {
    fecha: "10/10/2023",
    paciente: "Karla",
    doctor: "Juan",
    telefono: "(123) 4560 789",
    malestar: "Lorem ipsum dolor",
    imagen: "",
  },
];

const Listado = ({ navigation, route }) => {
  const [registros, setRegistros] = useState(initialRegiters);
  const [registrosVisibles, setRegistrosVisibles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleButton = () => {
    navigation.navigate("Registro");
  };

  useEffect(() => {
    if (route.params.newData) {
      setRegistros([...registros, route.params.newData]);
    }
  }, [route.params.newData]);

  useEffect(() => {
    if (searchQuery) {
      const upperCaseQuery = searchQuery.toUpperCase();
      const match = registros.filter(
        (registro) =>
          registro.paciente.toUpperCase().includes(upperCaseQuery) ||
          registro.malestar.toUpperCase().includes(upperCaseQuery) ||
          registro.doctor.toUpperCase().includes(upperCaseQuery)
      );
      setRegistrosVisibles(match);
    } else {
      setRegistrosVisibles(registros);
    }
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado</Text>
      <Searchbar
        placeholder="Buscar"
        onChangeText={(query) => setSearchQuery(query)}
        style={styles.searchbar}
      />
      <FlatList
        data={registrosVisibles}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Card registro={item} />}
      />
      <IconButton
        icon="plus"
        mode="contained"
        backgroundColor="blue"
        iconColor="white"
        size={40}
        style={styles.plusButton}
        onPress={handleButton}
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
    margin: 10,
    marginTop: Constants.statusBarHeight + 20,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "500",
  },
  searchbar: {
    backgroundColor: "#dedede",
    borderRadius: 6,
    marginVertical: 28,
    alignItems: "flex-start",
    fontSize: 10,
  },
  list: {
    width: "100%",
  },
  contentList: {
    flexGrow: 1,
  },
  plusButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default Listado;
