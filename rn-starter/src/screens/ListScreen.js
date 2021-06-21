import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Line num #01", age: 24 },
    { name: "Line num #02", age: 25 },
    { name: "Line num #03", age: 26 },
    { name: "Line num #04", age: 27 },
    { name: "Line num #05", age: 28 },
    { name: "Line num #06", age: 29 },
    { name: "Line num #07", age: 30 },
    { name: "Line num #08", age: 31 },
    { name: "Line num #09", age: 32 },
    { name: "Line num #10", age: 33 },
    { name: "Line num #11", age: 34 },
    { name: "Line num #12", age: 35 },
  ];

  return (
    <FlatList
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 36,
    marginHorizontal: 36,
  },
});

export default ListScreen;
