import React from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CountryListModal = ({ modalVisible }) => {
  return (
    <View>
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
    </View>
  );
};

export default CountryListModal;

const styles = StyleSheet.create({});
