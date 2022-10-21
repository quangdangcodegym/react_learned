const myReducer = (state, action) =>{
    switch (action.type) {
        case "inc":
            return {"counter": state.counter +1}
        case "desc":
            return {"counter": state.counter +1}
        
    }
    return state;
}
export default myReducer;