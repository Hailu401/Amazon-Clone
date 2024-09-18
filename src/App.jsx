import React, { useEffect } from 'react';
import Header from './Components/Header'
import Checkout from './Components/Checkout'
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './Components/Login';
import { useStateValue } from './Components/StatePovider';
import { auth } from './Components/firebase';

function App() {
  const [ {}, dispatch]= useStateValue();
  useEffect( () => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
