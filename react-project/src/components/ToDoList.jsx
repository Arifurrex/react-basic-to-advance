import React from 'react'
import ToDo from './Todo'

function ToDoList({ToDoListo, handleToggle, handleFilter}) {
  return (
    <div>
       {ToDoListo.map((todo)=>{
        return (<ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
            )
       })}
       <button className='text-2xl px-2 py-4 text-red-600 cursor-pointer' onClick={handleFilter}>Clear Completed</button>
    </div>
  )
}

export default ToDoList