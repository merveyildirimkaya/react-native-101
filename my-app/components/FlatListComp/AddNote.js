import React , {useState} from 'react'
import { View,Button,TextInput,StyleSheet } from 'react-native';

const AddNote = (props) => {
    const [note, setNote] = useState("");

    const ekle=()=>{
        props.ekleFn(note);
        setNote("");
    }
  
    return (
        <View>
              <TextInput
                    style={styles.textBox}
                    placeholder="Where are you?"
                    value={note}
                    onChangeText={(e) => {
                    setNote(e);
                    }}
      />
      <Button title="Ekle" color="red" onPress={ekle} />
        </View>
    )
}

export default AddNote


const styles = StyleSheet.create({
    textBox: {
      padding: 10,
      borderColor: "#cecece",
      borderWidth: 1,
      marginBottom: 5,
    },
  });