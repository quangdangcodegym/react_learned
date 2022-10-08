import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

import ContactService from '../services/contactService';

const ContactList = (props) => {
    const [state, setState] = useState({
        loading: false,
        contacts: [],
        errorMessage: '',
        keyword: props.kw
    });

    const [keyword, setKeyword] = useState(props.kw);
    useEffect(() => {
        setState({ ...state, loading: true });
        async function getData() {
            let contactRes = await ContactService.getContacts();
            let newContact = [];
            console.log("keyword: " + props.kw)
            if(props.kw!=""){
                newContact = contactRes.data.filter((contact)=>{
                    return contact.name.toLowerCase().includes(props.kw.toLowerCase())
                })
            }else{
                newContact = contactRes.data;
            }
            setState({
                ...state,
                contacts: newContact,
                loading: false
            })
        }
        getData();

    }, [props.kw]);
    

    const { loading, contacts, errorMessage } = state;
    return (
        <>
            {
                loading ? <Spinner /> : (
                    <section className="contact-list">
                        <div className="container">
                            <div className="row">
                                {
                                    contacts.map((contact) => {
                                        return (
                                            <div className="col-6 mb-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row align-items-center">
                                                            <div className="col-3"><img className="avatar-sm rounded-circle"
                                                                src={contact.photoUrl}
                                                                alt="" /></div>
                                                            <div className="col-8">
                                                                <ul className="list-group">
                                                                    <li className="list-group-item">Name: <span className="fw-bold">{contact.name}</span></li>
                                                                    <li className="list-group-item">Mobile: <span
                                                                        className="fw-bold">{contact.mobile}</span></li>
                                                                    <li className="list-group-item">Email: <span
                                                                        className="fw-bold">{contact.email}</span></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-1">
                                                                <div className="d-flex flex-column align-items-center justify-content-between"><a
                                                                    className="btn btn-warning btn-sm" href="/cg-contact/contact/view/13"><i
                                                                        className="fa fa-eye" /></a><a className="btn btn-primary btn-sm my-2"
                                                                            href="/cg-contact/contact/edit/13"><i className="fa fa-edit" /></a><button
                                                                                className="btn btn-danger btn-sm"><i className="fa fa-trash" /></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }


                            </div>
                        </div>
                    </section>
                )
            }
        </>
    );
}
export default ContactList;