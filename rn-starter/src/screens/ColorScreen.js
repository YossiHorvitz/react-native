import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  console.log(colors);

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setColor([...colors, randomRgb()]);
        }}
      >
        <Text style={{ color: "white" }}>Add a color</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 50, width: 50, backgroundColor: item }}
            ></View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    marginStart: 16,
    marginEnd: 16,
    marginTop: 8,
    marginBottom: 8,
    elevation: 6,
    backgroundColor: "dodgerblue",
  },
});

export default ColorScreen;
