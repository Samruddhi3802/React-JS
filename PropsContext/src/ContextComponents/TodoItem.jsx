import React from 'react'
import { useState } from 'react';
import {useTodo} from '../Context/TodoContext';

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable]=useState(false);
    const [todoMsg, setTodoMsg]=useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete}=useTodo();

    const editTodo=()=>{
        updateTodo(todo.id, {...todo, todo:todoMsg});
        setIsTodoEditable(false);
    }
    
    const toggleCompleted=()=>{
        toggleComplete(todo.id);
    }

   return (
  <div
    className={`flex items-center justify-between p-4 rounded-xl shadow-md transition-all duration-300 ${
      todo.completed
        ? "bg-green-500/20 border border-green-400"
        : "bg-white/10 border border-white/20"
    }`}
  >
    <div className="flex items-center gap-3 flex-1">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        className="w-5 h-5 accent-indigo-500 cursor-pointer"
      />

      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`flex-1 bg-transparent outline-none text-white ${
          todo.completed ? "line-through text-gray-300" : ""
        } ${isTodoEditable ? "border-b border-indigo-400" : ""}`}
      />
    </div>

    <div className="flex gap-2">
      <button
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm disabled:opacity-40"
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-sm"
      >
        Delete
      </button>
    </div>
  </div>
)
}

export default TodoItem