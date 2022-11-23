import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Issuer from './pages/Issuer';
import Receiver from './pages/Receiver';
import Verifier from './pages/Verfier';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/issuer" element={<Issuer />}></Route>
        <Route path="/verifier" element={<Verifier />}></Route>
        <Route path="/reciever" element={<Receiver />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App