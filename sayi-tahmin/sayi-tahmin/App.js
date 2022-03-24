import React ,{useState} from 'react';
import { StyleSheet ,View ,StatusBar} from 'react-native';
import Header from './components/shared/Header';
import Colors from './constants/colors';
import Initials from './constants/initials';
import GameScreen from './screens/GameScreen';
import GameSummaryScreen from './screens/GameSummaryScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import  Toast  from 'react-native-toast-message'

export default function App() {

  //   /*   "softwareKeyboardLayoutMode" : "pan"*/ app json dosyası android : { buraya ! içerik klavye acıldıgında sıkıstırlmasın diye yazılır}

  const [randomNumber, setRandomNumber] = useState();
  const [timer,setTimer]= useState(Initials.totalTime);
  const [shot, setShot] = useState(Initials.totalShot);
  const [totalPoint, setTotalPoint] = useState(0);
  const [gameStatus, setGameStatus] = useState("welcome"); // or start or end
  const [gameResult, setGameResult] = useState(""); //win or lose


  return (
 
    <View style={styles.container}>
    <Header title= {gameStatus === "welcome" ? "Welcome" : gameStatus === "start" ? "Guess the number" : "Game Summary"}/>
    {gameStatus === "welcome" ?
     (<WelcomeScreen setGameStatus={setGameStatus}/>) : (gameStatus === "start" ? 
      <GameScreen setShot={setShot} setTotalPoint={setTotalPoint} setTimer={setTimer} setGameResult={setGameResult} 
      setGameStatus={setGameStatus} setRandomNumber={setRandomNumber}
      timer={timer} shot={shot} randomNumber={randomNumber}/> : 
      (<GameSummaryScreen  setGameStatus={setGameStatus} gameResult={gameResult} totalPoint={totalPoint}
      randomNumber={randomNumber} timer={timer} shot={shot}/>)) }
    <StatusBar backgroundColor={Colors.color1}/>
    <Toast visibilityTime={2000} topOffset={65}/>
    </View>
 
  );
}
const styles=StyleSheet.create({
  container:{
    marginTop:20,
    flex:1,
    justifyContent:"flex-start"
  }
})