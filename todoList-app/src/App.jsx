import React, { useState } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const inputTodo = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: todoInput, completed: false}]);
    setTodoInput("");
  };

  const clearSelected = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="...task" onChange={inputTodo} value={todoInput} />
        <button type="submit">Add Task</button>
        <button type="button" onClick={clearSelected}>Clear Completed</button>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <input type="checkbox" onChange={() => toggleCompleted(index)} checked={todo.completed} />
                {todo.text}
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
