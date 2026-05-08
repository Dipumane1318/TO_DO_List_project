import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'

import { FaEdit } from "react-icons/fa";

import { AiFillDelete } from "react-icons/ai";

import { v4 as uuidv4 } from 'uuid';



function App() { 



&nbsp; const \[todo, setTodo] = useState("")

&nbsp; const \[todos, setTodos] = useState(\[])

&nbsp; const \[showFinished, setshowFinished] = useState(true)



&nbsp; useEffect(() => {

&nbsp;   let todoString = localStorage.getItem("todos")

&nbsp;   if(todoString){

&nbsp;     let todos = JSON.parse(localStorage.getItem("todos")) 

&nbsp;     setTodos(todos)

&nbsp;   }

&nbsp; }, \[])

&nbsp; 



&nbsp;//// const saveToLS = (params) => {

&nbsp;   localStorage.setItem("todos", JSON.stringify(todos))

&nbsp; }



&nbsp; const toggleFinished = (e) => {

&nbsp;   setshowFinished(!showFinished)

&nbsp; }

&nbsp; 

&nbsp; 





&nbsp; const handleEdit = (e, id)=>{ 

&nbsp;   let t = todos.filter(i=>i.id === id) 

&nbsp;   setTodo(t\[0].todo)

&nbsp;   let newTodos = todos.filter(item=>{

&nbsp;     return item.id!==id

&nbsp;   }); 

&nbsp;   setTodos(newTodos) 

&nbsp;   saveToLS()

&nbsp; }



&nbsp; const handleDelete= (e, id)=>{  

&nbsp;   let newTodos = todos.filter(item=>{

&nbsp;     return item.id!==id

&nbsp;   }); 

&nbsp;   setTodos(newTodos) 

&nbsp;   saveToLS()

&nbsp; }



&nbsp;const handleAdd= ()=>{

&nbsp;   setTodos(\[...todos, {id: uuidv4(), todo, isCompleted: false}])

&nbsp;   setTodo("") 

&nbsp;   saveToLS()

&nbsp; }

&nbsp; 

&nbsp; const handleChange= (e)=>{ 

&nbsp;   setTodo(e.target.value)

&nbsp; }  //////



&nbsp; const handleCheckbox = (e) => { 

&nbsp;   let id = e.target.name;  

&nbsp;   let index = todos.findIndex(item=>{

&nbsp;     return item.id === id;

&nbsp;   }) 

&nbsp;   let newTodos = \[...todos];

&nbsp;   newTodos\[index].isCompleted = !newTodos\[index].isCompleted;

&nbsp;   setTodos(newTodos)

&nbsp;   saveToLS()

&nbsp; }

&nbsp; 



&nbsp; return (

&nbsp;   < >

&nbsp; //////  <Navbar/> 

&nbsp;      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-\[80vh] md:w-1/2">

&nbsp;       <h1 className='font-bold text-center text-xl'>iTask - Manage your todos at one place</h1>

&nbsp;        <div className="addTodo my-5 flex flex-col gap-4">

&nbsp;         <h2 className='text-lg font-bold'>Add a Todo</h2>

&nbsp;         <input  onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />

&nbsp;         <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-500 p-2 py-1 text-sm font-bold text-white rounded-md'>Save</button>

&nbsp;        </div>

&nbsp;        <input className='my-4' onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished

&nbsp;        <h2 className='text-lg font-bold'>Your Todos</h2>  /////////

&nbsp;        	<div className="todos">

&nbsp;         {todos.length ===0 \&\& <div className='m-5'>No Todos to display</div> }

&nbsp;         {todos.map(item=>{

&nbsp;

&nbsp;         return (showFinished || !item.isCompleted) \&\& <div key={item.id} className={"todo flex md:w-1/2 my-3 justify-between"}>

&nbsp;           	<div className='flex gap-5'> 

&nbsp;           <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />

&nbsp;           	<div className={item.isCompleted?"line-through":""}>{item.todo}</div>

&nbsp;           	</div>

&nbsp;           	***<div className="buttons flex h-full">***

              ***<button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>***

              ***<button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>***

            	***</div>*** 

&nbsp;         	</div>

&nbsp;         })}

&nbsp;        </div>

&nbsp;       

&nbsp;      </div>

&nbsp;   </>

&nbsp; )

} 



export default App



