import React, { useState } from "react";
import {View} from "react-native";
import AddNote from "../components/FlatListComp/AddNote";
import NoteList from "../components/FlatListComp/NoteList";
const NoteListComp = () => {
  const [noteList, setNoteList] = useState([]);

  const ekle = (note) => {
      setNoteList([note, ...noteList]);
      
  };
  return (
    <View>
    <AddNote ekleFn={ekle}/>
    <NoteList liste={noteList} />
    </View>
  );
};
export default NoteListComp;
