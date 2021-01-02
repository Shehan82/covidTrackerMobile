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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
} from "victory-native";
import { FlatList } from "react-native-gesture-handler";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 5000 },
  { quarter: 5, earnings: 5000 },
  { quarter: 6, earnings: 13000 },
  { quarter: 7, earnings: 16500 },
  { quarter: 8, earnings: 14250 },
  { quarter: 9, earnings: 5000 },
  { quarter: 10, earnings: 5000 },
];

const DeathsScreen = ({ name }) => {
  const [countries, setCountries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("WorldWide");
  const [coronaInfo, setCoronaInfo] = useState({});
  console.log(coronaInfo);
  // console.log(selectedCountry);
  useEffect(() => {
    // send a request , wait and do

    getCountries();
  }, []);

  const getCountries = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        setCountries(countries);
      });
  };

  // console.log(countries);

  const modalOn = () => {
    setModalVisible(true);
  };

  const onSelectCountry = async () => {
    console.log(selectedCountry);
    const url =
      selectedCountry === "WorldWide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCoronaInfo(data);
      });
  };

  useEffect(() => {
    onSelectCountry();
    // console.log(selectedCountry);
  }, [selectedCountry]);

  return (
    <ScrollView style={styles.container}>
      <Header onPress={modalOn} country={selectedCountry} />
      <DetailsBox />

      <VictoryChart
        domainPadding={10}
        width={350}
        theme={VictoryTheme.material}
      >
        <VictoryBar
          style={{ data: { fill: "#c43a31" } }}
          data={data}
          x="quarter"
          y="earnings"
          barRatio={0.8}
        />
      </VictoryChart>
      <Modal animationType="slide" visible={modalVisible}>
        <FlatList
          data={countries}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                setSelectedCountry(item.value);
                setModalVisible(false);
              }}
            >
              <Text>{item.name}</Text>
            </TouchableWithoutFeedback>
          )}
        />
      </Modal>
    </ScrollView>
  );
};

export default DeathsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constant.statusBarHeight,
  },
});
