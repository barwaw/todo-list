import Todo from "./Todo";
import { Droppable } from "react-beautiful-dnd";

const Todos = ({ todos, deleteTodo, toggleDone }) => {
  return (
    <Droppable droppableId="todos" key="todos">
      {(provided) => (
        <div
          className="Todos"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {todos.map((todo, index) => (
            <Todo
              id={todo.id}
              text={todo.text}
              done={todo.done}
              deleteTodo={deleteTodo}
              toggleDone={toggleDone}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Todos;
