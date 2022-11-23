import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Issuer from './pages/Issuer';
import Reciever from './pages/Reciever';
import Verifier from './pages/Verfier';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/issuer" element={<Issuer />}></Route>
        <Route path="/verifier" element={<Verifier />}></Route>
        <Route path="/reciever" element={<Reciever />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App