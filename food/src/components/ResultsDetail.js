import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
  image: {
    width: 220,
    height: 140,
    marginBottom: 4,
    borderRadius: 6,
  },
  name: {
    fontWeight: "bold",
  },
  rating: {},
});

export default ResultsDetail;
