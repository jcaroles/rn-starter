import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "John";
  return (
    <View>
      <Text style={styles.textStyleBig}>Getting started with React Native</Text>
      <Text style={styles.textStyleSmall}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleBig: {
    fontSize: 45,
  },
  textStyleSmall: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
