import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import Welcome from './components/Welcome/Welcome'
import App from './App';
import Topbar from './components/Topbar/Topbar';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Protected from './components/Auth/Protected'
import CreateFlashcard from './components/Flashcard/CreateFlashcard'
import AuthProvider from './components/Auth/AuthProvider'
import User from './components/User/User'  

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Topbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app" element={<Protected><App /></Protected>} />
          <Route path="/create" element={<Protected><CreateFlashcard /></Protected>} />
          <Route path="/user" element={<Protected><User /></Protected>} /> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();