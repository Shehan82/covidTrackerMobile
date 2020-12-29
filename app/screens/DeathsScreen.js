import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Constant from "expo-constants";
import DetailsBox from "../components/DetailsBox";

const DeathsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <DetailsBox />
    </View>
  );
};

export default DeathsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constant.statusBarHeight,
  },
});
