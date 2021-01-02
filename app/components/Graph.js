import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Platform } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
  VictoryLabel,
  VictoryAxis,
  VictoryArea,
} from "victory-native";
import Apptext from "./Apptext";

const data1 = [
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

const Graph = ({ url, country }) => {
  console.log(url);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const diff = (cases) => {
          var dataArr = Object.values(cases);
          var newArr = [];
          for (var i = 0; i < dataArr.length - 1; i++) {
            var difference = dataArr[i + 1] - dataArr[i];
            newArr.push(difference);
          }

          //   console.log(newArr);
          return newArr;
        };

        const labels = (cases) => {
          var labelsArr = Object.keys(cases);
          var newLabelsArr = [];
          for (var i = 1; i < labelsArr.length; i++) {
            var lb = labelsArr[i];
            newLabelsArr.push(lb);
          }

          return newLabelsArr;
        };

        var u = "";
        if (country === "WorldWide") {
          u = data.deaths;
        } else {
          u = data.timeline.deaths;
        }

        // console.log(diff(u));
        // console.log(labels(u));

        var labelArray = labels(u);
        var diffArray = diff(u);
        let dataA = [];

        for (var i = 0; i < 10; i++) {
          dataA.push({ date: labelArray[i], data: diffArray[i] });
        }

        setData(dataA);

        // console.log(dataA);
      });
  }, [url]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.txtHeader}>{country} Corona Deaths</Text>
          <Text style={styles.txtHeader}> last 10 Days</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.deathList}>
              <Text>{item.date}</Text>
              <Text>{item.data}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderColor: "blue",
    borderWidth: 2,
  },
  subContainer: {
    width: "70%",
    backgroundColor: "white",
    height: 250,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    paddingTop: 5,
  },
  deathList: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderColor: "red",
    // borderWidth: 2,
    width: 130,
  },
  txtContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  txtHeader: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
  },
});
