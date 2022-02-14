import * as React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import Card from "./card";

export default function RivalHand() {
  const cardsAmount = 5;
  //   const cards = new Array(cardsAmount);
  const cards = [0, 0, 0, 0, 0];

  return (
    <View style={styles.container}>
      {cards.map(() => (
        <Card id={"gray_back"} />
      ))}
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
