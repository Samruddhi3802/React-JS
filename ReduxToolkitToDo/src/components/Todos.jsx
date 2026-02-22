import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/ToDo/TodoSlice';

function Todos({todo}) {
    const [msg, setMsg]=useState(todo.text);
    const [isTodoEditable, setIsTodoEditable]=useState(false);
    const dispatch = useDispatch();

    return (
        <>
        <div className="max-w-2xl mx-auto mt-10">            
            {/* {!todo && (
                <div className="text-gray-500 italic text-center py-4">No tasks yet. Add one above!</div>
            )} */}

            <ul className="list-none p-0">
                    <li
                        key={todo.id}
                        className="mt-4 flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg shadow-sm border border-gray-700 hover:border-indigo-500 transition-colors"
                    >
                        <input className="text-gray-200 text-lg" 
                        value={msg}
                        onChange={(e)=>{setMsg(e.target.value)}}
                        readOnly={!isTodoEditable}></input>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md transition-all duration-200"
                        >
                            <span className="sr-only">Delete</span>
                            Delete
                        </button>

                        <button
                            onClick={(e) => {
                                setIsTodoEditable(true)
                                if(isTodoEditable){
                                    dispatch(updateTodo({id:todo.id, text:msg}))
                                    setIsTodoEditable(false)
                                }
                            }}
                            className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md transition-all duration-200"
                        >
                            <span className="sr-only">Update</span>
                            Update
                        </button>
                    </li>
                
            </ul>
        </div>
        </>
    );
}

export default Todos;