import { Todo } from "../types/todo"
import TodoItem from "./TodoItem"

type TodoListProps = {
    todos : Todo[],
    toggleComplete : (id:number)=>void,
    deleteTodo : (id:number)=>void,
}
const TodoList = ({todos,toggleComplete,deleteTodo}:TodoListProps) => {
  return (
    <div>
        {
            todos.map(todo=><TodoItem todo={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>)
        }
    </div>
  )
}

export default TodoList