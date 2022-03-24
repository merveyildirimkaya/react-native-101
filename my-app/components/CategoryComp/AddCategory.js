import React,{useState} from 'react'
import { Alert, Modal, Text, TextInput ,StyleSheet,View} from 'react-native'
import MyButton from '../Common/MyButton';
import Spacer from '../Common/Spacer';

const AddCategory = (props) => {
    const [category, setCategory] = useState({
        id:"",
        name:"",
        description:""
    });
    const {modalVisible,setModalVisible,categories,setCategories}= props;

    const ekle=()=>{
        if(!category.name || !category.description){
            Alert.alert("Dikkat", "Tüm alanları doldurunuz",[
                {text:"OK",onPress: ()=> console.log("OK Pressed ")}
            ])
            return
        }
        setCategory({
            id:"",
            name:"",
            description:""
        });

        category.id=Date.now() +Math.floor(Math.random()*100);

        setCategories([category, ...categories]);
        setCategory("");
        setModalVisible(false);
    }
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.modalVisible}
            onRequestClose={()=>{
                setModalVisible(false);
            }}
        >
            <View style={styles.container}>
            <Text>Yeni Kategori</Text>
            <Spacer height="30"/>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>(setCategory({...category,name:text}))}
            value={category.name}
            placeholder="Kategori adını giriniz."
            />
            <Spacer/>
             <TextInput
            style={styles.input}
            onChangeText={(text)=>setCategory({...category,description:text})}
            value={category.description}
            placeholder="Kategori acıklamasını giriniz."
            />
            <Spacer/>
            <MyButton 
            title="Ekle"
            styleText={{color:"white"}}
            icon="plus" 
            styleButton={{backgroundColor:"red"}} 
            onPress={ekle}/>
            </View>
        </Modal>
    )
}

export default AddCategory

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:"#cecece",
        padding:5
    },
    container:{
        backgroundColor:"white",
        borderWidth:1,
        borderTopEndRadius:10,
        padding:20,
        margin:20
    }
    
})