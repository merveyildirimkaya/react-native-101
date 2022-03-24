import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
const FlatListComp = () => {
  const [sehir, setSehir] = useState("");
  const [sehirler, setSehirler] = useState([]);
  const ekle = () => {
    setSehirler([sehir, ...sehirler]);
    setSehir("");
  };
  return (
    <View>
      <TextInput
        style={styles.textBox}
        placeholder="Where are you?"
        value={sehir}
        onChangeText={(e) => {
          setSehir(e);
        }}
      />
      <Button title="Ekle" color="red" onPress={ekle} />
      <FlatList
        style={styles.liste}
        data={sehirler}
        renderItem={(data) => <Text style={styles.listItem}>{data.item}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
export default FlatListComp;
const styles = StyleSheet.create({
  textBox: {
    padding: 10,
    borderColor: "#cecece",
    borderWidth: 1,
    marginBottom: 5,
  },
  listItem: {
    backgroundColor: "#ececec",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  liste: {
    marginVertical: 20,
  },
});