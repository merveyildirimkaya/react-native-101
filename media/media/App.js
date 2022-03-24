import React,{useRef,useState,useEffect} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View ,Image, Platform, ImagePickerIOS, Alert} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import * as ImagePicker from "expo-image-picker"


export default function App() {

  const renderContent=()=> <View style={styles.sheetContent}>
  <View  style={styles.titles}>
  <Text style={styles.title}>Upload Logo</Text>
  <Text style={styles.subtitle}>Choose your profile picture</Text>
  </View>
  <TouchableOpacity style={styles.button}
  onPress={takePhotoFromCamera}
  >
    <Text style={styles.buttonText}>Take Photo</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}
    onPress={takePhotoFromLibrary}
  >
    <Text  style={styles.buttonText}>Choose from Library</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{...styles.button, backgroundColor:"gray"}}
  onPress={()=> {
    toogleSheet(1)
    setImage("")
  }}
  >
    <Text  style={styles.buttonText}>Cancel</Text>
  </TouchableOpacity>
</View>
const renderHeader= ()=> <View style={styles.headerContent}>
  <View style={styles.headerButton}></View>
</View>

const takePhotoFromCamera = async() => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      aspect:[16,9],
      quality:0.5,
    })

    if(!result.cancelled){
      setImage(result.uri)
    }
}

const takePhotoFromLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync(
      {
        allowsEditing:true,
        aspect:[3,4],
        quality:1,
      }
    );

    if(!result.cancelled){
      setImage(result.uri);
    }
}


  const [image, setImage] = useState("https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80");

  const refSheet = useRef()

  const toogleSheet = (index) => {
    refSheet.current.snapTo(index);
  }


  
  useEffect(async () => {
    if(Platform.OS === "web" ) return;

    const  {granted} = await ImagePicker.getCameraPermissionsAsync();
    const {accesPrivileges}  = await ImagePicker.getMediaLibraryPermissionsAsync();
    if(!granted){
      const {status} = await ImagePicker.requestCameraPermissionsAsync();
      if(status!== "granted"){
        Alert.alert("Kamera kullanımı zorunludur");
      }
    }

    if(accesPrivileges !== "all"){
      const {status} = 
        await ImagePicker.requestMediaLibraryPermissionsAsync();

        if(status!== "granted"){
          Alert.alert("Kamera kullanımı zorunludur");
        }
    }
  }, [])
  
  return (
    <>
    <View style={styles.container}>
    <View style={styles.buttons}>
      <Button title="Open" color="green" 
      onPress={()=> toogleSheet(0)}/>
      <Button title="Close" color="red"
      onPress={()=> toogleSheet(1)}/>
    </View>
    <Image source={{uri: image}} style={styles.image}/>
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
    backgroundColor: 'powderblue',
    alignItems: 'center',
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
  image:{
    width:"100%",
    height:400,
  },
  buttons:{
    width:"100%",
    marginBottom:10,
    flexDirection:"row",
    justifyContent:"space-evenly"
  }
});
