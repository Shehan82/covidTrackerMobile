import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeathsScreen from "../screens/DeathsScreen";
import RecoveriesScreen from "../screens/RecoveriesScreen";
import CasesScreen from "../screens/CasesScreen";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="deaths" component={DeathsScreen} />
    <Tab.Screen name="recovery" component={RecoveriesScreen} />
    <Tab.Screen name="cases" component={CasesScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
