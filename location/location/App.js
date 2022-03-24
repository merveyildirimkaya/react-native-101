import { StatusBar } from 'expo-status-bar';
import React,{useState , useEffect} from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import * as Location  from "expo-location"

export default function App() {

  const [location, setLocation] = useState(
    {
      coords: {
        "latitude": 41.0912343,
        "longitude": 28.9181089,
      },
    }
  );

  useEffect(async () => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== "granted"){
      Alert.alert("Location is required")
      return;
    }

    const lc = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High
    });

    setLocation(lc);
  }, [])
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      showsUserLocation={true}
      userLocationPriority="high"
      showsMyLocationButton={true}
      region={{
        latitude:  location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        <Marker 
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        }}/>
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
});
