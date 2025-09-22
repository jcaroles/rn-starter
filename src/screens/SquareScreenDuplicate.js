import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorCounter from "./components/ColorCounter";

const COLOR_INCREMENT = 10;

const setColor = (color, change) => {
  if (color + change > 255 || color + change < 0) {
    return color;
  }
  return color + change;
};
const SquareScreenDuplicate = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(setColor(red, COLOR_INCREMENT))}
        onDecrease={() => setRed(setColor(red, -COLOR_INCREMENT))}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(setColor(green, COLOR_INCREMENT))}
        onDecrease={() => setGreen(setColor(green, -COLOR_INCREMENT))}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(setColor(blue, COLOR_INCREMENT))}
        onDecrease={() => setBlue(setColor(blue, -COLOR_INCREMENT))}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreenDuplicate;
