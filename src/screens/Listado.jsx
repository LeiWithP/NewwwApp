import React, { useState } from "react";
import Constants from "expo-constants";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Searchbar, IconButton } from "react-native-paper";
import Card from "../components/Card";

const initialRegiters = [
  {
    paciente: "Pedro",
    malestar: "Lorem ipsum dolor",
    doctor: "Juan",
    telefono: "(123) 4560 789",
  },
  {
    paciente: "Mario",
    malestar: "Lorem ipsum dolor",
    doctor: "Juan",
    telefono: "(123) 4560 789",
  },
  {
    paciente: "Karla",
    malestar: "Lorem ipsum dolor",
    doctor: "Juan",
    telefono: "(123) 4560 789",
  },
];

const Listado = ({ navigation }) => {
  const [registros, setRegistros] = useState(initialRegiters);
  const [searchQuery, setSearchQuery] = useState("");

  const handleButton = () => {
    navigation.navigate("Registro");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado</Text>
      <Searchbar
        placeholder="Buscar"
        onChageText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={registros}
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
    flex: 1,
    alignItems: "stretch",
  },
  plusButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default Listado;
