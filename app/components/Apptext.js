import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const Apptext = ({ title, size, marginBtm = 0 }) => {
  return (
    <View
      style={{
        marginBottom: marginBtm,
      }}
    >
      <Text
        style={{
          fontSize: size,
          fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Apptext;

const styles = StyleSheet.create({});
