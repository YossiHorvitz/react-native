import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        score={5}
        path={require("../../assets/forest.jpg")}
      />

      <ImageDetail
        title="Beach"
        score={8}
        path={require("../../assets/beach.jpg")}
      />

      <ImageDetail
        title="Mountain"
        score={1}
        path={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
