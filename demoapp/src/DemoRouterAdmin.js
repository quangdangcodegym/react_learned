import { useState, useEffect } from "react";
import {Outlet} from "react-router-dom"

const DemoRouterAdmin = ()=>{
    
    return (
        <>
            <h1 style={{color: "red"}}>Hello ADMIN</h1>
            <Outlet />
        </>
    )
}
export default DemoRouterAdmin;