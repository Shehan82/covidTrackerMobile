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
  // const [countries, setCountries] = useState([]);
  // const [modalVisible, setModalVisible] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState("WorldWide");
  // const [coronaInfo, setCoronaInfo] = useState({});
  // const [url, setUrl] = useState(
  //   "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
  // );

  // useEffect(() => {
  //   getCountries();
  // }, []);

  // useEffect(() => {
  //   onSelectCountry();
  // }, [selectedCountry]);

  // const getCountries = async () => {
  //   await fetch("https://disease.sh/v3/covid-19/countries")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const countries = data.map((country) => ({
  //         name: country.country,
  //         value: country.countryInfo.iso2,
  //       }));
  //       setCountries(countries);
  //     });
  // };

  // const modalOn = () => {
  //   setModalVisible(true);
  // };

  // const onSelectCountry = async () => {
  //   console.log(selectedCountry);
  //   const link =
  //     selectedCountry === "WorldWide"
  //       ? "https://disease.sh/v3/covid-19/historical/all?lastdays=11"
  //       : `https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=11`;

  //   // const link = `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=30`;
  //   setUrl(link);
  //   const url =
  //     selectedCountry === "WorldWide"
  //       ? "https://disease.sh/v3/covid-19/all"
  //       : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;

  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCoronaInfo(data);
  //     });
  // };

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
        <TouchableWithoutFeedback onPress={onPressWorldWide}>
          <Text>WorldWide</Text>
        </TouchableWithoutFeedback>
        <FlatList
          data={countryList}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              style={styles.container}
              onPress={() => {
                onPressSetSelectedCountry(item.name);
                onPressModalVisiblityOff();
              }}
            >
              <Text style={styles.txt}>{item.name}</Text>
            </TouchableWithoutFeedback>
          )}
        />
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
});
