import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Card({ id }) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require(`../assets/cards/${id}.png`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "10vw",
    height: "15.4vw",
  },
});
