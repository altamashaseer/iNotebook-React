import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote(props) {
    const context = useContext(noteContext)
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault(); //prevent page from reload  
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert('Note added!', 'success')
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (<>
        <div className='back'></div>
        <div className="container my-3" id='add-note'>
            <h2 className='text-center'>Add a Note <i class="fa-solid fa-file-pen"></i></h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="title"><b>Title</b></label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} minLength={3} required onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><b>Description</b></label>
                    <textarea type="Text" className="form-control" id="description" name='description' value={note.description} minLength={5} required onChange={onChange} cols="30" rows="5"></textarea>
                    {/* <input type="Text" className="form-control" id="description" name='description' value={note.description} minLength={5} required onChange={onChange} /> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><b>Tag</b></label>
                    <input type="Text" className="form-control" id="tag" name='tag' value={note.tag} minLength={3} required onChange={onChange} />
                </div>
                <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-dark" onClick={handleClick}>Add</button>
            </form>
        </div>
    </>
    )
}

export default AddNote