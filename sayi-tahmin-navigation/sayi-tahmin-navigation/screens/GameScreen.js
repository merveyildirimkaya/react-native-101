import React,{useState,useEffect,useContext,useCallback} from 'react'
import { View,StyleSheet, Text, TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native'
import ScoreBoard from '../components/gameScreen/ScoreBoard'
import Spacer from '../components/shared/Spacer'
import Card from '../components/shared/Card'
import MyButton from '../components/shared/MyButton'
import Colors from '../constants/colors'
import Initials from '../constants/initials'
import  Toast  from 'react-native-toast-message'
import StoreContext from '../store'
import { useFocusEffect, useNavigation } from '@react-navigation/core'

const GameScreen = () => {

    const context = useContext(StoreContext)

    const navigation = useNavigation();

    const {setShot, setTimer, setTotalPoint,setGameResult, setRandomNumber,timer , shot,randomNumber}= context;

    const [number, setNumber]= useState("");

    useFocusEffect(
        useCallback(() => {

            setShot(Initials.totalShot)
            setTotalPoint(0);
            setGameResult("");
            const random = Math.floor(Math.random()*
            (Initials.randomNumberUpLimit-Initials.randomNumberDownLimit +1) +Initials.randomNumberDownLimit  );
            setRandomNumber(random)
            setNumber("");
            setTimer(Initials.totalTime);
            
            const interval = setInterval(()=>{
             setTimer((tm)=>tm-1); //tm timer ı tutar set fonksiyonu timer a ait oldugu için 
            },1000);
    
            return () => {
                 clearInterval(interval)
                };
            },[])
    )

    useEffect(()=>{
        if(timer<=0) endGame("lost");
    },[timer])

    const handleGuess = () => {

        const enteredNumber = parseInt(number);

        if(
            isNaN(enteredNumber) || enteredNumber < Initials.randomNumberDownLimit || 
           enteredNumber > Initials.randomNumberUpLimit)
        {
            Toast.show({
                type:"error",
                text1:`Number should be between ${Initials.randomNumberDownLimit} and ${Initials.randomNumberUpLimit}`
            })
            return;
        } 

        if(randomNumber===enteredNumber){ //Rakam dogru tahmin edildi ise
           endGame("win")
        }else if(randomNumber>enteredNumber){
            Toast.show({
                type:"info",
                text1:`Must be greater then ${enteredNumber}`
            })
            checkShot();

        }else{
            Toast.show({
                type:"info",
                text1:`Must be less then ${enteredNumber}`
            })
            checkShot();
        }
    }
    const checkShot = ()=>{
        if(shot>0){
            setShot(shot-1)
            setNumber("");
        }else endGame("lost")
       
    }
    const endGame=(result)=>{
        setGameResult(result);
        setTotalPoint(timer*shot);
        navigation.navigate("Summary")
    }
    
    return (
     <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
       <View style={styles.screen}>
           <ScoreBoard />
           <Spacer/>
           <Card>
               <Text style={styles.text}>Type a Number</Text>
               <TextInput
               style={styles.input}
               onChangeText={(num)=>setNumber(num)}
               value={number}
               keyboardType="numeric"
               maxLength={3}
               />
              <MyButton title="Guess" styleButton={styles.button} 
              onPress={handleGuess}/>
           </Card>
       </View>
       </TouchableWithoutFeedback>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        padding:20,
    },
    input:{
        textAlign:"center",
        fontSize:25,
        borderBottomWidth:1,
        borderBottomColor:"black"
    },
    text:{
        textAlign:"center"
    },
    button:{
        marginTop:10,
        backgroundColor: Colors.color3,
        paddingVertical:15
    }
})