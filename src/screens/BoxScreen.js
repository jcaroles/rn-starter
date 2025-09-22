import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}>Child #1</View>
      <View style={styles.textTwoStyle}>Child #2</View>
      <View style={styles.textThreeStyle}>Child #3</View>
    </View>
  );
};

const styles = StyleSheet.create({
  textOneStyle: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: "blue",
    backgroundColor: "red",
  },
  textTwoStyle: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
  textThreeStyle: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "purple",
    // ...StyleSheet.absoluteFillObject,
  },
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
});

export default BoxScreen;
