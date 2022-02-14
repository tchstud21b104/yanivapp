import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function YanivButton() {
  //   const [state, onChangeState] = React.useState([{ id: "fkfd", hand: ["AC"] }]);

  const handleYanivPressed = () => {
    console.log("yaniv!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleYanivPressed}>
        <Text style={styles.text}>yaniv</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#272A36",
    height: "20vw",
    width: "20vw",
    borderRadius: "50%",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: "8vw",
    fontWeight: "bold",
    fontFamily: "BebasNeue",
    textAlign: "center",
    marginTop: 10,
    marginRight: 7,
    transform: [{ skewY: "-18deg" }],
  },
});
