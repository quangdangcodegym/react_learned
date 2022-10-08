import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {v4} from 'uuid';

import {BrowserRouter as Router,Routes, Switch, Route} from 'react-router-dom';
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  
  const addContactHandler = (contact)=>{
    setContacts([...contacts, {id: v4(), ...contact}]);
  }
  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter(
      (contact)=>{
        return contact.id!==id;
      }
    )
    setContacts(newContactList);
  }
  useEffect(()=>{
    const retriveContacts  = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts){
      setContacts(retriveContacts)
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div ui='ui container'>
        
        <Router>
          <Header />
          <Routes>
            <Route path='/add' element={<AddContact />} />
            <Route path='/' element={<ContactList/>} />
          </Routes>
          
          {/* <Route path='/' component={ContactList} /> */}
          {/* <AddContact addContactHandler = {addContactHandler} />
          <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
        </Router>
    </div>
  );
}

export default App;
