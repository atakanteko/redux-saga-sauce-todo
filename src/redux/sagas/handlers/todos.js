import { put as sagaPut, call } from "redux-saga/effects";
import { fetchTodos } from "../requests/todos";
import { TodoActions  } from "../../actions/todo";

function* handleFetchTodos() {
    try {
        const todos = yield call(fetchTodos);
        yield sagaPut(TodoActions.fetchTodoSuccess(todos))
    } catch (error) {
        yield sagaPut(TodoActions.fetchTodoFail(error.message))
    }
}



export default handleFetchTodos;

