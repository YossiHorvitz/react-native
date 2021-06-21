import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const ImageDetail = ({ path, title, score }) => {
  return (
    <View>
      <Image source={path} />
      <Text>Image of {title}</Text>
      <Text>Score:{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
