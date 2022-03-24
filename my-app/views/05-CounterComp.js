import React, {useState} from 'react'
import { View,TouchableHighlight ,Text, StyleSheet} from 'react-native'
import CounterScreen from '../components/CounterComp/CounterScreen'
import MyButton from '../components/Common/MyButton'

const CounterComp = () => {

    const [counter, setCounter] = useState(0)

    const artir = ()=>{
        setCounter(counter+1);
    }
    const azalt = ()=>{
        if(counter<=0) return;
        setCounter(counter-1);
    }
    const reset = ()=>{
        setCounter(0);
    }
    return <View>

             <CounterScreen counterValue={counter}/>
             <View style={styles.buttonBox}>
            <MyButton underlayColor="red" onPress={artir} title="Artır" icon="plus-circle-outline" 
            style={{backgroundColor:"yellow"}}/>
            <MyButton underlayColor="red" onPress={azalt} title="Azalt" icon="minus-circle-outline"/>
            <MyButton underlayColor="red" onPress={reset} title="Reset" icon="lock-reset"/>
            </View>
        </View> 
}

export default CounterComp

const styles = StyleSheet.create({
    buttonBox:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        margin:20
    }
})