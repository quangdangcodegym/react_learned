import noAvatar from '../asset/images/no-avatar.png';
import React, { useState, useEffect } from 'react';
import GroupService from '../services/groupService';
import Spinner from './Spinner';

const AddContact = () => {
    const [contactState, setContactState] = useState({
        loading: false,
        contact: {
            name: '',
            photoUrl: '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId: 0
        },
        groups: [],
        errorMessage: ''
    })

    const handleSelectInputChange = (event)=>{
        setContactState({
            ...contactState,
            contact: {
                ...contactState.contact,
                groupId: event.target.value
            }
        })
        console.log("handleSelectInputChange");
        console.log(contactState)
    }
    const handleInputValue = (event)=>{
        setContactState({
            ...contactState,
            contact: {
                ...contactState.contact,
                [event.target.name] : event.target.value
            }
        })
    }
    const submitContact = ()=>{
        console.log(contactState);
    }
    useEffect(()=>{
        setContactState({
            ...contactState,
            loading: true,
        })
        async function getData() {
            let groupRes = await GroupService.getGroups();
            console.log("group");
            console.log(groupRes.data)
            setContactState({
                ...contactState,
                loading: false,
                groups: groupRes.data
            })
        }
        getData();
        console.log("group*");
        console.log(contactState.groups);
        
    }, [])
    const {loading, contact, groups, errorMessage} = contactState;
    return (
        <>
            {
                loading ? <Spinner /> : (
                    <section className="create-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <form method='post'>
                                <div className="mb-2"><input type="text" className="form-control" onChange={handleInputValue} placeholder="Name" name="name"
                                    /></div>
                                <div className="mb-2"><input type="tel" className="form-control" onChange={handleInputValue} placeholder="Mobile"
                                    name="mobile"  /></div>
                                <div className="mb-2"><input type="email" className="form-control" onChange={handleInputValue} placeholder="Email"
                                    name="email"  /></div>
                                <div className="mb-2"><input type="text" className="form-control" onChange={handleInputValue} placeholder="Company"
                                    name="company"  /></div>
                                <div className="mb-2"><input type="text" className="form-control" onChange={handleInputValue} placeholder="Title"
                                    name="title"  /></div>
                                <div className="mb-2"><select className="form-control" name="groupId" onChange={handleSelectInputChange}>
                                    <option value={0} disabled>Select a Group</option>
                                    {
                                        groups.map((group)=>{
                                            return (<option value={group.id} key={group.id}>{group.name}</option>);
                                        })
                                    }
                                </select></div>
                                <div className="mb-3"><button type="button" className="btn btn-success me-2" onClick={submitContact}>Create</button><a
                                    className="btn btn-dark" href="/cg-contact/contact/list">Close</a></div>
                            </form>
                        </div>
                        <div className="col-4">
                            {/* <input type='file' /> */}
                            <div className="d-flex flex-column align-items-center avatar"><img className="avatar-lg"
                                src={noAvatar} alt="" onClick={(evt)=> document.getElementById("fileAvatar").click()} /><span
                                    className="select-avatar">Select an Avatar</span><input className="form-control d-none"
                                        accept="image/*" type="file" id="fileAvatar" /><button
                                            className="btn btn-primary mt-2">Upload</button></div>
                        </div>
                    </div>
                </div>
                    </section>
                )
            }
        </>
        
    );
}

export default AddContact;