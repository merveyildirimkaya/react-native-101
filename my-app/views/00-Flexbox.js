import React from "react";
import { Button, StyleSheet, Text, Image, View } from "react-native";
const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Welcome to My App</Text>
        <Image 
        style={styles.foto}
        source={{uri:"https://images.unsplash.com/photo-1597742800947-e17e915b8d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"}}/>
      </View>
      <View style={styles.bottombar}>
        <Button title="Home" color="#fc5ca7" />
        <Button title="About" color="#fc5ca7" />
        <Button title="Contact" color="#fc5ca7" />
      </View>
    </View>
  );
};
export default Flexbox;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#82023e",
    flex: 1,
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  content: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottombar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  foto:{
    width:270,
    height:260,
  }
});