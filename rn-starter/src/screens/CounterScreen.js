import React, { useReducer } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: -1 }
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <TouchableOpacity
        onPress={() => dispatch({ type: "increment", payload: 1 })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Decrease</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", fontSize: 20, marginTop: 16 }}>
        Current count:{"\n"} {state.count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginStart: 16,
    marginEnd: 16,
    marginTop: 8,
    marginBottom: 8,
    elevation: 6,
    backgroundColor: "dodgerblue",
  },

  buttonText: {
    fontSize: 22,
    color: "white",
  },
});

export default CounterScreen;
