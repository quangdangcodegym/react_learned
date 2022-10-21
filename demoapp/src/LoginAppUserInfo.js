import { useContext } from "react";
import { UserContext } from "./LoginApp";

const LoginAppUserInfo = ()=>{
    const [user, dispatch] = useContext(UserContext)
    if(user==null){
        return <h1>Chua dang nhap...</h1>
    }
    const logout = ()=>{
        dispatch({"type": "logout"})
    }
    return (
        <>
            <h1 style={{color: "red"}}>Wellcome {user.name}</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default LoginAppUserInfo;