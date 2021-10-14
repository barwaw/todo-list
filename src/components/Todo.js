import { BiTrash } from "react-icons/bi";


const Todo = ({id, text, done, deleteTodo, toggleDone}) => {
  return (
    <div className={`Todo ${done ? 'grayedOut' : ''}`} >
      <input type="checkbox" onChange={() => toggleDone(id)} checked={done} />
      <p className='todoText'>{text}</p>
      <div>
        <BiTrash className='deleteTodoButton' onClick={() => deleteTodo(id)}  />
      </div>
    </div>
  )
}

export default Todo
