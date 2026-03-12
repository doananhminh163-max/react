import { useState } from 'react';

const TodoNew = (props) => {
    const { addNewTodo } = props;
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        if (inputValue.trim()) {
            addNewTodo(inputValue);
            setInputValue("");
        }
    }

    const handleOnChange = (name) => {
        setInputValue(name)
    }

    return (
        <>
            <h1 className="h2 fw-bold mb-4">Todo List</h1>
            <div className="d-flex gap-2 my-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your todo"
                    onChange={(event) => handleOnChange(event.target.value)}
                    value={inputValue}
                />
                <button
                    className="btn btn-primary"
                    onClick={handleClick}
                >
                    Add
                </button>
            </div>
        </>
    )
}

export default TodoNew