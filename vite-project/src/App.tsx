import { FormEvent, useState } from "react"
import { Todo } from "./types/todo"
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addNewTodo = (e: FormEvent)=> {

    e.preventDefault();

    if (!newTodo.trim()) return;

    const todo:Todo = {
      id : Date.now(),
      body : newTodo,
      isComplete : false,
    }

    setTodos([...todos,todo]);
    setNewTodo('');
  }

  const toggleComplete = (id: number)=>{
    setTodos(todos.map(todo=>todo.id === id ? {...todo,isComplete:!todo.isComplete} : todo))
  }

  const deleteTodo = (id:number)=>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  return (
    <main>
      <h1>୨ৎTodo with React+Typescript୨ৎ</h1>
      <form onSubmit={addNewTodo}>
        <input type="text" value={newTodo} onChange={e=>setNewTodo(e.target.value)}/>
        <button type="submit">Add To Do</button>
      </form>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
    </main>
  )
}

export default App