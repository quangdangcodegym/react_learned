import { useContext, useState } from "react";
import { UserContext } from "./LoginApp";
const LoginAppUserLogin =  ()=>{
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [user, dispatch] = useContext(UserContext)
    const login =(event)=>{
        event.preventDefault();
        if(username ==="admin" && password =="123"){
            dispatch({
                "type": "login",
                "payload": {
                    "name": "Quang Dang", 
                    "username": "admin"
                }
            })
        }
    }
    if(user==null)
        return (
            <>
                <h1>ĐĂNG NHẬP</h1>
                <form onSubmit={login}>
                    <input value={username} onChange={(evt) => setUserName(evt.target.value)} placeholder="Input username" />
                    <input value={password} onChange={(evt) => setPassword(evt.target.value)} placeholder="Input password" />
                    <input type="submit" value="Dang Nhap" />
                </form>
            </>
        )
    return <h1>Da dang nhap voi username: {user.username}</h1>
}

export default LoginAppUserLogin;