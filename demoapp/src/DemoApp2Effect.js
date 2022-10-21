import { useState, useEffect } from "react";

/**
 * SỬ DỤNG USEREFFECT KO CÓ DEPENDENCIES
const DemoApp2Effect = ()=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        // Ở đây nó sẽ gọi hàm random liên tục
        console.log(Math.random())
        fetch("data.json").then(res=> res.json()).then(data=> {
            setUsers(data)
        })
        // Nếu dependecies không có giá trị thì useEffect sẽ chạy rerender hoài
    })
    return (
        <ul>
            {users.map(u=> <li key={u.id}>{u.name}</li>)}
        </ul>
    )
}
 */

/**
// * SỬ DỤNG USEREFFECT CÓ DEPENDENCIES: RỖNG []
const DemoApp2Effect = ()=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        // Ở đây nó sẽ gọi hàm random 1 lần lúc nạp
        console.log(Math.random())
        fetch("data.json").then(res=> res.json()).then(data=> {
            setUsers(data)
        })
        // Nếu dependecies là RỖNG thì useEffect chỉ chạy 1 lần lúc nạp
    }, [])
    return (
        <ul>
            {users.map(u=> <li key={u.id}>{u.name}</li>)}
        </ul>
    )
}
*/
/** Nếu dependecies là 1 State kw, nếu giá trị của state thay đổi thì hàm useEffect sẽ được gọi lại
const DemoApp2Effect = ()=>{
    const [users, setUsers] = useState([])
    const [kw, setKw] = useState();

    useEffect(()=>{
        // Ở đây nó sẽ gọi hàm random liên tục
        console.log(Math.random())
        fetch("data.json").then(res=> res.json()).then(data=> {
            setUsers(data.filter(u=>u.name.indexOf(kw)>=0))
            // setUsers(data);
        })
        // Nếu dependecies là 1 State kw, nếu giá trị của state thay đổi thì hàm useEffect sẽ được gọi lại
    }, [kw])
    return (
        <>
            <input type="text" value={kw} onChange={evt=> setKw(evt.target.value)}
                placeholder="Enter keyword..."
            ></input>
            <ul>
                {users.map(u=> <li key={u.id}>{u.name}</li>)}
            </ul>
        </>
    )
}

 */

// TRONG useEffect có 1 function và trong function này có return 1 function dùng để giải phóng, unmount
// khi render
const DemoApp2Effect = ()=>{
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
    /**
     * (alias) useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void
        import useEffect
        Accepts a function that contains imperative, possibly effectful code.

        @param effect — Imperative function that can return a cleanup function

        @param deps — If present, effect will only activate if the values in the list change.
     */
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
export default DemoApp2Effect;