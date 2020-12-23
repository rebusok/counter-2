import { combineReducers, createStore } from 'redux';
import {counterReducer} from "./counterReducer";


const reducers =combineReducers({
    counter: counterReducer
})
export type IGlobalState = ReturnType<typeof reducers>;

// @ts-ignore
export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());