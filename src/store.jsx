import { createStore } from "redux";

const initialState = {
    task: [],
    isLoading: false
}

// step 1: create reducer function
const TaskReducer = (state = initialState, action)=>{
    switch(action.type){
        case "task/add":
            return {
                ...state,
                task: [...state.task, action.payload]
            };

        case "task/remove":
            const updatedTask = state.task.filter((curr, index)=>  index != action.payload);
            return {
                ...state,
                task: updatedTask
            };

        default:
            return state;
    }
}

// step 2: create a redux store using reducer:
const store = createStore(TaskReducer);
console.log(store);

// step 3: Log in the initial state
const initialStateData = store.getState();
console.log("initialStateData:", initialStateData);

// step 4: dispatching the action
store.dispatch({type:"task/add", payload:"DSA Questions"});
console.log("updatedState:", store.getState());

store.dispatch({type:"task/add", payload:"React Tutorial"});
console.log("updatedState:", store.getState());

store.dispatch({type:"task/remove", payload:0});
console.log("updatedState:", store.getState());

// step 5: create action creators (we can write above code in step 4 like the below code):

store.dispatch(addTask("Wake up at 7"));
console.log("updatedState:", store.getState());

store.dispatch(addTask("Sleep at 10"));
console.log("updatedState:", store.getState());

store.dispatch(removeTask(1));
console.log("updatedState:", store.getState());

function addTask(data){
    return {type:"task/add", payload: data};
}

function removeTask(data){
    return {type:"task/remove", payload: data};
}
