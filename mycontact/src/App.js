
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import ContactList from './components/ContactList';


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import AddContact from './components/AddContact';

function App() {
  const notify = () => toast("Wow so easy!");
  const [kw, setKw] = useState("");
  const onKwChange = (kw)=>{
    setKw(kw);
  }
  return (
    <>
    <BrowserRouter>
        <ToastContainer autoClose={2000}/>
        <NavBar />
        <SearchBar onKwChange = {onKwChange}/>
        
        <Routes>
            <Route path='/' element={<ContactList kw={kw} />} />
            <Route path='/add' element={<AddContact/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
