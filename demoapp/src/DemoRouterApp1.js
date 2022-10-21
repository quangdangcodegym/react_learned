import { useState, useEffect } from "react";


// TRONG useEffect có 1 function và trong function này có return 1 function dùng để giải phóng, unmount
// khi render
const DemoRouterApp1 = ()=>{
    const [users, setUsers] = useState([])
    const [kw, setKw] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        // Ở đây nó sẽ gọi hàm random liên tục
        // console.log(Math.random())
        fetch("data.json").then(res=> res.json()).then(data=> {
            setUsers(data.filter(u=>u.name.indexOf(kw)>=0))
            // setUsers(data);
        })

        // Nếu dependecies là 1 State kw, nếu giá trị của state thay đổi thì hàm useEffect sẽ được gọi lại
    }, [kw]);
    useEffect(()=>{
        let timer = setTimeout(()=> setCounter(counter+1), 1000);
        // CẦN chú ý để sử dụng cho hợp lý
        return ()=>{
            console.log("CLEANUP FUNCTION: " + Math.random());
            clearTimeout(timer)
        }
    })
    return (
        <>
            <h1>Counter: {counter}</h1>
            <input type="text" value={kw} onChange={evt=> setKw(evt.target.value)}
                placeholder="Enter keyword..."
            ></input>
            <ul>
                {users.map(u=> <li key={u.id}>{u.name}</li>)}
            </ul>
        </>
    )
}
export default DemoRouterApp1;