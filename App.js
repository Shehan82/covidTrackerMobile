import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

import { FlatList } from "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigations/AppNavigator";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App({ navigation }) {
  const [countries, setCountries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("WorldWide");
  const [coronaInfo, setCoronaInfo] = useState({});
  const [url, setUrl] = useState(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
  );
  const [component, setComponent] = useState({
    comp: <WelcomeScreen />,
  });

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    onSelectCountry();
    // welcome();
  }, [selectedCountry]);

  const getCountries = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
          flag: country.countryInfo.flag,
        }));
        setCountries(countries);
      });
  };

  const modalOn = () => {
    setModalVisible(true);
  };

  const modalOff = () => {
    setModalVisible(false);
  };

  const onPressSetSelectedCountry = (country) => {
    setSelectedCountry(country);
  };

  const welcome = () => {
    setTimeout(() => {
      setComponent({
        comp: (
          <NavigationContainer>
            <AppNavigator
              countryList={countries}
              onPressModalVisiblityOn={modalOn}
              onPressModalVisiblityOff={modalOff}
              selectedCountry={selectedCountry}
              onPressWorldWide={() => {
                setSelectedCountry("WorldWide");
                setModalVisible(false);
              }}
              onPressSetSelectedCountry={onPressSetSelectedCountry}
              coronaInfo={coronaInfo}
              url={url}
              modalVisible={modalVisible}
            />
          </NavigationContainer>
        ),
      });
    }, 6000);
  };

  const onSelectCountry = async () => {
    console.log(selectedCountry);
    const link =
      selectedCountry === "WorldWide"
        ? "https://disease.sh/v3/covid-19/historical/all?lastdays=11"
        : `https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=11`;

    // const link = `https://disease.sh/v3/covid-19/historical/${countryCode}?lastdays=30`;
    setUrl(link);
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

  return (
    <View style={styles.container}>
      {/* {component.comp} */}
      {/* <WelcomeScreen /> */}
      <NavigationContainer>
        <AppNavigator
          countryList={countries}
          onPressModalVisiblityOn={modalOn}
          onPressModalVisiblityOff={modalOff}
          selectedCountry={selectedCountry}
          onPressWorldWide={() => {
            setSelectedCountry("WorldWide");
            setModalVisible(false);
          }}
          onPressSetSelectedCountry={onPressSetSelectedCountry}
          coronaInfo={coronaInfo}
          url={url}
          modalVisible={modalVisible}
        />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
