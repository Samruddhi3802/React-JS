import React from 'react'
import { useState } from 'react'
import {useTodo} from '../Context/TodoContext'

function TodoForm() {
    let [todo, setTodo]=useState("");
    let {addTodo}=useTodo();

    let add=(e)=>
    {
       e.preventDefault();
       if(!todo) return
       addTodo({todo, completed:false});
       setTodo("");
    }

    function handleChange(e)
    {
        setTodo(e.target.value);
    }
  return (
  <form onSubmit={add} className="flex gap-3">
    <input
      type="text"
      placeholder="What do you need to do today?"
      className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      value={todo}
      onChange={handleChange}
    />
    <button
      type="submit"
      className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold shadow-md"
    >
      Add
    </button>
  </form>
)
}

export default TodoForm