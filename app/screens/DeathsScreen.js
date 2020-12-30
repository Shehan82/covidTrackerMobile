import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const DeathsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <DetailsBox />
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>

      <Bar data={data} width={100} height={50} />
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
