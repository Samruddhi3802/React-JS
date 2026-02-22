import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { useSelector } from "react-redux";

function App() {
 const todos = useSelector((state) => state.todos);
  return (
    <>
      <AddTodo/>
      {
        todos.length === 0 && (                
        <div className="text-gray-500 italic text-center py-4">No tasks yet. Add one above!</div>
        )
      }
      {todos.length > 0 && (
        <>
        <div className="max-w-2xl mx-auto mt-10 text-2xl font-bold text-gray-100 mb-4 border-b border-gray-700 pb-2">Your Tasks</div>
        {
        todos.map((todo)=>(
          <Todos key={todo.id} todo={todo}/>
        ))
        }
        </>
      )}
      
    </>
  )
}

export default App
