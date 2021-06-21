import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ColorCounter = ({ onIncrease, onDecrease, color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <TouchableOpacity onPress={() => onIncrease()} style={styles.button}>
        <Text style={styles.btnTxt}>{`More ${color}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDecrease()} style={styles.button}>
        <Text style={styles.btnTxt}>{`Less ${color}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnTxt: {
    fontSize: 16,
    color: "white",
  },

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

export default ColorCounter;
