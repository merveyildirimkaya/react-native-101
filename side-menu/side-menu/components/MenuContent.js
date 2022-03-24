import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { ImageBackground, ScrollView ,Image,View,StyleSheet, StatusBar} from 'react-native'
import bgImage from "../assets/pinkBackground.jpg"
import logoImage from "../assets/huebris.png"
const MenuContent = (props) => {
    return (
        <ScrollView>
            <ImageBackground source={bgImage} style={styles.bg}>
                <Image source ={logoImage}
                style={styles.logo}
                />
            </ImageBackground>
        
        <View>
            <DrawerContentScrollView>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
        </View>
        </ScrollView>
    )
}

export default MenuContent

const styles= StyleSheet.create({
    bg:{
        height:100,
        width:"100%",
        paddingTop:StatusBar.currentHeight,
    },
    logo:{
        margin:10,
        height:50,
        width:50,
    }
})