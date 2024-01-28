import React, { useState } from "react";
import Constants from "expo-constants";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";

const Listado = () => {
  const [registros, setRegistros] = useState([
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
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado</Text>
      <FlatList
        data={registros}
        style={styles.list}
        contentContainerStyle={styles.contentList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Card registro={item} />}
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
    marginBottom: 30,
  },
  list: {
    width: "100%",
  },
  contentList: {
    flex: 1,
    alignItems: "stretch",
  },
});

export default Listado;
