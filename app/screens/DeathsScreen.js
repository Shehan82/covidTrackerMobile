import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Modal } from "react-native";
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

const DeathsScreen = () => {
  const [countries, setCountries] = useState([]);
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

  console.log(countries);

  return (
    <ScrollView style={styles.container}>
      <Header />
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
      <Modal animationType="slide" visible={true}>
        <Text>hello i am modal</Text>
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
