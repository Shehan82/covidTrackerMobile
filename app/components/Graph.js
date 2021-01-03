import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
} from "react-native";

const Graph = ({ url, country, keyword }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.message != null) {
          return setData([{ data: "provided", date: "No data" }]);
        }

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
        if (keyword === "Deaths") {
          if (country === "WorldWide") {
            u = data.deaths;
          } else {
            u = data.timeline.deaths;
          }
        } else if (keyword === "Recovered") {
          if (country === "WorldWide") {
            u = data.recovered;
          } else {
            u = data.timeline.recovered;
          }
        } else {
          if (country === "WorldWide") {
            u = data.cases;
          } else {
            u = data.timeline.cases;
          }
        }

        // console.log(diff(u));
        // console.log(labels(u));

        var labelArray = labels(u);
        var diffArray = diff(u);
        let dataA = [];

        for (var i = 0; i < 10; i++) {
          dataA.push({ date: labelArray[i], data: diffArray[i] });
        }

        setData(dataA.reverse());

        // console.log(dataA);
      });
  }, [url]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.txtContainer}>
          <Text numberOfLines={1} style={styles.txtHeader}>
            {country} Corona {keyword}
          </Text>
          <Text style={styles.txtHeader}> last 10 Days</Text>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          {/* <FlatList
            scrollEnabled={false}
            data={data}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => (
              <View style={styles.deathList}>
                <Text>{item.date}</Text>
                <Text>{item.data}</Text>
              </View>
            )}
          /> */}
          {data.map((country) => (
            <View key={country.date} style={styles.deathList}>
              <Text>{country.date}</Text>
              <Text>{country.data}</Text>
            </View>
          ))}
        </SafeAreaView>
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
    marginTop: 100,
    // borderColor: "blue",
    // borderWidth: 2,
  },
  subContainer: {
    width: "70%",
    backgroundColor: "white",
    height: Platform.OS === "ios" ? 280 : 320,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 2,
    // paddingTop: 10,
  },
  deathList: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderColor: "red",
    // borderWidth: 2,
    width: 130,
    marginVertical: 2,
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
