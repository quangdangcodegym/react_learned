const counterReducer = (state = {number: 0}, action)=>{
    switch(action.type){
        case "inc":
            return state.number +1;
        case "dec":
            return state.number -1;
            
    }
    return state;
}

export default counterReducer