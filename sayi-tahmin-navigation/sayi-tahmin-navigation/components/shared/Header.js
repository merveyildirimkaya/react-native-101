import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import globalStyles from "../../globalStyles"

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor: Colors.color2,
        padding:10,
        alignItems:"center",
        elevation:5
    },
    title:{
        color:"#ececec",
        fontSize:20
    }
})