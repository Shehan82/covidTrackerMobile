import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DeathsScreen from "./app/screens/DeathsScreen";
import AboutScreen from "./app/screens/AboutScreen";
import RecoveriesScreen from "./app/screens/RecoveriesScreen";
import CasesScreen from "./app/screens/CasesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SubApp() {
  const [countries, setCountries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("WorldWide");
  const [coronaInfo, setCoronaInfo] = useState({});
  const [url, setUrl] = useState(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
  );

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    onSelectCountry();
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
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {},

        labelPosition: "below-icon",
        labelStyle: {
          fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
        },
      }}
    >
      <Tab.Screen
        name="Deaths"
        // component={DeathsScreen}
        children={() => (
          <DeathsScreen
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
            modalVisible={modalVisible}
            url={url}
          />
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book-dead" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Recovery"
        children={() => (
          <RecoveriesScreen
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
            modalVisible={modalVisible}
            url={url}
          />
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="address-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cases"
        // component={CasesScreen}
        children={() => (
          <CasesScreen
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
            modalVisible={modalVisible}
            url={url}
          />
        )}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book-medical" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="API" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="app" component={SubApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
