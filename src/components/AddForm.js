import { GrAddCircle } from "react-icons/gr";
import { useState } from "react";
import { CgAdd } from "react-icons/cg";

const AddForm = ({addTodo}) => {
  const [todoText, setTodoText] = useState('')
  return (
    <form className="AddForm">
      <input className="addFormInput" type="text" placeholder="New todo..." onChange={
        e => setTodoText(e.target.value)
      } />
      <CgAdd className='addTodoButton' onClick={() => {
        if(todoText) addTodo(todoText)
      }} />
    </form>
  )
}

export default AddForm
