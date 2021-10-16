import { useState } from "react";
import { CgAdd } from "react-icons/cg";

const AddForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  return (
    <form className="AddForm">
      <input
        className="addFormInput"
        type="text"
        placeholder="New todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <CgAdd
        className="addTodoButton"
        onClick={() => {
          if (todoText) {
            addTodo(todoText);
            setTodoText("");
          }
        }}
      />
    </form>
  );
};

export default AddForm;
