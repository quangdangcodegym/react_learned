import { useState } from "react";
/**
const DemoApp2State =  () => {

    const [firstName, setFristName] = useState("Ai");
    const [lastName, setLastName] = useState("Loc")

    const changeFn = ()=>{
        setFristName("Van");
    }
    const changeLn = ()=>{
        setLastName("Thao");
    }

    return (
        <>
            <h1>WELLCOME {firstName} {lastName}</h1>
            <input type="button" value="Change FirstName" onClick={changeFn}/>
            <input type="button" value="Change LastName" onClick={changeLn}/>
        </>
    )
}
export default DemoApp2State;

 */

const DemoApp2State =  () => {

    // Có thể gom 2 thuộc tính của state vào chung 1 đối tượng
    // const [firstName, setFristName] = useState("Ai");
    // const [lastName, setLastName] = useState("Loc")

    const [user, setUser] = useState({
        "firstName": "Ai1",
        "lastName": "Loi1"
     })

     // Phân rả đối tượng user - SỬ DỤNG REST SYNCTAX
    const changeFn = ()=>{
        setUser({
            ...user,
            "firstName": "Văn"
        });
    }
    const changeLn = ()=>{
        setUser({
            ...user,
            "lastName": "Thảo"
        });
    }

    return (
        <>
            <h1>WELLCOME {user.firstName} {user.lastName}</h1>
            <input type="button" value="Change FirstName" onClick={changeFn}/>
            <input type="button" value="Change LastName" onClick={changeLn}/>
        </>
    )
}
export default DemoApp2State;
