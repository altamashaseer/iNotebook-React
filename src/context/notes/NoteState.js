import NoteContext from './noteContext'

const NoteState = (props) => {
   const state={
        "name":"Altamash",
        "Gym": "Golds"
    }   

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;