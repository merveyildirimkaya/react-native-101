import React,{useContext} from 'react'
import Card from '../components/shared/Card'
import { Text,View ,StyleSheet} from 'react-native'
import Spacer from '../components/shared/Spacer'
import MyButton from '../components/shared/MyButton'
import Colors from '../constants/colors'
import Initials from '../constants/initials'
import StoreContext from '../store'
import { useNavigation } from '@react-navigation/core'
const GameSummaryScreen = () => {

    const context = useContext(StoreContext)

    const navigation= useNavigation();
    
    const {gameResult, totalPoint, randomNumber, timer,shot} = context;
    return (
        <View style={styles.screen}>
            <Text style={styles.resultText}>{gameResult === "win" ? "🏆🏆🏆 YOU WIN 🏆🏆🏆" : " 👎 👎 👎 YOU LOST 👎 👎 👎" } </Text>
            <Card  style={styles.card}>
                <Text style={styles.score}>{totalPoint}</Text>
                <Text>Point</Text>
            </Card>
            <Spacer/>
            <Text style={styles.summary}>Summary</Text>
            <Text>The number was: {randomNumber}</Text>
            <Text>Total Time: {timer}/{Initials.totalTime}</Text>
            <Text>Total Shot: {shot}/{Initials.totalShot}</Text>
            <Spacer/>
            <MyButton title="Play Again" styleButton={styles.button} onPress={()=> navigation.navigate("Game")}/>
        </View>
    )
}

export default GameSummaryScreen

const styles= StyleSheet.create({
    screen:{
        justifyContent: "center",
        alignItems: "center",
        flex:1
    },
    resultText:{
        fontSize:18
    },
    score:{
        fontSize:30,
        fontWeight:"700",
    },
    summary:{
        fontWeight:"700",
    },
    button:{
        backgroundColor:Colors.color3
    },
    card:{
        width:"50%",
        alignItems:"center"
    }
})