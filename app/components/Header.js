import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Text style={styles.txt}>COVID 19 TRACKER</Text>
      </View>
      <View style={styles.headerRight}>
        <Text style={styles.txt}>I am right</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    // borderColor: "blue",
    // borderWidth: 2,
    padding: 10,
  },
  headerLeft: {
    // borderColor: "red",
    // borderWidth: 2,
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  headerRight: {
    // borderColor: "red",
    // borderWidth: 2,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  txt: {
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    fontWeight: "bold",
  },
});
