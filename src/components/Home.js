import React, {useState} from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import style from './home.module.css'
import {v4 as uuidv4} from 'uuid'



const Home = () => {
  const [todos, setTodos] = useState([])
  const addTodo =(todo)=>{
    setTodos((prevTodo)=>{
      return [...prevTodo, {id: uuidv4() , todo}]
    })
  }
  const deleteBtnClickd = (id)=>{
    /* টুডুস থেকে টুডু বের করে নেওয়ার পর তার সাথে ক্লিক করা আইডি ফিল্টার করে
    ক্লিক করা আইডিসহ আইটেম টি মুছে ফেলা হলো*/
      setTodos((previousTodos)=>{
        const filteredTodos = previousTodos.filter((todo)=> todo.id !== id)
      return filteredTodos;
    })
    }
  
  return (
    <div className={style.container}>
     <h1 className={style.heading}>To Do App</h1>
     <NewTodo addTodo = {addTodo}/>
    <Todos todos={todos} onRemove={deleteBtnClickd}/>
    </div>
  )
}

export default Home;