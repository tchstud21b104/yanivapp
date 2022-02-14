import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

export default function PlayerInfo({ name, score }) {
  return (
    <View style={styles.container}>
      <Text>name: {name}</Text>
      <Text>score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {},
});
