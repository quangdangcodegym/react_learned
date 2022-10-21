import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DemoRouterApp2 = ()=>{

    // Sử dụng hook useNavigate Để chuyển trang
    const nav = useNavigate();
    const go = ()=>{
        nav("/admin")
    }
    return (
        <>
            <button onClick={go}>GO TO ADMIN PAGES</button>
            <h1>Hello demo router app 2</h1>
            
        </>
    )
}
export default DemoRouterApp2;