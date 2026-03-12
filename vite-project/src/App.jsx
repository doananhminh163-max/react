import TodoNew from './components/todos/TodoNew'
import TodoData from './components/todos/TodoData'
import Header from './components/layouts/header'
import Footer from './components/layouts/footer'
import './components/todos/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
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
    <>
      <Header />
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
      <Outlet />
      <Footer />
    </>
  )
}

export default App
