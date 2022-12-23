import React from 'react'
import style from './todo.module.css'

const Todo = (props) => {
  const {title, desc} = props.todo;
  const {id} = props;
  const removeTodo =(id)=>{
    props.onRemove(id)
  }
  return (
    <article>
      <div>
      <h2 className={style.title}>{title}</h2>
      <p>{desc}</p>
      </div>
      <div>
      <button className={style.btn} onClick={()=>{removeTodo(id)}}><i className="fa fa-trash fa-2x"></i></button>
      </div>
      
    </article>
  )
}

export default Todo;