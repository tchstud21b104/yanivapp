import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function LoginInput({ text, onChangeText, placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#7CCEE8",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 4,
  },
});
