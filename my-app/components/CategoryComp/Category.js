import React from 'react'
import { FlatList, View,Text, StyleSheet ,Alert} from 'react-native'
import MyButton from '../Common/MyButton'
const Category = (props) => {
    const {categories, setCategories} = props;

    const sil =(id)=>{
        Alert.alert("Dikkat", "Silmek istediginizden emin misiniz",[
        {   text:"Evet",onPress: ()=>{
            setCategories(categories.filter(cat=> cat.id !== id));}
        },
            {text:"Hayır",
            onPress: ()=> console.log("Hayır Pressed ")
        }
        ])

    }

    return (
        <View>
            <Text>Kategoriler ({categories.length})</Text>
                <FlatList
                data={categories}
                renderItem={(category)=>
                    <View  style={styles.category}> 
                    <View> 
                        <Text style={styles.name}>{category.item.name}</Text>
                        <Text style={styles.desc}>{category.item.description}</Text>
                    </View>
                        <MyButton icon="delete" 
                        styleButton={{backgroundColor:"gray"}} 
                        styleText={{fontSize:20}}
                        onPress={()=>sil(category.item.id)}
                        />
                    </View>}
                keyExtractor={(item,index)=>index}
                />
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    category:{
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    name:{
        fontSize: 18,
    },
    desc:{
        fontStyle: "italic"
    }
})