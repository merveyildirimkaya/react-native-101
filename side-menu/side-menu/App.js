import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet} from 'react-native';
import screens from './constants/screens';
import FAIcons from "react-native-vector-icons/FontAwesome5"
import MenuContent from './components/MenuContent';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="settings"

    screenOptions={{
      drawerType:"front",
      drawerPosition:"left",
      drawerActiveTintColor:"pink",
     // drawerInactiveBackgroundColor:"purple"
    }}
    drawerContent={(props)=> <MenuContent {...props}/>}
    >

      {screens.map(screen=>(
          <Drawer.Screen 
          key= {screen.key}
          name= {screen.title}
          component={screen.component}
          options={{
            drawerIcon: ()=><FAIcons name={screen.icon} 
            size={15}
            style={styles.icon}
            />,
          }}/>
      ))}
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon:{
    width:20,
  }
});
