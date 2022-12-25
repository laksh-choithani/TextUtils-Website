import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState({
    color: 'black',
    backgroundColor: 'white'
  });  
  const togglemode = ()=>{
    if(mode.color==='black')
    {
      setmode({
        color: 'white',
        backgroundColor: 'black'
      })
      document.body.style.backgroundColor = 'black';
    }
    else
    {
      setmode({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <BrowserRouter> 
        <div className='container bg-dark'>
          <Navbar mode={mode} togglemode={togglemode}/>
        </div>
        <div className="container my-4">
          <Routes>
              <Route exact path="/about" element={<About mode={mode} />}/> 
              <Route path="/" element={<TextForm mode={mode} headings = "Enter Text Here To Analyze Below"/> }/> 
          </Routes>
        </div>
    </BrowserRouter>
   </>
  );
}
export default App;
