import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const defaultTodos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Learn Firebase', completed: false },
  { id: 3, title: 'Learn GraphQL', completed: false }
]

function App() {

  const [todos, setTodos] = useState(defaultTodos);

  function toggleTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    });
    console.log("done");
    setTodos(updatedTodos);




  }

  return (
    <div>
      <h1>TODO APP</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      {/* <TodoForm /> */}

    </div>
  );
}

export default App;
