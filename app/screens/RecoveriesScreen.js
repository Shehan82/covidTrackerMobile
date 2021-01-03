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

const RecoveriesScreen = ({
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
        today={coronaInfo.todayRecovered}
        total={coronaInfo.recovered}
        title="Corona Recoverd"
      />

      <Graph url={url} keyword="Recovered" country={selectedCountry} />

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
  );
};

export default RecoveriesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constant.statusBarHeight,
  },
});
