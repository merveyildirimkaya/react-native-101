import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
const ViewComp = () => {
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
      <View style={styles.liste}>
        {sehirler.map((item, index) => {
          return (
            <Text key={index} style={styles.listItem}>
              {item}
            </Text>
          );
        })}
      </View>
    </View>
  );
};
export default ViewComp;
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