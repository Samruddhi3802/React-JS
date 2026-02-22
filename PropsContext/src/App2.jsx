import React from 'react'
import { TodoContextProvider } from './Context/TodoContext'
import { useState, useEffect } from 'react'
import TodoForm from './ContextComponents/TodoForm';
import TodoItem from './ContextComponents/TodoItem';

function App2() {
  let [todos, setTodos] = useState([]);

  let totalTasks = todos.length;
  let completedTasks = todos.filter((todo) => todo.completed).length;
  let pendingTasks = totalTasks - completedTasks;

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) =>
      (id === prevTodo.id ? todo : prevTodo)
    ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
  <TodoContextProvider value={{
    todos, addTodo, updateTodo, deleteTodo, toggleComplete
  }}>
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center p-6">
      
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
        
        <h1 className="text-4xl font-bold text-center mb-6 tracking-wide">
          My Todo Manager
        </h1>

        <div className="mb-6">
          <TodoForm />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-500/20 p-4 rounded-xl text-center">
            <p className="text-lg font-semibold">{totalTasks}</p>
            <p className="text-sm text-gray-300">Total</p>
          </div>
          <div className="bg-green-500/20 p-4 rounded-xl text-center">
            <p className="text-lg font-semibold">{completedTasks}</p>
            <p className="text-sm text-gray-300">Completed</p>
          </div>
          <div className="bg-yellow-500/20 p-4 rounded-xl text-center">
            <p className="text-lg font-semibold">{pendingTasks}</p>
            <p className="text-sm text-gray-300">Pending</p>
          </div>
        </div>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>

      </div>
    </div>
  </TodoContextProvider>
)
}

export default App2