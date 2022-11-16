import React from 'react'
import AddNote from './AddNote';


export const Home = (props) => {
const {showAlert}=props;
  return (
    <div>
      <AddNote showAlert={showAlert}/>
    </div>
  )
}
