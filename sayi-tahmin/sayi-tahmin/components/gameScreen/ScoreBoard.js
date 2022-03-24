import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../shared/Card'
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons"
const ScoreBoard = (props) => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
            <Text> <MCIcons name="progress-clock"/>
                {props.timer}</Text>
            </Card>
            <Card style={styles.card}>
            <Text><MCIcons name="heart-multiple"/>
               {props.shot}</Text>
            </Card>
        </View>
    )
}

export default ScoreBoard

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    card:{
        width:"40%",
        flexDirection:"row",
        justifyContent:"center"
    }
})