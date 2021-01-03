import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import DeathsScreen from "../screens/DeathsScreen";

const Stack = createStackNavigator();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="welcome" component={WelcomeScreen} />
    <Stack.Screen name="deaths" component={DeathsScreen} />
  </Stack.Navigator>
);

export default Navigator;
