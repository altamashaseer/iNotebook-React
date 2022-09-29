import React from 'react'

function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3 '>
            <div className="card my-2">
                <div className="card-body">
                    <div className="d-flex ">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-2"></i>
                        <i className="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum doloremque quis aperiam, autem labore eveniet, .</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem