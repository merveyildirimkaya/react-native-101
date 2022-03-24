import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { Alert, StyleSheet, ScrollView, View } from 'react-native';
import { Header, ListItem, SpeedDial } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';



const list=[{
  name: "Amy Farha",
  avatar_url:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  subtitle:"Vice President",
},{
  name: "Chris Jackson",
  avatar_url:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  subtitle:"Vice Chairman",
}]



export default function App() {

const [isOpen, setIsOpen]= useState(false)

  return (
    <View style={styles.container}>
      <Header
      leftComponent={{icon:'menu', color: '#fff', iconStyle:{color:"#fff"}}}
      centerComponent={{text: 'FOLLOWERS', style:{ color: '#fff'}}}
      rightComponent={{icon: 'home',  color: '#fff', onPress:()=>{
        Alert.alert("Merhaba")
      }}}
      containerStyle={styles.header}
      />

     <ScrollView>
       {list.map((item,index)=>
       
       <ListItem bottomDivider key={index}>
        <Avatar source={{
          uri: item.avatar_url
        }}/>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>)}
     </ScrollView>

        <SpeedDial isOpen={isOpen} icon={{name:"edit", color:"white"}} 
        openIcon={{name:"close" , color:"white"}}
        onOpen={()=> setIsOpen(true)}
        onClose={()=> setIsOpen(false)}
        buttonStyle={styles.button}
        >
          <SpeedDial.Action icon={{ name: "add", color: "white"}} title="Add"
          onPress={()=>console.log("ekleye basıldı")}
          buttonStyle={styles.button}/>
          <SpeedDial.Action icon={{ name: "delete", color: "white"}} title="Delete"
          onPress={()=>console.log("sile basıldı")}
          buttonStyle={styles.button}/>
        </SpeedDial>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  header:{
    backgroundColor:"red",
    paddingTop:35
  },
  button:{
    backgroundColor:"red"
  }
});
