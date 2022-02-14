import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import LoginInput from "../components/loginInput";

export default function Home() {
  const navigation = useNavigation();

  const [name, onChangeName] = React.useState("");
  const [code, onChangeCode] = React.useState("");

  const handleLetsGo = () => {
    console.log("starting game!");
    navigation.navigate("game", { name, code });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>YANIV</Text>
      <View>
        <LoginInput
          text={name}
          onChangeText={onChangeName}
          placeholder={"name"}
        />
        <LoginInput
          text={code}
          onChangeText={onChangeCode}
          placeholder={"code"}
        />
      </View>

      <TouchableOpacity style={styles.letsGoButton} onPress={handleLetsGo}>
        <Text style={styles.letsGoButtonText}>{"let's go ->"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#7CCEE8",
  },
  title: {
    margin: "1vw",
    fontSize: "20vw",
    fontWeight: "bold",
    fontFamily: "Bangers",
    alignItems: "center",
    textAlign: "center",
  },
  letsGoButtonText: {
    fontFamily: "BebasNeue",
    fontSize: "5vw",
    textAlign: "center",
    marginTop: "3vh",
  },
});
