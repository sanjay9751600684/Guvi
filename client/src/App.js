import './App.css';
import React from 'react';
import Signup from './signup';
import SignIn from './signIn';
import OtherDetails from './otherDetails';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/details' element={<OtherDetails/>}/>

      </Routes>
   
    
    </div>
  );
}

export default App;
