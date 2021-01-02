import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Apptext from "./Apptext";

const DetailsBox = ({ today, total }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Apptext title="Corona Deaths" size={28} marginBtm={15} />
        <Apptext title={today} size={40} />
        <Apptext title="today" size={16} marginBtm={15} />
        <Apptext title={`${total}` + " total"} size={18} />
      </View>
    </View>
  );
};

export default DetailsBox;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  subContainer: {
    width: "70%",
    backgroundColor: "white",
    height: 200,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
