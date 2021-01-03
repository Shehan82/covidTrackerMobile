import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.img} source={require("../../assets/covid.jpg")} />
        <Text style={styles.txt}>WORLDWIDE COVID 19 TRACKER</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fefefe",
    padding: 10,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderColor: "blue",
    borderWidth: 2,
  },
  logoContainer: {
    top: 70,
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 2,
  },
  txt: {},
});
