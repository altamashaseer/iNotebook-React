import NoteContext from './noteContext'
import React, { useState } from 'react'

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "63302fd1e98d58eaxcbc0c83376",
      "user": "632f0c505f096bf8d2efa921",
      "title": "my title",
      "description": "hello world",
      "tag": "personal",
      "date": "1664102353024",
      "__v": 0
    },
    {
      "_id": "6330361017fbdq7fbbdc13e014",
      "user": "632f0c505f096bf8d2efa921",
      "title": "my title",
      "description": "hello world firseeee",
      "tag": "personal",
      "date": "1664103952075",
      "__v": 0
    },
    {
      "_id": "63309bcf1bda3f5ec6xa747f4c",
      "user": "632f0c505f096bf8d2efa921",
      "title": "my title",
      "description": "hello world firseeee concurrently",
      "tag": "personal",
      "date": "1664129999055",
      "__v": 0
    },
    {
      "_id": "63302fd1e98d58ebc0axc83376",
      "user": "632f0c505f096bf8d2efa921",
      "title": "my title",
      "description": "hello world",
      "tag": "personal",
      "date": "1664102353024",
      "__v": 0
    },
    {
      "_id": "6330361017fb7fbbdcaxa13e014",
      "user": "632f0c505f096bf8d2efa921",
      "title": "my title",
      "description": "hello world firseeee",
      "tag": "personal",
      "date": "1664103952075",
      "__v": 0
    },
    {
      "_id": "63309bcacf1bda3f5ec6747f4c",
      "user": "632f0c505f096bf8d2efa921",
      "title": "my title",
      "description": "hello world firseeee concurrently",
      "tag": "personal",
      "date": "1664129999055",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial)

  //Add a note
  const addNote = (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note")
    const note = {
      "_id": "61322f1a19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  //Delete a note
  const deleteNote = () => {

  }
  //Edit a note
  const editNote = () => {

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;