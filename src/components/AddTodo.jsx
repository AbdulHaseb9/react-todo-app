import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todo.Slice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddTodo() {
    const [inp, setInp] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (inp == '') {
            toast.error("Please fill the field first");
            return
        }
        dispatch(addTodo(inp))
        setInp('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 text-center">
            <input
                type="text"
                className="w-64 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={inp}
                onChange={(e) => setInp(e.target.value)}
            />
            <input
                type="submit"
                value={'add todo'}
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3 md:mt-0"
            />
        </form>
    )
}
