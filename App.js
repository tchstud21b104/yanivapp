import { useFonts } from "expo-font";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Game from "./screens/game";
import Home from "./screens/home";
import IndexStack from "./navigation/indexStack";

export default function App() {
  const [loaded] = useFonts({
    Bangers: require("./assets/fonts/Bangers.ttf"),
    BebasNeue: require("./assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <IndexStack />
    // <View style={styles.container}>
    //   {console.log(name, code)}
    //   {name === "1" && code === "1" ? <Game /> : <Home />}
    //   {/* <Game /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
