import React from 'react'
import Todo from './Todo'
import style from './todos.module.css'


const Todos = (props) => {
  const onRemove=(id)=>{
    props.onRemove(id)
  }
  return (
    <section>
     {props.todos.map((todo)=> <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemove={onRemove}/>)}
      </section>
  )
}

export default Todos