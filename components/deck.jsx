import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Card from "./card";

export default function Deck() {
  //   const [state, onChangeState] = React.useState([{ id: "fkfd", hand: ["AC"] }]);

  const handleTakeCard = () => {
    console.log("yaniv!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTakeCard}>
        <Card id="blue_back" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
