

const DemoReactReduxMainApp = ({value, inc, dec})=>{
    return (
        <>
            <h1>Main APP</h1>
            <h2>My value: {value}</h2>
            <button onClick={inc} >+</button>
            <button onClick={dec}>-</button>
        </>
    );
}
export default DemoReactReduxMainApp