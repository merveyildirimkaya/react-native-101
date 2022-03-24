import React from 'react'
import { StyleSheet, View ,Text} from 'react-native'
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons"
const CounterScreen = (props) => {
    return (
       <View style={styles.card}>
           <View style={styles.title}>
               <Text>
               <MCIcons name="cog-counterclockwise" style={styles.icon}/>Counter
               </Text>
           </View>
           <View>
           <Text style={styles.valueText}>
                {props.counterValue}
               </Text>
           </View>
       </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    card:{
        borderWidth:1,
        borderColor:"gray",
        borderRadius: 10,
        alignItems:"center",
        padding:20,
    },
    title:{
        marginBottom:20
    },
    valueText:{
        fontSize:30,
        fontWeight:"700"
    },
    icon:{
        fontSize:18
    }
})