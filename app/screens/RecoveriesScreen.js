import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
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
        <TouchableWithoutFeedback onPress={onPressWorldWide}>
          <Text>WorldWide</Text>
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
              <Text>{item.name}</Text>
            </TouchableWithoutFeedback>
          )}
        />
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
