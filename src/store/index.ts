import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk, { ThunkMiddleware } from 'redux-thunk'; //NEW LINE
import { todoReducer } from "./reducers";
import { TodosState } from "./types";
import { AppActions } from "../models/actions";


const rootReducer = combineReducers({
    todoReducer: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(
                thunk as ThunkMiddleware<TodosState, AppActions>
            ) //NEW FOR THUNK.
        )
    );
    // thunk as ThunkMiddleware<RootState, AppActions>

    return store;
}