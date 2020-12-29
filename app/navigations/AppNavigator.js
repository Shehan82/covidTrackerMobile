import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeathsScreen from "../screens/DeathsScreen";
import RecoveriesScreen from "../screens/RecoveriesScreen";
import CasesScreen from "../screens/CasesScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TabButton from "../components/TabButton";
import { View, Text } from "react-native";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="deaths"
      component={DeathsScreen}
      options={({ navigation }) => ({
        tabBarIcon: () => (
          <TabButton
            bgColor="red"
            name="emoticon-outline"
            onPress={() => navigation.navigate("deaths")}
          />
        ),
      })}
    />
    <Tab.Screen
      name="recovery"
      component={RecoveriesScreen}
      options={({ navigation }) => ({
        tabBarIcon: () => (
          <TabButton
            bgColor="green"
            name="emoticon-outline"
            onPress={() => navigation.navigate("recovery")}
          />
        ),
        tabBarLabel: "",
      })}
    />
    <Tab.Screen
      name="cases"
      component={CasesScreen}
      options={({ navigation }) => ({
        tabBarIcon: () => (
          <TabButton
            bgColor="yellow"
            name="emoticon-outline"
            onPress={() => navigation.navigate("cases")}
          />
        ),
      })}
    />
  </Tab.Navigator>
);

export default AppNavigator;
