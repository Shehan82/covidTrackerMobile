import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Constant from "expo-constants";

const DeathsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default DeathsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constant.statusBarHeight,
  },
});
