import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import './App.css';
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div class="principal">
    <App>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/login" element={<Login />} />
       </Routes>
     </BrowserRouter>
     </App>
     </div>
  );
}

export default App;
