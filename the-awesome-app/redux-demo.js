//import {createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

console.log("Redux Flow example");

//initial data
const initState = {
    count: 10,
    message: "Hello redux"
}

//reducer
const reducer = (currentState=initState, action) => {

    console.log("reducer: Received action", action);
    //return the updated state;
    if(action.type === "INC_CTR"){

        return {
            ...currentState,
            count : currentState.count + 1
        }
    }
    if(action.type === "INC_CTR_BY"){

        return {
            ...currentState,
            count : currentState.count + action.value
        }
    }
    if(action.type === "DECR_CTR"){

        return {
            ...currentState,
            count : currentState.count - 1
        }
    }


    return currentState;
}

//create store
const store = createStore(reducer);
console.log("state:", store.getState());

//subscribe

store.subscribe(() => {
    console.log("in subscriber state:", store.getState());
})


//dispatch action=> store.dispatch(action) => action is an object

store.dispatch({type: "INC_CTR"});
//console.log("state:", store.getState());

store.dispatch({type: "INC_CTR_BY", value: 100});
//console.log("state:", store.getState());

store.dispatch({type: "DECR_CTR"});
//console.log("state:", store.getState());