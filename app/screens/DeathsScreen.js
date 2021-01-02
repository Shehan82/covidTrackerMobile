import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Header from "../components/Header";
import Constant from "expo-constants";
import DetailsBox from "../components/DetailsBox";
import { FlatList } from "react-native-gesture-handler";
import Graph from "../components/Graph";
import CountryListModal from "../components/CountryListModal";

const DeathsScreen = ({
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
    <View style={styles.container}>
      <Header onPress={onPressModalVisiblityOn} country={selectedCountry} />
      <DetailsBox
        today={coronaInfo.todayDeaths}
        total={coronaInfo.deaths}
        title="Corona Deaths"
      />

      <Graph url={url} keyword="Deaths" country={selectedCountry} />

      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={onPressWorldWide}>
            <View style={styles.wwContainer}>
              <Text>WorldWide</Text>
            </View>
          </TouchableWithoutFeedback>
          <FlatList
            data={countryList}
            keyExtractor={(item) => item.name}
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
  );
};

export default DeathsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constant.statusBarHeight,
  },
  modalContainer: {
    paddingTop: 25,
  },
  tContainer: {
    borderWidth: 2,
    borderColor: "red",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
  },
  wwContainer: {
    borderWidth: 2,
    borderColor: "red",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
