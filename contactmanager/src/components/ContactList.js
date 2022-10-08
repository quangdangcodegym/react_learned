import React from 'react';
import CardContact from './ContactCard';
const ContactList  = (props)=>{

    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    };
    const contacts = [{
            id: "1",
            name: "Quang",
            email:"quangdang@gmail.com"
    }];
    const renderContactList = contacts.map((contact)=>{
        return (
            <CardContact contact={contact} clickHandler = {deleteContactHandler} key={contact.id}/>
        );
    })
    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    );
}
export default ContactList;