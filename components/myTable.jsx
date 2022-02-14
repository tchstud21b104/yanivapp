import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import MyHand from "../components/myHand";
import PlaterInfo from "./playerInfo";

export default function MyTable() {
  return (
    <View style={styles.container}>
      <PlaterInfo />
      <MyHand />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "#7CCEE8",
    margin: 10,
  },
  card: {
    margin: 5,
  },
  selectedCard: {
    bottom: 20,
  },
});
