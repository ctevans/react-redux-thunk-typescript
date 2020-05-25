import { TodoItem } from "../models/TodoItem";
import { Action } from "redux";

export interface TodosState {
    todoItems: TodoItem[];
    loading: boolean;
}

//Action Type Definitions.
//GET (AKA GET)
export const GETTING_TODO_ITEMS = "GETTING_TODO_ITEMS";
export const GOT_TODO_ITEMS = "GOT_TODO_ITEMS";

//CREATE (AKA POST)
export const CREATING_NEW_TODO = "CREATING_NEW_TODO";
export const CREATED_NEW_TODO = "CREATED_NEW_TODO";

//TOGGLE (AKA PATCH)
export const TOGGLING_DONE_STATUS_FOR_TODO = "TOGGLING_DONE_STATUS_FOR_TODO";
export const TOGGLED_DONE_STATUS_FOR_TODO = "TOGGLED_DONE_STATUS_FOR_TODO";

//UPDATE ENTIRE TODO (AKA PUT)
export const UPDATING_ENTIRE_TODO = "UPDATING_ENTIRE_TODO";
export const UPDATED_ENTIRE_TODO = "UPDATED_ENTIRE_TODO";

//DELETE TODO (AKA DELETE)
export const DELETING_TODO = "DELETING_TODO";
export const DELETED_TODO = "DELETED_TODO";


//Actions. (NOTE ASYNC ACTIONS WITH REDUX THUNK ARE VERY DIFFERENTLY WRITTEN!!!)
//WARNING: Very different from redux actions from before for Async!!!
export interface GettingTodoItems extends Action<typeof GETTING_TODO_ITEMS> {
    todoItems: TodoItem[];
}

export interface GotTodoItems extends Action<typeof GOT_TODO_ITEMS> {
    todoItems: TodoItem[];
}

export interface CreatingNewTodo extends Action<typeof CREATING_NEW_TODO> {
}

export interface CreatedNewTodo extends Action<typeof CREATED_NEW_TODO> {
}

export interface TogglingDoneStatusForTodo extends Action<typeof TOGGLING_DONE_STATUS_FOR_TODO> {
}

export interface ToggledDoneStatusForTodo extends Action<typeof TOGGLED_DONE_STATUS_FOR_TODO> {
}

export interface UpdatingEntireTodo extends Action<typeof UPDATING_ENTIRE_TODO> {
}

export interface UpdatedEntireTodo extends Action<typeof UPDATED_ENTIRE_TODO> {
}

export interface DeletingTodo extends Action<typeof DELETING_TODO> {
}

export interface DeletedTodo extends Action<typeof DELETED_TODO> {
}

export type TodoActionTypes =
    GettingTodoItems | GotTodoItems |
    CreatingNewTodo | CreatedNewTodo |
    TogglingDoneStatusForTodo | ToggledDoneStatusForTodo |
    UpdatingEntireTodo | UpdatedEntireTodo |
    DeletingTodo | DeletedTodo;


//Examples of what doesn't work HERE!
// interface CreatingNewTodo {
//     type: typeof CREATE_NEW_TODO;
//     todoItem: TodoItem;
// }

// interface TogglingDoneStatusForTodo {
//     type: typeof TOGGLE_DONE_STATUS_FOR_TODO;
//     id: string;
// }
// interface UpdatingEntireTodo {
//     type: typeof UPDATE_ENTIRE_TODO;
//     todoItem: TodoItem;
// }
// interface DeletingTodo {
//     type: typeof DELETE_TODO;
//     id: string;
// }