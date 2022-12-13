import { createReducer } from "reduxsauce";
import { initialState } from "../states/todo";
import { TodoActionTypes } from "../actions/todo";

const addTodo = (state = initialState, action) => ({
    ...state,
    todoList: [...state.todoList, action.payload]
});

const toggleDone = (state = initialState, action) => {
   let todoList = state.todoList;
   const newList = todoList.map((todo) => {
        if(todo.id !== action.todoId){
            return todo;
        }
        return {
            ...todo,
            completed: !todo.completed
        }
   })
   return {
    ...state,
    todoList: newList
   }
};

const clearAllTodos = (state = initialState) => (
    {
        ...state,
        todoList: []
    }
)

const getTodosRequest = (state = initialState) => ({
    ...state,
    loading: true
});

const fetchSuccess = (state = initialState, { payload }) => {
    return {
        ...state,
        todoList: payload.data.slice(0,10),
        loading: false,
    }
}

const fetchError = (state = initialState, { message }) => {
    return {
        ...state,
        loading: false,
        hasError: message
    }
}

const HANDLERS = {
    [TodoActionTypes.ADD_TODO]: addTodo,
    [TodoActionTypes.TOGGLE_DONE_STATUS]: toggleDone,
    [TodoActionTypes.CLEAR_ALL_TODOS]: clearAllTodos,
    [TodoActionTypes.FETCH_TODO_REQUEST]: getTodosRequest,
    [TodoActionTypes.FETCH_TODO_SUCCESS]: fetchSuccess,
    [TodoActionTypes.FETCH_TODO_FAIL]: fetchError,
};

const todoReducer = createReducer(initialState, HANDLERS);

export default todoReducer;