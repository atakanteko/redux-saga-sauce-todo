import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  addTodo: ["payload"],
  toggleDoneStatus: ["todoId"],
  clearAllTodos: null,
  fetchTodoRequest: null,
  fetchTodoSuccess: ["payload"],
  fetchTodoFail: ["message"],
});

export { Types as TodoActionTypes, Creators as TodoActions };
