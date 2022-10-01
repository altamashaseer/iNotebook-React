import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';


function Notes() {
    const context = useContext(noteContext)
    const { notes } = context;
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((element) => {
                    return <NoteItem key={element._id} note={element} />
                })}
            </div>
        </>
    )
}

export default Notes
