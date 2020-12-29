import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabButton2 = ({ onPress, name, bgColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <MaterialCommunityIcons name={name} color="white" size={30} />
      </View>
    </TouchableOpacity>
  );
};

export default TabButton2;

const styles = StyleSheet.create({
  container: {
    height: 76,
    width: 76,
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
    borderWidth: 8,
    borderColor: "white",
  },
});
