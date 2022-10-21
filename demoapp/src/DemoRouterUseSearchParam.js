import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";


const DemoRouterUseSearchParam = ()=>{
    const [users, setUsers] = useState([])
    const [kw, setKw] = useState("");
    const [counter, setCounter] = useState(0);


    // Sử dụng hook useSearchParams để lấy thông tin trên đường dẫn
    // let kw = q.get("kw")lấy kw thông qua object
    const [q] = useSearchParams();
    
    useEffect(()=>{
        // Ở đây nó sẽ gọi hàm random liên tục
        // console.log(Math.random())
        fetch("data.json").then(res=> res.json()).then(data=> {
            let kw = q.get("kw");
            if(kw!=null){
                setUsers(data.filter(u=>u.name.indexOf(kw)>=0))
            }else{
                setUsers(data)
            }
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
                {users.map(u=> {
                    let url = `/demo4/${u.id}`
                    return <li key={u.id}>
                        <Link to={url}>{u.name}</Link>
                        </li>
                })}
            </ul>
        </>
    )
}
export default DemoRouterUseSearchParam;