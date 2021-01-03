import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View, Platform, Button } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("app");
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.img} source={require("../../assets/covid.jpg")} />
        <Text style={styles.txt}>WORLDWIDE COVID 19 TRACKER</Text>
      </View>
      <View style={styles.cpTxt}>
        <Text>Copyright Double S Group © 2020 - 2021</Text>
        <Text>API reference deaseas.sh</Text>
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
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  logoContainer: {
    top: "20%",
    alignItems: "center",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  txt: {
    marginVertical: 20,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    fontSize: 18,
    fontWeight: "bold",
  },
  cpTxt: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
  },
});
