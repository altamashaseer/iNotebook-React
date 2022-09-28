import React from 'react'

function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3 '>
            <div class="card my-2">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum doloremque quis aperiam, autem labore eveniet, nihil facilis error assumenda laudantium temporibus harum eligendi deserunt tempore accusamus laboriosam quia maiores atque, doloribus quo voluptatum.</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem