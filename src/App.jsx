import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { TodoActions } from "./redux/actions/todo";
import './App.css'; 

function App() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const {todoList, loading} = useSelector((store) => store.todo);

  
  const saveTodo = (e) => {
    e.preventDefault();
    dispatch(TodoActions.addTodo({id:todoList.length + 1, title: inputText, completed: false}))
    setInputText('')
  }
  
  const clearTodos = () => {
    dispatch(TodoActions.clearAllTodos())
  }

  useEffect(() => {
    dispatch(TodoActions.fetchTodoRequest())
  }, [dispatch])

  return (
    <div className="App">
      <div className="container">
        <div className="form-box">
          <form onSubmit={saveTodo}>
              <input 
                type="text"
                value={inputText}
                onChange={(e) => {setInputText(e.target.value)}} 
              />
              <button type="submit">Save</button>
              <button type="button" onClick={clearTodos}>Clear</button>
          </form>
        </div>
        <div className="todo-list">
          {
            (todoList.length === 0 && !loading) ? <h2>No Todos</h2> : null
          }
          {
            loading && todoList.length > 0 ? <h2>Loading...</h2> : <ul>
            {
              todoList.map(todo => (
                <li 
                  key={todo.id} 
                  className={`${todo.completed && 'isDone'}`}
                  onClick={() => {dispatch(TodoActions.toggleDoneStatus(todo.id))}}
                  style={{cursor:"pointer"}}
                >
                  {todo.title}
                </li>
              ))
            }
            </ul>
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
 