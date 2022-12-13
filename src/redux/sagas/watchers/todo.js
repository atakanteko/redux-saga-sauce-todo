import { takeEvery } from "redux-saga/effects";
import { TodoActionTypes } from "../../actions/todo";
import handleFetchTodos from "../handlers/todos";

function* watcherTodoSaga(){
    yield takeEvery(TodoActionTypes.FETCH_TODO_REQUEST, handleFetchTodos)
}

export default watcherTodoSaga;