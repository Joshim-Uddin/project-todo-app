import React, {useState} from 'react'
import style from './newtodo.module.css'

const NewTodo = (props) => {
const [todo, setTodo] = useState({title: '', desc: ''})
const {title, desc} = todo;
const handleSubmit = (e)=>{
  e.preventDefault();
 props.addTodo(todo)
 setTodo({title: '', desc: ''})
}
const handleChange = (e)=>{
  const name = e.target.name;
  setTodo((oldTodo)=>{
    return ({...oldTodo, [name]:e.target.value})
  })
 
}
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.formtodo}>
        <div className={style.divinput}>
        <label htmlFor='title' className={style.label}>To Do Title : </label>
        <input type='text' className={style.field} name='title' id='title' value={title} onChange={handleChange} />
        </div>
        <div className={style.divinput}>
        <label htmlFor='desc' className={style.label}>To Do Description : </label>
        <textarea className={style.field} name='desc' id='desc' value={desc} onChange={handleChange} />
        </div>
        <div>
          <button className={style.btn}>Add Todo</button>
        </div>
      </div>
    </form>
  )
}

export default NewTodo