import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>welcome to React-Native App development</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
      >
        <Text style={styles.btnTxt}>Go to components</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.btnTxt}>Go to List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
      >
        <Text style={styles.btnTxt}>Go to image screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
      >
        <Text style={styles.btnTxt}>Go to counter screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Color")}
        style={styles.button}
      >
        <Text style={styles.btnTxt}>Go to color screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Square")}
        style={styles.button}
      >
        <Text style={styles.btnTxt}>Go to square screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Text")}
        style={styles.button}
      >
        <Text style={styles.btnTxt}>Go to text screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Box")}
        style={styles.button}
      >
        <Text style={styles.btnTxt}>Go to box screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    padding: 16,
  },

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

export default HomeScreen;
