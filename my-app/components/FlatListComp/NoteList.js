import React from 'react'
import { FlatList, StyleSheet} from 'react-native'
import Note from './Note'


const NoteList = (props) => {

    return  <FlatList
        style={styles.liste}
        data={props.liste}
        renderItem={(note) => <Note noteData={note.item}/>}
        keyExtractor={(item, index) => index}
      />
       
}

export default NoteList
const styles = StyleSheet.create({
    liste: {
      marginVertical: 20,
    },
  });