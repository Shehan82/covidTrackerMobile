import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import DeathsScreen from "../screens/DeathsScreen";
import CasesScreen from "../screens/CasesScreen";
import AboutScreen from "../screens/AboutScreen";
import SubApp from "../../SubApp";

const Stack = createStackNavigator();

const Navigator = ({
  countryList,
  onPressModalVisiblityOn,
  onPressModalVisiblityOff,
  selectedCountry,
  onPressWorldWide,
  onPressSetSelectedCountry,
  coronaInfo,
  modalVisible,
  url,
}) => (
  <Stack.Navigator>
    <Stack.Screen name="app" component={SubApp} />
    <Stack.Screen name="welcome" component={WelcomeScreen} />
  </Stack.Navigator>
);

export default Navigator;
