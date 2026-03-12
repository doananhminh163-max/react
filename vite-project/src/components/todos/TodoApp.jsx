import { useState } from "react";
import TodoNew from "./TodoNew";
import TodoData from "./TodoData";
import reactLogo from "../../assets/react.svg";
import './todo.css'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (name) => {
        const newTodo = {
            id: Date.now(),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }

    const deleteTodo = (id) => {
        const newTodoList = todoList.filter(item => item.id !== id)
        setTodoList(newTodoList)
    }

    return (
        <div className="container-todo">
            <TodoNew
                addNewTodo={addNewTodo}
            />
            <TodoData
                todoList={todoList}
                deleteTodo={deleteTodo}
            />
            {todoList.length === 0 &&
                <div className="d-flex justify-content-center mt-4">
                    <img src={reactLogo} className="react-logo" alt="React Logo" />
                </div>
            }
        </div>
    )
}

export default TodoApp