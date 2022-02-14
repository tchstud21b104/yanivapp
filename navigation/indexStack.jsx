import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Game from "../screens/game";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
export default function IndexStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={Home} />

        <Stack.Screen name="game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
