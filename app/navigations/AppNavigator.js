import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeathsScreen from "../screens/DeathsScreen";
import RecoveriesScreen from "../screens/RecoveriesScreen";
import CasesScreen from "../screens/CasesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TabButton from "../components/TabButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text } from "react-native";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="deaths"
      // component={DeathsScreen}
      children={() => <DeathsScreen name={"shehan"} />}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="book-dead" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="recovery"
      component={RecoveriesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="address-book" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="cases"
      component={CasesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="book-medical" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
