import React from "react";
import { Platform, SafeAreaView, StyleSheet} from "react-native";
import Flexbox from "./views/00-Flexbox";
import { StatusBar } from "expo-status-bar";
import ViewComp from "./views/01-ViewComp";
import ScrollViewComp from "./views/02-ScrollViewComp";
import FlatListComp from "./views/03-FlatListComp";
import NoteListComp from "./views/04-NoteListComp";
import CounterComp from "./views/05-CounterComp";
import CategoryComp from "./views/06-CategoryComp";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <CategoryComp/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding:30,
    backgroundColor:"white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
