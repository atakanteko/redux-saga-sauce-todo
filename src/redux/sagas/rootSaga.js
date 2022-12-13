import { all } from "redux-saga/effects";
import watcherTodoSaga from "./watchers/todo";

export default function* rootSage() {
    yield all([watcherTodoSaga()])
}