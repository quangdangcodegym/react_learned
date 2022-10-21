import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DemoRouterUseParam(props){
    const {userId} = useParams();
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch("/data.json").then(res=>res.json()).then(data=>{
            console.log("useEffect");
            console.log(data);
            setUser(data.filter(u=>u.id==userId)[0])
        })
    })


    if(user == null){
        return <strong>Loading.....</strong>
    }
    return (
        <>
            <h1 style={{color: "red"}}>WELLCOME {user.name}</h1>
            <h2>Test 2</h2>
        </>
    )
}
export default DemoRouterUseParam;