import React, {useState} from "react";

export default function TodoForm() {
    const [input, setInput] = useState(''); //set to empty

    const handleChange = e => { //when event occurs
        setInput(e.target.value); //setInput will be value we type which we are changing from original useState first mentioned above
    }

    const handleSubmit = e => { //listening for event(event is pushing add todo button)
        e.preventDefault(); //will stop page from refreshing which is the default action

        setInput(''); //will reset setInput back to empty string after we hit button to trigger event
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="add a todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
            />
            <button className="todo-button">Add To Do</button>
        </form>
    )
};