import React, { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
    const [todos, setTodos] = useState([]); // Array to store tasks

    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }]); // Add new task
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index)); // Filter out deleted task
    };

    const toggleCompleted = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        ); // Update completed state of clicked task
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Add a new task"
                onChange={(e) => addTodo(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        e.target.value = ""; // Clear input after adding task
                    }
                }}
            />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        removeTodo={removeTodo.bind(null, index)} // Bind index to removeTodo
                        toggleCompleted={toggleCompleted.bind(null, index)} // Bind index to toggleCompleted
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
