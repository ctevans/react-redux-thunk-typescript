import { TodosState, TodoActionTypes, GETTING_TODO_ITEMS, GOT_TODO_ITEMS } from "./types";

const initialState: TodosState = {
    todoItems: [],
    loading: false
};

export function todoReducer(state = initialState, action: TodoActionTypes): TodosState {
    switch (action.type) {
        case GETTING_TODO_ITEMS:
            return {
                ...state,
                loading: true
            }
        case GOT_TODO_ITEMS:
            return {
                ...state,
                todoItems: action.todoItems,
                loading: true
            }
        default:
            return state;
    }
}