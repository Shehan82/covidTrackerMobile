import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = ({ onPress, country }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.txt}>COVID 19 TRACKER</Text>
        </View>
        <View style={styles.headerRight}>
          <Text numberOfLines={2} style={styles.txt}>
            {country}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingTop: 10,
    // borderColor: "blue",
    // borderWidth: 2,
  },
  headerLeft: {
    // borderColor: "red",
    // borderWidth: 2,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  headerRight: {
    // borderColor: "red",
    // borderWidth: 2,
    flex: 0.45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  txt: {
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    fontWeight: "bold",
  },
});
