import Todo from "./Todo"

const Todos = ({todos, deleteTodo, toggleDone}) => {
  return (
    <div className='Todos' > 
      {todos.map(todo => ( 
         <Todo id={todo.id} text={todo.text} done={todo.done} deleteTodo={deleteTodo} toggleDone={toggleDone} />
      ))}
    </div>
  )
}

export default Todos
