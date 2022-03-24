import React from 'react';
import HomeScreen from './screens/HomeScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import FAIcons from "react-native-vector-icons/FontAwesome5"
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"white",
        tabBarInactiveTintColor:"gray",
        tabBarInactiveBackgroundColor:"#ececec",
        tabBarActiveBackgroundColor:"red"
      }} >
        <Tab.Screen name="Home"
         component={HomeScreen}
         options={{
           tabBarIcon: ({focused})=> <FAIcons name="home" size={20} color={focused ? "white":"gray"}/>
         }}
         />
        <Tab.Screen name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused})=> <FAIcons name="cog" size={20} color={focused ? "white":"gray"}/>
        }}/>
        <Tab.Screen name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused})=> <FAIcons name="user-alt" size={20} color={focused ? "white":"gray"}/>
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
