import React from "react";
import { StyleSheet, Text, View } from "react-native";
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

const Graph = () => {
  return (
    <View>
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
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({});
