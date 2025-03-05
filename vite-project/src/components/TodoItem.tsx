import { Todo } from "../types/todo"

type TodoItemProps = {
    todo : Todo,
    toggleComplete : (id:number)=>void,
    deleteTodo : (id:number)=>void,
}
const TodoItem = ({todo,toggleComplete,deleteTodo}:TodoItemProps) => {
  return (
    <div style={{display:'flex',margin:'10px'}}>
      <div onClick={()=>toggleComplete(todo.id)} style={{marginRight:'5px'}}>
          <span>{todo.isComplete ? "✅" : "⭕️" }</span>
          <span>{todo.body}</span>
      </div>
      <button type="button" onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
    
  )
}

export default TodoItem