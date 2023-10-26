import React, {useState} from "react";

export default function TodoForm() {
    const [input, setInput] = useState('')

    return (
        <form className="todo-form">
            <input 
                type="text" 
                placeholder="add a todo"
                value={input}
                name="text"
                className="todo-input"
            />
            <button className="todo-button">Add To Do</button>
        </form>
    )
};