const redux = require('redux');

const counterReducer = (state = { counter : 0}, action) =>{  //reducer fucntion
    if (action.type === 'increment') {
        return {
          counter: state.counter + 1,
        };
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        };
    }
    return state;
}

const store = redux.createStore(counterReducer); //centeral store for redux

const counterSubscriber = () =>{  //subscriber fucntion
    const latestState = store.getState();
    console.log(latestState);  // { counter: 1 }
}

store.subscribe(counterSubscriber);  // subscribed to latest value

store.dispatch({ type: 'increment' });
store.dispatch({ type : 'decrement'})