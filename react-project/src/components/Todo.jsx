import React from 'react'

function Todo({todo,handleToggle}) {

  // what handleClick will do
  /* 
  handleClick will find the id when click on button than pass it in handleToggle
  */
  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id) // id will passed from here
  }
  
  return (
    <div id={todo.id} key={todo.id} name="todo" value={todo.id} onClick={handleClick} className={`${todo.complete ? 'line-through':''} text-xl py-2 border-b-2 border-slate-200`}>
        {todo.task}
    </div>
  )
}

export default Todo