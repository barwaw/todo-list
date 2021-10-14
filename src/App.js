import Header from "./components/Header";
import Todos from "./components/Todos";
import { useState } from 'react';
import AddForm from "./components/AddForm";
import { useEffect } from "react";


function App() {
  const [todos, setTodo] = useState([])

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if(storedTodos) setTodo(JSON.parse(storedTodos))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  })

  const deleteTodo = id => {
    setTodo(todos.filter(todo => id !== todo.id))
  }

  const addTodo = text => {
    setTodo([...todos, {id: Date.now(), text: text, done: false}])
  }

  const toggleDone = id => {
    setTodo(todos.map(todo => id === todo.id ? {...todo, done: !todo.done} : todo))
  }

  return (
    <div className="App">
      <Header />
      <AddForm addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
    </div>
  );
}

export default App;
