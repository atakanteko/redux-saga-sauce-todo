import { combineReducers } from "redux";
import todoReducer from "./todo";

export const reducers = combineReducers({
    todo: todoReducer,
});