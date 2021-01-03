import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const AboutScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("welcome");
    }, 4000);

    console.log(navigation);
  }, []);
  return (
    <View>
      <Text>This is about</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
