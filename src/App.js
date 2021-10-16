import Header from "./components/Header";
import Todos from "./components/Todos";
import AddForm from "./components/AddForm";
import { useState } from "react";
import { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) setTodo(JSON.parse(storedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => id !== todo.id));
  };

  const addTodo = (text) => {
    setTodo([...todos, { id: Date.now().toString(), text: text, done: false }]);
  };

  const toggleDone = (id) => {
    setTodo(
      todos.map((todo) =>
        id === todo.id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination || result.destination.index === result.source.index)
      return;
    let tempArray = Array.from(todos);
    let [dragged] = tempArray.splice(result.source.index, 1);
    tempArray.splice(result.destination.index, 0, dragged);
    setTodo(tempArray);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Header />
        <AddForm addTodo={addTodo} />

        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        ></Todos>
      </div>
    </DragDropContext>
  );
}

export default App;
