import React from 'react'
import { View } from 'react-native'
const Spacer = (props) => {
    return (
        <View style={{height: props.height ? parseInt(props.height):20}}> 
            
        </View>
    )
}

export default Spacer
