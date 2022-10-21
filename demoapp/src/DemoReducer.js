import { useReducer } from "react"
import myReducer from "./reducers/MyReducer"

const DemoReducer = ()=>{
    /**
     * (alias) useReducer<(state: any, action: any) => any>
     * (reducer: (state: any, action: any) => any, initializerArg: any, initializer?: undefined):
     *  [any, React.DispatchWithoutAction] (+4 overloads)
        import useReducer
        An alternative to useState.

        useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
     */
    const [state, dispatch] = useReducer(myReducer, {
        "counter": 0
    })
    return (
        <>
            <h1>Counter: ...{state.counter}</h1>
            <button onClick={()=> dispatch({"type": "desc"})}>-</button>
            <button onClick={()=> dispatch({"type": "inc"})}>+</button>
        </>
    )
}

export default DemoReducer