import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from "react-native";
import Header from "../components/Header";
import Constant from "expo-constants";
import DetailsBox from "../components/DetailsBox";
import { FlatList } from "react-native-gesture-handler";
import Graph from "../components/Graph";

const CasesScreen = ({
  countryList,
  onPressModalVisiblityOn,
  onPressModalVisiblityOff,
  selectedCountry,
  onPressWorldWide,
  onPressSetSelectedCountry,
  coronaInfo,
  modalVisible,
  url,
}) => {
  return (
    <ImageBackground
      source={require("../../assets/7.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>
          <Header onPress={onPressModalVisiblityOn} country={selectedCountry} />
          <DetailsBox
            today={coronaInfo.todayCases}
            total={coronaInfo.cases}
            title="Corona Cases"
          />

          <Graph url={url} keyword="Cases" country={selectedCountry} />
        </ScrollView>

        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={onPressModalVisiblityOff}>
              <View style={styles.closeContainer}>
                <Text style={styles.txtClose}>Close</Text>
              </View>
            </TouchableWithoutFeedback>
            <FlatList
              data={countryList}
              keyExtractor={(item) => item.name}
              ListHeaderComponent={() => (
                <TouchableWithoutFeedback onPress={onPressWorldWide}>
                  <View style={styles.wwContainer}>
                    <Text style={styles.txt}>WorldWide</Text>
                    <Image
                      style={{ width: 30, height: 30, borderRadius: 15 }}
                      source={require("../../assets/world.jpeg")}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    onPressSetSelectedCountry(item.name);
                    onPressModalVisiblityOff();
                  }}
                >
                  <View style={styles.tContainer}>
                    <Text style={styles.txt}>{item.name}</Text>
                    <Image
                      style={{ width: 30, height: 30, borderRadius: 15 }}
                      source={{ uri: item.flag }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
};

export default CasesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constant.statusBarHeight,
    paddingBottom: Platform.OS === "ios" ? 0 : 5,
    flex: 1,
  },
  modalContainer: {
    paddingTop: 25,
  },
  txtClose: {
    fontSize: 18,
    color: "blue",
  },
  closeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    marginBottom: 20,
  },
  tContainer: {
    // borderWidth: 2,
    // borderColor: "red",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
  },
  wwContainer: {
    // borderWidth: 2,
    // borderColor: "red",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  txt: {
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
    // fontWeight: "bold",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
