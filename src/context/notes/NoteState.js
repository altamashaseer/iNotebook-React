import NoteContext from './noteContext'
import React, { useState } from 'react'

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //Get all Notes for Auth-token
  const getNotes = async () => {
    //API call
    const url = `${host}/api/notes/fetchallnotes`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyZjBjNTA1ZjA5NmJmOGQyZWZhOTIxIn0sImlhdCI6MTY2NDA5MjMzMn0.kERz7CpnLrM1Qd3XcTcCWLf7MIu9l8JGm4TIyB_VBRo'
      }
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json)
  }

  // Add a note
  const addNote = async (title, description, tag) => {
    //API call
    const url = `${host}/api/notes/addnote`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyZjBjNTA1ZjA5NmJmOGQyZWZhOTIxIn0sImlhdCI6MTY2NDA5MjMzMn0.kERz7CpnLrM1Qd3XcTcCWLf7MIu9l8JGm4TIyB_VBRo'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    //Client
      setNotes(notes.concat(note))
  }

  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    const url = `${host}/api/notes/deletenote/${id}`
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyZjBjNTA1ZjA5NmJmOGQyZWZhOTIxIn0sImlhdCI6MTY2NDA5MjMzMn0.kERz7CpnLrM1Qd3XcTcCWLf7MIu9l8JGm4TIyB_VBRo'
      },
    });
    const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const url = `${host}/api/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyZjBjNTA1ZjA5NmJmOGQyZWZhOTIxIn0sImlhdCI6MTY2NDA5MjMzMn0.kERz7CpnLrM1Qd3XcTcCWLf7MIu9l8JGm4TIyB_VBRo'
      },
      body: JSON.stringify({ title, description, tag })
    });
    // const json = response.json();

    //client side
    let newNotes= JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag
        break;
      }
      setNotes(newNotes);
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;