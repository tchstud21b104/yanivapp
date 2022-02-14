import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Deck from "../components/deck";
import MyHand from "../components/myHand";
import Pile from "../components/pile";
import RivalHand from "../components/rivalHand";
import YanivButton from "../components/yanivButton";
import { useSocket } from "../useSocket";
import { useRoute } from "@react-navigation/native";

export default function Game() {
  const route = useRoute();

  const [state, onChangeState] = React.useState([
    { id: "fkfd", hand: ["AC", "4H"] },
  ]);

  /* start here */
  const { messages, send, onRestartGame } = useSocket({
    userId: "1",
  });
  /* end here */

  console.log(route.params);
  const handleYanivPressed = () => {
    console.log("yaniv!");
    onRestartGame("hi");
  };

  return (
    <View style={styles.container}>
      <RivalHand />
      <View style={styles.controlCenter}>
        <Deck />
        <Pile />
        <YanivButton />
      </View>
      <MyHand />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#9797B6",
  },
  controlCenter: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    // justifyContent: "center",
    // justifyContent: "space-between",
    // marginHorizontal: "2vw",
  },
  yanivButton: {
    backgroundColor: "green",
    height: "10vw",
    width: "10vw",
    borderRadius: "50%",
    justifyContent: "center",
    textAlign: "center",
  },
  card: {
    width: 66,
    height: "100%",
  },
  myTable: {
    flex: 1,
  },
});
