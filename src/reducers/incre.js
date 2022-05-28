const initialState = 18000;

 const changeNum = (state = initialState, action) => {
    switch(action.type){
        case "Increment Number":
            return state + 1
        case "Decrement Number":
            return state - 1
        default:
            return state
    }
}

export default changeNum;