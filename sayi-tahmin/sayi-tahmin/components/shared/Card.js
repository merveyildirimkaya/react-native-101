import React from 'react'
import { ProgressViewIOSComponent, StyleSheet, Text, View} from 'react-native'

const Card = (props) => {
    return (
      <View style={{...styles.card, ...props.style}}>
          {props.children}
      </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        padding:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#cccccc",
        elevation:5
    }
})