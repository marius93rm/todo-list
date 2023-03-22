import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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

  function addTodo(titolo) {
    let maxId=0;
    todos.forEach(todo => {
      if (todo.id > maxId){
        maxId = todo.id;
      }
    });

    const todo = {
      id: maxId + 1,
      title: titolo,
      completed: false
    }
    setTodos([...todos, todo]);
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  function clearTodos() {
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>TODO APP</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <TodoForm addTodo={addTodo} clearTodos={clearTodos} />

    </div>
  );
}

export default App;
