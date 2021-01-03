import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ImageBackground,
} from "react-native";
import Constant from "expo-constants";

const AboutScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/4.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            style={styles.img}
            source={require("../../assets/covid.jpg")}
          />
          <Text>API reference - deaseas.sh</Text>
          <Text>Owner - Double S Group</Text>
          <Text></Text>
          <Text>Email - shehansandeepa92@gmail.com</Text>
          <Text></Text>

          <Text style={styles.txt}>Stay Home! Stay Safe!</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constant.statusBarHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderColor: "lightgrey",
    borderWidth: 1,
    marginBottom: 20,
  },
  txt: {
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    fontWeight: "bold",
  },
  subContainer: {
    // borderWidth: 2,
    // borderColor: "red",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
