import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import MyNotes from './components/MyNotes';
import LoadingBar from 'react-top-loading-bar';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [progress, setProgress] = useState(0) //loading bar


  return (
    <>
      <NoteState>
        <BrowserRouter>
          <LoadingBar color='#2e8cf7' progress={progress} />
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="mynotes" element={<MyNotes showAlert={showAlert} />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login showAlert={showAlert} setProgress={setProgress} />} />
              <Route path="signup" element={<Signup showAlert={showAlert}  setProgress={setProgress}/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
