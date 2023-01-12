import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Issuer from './pages/Issuer';
import Receiver from './pages/Receiver';
import Home from './pages/Home';
import Verifier from './pages/Verifier';
function App() {
  
  return (
    <Verifier />
  )
}

export default App