import { BiTrash } from "react-icons/bi";
import { Draggable } from "react-beautiful-dnd";

const Todo = ({ id, text, done, deleteTodo, toggleDone, index }) => {
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided) => (
        <div
          className={`Todo ${done ? "grayedOut" : ""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <input
            type="checkbox"
            onChange={() => toggleDone(id)}
            checked={done}
          />
          <p className="todoText">{text}</p>
          <div>
            <BiTrash
              className="deleteTodoButton"
              onClick={() => deleteTodo(id)}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
