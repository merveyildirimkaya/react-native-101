import React from 'react'
import { Text, StyleSheet } from 'react-native'
const Note = (props) => {
    return <Text style={styles.listItem}>{props.noteData}</Text>
}

export default Note

const styles = StyleSheet.create({

    listItem: {
      backgroundColor: "#ececec",
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },

  });