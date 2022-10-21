
import {useDispatch, useSelector} from "react-redux";

const DemoReactRedux = ()=>{
    /**
     * (alias) useSelector<unknown, any>(selector: (state: unknown) => any, equalityFn?: EqualityFn<any> | undefined): any
        import useSelector
        A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.

        This hook takes an optional equality comparison function as the second parameter that allows you to customize the way the selected state 
        is compared to determine whether the component needs to be re-rendered.
     */
    const counter = useSelector(state=> {
        console.log(state.number);
        return state.number
    });
    console.log(counter)
    const dispatch = useDispatch();
    return (
        <>
            <h1>Main APP</h1>
            <h2>My value: {counter}</h2>
            <button onClick={()=> dispatch({"type": "inc"})} >+</button>
            <button onClick={()=> dispatch({"type": "dec"})}>-</button>
        </>
    );
}
export default DemoReactRedux