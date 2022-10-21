import { createContext, useReducer } from "react"
import LoginAppUserInfo from "./LoginAppUserInfo"
import LoginAppUserLogin from "./LoginAppUserLogin"
import userReducer from "./reducers/UserReducer";

export const UserContext = createContext();

const LoginApp = ()=>{
    const [user, dispatch] = useReducer(userReducer)
    return(
        <UserContext.Provider value={[user, dispatch]}>
            <LoginAppUserInfo />
            <LoginAppUserLogin />
        </UserContext.Provider>
    )
}

export default LoginApp