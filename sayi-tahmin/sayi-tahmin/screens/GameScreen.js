import React,{useState,useEffect} from 'react'
import { View,StyleSheet, Text, TextInput,TouchableWithoutFeedback, Keyboard } from 'react-native'
import ScoreBoard from '../components/gameScreen/ScoreBoard'
import Spacer from '../components/shared/Spacer'
import Card from '../components/shared/Card'
import MyButton from '../components/shared/MyButton'
import Colors from '../constants/colors'
import Initials from '../constants/initials'
import  Toast  from 'react-native-toast-message'

const GameScreen = (props) => {

    const {setShot, setTimer, setTotalPoint,setGameStatus, setGameResult, setRandomNumber,timer , shot,randomNumber}= props;

    const [number, setNumber]= useState("");
    const [message, setMessage]= useState("");

    
    useEffect(() => {
        setShot(Initials.totalShot)
        setTotalPoint(0);
        setGameResult("");
        const random = Math.floor(Math.random()*
        (Initials.randomNumberUpLimit-Initials.randomNumberDownLimit +1) +Initials.randomNumberDownLimit  );
        setRandomNumber(random)

        setTimer(Initials.totalTime);

   
    }, []);

    useEffect(() => {
        const interval = setInterval(()=>{
        if(timer>0) setTimer(timer-1);
        else endGame("lost")
        },1000);
    return () => clearInterval(interval);
    });

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
        setGameStatus("end");
        setGameResult(result);
        setTotalPoint(timer*shot);
    }
    
    return (
     <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
       <View style={styles.screen}>
           <ScoreBoard  timer ={timer} shot ={shot}/>
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