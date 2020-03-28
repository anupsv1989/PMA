
// const initialState = {
//     age: 20
// };

// const reducer = (state = initialState, action) => {
//     const newState = { ...state };

//     switch (action.type) {
//         case "DELETE_ITEM_SUCCESS":
//             console.log("Inside reducer")
//             newState.age += action.value;
//             break;

//         case "AGE_DOWN":
//             newState.age -= action.value;
//             break;
//     }
//     return newState;
// };

// export default reducer;




const initialState = {
    dataFromLS: [],
    value: 20
};
const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "FETCH_ITEM_SUCCESS":
            console.log("Inside reducer", action.result)
            newState.dataFromLS = (action.result && JSON.parse(action.result).length > 0) ? JSON.parse(action.result) : []
            break;

        case "AGE_DOWN":
            newState.age -= action.value;
            break;
    }
    return newState;
};

export default reducer;