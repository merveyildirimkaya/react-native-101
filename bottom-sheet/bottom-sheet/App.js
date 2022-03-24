import React,{useRef} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const renderContent=()=> <View style={styles.sheetContent}>
  <View  style={styles.titles}>
  <Text style={styles.title}>Upload Logo</Text>
  <Text style={styles.subtitle}>Choose your profile picture</Text>
  </View>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Take Photo</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}>
    <Text  style={styles.buttonText}>Choose from Library</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{...styles.button, backgroundColor:"gray"}}>
    <Text  style={styles.buttonText}>Cancel</Text>
  </TouchableOpacity>
</View>
const renderHeader= ()=> <View style={styles.headerContent}>
  <View style={styles.headerButton}></View>
</View>

export default function App() {

  const refSheet = useRef()

  const toogleSheet = (index) => {
    refSheet.current.snapTo(index);
  }
  
  return (
    <>
    <View style={styles.container}>
      <Button title="Open" color="green" 
      onPress={()=> toogleSheet(0)}/>
      <Button title="Close" color="red"
      onPress={()=> toogleSheet(1)}/>
    </View>
    <BottomSheet
    ref={refSheet}
    enabledContentGestureInteraction={false}
    snapPoints={[290,50]}
    initialSnap={1}
    renderContent={renderContent}
    renderHeader={renderHeader}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: 'powderblue',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingTop:50,
  },
  sheetContent:{
    backgroundColor:"white",
    padding:20,
  },
  titles:{
    alignItems:"center",
    marginBottom:20
  },
  title:{
    fontSize:25,
  },
  subtitle:{
    fontSize:12,
    color:"gray",
  },
  button:{
    backgroundColor:"tomato",
    padding:10,
    borderRadius:10,
    marginVertical:5,
    alignItems:"center",
  },
  buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:15,
  },
  headerContent:{
    alignItems:"center",
    backgroundColor:"white",
    paddingTop:10,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  headerButton:{
    marginVertical:10,
    width:100,
    height:5,
    backgroundColor: "red",
    borderRadius:5,
    elevation:2
  },
});
