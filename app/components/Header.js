import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text>COVID 19 TRACKER</Text>
      </View>
      <View style={styles.headerRight}></View>
      <Text>I am right</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
