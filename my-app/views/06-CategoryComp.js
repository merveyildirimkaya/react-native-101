import React,{useState} from 'react'
import { View } from 'react-native'
import AddCategory from '../components/CategoryComp/AddCategory'
import Category from '../components/CategoryComp/Category'
import FAB from '../components/Common/FAB'
const CategoryComp = () => {
    const [categories, setCategories] = useState([
        {id:1, name:"Cerezler", description:"fındık, fıstık, leblebi"},
        {id:2,name:"Meyveler", description:"elma, armut, ayva"},
        {id:3,name:"Sebzeler", description:"domates, biber, patlıcan"},
    ]);

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={{flex:1}}>
            <Category categories={categories} setCategories={setCategories}/>
            <AddCategory
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible}
            categories={categories}
            setCategories={setCategories}
            />
            <FAB icon="plus" onPress={()=>setModalVisible(true)}/>
        </View>
    )
}

export default CategoryComp
