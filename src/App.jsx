import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  // Load from Local Storage on mount
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])

  // Save todos to Local Storage
  const saveToLS = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  // Edit Todo
  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id)
    setTodo(t.todo)
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  // Delete Todo
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  // Add Todo
  const handleAdd = () => {
    let newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
    setTodos(newTodos)
    setTodo("")
    saveToLS(newTodos)
  }

  // Handle Input Change
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  // Checkbox Toggle
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => item.id === id)
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
        <h1 className='font-bold text-center text-xl'>iTask - Manage your todos at one place</h1>

        {/* Add Todo Section */}
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            placeholder="Enter your todo..."
            className='w-full rounded-full px-5 py-1 border border-gray-300'
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 3}
            className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-500 p-2 py-1 text-sm font-bold text-white rounded-md'
          >
            Save
          </button>
        </div>

        {/* Show Finished Checkbox */}
        <div className="my-4">
          <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        </div>

        {/* Todos List */}
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}

          {todos.map(item => {
            return (showFinished || !item.isCompleted) && (
              <div key={item.id} className="todo flex justify-between items-center bg-white rounded-lg shadow-sm p-2 my-2">
                <div className='flex gap-3 items-center'>
                  <input
                    name={item.id}
                    onChange={handleCheckbox}
                    type="checkbox"
                    checked={item.isCompleted}
                  />
                  <div className={item.isCompleted ? "line-through text-gray-500" : ""}>
                    {item.todo}
                  </div>
                </div>
                <div className="buttons flex gap-2">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md'
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className='bg-red-600 hover:bg-red-700 p-2 py-1 text-sm font-bold text-white rounded-md'
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
