import { TodoActionTypes, GETTING_TODO_ITEMS, GOT_TODO_ITEMS } from "./types";
import { TodoItem } from "../models/TodoItem";
import agent from "../api/agent";

import { Dispatch } from 'redux';
import { AppActions } from "../models/actions";

import { store } from '../index';

const requestTodoItems = (): AppActions => {
    return {
        type: GETTING_TODO_ITEMS,
        todoItems: []
    }
}

export function getTodoItems() {
    return (dispatch: Dispatch) => {
        dispatch(requestTodoItems());

        let errorEncountered = false;

        let hasErrored = false;

        let response = agent.ToDoApis.getList(new URLSearchParams);
        return response.then(
            value => {
                //success
                console.log(value)
                return value;
            },
            reason => {
                //rejection
                console.log(reason)
            }
        ).catch(error => `Error when fetching to do items ${error}`)
    }
}



        // agent.ToDoApis.getList
        //     .(
        //         (response) => response.json(),
        //         (error) => {
        //             hasErrored = true;
        //             console.log(error);
        //             dispatch(requestTodoItems());
        //         }
        //     )
        //     .then((json) => {
        //         if (!hasErrored) {
        //             dispatch(returnTodoItems(json));
        //         }
        //     });

        // return agent.ToDoApis.getList(new URLSearchParams)
        // .then(
        //     (response) => response.IsDone,
        //     (error) => {
        //         errorEncountered = true;
        //         console.log(error);
        //         dispatch(requestTodoItems());
        //     }
        // )
        // .then((json) => {
        //     if(!errorEncountered){
        //         dispatch(returnTodoItems(json))
        //     }
        // })

// export async function getTodoItems(isDone: boolean): Promise<TodoActionTypes> {
//     console.log("ABOVE");
//     const response = await agent.ToDoApis.getList;
//     console.log("ABOVE");
//     console.log(response);
//     console.log("ABOVE");
//     dispatch({
//         type: GET_TODO_ITEMS,
//         isDone: isDone
//     });
// }

// export function createNewTodo(todoItem: TodoItem): TodoActionTypes {
//     return {
//         type: CREATE_NEW_TODO,
//         todoItem: todoItem
//     }
// }

// export function toggleDoneStatusForTodo(id: string): TodoActionTypes {
//     return {
//         type: TOGGLE_DONE_STATUS_FOR_TODO,
//         id: id
//     }
// }

// export function updateEntireTodo(todoItem: TodoItem): TodoActionTypes {
//     return {
//         type: UPDATE_ENTIRE_TODO,
//         todoItem: todoItem
//     }
// }

// export function deleteTodo(id: string): TodoActionTypes {
//     return {
//         type: DELETE_TODO,
//         id: id
//     }
