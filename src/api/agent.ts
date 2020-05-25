import axios, { AxiosResponse } from 'axios';
import { TodoItem } from '../models/TodoItem';

axios.defaults.baseURL = "https://localhost:44348/api" //Modify this URL to your particular needs.

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const ToDoApis = {
    getList: (queryParams: URLSearchParams): Promise<TodoItem[]> =>
        axios.get('/todos', { params: queryParams }).then(responseBody),
    delete: (id: string) => requests.del(`/todos/${id}`)
}

export default {
    ToDoApis
}